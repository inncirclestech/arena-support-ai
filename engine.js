// Arena Support AI — offline intent-matching engine (no LLM calls).
// Each KB entry: { id, moduleId, moduleName, moduleColor, action, object, scope, section, question, answer, tags[] }
// Matching: score by action/object/tag/question overlap with the user's query tokens,
// with a lightweight context carry-over so short follow-ups ("what about deleting it?")
// inherit the object/module of the previous turn.

const STOPWORDS = new Set(["a","an","the","to","for","of","in","on","at","is","are","do","does","how","what","i","my","me","can","should","need","want","please","with","and","or","it","this","that","be","been","was","were","will","would","could","you","your","then","also","so","just"]);

function tokenize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(t => t && !STOPWORDS.has(t));
}

// Lightweight singularization so "opportunities"~"opportunity", "users"~"user" match.
function stem(t) {
  if (t.length > 4 && t.endsWith("ies")) return t.slice(0, -3) + "y";
  if (t.length > 4 && t.endsWith("es")) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) return t.slice(0, -1);
  return t;
}

function stemSet(tokens) {
  return tokens.map(stem);
}

function scoreEntry(entry, queryTokens, queryStems) {
  let score = 0;
  const qTokenSet = new Set(queryTokens);
  const qStemSet = new Set(queryStems);

  const actionStem = stem(entry.action || "");
  const objectTokens = stemSet(tokenize(entry.object || ""));
  const tagTokens = (entry.tags || []).flatMap(t => stemSet(tokenize(t)));
  const questionTokens = stemSet(tokenize(entry.question || ""));

  // Object match is the strongest signal (what the question is ABOUT).
  objectTokens.forEach(ot => {
    if (qStemSet.has(ot)) score += 6;
  });
  // Action match confirms the verb intent (create vs assign vs delete...).
  if (actionStem && qStemSet.has(actionStem)) score += 5;
  // Scope words like "project", "global" further disambiguate.
  const scopeStem = stem(entry.scope || "");
  if (scopeStem && qStemSet.has(scopeStem)) score += 4;
  if (entry.scope === "project" && (qTokenSet.has("project") || qTokenSet.has("inside") || qTokenSet.has("within"))) score += 3;
  if (entry.scope === "global" && (qTokenSet.has("global") || qTokenSet.has("company") || qTokenSet.has("companywide") || qTokenSet.has("admin"))) score += 3;
  // Tag phrases (alternate phrasing coverage).
  tagTokens.forEach(tt => {
    if (qStemSet.has(tt)) score += 3;
  });
  // Full question overlap as a general relevance signal.
  questionTokens.forEach(qt => {
    if (qStemSet.has(qt)) score += 1;
  });
  return score;
}

// A query is "thin" (likely a follow-up like "what about in a project?" or "and how do I edit it?")
// when it has very few content tokens after stopword removal — too little to stand alone.
function isThinQuery(queryTokens) {
  return queryTokens.length > 0 && queryTokens.length <= 3;
}

// Merge a thin follow-up query with the previous turn's matched entry's object/module,
// so "what about assigning it?" after a question about opportunities biases toward
// opportunity-assignment entries rather than starting from zero context.
function scoreWithContext(entry, queryTokens, queryStems, context) {
  let score = scoreEntry(entry, queryTokens, queryStems);
  if (context && isThinQuery(queryTokens)) {
    if (context.moduleId && entry.moduleId === context.moduleId) score += 4;
    if (context.object) {
      const ctxObjTokens = stemSet(tokenize(context.object));
      const entryObjTokens = stemSet(tokenize(entry.object || ""));
      if (ctxObjTokens.some(t => entryObjTokens.includes(t))) score += 5;
    }
  }
  return score;
}

const CONFIDENCE_FLOOR = 5;      // below this: no confident answer at all
const AMBIGUITY_GAP = 3;         // if top two scores are this close, treat as ambiguous rather than guessing
const CLARIFY_FLOOR = 2;         // below this even a "did you mean" suggestion isn't worth showing

// Returns one of three shapes:
//  { type: "answer", best, alternatives }              - confident single answer
//  { type: "clarify", options }                         - multiple plausible matches, ask which one
//  { type: "none", suggestions }                        - nothing confident; suggestions may be empty
function matchQuery(KB, query, context) {
  const queryTokens = tokenize(query);
  const queryStems = stemSet(queryTokens);
  if (!queryTokens.length) return { type: "none", suggestions: [] };

  const scored = KB
    .map(entry => ({ entry, score: scoreWithContext(entry, queryTokens, queryStems, context) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!scored.length) return { type: "none", suggestions: [] };

  const top = scored[0];
  if (top.score < CONFIDENCE_FLOOR) {
    const suggestions = scored.filter(x => x.score >= CLARIFY_FLOOR).slice(0, 3).map(x => x.entry);
    return { type: "none", suggestions };
  }

  // Ambiguity check: is there a close second/third candidate covering a genuinely
  // different object/scope (not just a near-duplicate phrasing of the same answer)?
  const rivals = scored.filter(x =>
    x !== top &&
    x.score >= top.score - AMBIGUITY_GAP &&
    (x.entry.object !== top.entry.object || x.entry.scope !== top.entry.scope || x.entry.moduleId !== top.entry.moduleId)
  );

  if (rivals.length >= 1 && (top.score - rivals[0].score) <= AMBIGUITY_GAP) {
    const options = [top, ...rivals].slice(0, 4).map(x => x.entry);
    return { type: "clarify", options };
  }

  return {
    type: "answer",
    best: top.entry,
    alternatives: scored.slice(1, 4).filter(x => x.score >= CONFIDENCE_FLOOR - 2).map(x => x.entry)
  };
}

// Broader retrieval for RAG-style LLM synthesis: returns the top-N candidates
// regardless of the strict CONFIDENCE_FLOOR/AMBIGUITY_GAP rules matchQuery uses.
// Used only to hand the LLM a small set of grounded passages to paraphrase —
// never shown to the user directly, so it can afford to be more permissive.
function retrieveTopEntries(KB, query, context, n) {
  const queryTokens = tokenize(query);
  const queryStems = stemSet(queryTokens);
  if (!queryTokens.length) return [];

  const scored = KB
    .map(entry => ({ entry, score: scoreWithContext(entry, queryTokens, queryStems, context) }))
    .filter(x => x.score >= CLARIFY_FLOOR)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, n || 5).map(x => x.entry);
}

function buildKB(MODULES) {
  const kb = [];
  MODULES.forEach(mod => {
    (mod.qaItems || []).forEach((item, i) => {
      kb.push({
        id: `${mod.id}-${i}`,
        moduleId: mod.id,
        moduleName: mod.name,
        moduleColor: mod.color,
        action: item.action,
        object: item.object,
        scope: item.scope,
        section: item.section || null,
        question: item.question,
        answer: item.answer,
        tags: item.tags || []
      });
    });
  });
  return kb;
}
