// Arena Support AI — offline intent-matching engine (no LLM calls).
// Each KB entry: { id, moduleId, moduleName, moduleColor, action, object, scope, section, question, answer, tags[] }
// Matching: score by action/object/tag/question overlap with the user's query tokens,
// with a lightweight context carry-over so short follow-ups ("what about deleting it?")
// inherit the object/module of the previous turn.

const STOPWORDS = new Set(["a","an","the","to","for","of","in","on","at","is","are","do","does","how","what","i","my","me","can","should","need","want","please","with","and","or","it","this","that","be","been","was","were","will","would","could","you","your","then","also","so","just"]);

// Signals that the user is actually asking to compare/distinguish two things
// ("what's the difference between X and Y?") rather than just asking about
// one of them. A comparison-style KB entry (object field containing "vs",
// "versus", etc.) legitimately matches BOTH things it compares, which lets it
// out-score a plain, direct entry about just one of those things — e.g. "Is
// Follow Up Actions the same as My Desk?" scoring higher for the query "what
// shows up on my desk" than the actual My Desk overview entry. Without this
// query-side check, every comparison entry in the KB would systematically
// steal confident matches from the direct entries it references.
const COMPARISON_QUERY_WORDS = new Set(["vs", "versus", "difference", "different", "compare", "compared", "distinguish", "same"]);

function isComparisonQuery(queryTokens) {
  return queryTokens.some(t => COMPARISON_QUERY_WORDS.has(t));
}

function isComparisonObject(object) {
  return /\bvs\.?\b|\bversus\b|\bdifferen(t|ce)\b|\bsame as\b|\bcompared? to\b/i.test(object || "");
}

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

// Verb groups that should be treated as the same intent even when the KB entry's
// `action` field uses a different (but equivalent) word than the user's query —
// e.g. a "How do I edit or delete X?" entry tagged action:"edit" should still get
// full action-match credit for a query that says "delete" or "remove".
const ACTION_SYNONYMS = [
  ["edit", "update", "change", "modify", "delete", "remove"],
  ["create", "add", "register", "make", "set up", "setup"],
  ["view", "find", "see", "check", "locate", "access"],
  ["assign", "allocate", "attach", "link"],
  ["approve", "reject", "review"],
  ["configure", "manage", "customize"]
];
const ACTION_SYNONYM_MAP = (() => {
  const map = {};
  ACTION_SYNONYMS.forEach(group => group.forEach(w => { map[w] = group; }));
  return map;
})();

// "Project" and "global"/"company" are used as the literal `scope` value for
// most of the KB, so when a query's only real noun IS "project" itself (e.g.
// "how do I create a project?", not "...create a schedule FOR a project"),
// every project-scoped entry's scope bonus makes it look relevant, drowning
// out the one entry that is actually about creating a project. Detect this
// specific, high-value case explicitly: a short query whose only content
// word is "project" (plus a create/find-style verb) should strongly favor an
// entry whose object is literally about "project" as a standalone thing.
function isBareProjectQuery(queryStems) {
  const meaningful = queryStems.filter(t => t !== "project" && !ACTION_SYNONYM_MAP[t]);
  return queryStems.includes("project") && meaningful.length === 0;
}

function scoreEntry(entry, queryTokens, queryStems) {
  let score = 0;
  const qTokenSet = new Set(queryTokens);
  const qStemSet = new Set(queryStems);

  if (isBareProjectQuery(queryStems)) {
    const objText = (entry.object || "").toLowerCase();
    const isAboutProjectItself = /^(a |the |new )?project$/.test(objText.trim()) || objText.trim() === "new project";
    // A bare "create/find a project" query should only match entries that are
    // directly about a project as a whole (not "project crew", "project
    // schedule", etc.) — everything else scores 0 for this query shape.
    if (!isAboutProjectItself) return 0;
  }

  const actionStem = stem(entry.action || "");
  const objectTokens = stemSet(tokenize(entry.object || ""));
  const tagTokens = (entry.tags || []).flatMap(t => stemSet(tokenize(t)));
  const questionTokens = stemSet(tokenize(entry.question || ""));

  // Object match is the strongest signal (what the question is ABOUT). Each
  // matching token is worth 6 points, but scaled by what FRACTION of the
  // object's own distinct words matched — so a multi-word object like
  // "project crew" only gets full per-token credit when the query is mostly
  // about it. Matching just a generic qualifying word like "project" (1 of 2
  // distinct object tokens) is worth half as much per token, which stops
  // "project" acting as a free relevance signal for every entry whose object
  // happens to be named "project <something>" — the query "how do I create a
  // project?" should favor an object that IS "project", not one that merely
  // contains it alongside a more specific noun the query never mentioned.
  const distinctObjectTokens = new Set(objectTokens);
  const matchingObjectTokens = [...distinctObjectTokens].filter(ot => qStemSet.has(ot));
  const objectMatched = matchingObjectTokens.length > 0;
  if (objectMatched) {
    const coverage = matchingObjectTokens.length / distinctObjectTokens.size;
    score += matchingObjectTokens.length * 6 * coverage;
  }
  // Action match confirms the verb intent (create vs assign vs delete...).
  // Falls back to a synonym-group match (e.g. entry says "edit", query says
  // "delete") so a query using a different-but-equivalent verb than the KB
  // entry's own `action` field still gets credit instead of losing 5 points
  // it should rightfully have.
  if (actionStem) {
    if (qStemSet.has(actionStem)) {
      score += 5;
    } else {
      const synonyms = ACTION_SYNONYM_MAP[actionStem];
      if (synonyms && synonyms.some(s => qStemSet.has(stem(s)))) score += 5;
    }
  }
  // Scope words like "project", "global" further disambiguate WHICH flavor of
  // an already-identified object the user means (e.g. project-scoped Phase
  // Codes vs Global Data's Phase Codes) — they should not, on their own, make
  // an otherwise-unrelated entry look relevant just because the query happens
  // to contain the word "project". Since "project" and "global" are used as
  // the `scope` value for the vast majority of KB entries, awarding this
  // bonus unconditionally let it drown out entries where "project" IS the
  // actual subject of the query (e.g. "how do I create a project?" losing to
  // any "...for a project" entry). Require a genuine object-token match first.
  if (objectMatched) {
    const scopeStem = stem(entry.scope || "");
    if (scopeStem && qStemSet.has(scopeStem)) score += 4;
    if (entry.scope === "project" && (qTokenSet.has("project") || qTokenSet.has("inside") || qTokenSet.has("within"))) score += 3;
    if (entry.scope === "global" && (qTokenSet.has("global") || qTokenSet.has("company") || qTokenSet.has("companywide") || qTokenSet.has("admin"))) score += 3;
  }
  // Tag phrases (alternate phrasing coverage) — deduped per distinct token so
  // an object word repeated across several tags (e.g. four tags that all
  // contain "opportunity") doesn't rack up points just from repetition.
  new Set(tagTokens).forEach(tt => {
    if (qStemSet.has(tt)) score += 3;
  });
  // Full question overlap as a general relevance signal — also deduped, so a
  // question that happens to repeat the query's key noun twice (e.g. "Can an
  // Opportunity have sub-opportunities?") isn't rewarded twice for the same word.
  new Set(questionTokens).forEach(qt => {
    if (qStemSet.has(qt)) score += 1;
  });
  // A "what's the difference between X and Y?" entry legitimately shares
  // vocabulary with BOTH X's and Y's own direct topic — that's not a false
  // match, but it means such entries can out-score the plain "about X" entry
  // a user actually wants when they just ask about X on its own. Penalize
  // comparison entries unless the query itself signals a comparison intent
  // (contains "difference", "vs", "compare", etc.), so they surface only
  // when genuinely relevant instead of hijacking single-topic questions.
  if (isComparisonObject(entry.object) && !isComparisonQuery(queryTokens)) {
    score = Math.max(0, score - 8);
  }
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
const AMBIGUITY_GAP = 2;         // if top two scores are this close, treat as ambiguous rather than guessing
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
