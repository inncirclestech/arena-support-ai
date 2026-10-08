# Rebuilding the search vectors

The chatbot searches vectors pre-computed from the documentation in `data.js`
(`assets/kb/vecs.i8` + `assets/kb/meta.json`). Whenever `data.js` (or `buildKB()` in `engine.js`) changes, regenerate them:

    cd research/emb && npm install   # first time only
    node build_vectors.mjs           # ~1 min, offline after the model is cached

This reads `data.js` + `engine.js`, builds the KB with `buildKB(MODULES)`, embeds each entry with
`Xenova/bge-small-en-v1.5` (q8), and writes the int8 vectors and `meta.json` (count, scale, model, hash).
Commit `assets/kb/` together with `data.js`. At page load the browser compares `meta.json.hash` with the hash
of the KB built from the live `data.js`; if they differ it silently falls back to keyword search.

Self-test (reads data.js and assets/kb): `node run_tests.mjs` (`--lex` for keyword-only, `-v` verbose).
Expected sections live in `testset.json`; if a heading is renamed in data.js, update the expectation by reading the docs.
