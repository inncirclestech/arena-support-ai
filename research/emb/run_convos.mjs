// Multi-turn runner: node run_convos.mjs [-v]   (uses engine.js respond()/pickOption(), real embeddings)
import { pipeline } from '@huggingface/transformers';
import fs from 'fs'; import vm from 'vm'; import path from 'path'; import { fileURLToPath } from 'url';
const here = path.dirname(fileURLToPath(import.meta.url)); const root = path.resolve(here, '../../');
const ctx = {}; vm.createContext(ctx);
new vm.Script(fs.readFileSync(path.join(root, 'data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(root, 'engine.js'), 'utf8') + '\nglobalThis.KB=buildKB(MODULES);globalThis.respond=respond;globalThis.pickOption=pickOption;globalThis.SEM_PREFIX=SEM_PREFIX;').runInContext(ctx);
const KB = ctx.KB;
const meta = JSON.parse(fs.readFileSync(path.join(root, 'assets/kb/meta.json'))); const buf = fs.readFileSync(path.join(root, 'assets/kb/vecs.i8'));
const vecs = { data: new Int8Array(buf.buffer, buf.byteOffset, buf.length), scale: meta.scale, dim: meta.dim, count: meta.count };
const ex = await pipeline('feature-extraction', meta.model, { dtype: 'q8' });
const embed = async t => Float32Array.from((await ex(ctx.SEM_PREFIX + t, { pooling: 'cls', normalize: true })).data);
const C = JSON.parse(fs.readFileSync(path.join(here, 'convos.json')));
const secOf = id => { const e = KB.find(x => x.id === id); return e.moduleId + ':' + e.section; };
let turns = 0, ok = 0, convOk = 0, clar = 0, fails = [];
for (const c of C) {
  const hist = []; let good = true;
  for (const t of c.turns) {
    turns++; let m, label;
    if (t.say) { hist.push({ role: 'user', content: t.say }); m = await ctx.respond(KB, hist, t.say, embed, vecs); label = t.say; }
    else {
      const ci = hist.length - 1; const cm = hist[ci]; if (!cm.optionKeys) { fails.push(c.name + " :: expected clarification before click"); good = false; break; }
      const i = t.clickElse ? -1 : cm.optionKeys.findIndex(k => k === t.clickSec[0] + '|' + t.clickSec[1]);
      label = t.clickElse ? '[click Something else]' : '[click ' + t.clickSec.join(':') + ']';
      if (i === -2 || (!t.clickElse && i < 0)) { fails.push(c.name + ' :: ' + label + ' option not offered: ' + (cm.optionLabels || []).join(' | ')); good = false; break; }
      m = await ctx.pickOption(KB, hist, ci, i, embed, vecs);
    }
    hist.push(m);
    let p = true, why = '';
    if (m.kind === 'clarify') clar++;
    if (t.kind) { p = m.kind === t.kind; why = 'kind ' + m.kind; }
    else if (t.none) { p = m.kind === 'none'; why = 'got ' + m.kind + (m.where ? ' ' + m.where : ''); }
    else if (t.clar !== undefined) { p = m.kind === 'clarify' && (t.clar === null || m.optionKeys.some(k => t.clar.some(a => k === a[0] + '|' + a[1]))); why = m.kind === 'clarify' ? 'options ' + m.optionLabels.join(' | ') : 'answered ' + m.where; }
    else if (t.ans) {
      p = m.kind === 'answer' && t.ans.some(a => m.key === a[0] + '|' + a[1]); why = m.kind === 'answer' ? m.where : m.kind === 'clarify' ? 'clarify ' + m.optionLabels.join(' | ') : m.kind;
      if (p && t.still !== undefined) { const has = /Still on:/.test(m.content); if (has !== t.still) { p = false; why = 'still-on hint ' + (has ? 'present' : 'absent'); } }
      if (p && /\*\*Where:\*\* /.test(m.content) === false) { p = false; why = 'no Where line'; }
    }
    if (p) ok++; else { good = false; fails.push(c.name + ' :: ' + label + ' -> ' + why); }
    if (process.argv.includes('-v')) console.log(p ? 'ok  ' : 'FAIL', c.name, '::', label, '->', m.kind, m.where || (m.optionLabels || []).join(' | '));
  }
  if (good) convOk++;
}
console.log(fails.join('\n'));
console.log(`conversations ${convOk}/${C.length} fully correct; turns ${ok}/${turns}; clarifications shown ${clar}`);
