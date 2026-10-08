// Self-test: node run_tests.mjs [--lex] [-v]   (uses assets/kb vectors + engine.js plan())
import { pipeline } from '@huggingface/transformers';
import fs from 'fs'; import vm from 'vm'; import path from 'path'; import { fileURLToPath } from 'url';
const here = path.dirname(fileURLToPath(import.meta.url)); const root = path.resolve(here, '../../');
const lexOnly = process.argv.includes('--lex'), verbose = process.argv.includes('-v');
const ctx = {}; vm.createContext(ctx);
new vm.Script(fs.readFileSync(process.env.DATA || path.join(root, 'data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(root, 'engine.js'), 'utf8') + '\nglobalThis.KB=buildKB(MODULES);globalThis.plan=plan;globalThis.correctTypos=correctTypos;globalThis.prepareQuery=prepareQuery;globalThis.SEM_PREFIX=SEM_PREFIX;globalThis.isKnowledgeQuestion=isKnowledgeQuestion;').runInContext(ctx);
const KB = ctx.KB;
const meta = JSON.parse(fs.readFileSync(path.join(process.env.OUT || path.join(root, 'assets/kb'), 'meta.json')));
const buf = fs.readFileSync(path.join(process.env.OUT || path.join(root, 'assets/kb'), 'vecs.i8'));
const vecs = { data: new Int8Array(buf.buffer, buf.byteOffset, buf.length), scale: meta.scale, dim: meta.dim, count: meta.count };
const ex = lexOnly ? null : await pipeline('feature-extraction', meta.model, { dtype: 'q8' });
const T = JSON.parse(fs.readFileSync(path.join(here, process.env.TESTSET || 'testset.json')));
const sectKey = e => e.moduleId + ':' + e.section;
let dN = 0, dOk = 0, nClar = 0, clarHit = 0, clarFail = [], n = 0, t1 = 0, t3 = 0, dec = 0, decOk = 0, decWrong = [], fails = [], falseDecl = [];
for (const t of T) {
  let qv = null;
  if (ex) { const q = ctx.prepareQuery(KB, t.q); const o = await ex(ctx.SEM_PREFIX + q, { pooling: 'cls', normalize: true }); qv = Float32Array.from(o.data); }
  const p = ctx.plan(KB, t.q, null, qv, lexOnly ? null : vecs);
  if (process.env.CAL) { const i = p.type === 'answer' ? p : p.info || {}; const lx = i.lex || {}; console.log('CAL', t.decline ? 'DECL' : t.any ? 'ANY ' : 'ANS ', p.type === 'answer' ? 'A' : 'N', (i.cos||0).toFixed(3), (i.score||0).toFixed(3), (lx.ttl||0).toFixed(2), (lx.key||0).toFixed(2), (lx.txt||0).toFixed(2), t.q); }
  if (t.decline) { dec++; if (p.type === 'none') decOk++; else decWrong.push([t.q, (p.best || p.options[0]).where, p.score.toFixed(3)]); continue; }
  if (t.any) { console.log('[any]', t.q, '->', p.type === 'none' ? 'DECLINE(' + p.reason + ')' : p.type === 'clarify' ? 'CLARIFY ' + p.options.map(o => o.where).join(' | ') : p.best.where + ' (' + p.score.toFixed(3) + ')'); continue; }
  n++;
  const ok = new Set([t.m + ':' + t.s, ...(t.alt || []).map(a => a[0] + ':' + a[1])]);
  if (p.type === 'clarify') { nClar++; const okc = p.options.some(o => ok.has(sectKey(o))); if (okc) clarHit++; else clarFail.push(t.q + ' -> ' + p.options.map(o => o.where).join(' | ')); if (process.env.SHOWCLAR) console.log('CLAR', okc ? 'ok ' : 'BAD', t.q, '->', p.options.map(o => o.where).join(' | ')); t1 += okc ? 1 : 0; t3 += okc ? 1 : 0; continue; }
  const seen = []; for (const h of p.hits) { const k = sectKey(h.entry); if (!seen.includes(k)) seen.push(k); if (seen.length >= 3) break; }
  if (p.type === 'none') { falseDecl.push([t.q, p.reason, p.hits[0] ? p.hits[0].entry.where : '', p.hits[0] ? p.hits[0].score.toFixed(3) : '']); }
  const top1 = p.type === 'answer' && ok.has(sectKey(p.best)); dN++; if (top1) dOk++;
  const top3 = seen.some(k => ok.has(k));
  if (top1) t1++; if (top3) t3++;
  if (!top1 || verbose) fails.push((top3 ? '[top3] ' : '[MISS] ') + t.q + '\n    expected ' + t.m + ':' + t.s + '\n    got      ' + (p.type === 'none' ? 'DECLINE ' + p.reason : sectKey(p.best) + ' [' + p.best.kind + '] ' + p.score.toFixed(3)) + '\n    top3     ' + seen.join(' | '));
}
console.log(fails.join('\n'));
console.log('\nmode', lexOnly ? 'lexical' : 'hybrid', 'KB', KB.length);
console.log(`top-1 ${t1}/${n} = ${(100 * t1 / n).toFixed(1)}%   top-3 ${t3}/${n} = ${(100 * t3 / n).toFixed(1)}%`);
console.log(`directly answered: ${dOk}/${dN} correct (${(100*dOk/dN).toFixed(1)}%)`);
console.log(`clarification triggered on ${nClar}/${n} answerable questions; correct screen among options: ${clarHit}/${nClar}`, clarFail);
console.log(`decline ${decOk}/${dec} correct; wrong answers on out-of-scope: ${decWrong.length}`, decWrong);
console.log('answerable questions wrongly declined:', falseDecl.length, falseDecl);
