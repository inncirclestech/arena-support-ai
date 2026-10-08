// Arena Support AI — documentation-only retrieval engine.
//
// The knowledge base is built ONLY from the screen-by-screen documentation
// (MODULES[].narrative: intro, "On this screen" definitions, "How to" procedures).
// The old authored Q&A arrays (qaItems) are never read here.
//
// Search = free, in-browser semantic search (bge-small via transformers.js, vectors
// pre-computed offline into assets/kb/vecs.i8) blended with a small lexical bonus.
// If the vectors are stale or the model cannot load, plain lexical search is used.
//
// Entry shape: { id, kind: 'screen'|'term'|'howto', moduleId, moduleName, moduleColor,
//   section (= screen heading), where ("Module → Screen"), title, question, answer,
//   text (retrieval text), object }

const STOPWORDS = new Set(["a","an","the","to","for","of","in","on","at","is","are","do","does","how","what","i","my","me","can","should","need","want","please","with","and","or","it","this","that","be","been","was","were","will","would","could","you","your","then","also","so","just","where","which","there","their","from","into","about","any","some","via","using","use","get","let","tell","show","give"]);

// Closed-compound spellings seen in real queries that the docs spell as two words.
const COMPOUND_WORD_SPLITS = {
  "worklog": "work log", "worklogs": "work log", "workorder": "work order", "workorders": "work order",
  "loadout": "load out", "punchlist": "punch list", "punchlists": "punch list",
  "timesheet": "time sheet", "timesheets": "time sheet", "phasecode": "phase code", "phasecodes": "phase code",
  "purchaseorder": "purchase order", "ratecard": "rate card", "costcode": "cost code"
};

function tokenize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .flatMap(t => (COMPOUND_WORD_SPLITS[t] || t).split(" "))
    .filter(t => t && !STOPWORDS.has(t));
}

// Lightweight singularisation so "opportunities"~"opportunity", "users"~"user".
function stem(t) {
  if (t.length > 4 && t.endsWith("ies")) return t.slice(0, -3) + "y";
  if (t.length > 4 && t.endsWith("sses")) return t.slice(0, -2);
  if (t.length > 4 && /(ches|shes|xes|zes)$/.test(t)) return t.slice(0, -2);
  if (t.length > 4 && t.endsWith("es") && !/(ates|ites|otes|ures|ules|odes|ides|ases|ises)$/.test(t)) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss") && !t.endsWith("us") && !t.endsWith("is")) return t.slice(0, -1);
  if (t.length > 5 && t.endsWith("ing")) return t.slice(0, -3);
  return t;
}
// Verbs that all mean "make a new one" in the docs ("Register a vendor", "Raise a restraint", "Create a tender").
const CREATE_VERBS = new Set(["add", "create", "raise", "register", "make", "build", "new"]);
function canon(t) { return CREATE_VERBS.has(t) ? "create" : /^approv(e|es|ed|ing|al|als)$/.test(t) ? "approv" : t; }
function stemSet(tokens) { return tokens.map(t => canon(stem(t))); }

function editDistance(x, y, max) {
  if (Math.abs(x.length - y.length) > max) return max + 1;
  let prev = Array.from({ length: y.length + 1 }, (_, i) => i);
  for (let i = 1; i <= x.length; i++) {
    const cur = [i];
    for (let j = 1; j <= y.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (x[i - 1] === y[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[y.length];
}

// ---------------------------------------------------------------- KB from the docs
function docPlain(h) {
  return String(h == null ? "" : h)
    .replace(/<\/?(strong|b)>/g, "**")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<\/p>\s*<p>/g, "\n\n")
    .replace(/<li>/g, "\n- ")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+>\s+/g, " → ")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}
function noMarks(s) { return String(s || "").replace(/\*\*/g, ""); }
function firstSentences(text, maxChars) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (t.length <= maxChars) return t;
  const cut = t.slice(0, maxChars);
  const i = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  return i > maxChars * 0.4 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, "") + "…";
}
function lowerFirst(s) { return s.charAt(0).toLowerCase() + s.slice(1); }

function buildKB(MODULES) {
  const kb = [];
  MODULES.forEach(mod => {
    (mod.narrative || []).forEach((sec, si) => {
      const screen = noMarks(docPlain(sec.heading));
      if (!screen) return;
      const where = mod.name + " → " + screen;
      const base = { moduleId: mod.id, moduleName: mod.name, moduleColor: mod.color, section: sec.heading, where, object: screen.toLowerCase() };
      const defs = (sec.definitions || []).map(d => ({ term: noMarks(docPlain(d.term)), def: docPlain(d.definition) })).filter(d => d.term && d.def);
      const procs = (sec.procedures || []).map(p => ({
        title: noMarks(docPlain(p.title)),
        steps: (p.steps || []).map(docPlain).filter(Boolean),
        note: p.note ? docPlain(p.note) : ""
      })).filter(p => p.title && p.steps.length);
      const introFull = docPlain(sec.intro).replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
      const introShort = firstSentences(noMarks(introFull), 420);

      // 1. the screen itself
      const termNames = defs.map(d => d.term);
      let ans = introShort;
      if (termNames.length) {
        ans += "\n\nOn this screen:\n" + termNames.slice(0, 12).map(t => "- " + t).join("\n") + (termNames.length > 12 ? "\n- …and " + (termNames.length - 12) + " more" : "");
      }
      if (procs.length) ans += "\n\nHow to:\n" + procs.slice(0, 8).map(p => "- " + p.title).join("\n") + (procs.length > 8 ? "\n- …and " + (procs.length - 8) + " more" : "");
      kb.push(Object.assign({}, base, {
        id: `${mod.id}|${si}|screen`, kind: "screen", title: screen,
        question: "What can I do on the " + screen + " screen in " + mod.name + "?",
        answer: ans,
        text: `${mod.name} → ${screen} screen. ${firstSentences(noMarks(introFull), 500)} Covers: ${termNames.slice(0, 14).join(", ")}${procs.length ? ". Tasks: " + procs.map(p => p.title).join("; ") : ""}`
      }));

      // 2. each "On this screen" term
      defs.forEach((d, di) => {
        kb.push(Object.assign({}, base, {
          id: `${mod.id}|${si}|term|${di}`, kind: "term", title: d.term,
          question: "What is " + d.term + " on " + screen + "?",
          answer: "**" + d.term + "** — " + d.def,
          text: `${d.term} (${mod.name} → ${screen}): ${firstSentences(noMarks(d.def), 600)}`
        }));
      });

      // 3. each "How to" procedure
      procs.forEach((p, pi) => {
        const q = /^how\b/i.test(p.title) ? p.title.replace(/\?*$/, "?") : "How do I " + lowerFirst(p.title) + "?";
        kb.push(Object.assign({}, base, {
          id: `${mod.id}|${si}|howto|${pi}`, kind: "howto", title: p.title,
          question: q,
          answer: p.steps.map((st, n) => (n + 1) + ". " + st).join("\n") + (p.note ? "\n\n" + p.note : ""),
          text: `How to ${lowerFirst(p.title)} (${mod.name} → ${screen}). ${noMarks(p.steps.join(" ")).replace(/\s+/g, " ").slice(0, 650)}`
        }));
      });
    });
  });
  return kb;
}

// Stable fingerprint of the KB's ids + retrieval texts (changes whenever the docs change).
function kbHash(KB) {
  let h = 0x811c9dc5 | 0, h2 = 0x01000193 | 0;
  const feed = s => { for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h = Math.imul(h ^ c, 0x01000193); h2 = Math.imul(h2 + c, 0x85ebca6b) ^ (h2 >>> 13); } };
  KB.forEach(e => { feed(e.id); feed("\u0001"); feed(e.text); feed("\u0002"); });
  return (h >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0") + "-" + KB.length;
}

// ---------------------------------------------------------------- index (lexical stats + vocabulary)
const GENERIC_WORDS = new Set(["use", "using", "make", "get", "give", "show", "tell", "need", "know", "work", "help", "thing", "way", "see", "find", "open", "new", "all", "doe", "mean", "meaning", "generate", "produce", "print", "send", "download", "check", "change", "setup", "start", "finish", "complete", "enter", "fill", "select", "choose", "click", "want", "like", "able", "arena", "inncircles", "today", "please", "pls", "screen", "page", "tab", "module", "can", "possible", "kind", "sort", "look", "visual", "where", "how"]);

const _indexCache = new WeakMap();
function getIndex(KB) {
  let ix = _indexCache.get(KB);
  if (ix) return ix;
  const df = {}, vocab = new Set();
  const docs = KB.map(e => {
    const keySet = new Set(stemSet(tokenize([e.title, e.section, e.moduleName].join(" "))));
    const titleSet = new Set(stemSet(tokenize(e.title)));
    const textSet = new Set(stemSet(tokenize(e.text + " " + (e.kind === "term" ? e.answer : ""))));
    textSet.forEach(t => { df[t] = (df[t] || 0) + 1; vocab.add(t); });
    return { keySet, titleSet, textSet };
  });
  const N = KB.length;
  const idf = t => Math.log(1 + N / (1 + (df[t] || 0)));
  const modNameSets = KB.map(e => new Set(stemSet(tokenize(e.moduleName))));
  ix = { docs, df, vocab, idf, N, modNameSets };
  _indexCache.set(KB, ix);
  return ix;
}

// Fix simple typos ("purchse" -> "purchase") and split run-together words ("phasecodes").
function correctTypos(KB, q) {
  const ix = getIndex(KB);
  const V = ix.vocab, DF = ix.df;
  return q.replace(/[A-Za-z]{4,}/g, w => {
    const lw = w.toLowerCase();
    const known = x => tokenize(x).every(t => V.has(stem(t)));
    if (STOPWORDS.has(lw) || canon(stem(lw)) !== stem(lw)) return w;
    if (lw.length >= 7) {
      for (let k = 3; k <= lw.length - 3; k++) {
        const l = lw.slice(0, k), r = lw.slice(k);
        if (!STOPWORDS.has(l) && !STOPWORDS.has(r) && V.has(stem(l)) && V.has(stem(r)) && (DF[stem(l)] || 0) > 5 && (DF[stem(r)] || 0) > 5) {
          if (known(lw) && (DF[stem(lw)] || 0) > 5) return w;
          return w + " " + l + " " + r;
        }
      }
    }
    if (known(lw) || known(lw + "s")) return w;
    const max = lw.length >= 10 ? 2 : 1;
    let best = null, bestD = max + 1;
    for (const v of V) {
      if (v.length < 4 || Math.abs(v.length - lw.length) > max) continue;
      const d = editDistance(lw, v, max);
      if (d < bestD) { bestD = d; best = v; if (d === 1) break; }
    }
    return best && bestD <= max ? best : w;
  });
}

// Chat shorthand and everyday synonyms -> the words the documentation uses (generic, appended to the query).
const SHORTHAND = { hw: "how", wat: "what", wht: "what", abt: "about", pls: "please", plz: "please", u: "user", usr: "user", proj: "project" };
const SYNONYMS = [
  [/\b(visual(ly)?|look and feel|appearance|theme)\b/i, "layout template"],
  [/\bassign(ing|ed)?\b/i, "add select"],
  [/\b(remove|get rid of)\b/i, "delete"],
  [/\b(modify|alter)\b/i, "edit change"],
  [/\b(make|build|new)\b/i, "create add"]
];
function prepareQuery(KB, raw) {
  let q = String(raw || "").replace(/[A-Za-z]+/g, w => SHORTHAND[w.toLowerCase()] || w);
  const extra = [];
  SYNONYMS.forEach(([re, add]) => { if (re.test(q)) extra.push(add); });
  q = correctTypos(KB, q);
  return extra.length ? q + " " + extra.join(" ") : q;
}

const LIVE_INFO_RE = /\b(weather|weather forecast|news|stock price|lottery|cricket score|football score|exchange rate|temperature outside|what time is it|sports)\b/i;
function isLiveInfo(raw) {
  return LIVE_INFO_RE.test(raw) && !/\b(marketplace|integration|integrat|app|card)\b/i.test(raw);
}
// Small talk, other products/services and non-Arena tasks: never answered from the docs.
const OFFTOPIC_RE = /^\s*(hi|hello|hey|thanks|thank you|good (morning|evening|afternoon)|bye)\b[\s!.,?]*$|\b(tell me a joke|a joke|how are you|who are you|your name|sing a song|write (me )?(a )?(poem|story|essay|code|python|script)|python|javascript code|recipe|flight|hotel|movie|song|horoscope|gmail|facebook|instagram|whatsapp|youtube|netflix|amazon prime|sap|salesforce|oracle|quickbooks|tally|zoho|jira|slack|primavera|procore|autodesk|revit|zoom)\b/i;
function isOffTopic(raw) { return OFFTOPIC_RE.test(raw) && !/\b(marketplace|integration|integrat|api|outlook|smtp|route)\b/i.test(raw); }
function isKnowledgeQuestion(raw) {
  return /^\s*(what|whats|what's|who|why|define|explain|difference|meaning)\b/i.test(raw) && !/\b(arena|inncircles|my account|my project)\b/i.test(raw);
}

// ---------------------------------------------------------------- ranking
const SEM_PREFIX = "Represent this sentence for searching relevant passages: ";

function queryStems(q) {
  return stemSet(tokenize(q)).filter(t => t.length > 1 && !GENERIC_WORDS.has(t));
}

// Lexical overlap of the query with an entry's key fields (title/screen/module) and its text.
function lexScores(ix, i, qs) {
  const d = ix.docs[i];
  let tot = 0, key = 0, ttl = 0, txt = 0;
  const qset = new Set(qs);
  qs.forEach(t => {
    const w = ix.idf(t); tot += w;
    if (d.keySet.has(t)) key += w;
    if (d.titleSet.has(t)) ttl += w;
    if (d.textSet.has(t)) txt += w;
  });
  if (!tot) return { key: 0, ttl: 0, txt: 0 };
  // precision: how much of the entry's own title the query covers (so a short exact title beats a long partial one)
  let tt = 0, tm = 0;
  d.titleSet.forEach(t => { const w = ix.idf(t); tt += w; if (qset.has(t)) tm += w; });
  const prec = tt ? tm / tt : 0;
  return { key: key / tot, ttl: (ttl / tot) * (0.45 + 0.55 * prec), txt: txt / tot };
}

function questionForm(raw) {
  const r = String(raw || "").toLowerCase();
  const howto = /\b(how (do|can|to|would|should|does)|steps? (to|for)|way to|procedure|guide me|walk me|where (do|can|to) i (create|add|set|find|see|change|enable|raise|register|upload|assign|edit|delete|configure|make|start))\b/.test(r) || /^\s*(create|add|set up|setup|raise|register|upload|assign|edit|delete|configure|make|start|find|change|enable|approve|reject|copy|remove)\b/.test(r) || /\bhow\b/.test(r) && !/\bhow (much|many)\b/.test(r);
  const define = /^\s*(what|whats|what's)\s+(is|are|does|do)\b|\bmeaning\b|\bdefin(e|ition)\b|\bstands for\b|\bwhat does .* mean\b|\bexplain\b/.test(r) && !/\bwhat (can|do) i\b/.test(r) && !howto;
  const screen = /\bwhat (can|do|all) (i|we|you)\b.*\b(screen|page|tab|module)\b|\bwhat('s| is) (on|in) (the )?.*\b(screen|page|tab)\b|\boverview\b|\bwhat can i do\b|\btell me about\b|\bwhat is (the )?.*\b(screen|module|page)\b/.test(r);
  return { howto, define, screen };
}

// Rank every KB entry for a (typo-corrected) query.
//  qvec: Float32Array(384) normalised query embedding, or null (lexical-only).
//  vecs: { data: Int8Array, scale, dim } or null.
function rank(KB, q, qvec, vecs, ctx) {
  const ix = getIndex(KB);
  const qs = queryStems(q);
  const qall = stemSet(tokenize(q));
  const form = questionForm(q);
  const useSem = !!(qvec && vecs && vecs.count === KB.length);
  const dim = vecs ? vecs.dim : 384;
  const out = new Array(KB.length);
  for (let i = 0; i < KB.length; i++) {
    const e = KB[i];
    const lx = lexScores(ix, i, qs);
    let cos = 0;
    if (useSem) {
      const o = i * dim; let s = 0;
      for (let k = 0; k < dim; k++) s += qvec[k] * vecs.data[o + k];
      cos = s / vecs.scale;
    }
    let bias = 0;
    if (form.howto) {
      bias += e.kind === "howto" ? 0.025 : e.kind === "term" ? -0.01 : 0;
      // "how do I <verb> <object>": prefer the procedure whose title names the object, and the module that is named in the question.
      if (e.kind === "howto") bias += 0.10 * lx.ttl;
      bias += 0.05 * lx.key;
      if (e.kind === "howto" && ix.docs[i].titleSet.size) {
        const tset = ix.docs[i].titleSet;
        const qw = qs.reduce((a, t) => a + ix.idf(t), 0);
        const covers = qw ? qs.filter(t => tset.has(t)).reduce((a, t) => a + ix.idf(t), 0) / qw : 0;
        const subset = [...tset].every(t => qall.includes(t) || GENERIC_WORDS.has(t));
        if (subset && covers >= 0.75 && (!qall.includes("create") || tset.has("create"))) bias += 0.10;
      }
      if (ix.modNameSets[i].size && [...ix.modNameSets[i]].every(t => qall.includes(t))) bias += 0.08;
    }
    if (form.define) bias += e.kind === "term" ? 0.03 : 0;
    if (form.screen) bias += e.kind === "screen" ? 0.06 : -0.01;
    // A bare noun phrase ("dpr report", "site photographs") that names a screen -> prefer that screen over a term inside another one.
    if (!form.howto && !form.define && !form.screen && qs.length <= 4 && e.kind === "screen" && lx.ttl >= 0.85) bias += 0.07;
    if (ctx && ctx.moduleId && e.moduleId === ctx.moduleId && qs.length <= 2) bias += 0.04;
    const score = useSem
      ? cos + 0.14 * lx.ttl + 0.07 * lx.key + 0.04 * lx.txt + bias
      : 0.55 * lx.ttl + 0.25 * lx.key + 0.35 * lx.txt + bias;
    out[i] = { entry: e, score, cos, lex: lx };
  }
  out.sort((a, b) => b.score - a.score);
  return { hits: out, sem: useSem, qs };
}

// Decision thresholds (calibrated by research/emb/run_tests.mjs).
const THRESH = {
  sem: { answer: 0.60, alsoGap: 0.025 },
  lex: { answer: 0.50, alsoGap: 0.05 }
};

// Plan the reply. Returns
//   { type: "answer", best, also, hits }  |  { type: "none", reason, hits }
function plan(KB, raw, ctx, qvec, vecs) {
  const ix = getIndex(KB);
  const q = prepareQuery(KB, raw);
  if (isLiveInfo(raw)) return { type: "none", reason: "live", q, hits: [] };
  if (isOffTopic(raw)) return { type: "none", reason: "offtopic", q, hits: [] };
  const r = rank(KB, q, qvec, vecs, ctx);
  const T = r.sem ? THRESH.sem : THRESH.lex;
  const top = r.hits[0];
  const hits = r.hits.slice(0, 8);
  const info = { cos: top && top.cos, lex: top && top.lex, score: top && top.score };
  if (!top || !r.qs.length) return { type: "none", reason: "empty", q, hits };

  // Guards against confident-looking wrong answers.
  // 1. A capitalised word the docs have never seen (another product, e.g. SAP, Salesforce).
  const cap = (raw.match(/\b[A-Z][A-Za-z]{2,}\b/g) || []).slice(raw.trim().match(/^[A-Z]/) ? 1 : 0);
  const foreign = cap.some(w => !ix.vocab.has(stem(w.toLowerCase())) && !STOPWORDS.has(w.toLowerCase()));
  // 2. Query words that never occur in the documentation at all (and are not close typos).
  const unknown = r.qs.filter(t => !ix.vocab.has(t) && t.length > 3);
  const unknownShare = r.qs.length ? unknown.length / r.qs.length : 0;
  // 3. No query word at all appears in the best entry (pure semantic coincidence).
  const lexTop = Math.max(top.lex.key, top.lex.txt);

  const weak = top.score < T.answer;
  if (weak) return { type: "none", reason: "low", q, hits, info };
  if (foreign) return { type: "none", reason: "foreign", q, hits };
  if (unknown.length && top.score < 0.8 && isKnowledgeQuestion(raw)) return { type: "none", reason: "unknown-word", q, hits };
  if (unknownShare >= 0.5 && lexTop === 0) return { type: "none", reason: "unknown", q, hits };
  if (r.sem && lexTop === 0 && top.score < T.answer + 0.06) return { type: "none", reason: "nolex", q, hits };

  let best = top.entry;
  // A field/term line is a poor answer when the question names the screen itself and not the field: show the screen overview.
  if (best.kind === "term") {
    const scr = KB.find(e => e.kind === "screen" && e.moduleId === best.moduleId && e.section === best.section);
    const sc = scr && stemSet(tokenize(scr.title));
    const tt = new Set(stemSet(tokenize(best.title)));
    const extra = r.qs.filter(t => !sc.includes(t));
    if (scr && sc.length && sc.every(t => r.qs.includes(t)) && extra.every(t => !tt.has(t))) best = scr;
  }
  let also = null;
  for (let k = 1; k < r.hits.length && k < 6; k++) {
    const h = r.hits[k];
    if (h.entry.moduleId === best.moduleId && h.entry.section === best.section) continue;
    if (top.score - h.score <= T.alsoGap && h.entry.moduleId !== best.moduleId) also = h.entry;
    break;
  }
  return { type: "answer", best, also, hits, q, sem: r.sem, score: top.score, cos: top.cos, lex: top.lex };
}

// Compose the chat text for an answer: Where line, the documented text, optional "Also see".
function composeAnswer(best, also) {
  let t = "**Where:** " + best.where + "\n\n" + best.answer;
  if (also) t += "\n\nAlso see: " + also.where;
  return t;
}

// ---------------------------------------------------------------- semantic loader (browser)
const ArenaSemantic = (function () {
  let state = "idle";       // idle | loading | ready | stale | failed
  let pipe = null, vecs = null, detail = "", progress = 0;
  const listeners = [];
  const set = (s, d) => { state = s; detail = d || ""; listeners.forEach(f => { try { f(); } catch (e) {} }); };

  async function init(KB, base) {
    if (state === "loading" || state === "ready") return state === "ready";
    set("loading", "Loading search model…");
    base = base || "assets/kb/";
    try {
      const metaRes = await fetch(base + "meta.json", { cache: "no-cache" });
      if (!metaRes.ok) throw new Error("no vectors");
      const meta = await metaRes.json();
      if (meta.hash !== kbHash(KB)) { set("stale", "Documentation changed since the search index was built."); return false; }
      const buf = await (await fetch(base + "vecs.i8?h=" + encodeURIComponent(meta.hash))).arrayBuffer();
      vecs = { data: new Int8Array(buf), scale: meta.scale, dim: meta.dim, count: meta.count };
      if (vecs.data.length !== meta.count * meta.dim) throw new Error("bad vectors");
      const tf = await import("https://cdn.jsdelivr.net/npm/@huggingface/transformers@3");
      pipe = await tf.pipeline("feature-extraction", meta.model, { dtype: "q8", progress_callback: p => { if (p && typeof p.progress === "number") { progress = p.progress / 100; listeners.forEach(f => { try { f(); } catch (e) {} }); } } });
      set("ready");
      return true;
    } catch (e) {
      vecs = null; pipe = null;
      set("failed", String(e && e.message || e));
      return false;
    }
  }
  // Resolves when loading has finished (ready / failed / stale) or after timeoutMs.
  function settled(timeoutMs) {
    return new Promise(res => {
      const done = () => state !== "loading" && state !== "idle";
      if (done()) return res(state);
      const t = setTimeout(() => res(state), timeoutMs || 60000);
      listeners.push(() => { if (done()) { clearTimeout(t); res(state); } });
    });
  }
  async function embed(q) {
    if (state !== "ready" || !pipe) return null;
    try {
      const o = await pipe(SEM_PREFIX + q, { pooling: "cls", normalize: true });
      return Float32Array.from(o.data);
    } catch (e) { return null; }
  }
  return { init, settled, embed, progress: () => progress, vecs: () => vecs, state: () => state, detail: () => detail, onChange: f => listeners.push(f) };
})();

if (typeof module !== "undefined") module.exports = { prepareQuery, isKnowledgeQuestion, isOffTopic, isLiveInfo, buildKB, kbHash, plan, rank, composeAnswer, correctTypos, tokenize, stem };
