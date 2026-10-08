// Regenerates assets/kb/vecs.i8 + assets/kb/meta.json from data.js (docs narrative only).
// Run:  cd research/emb && node build_vectors.mjs      (see REBUILD_VECTORS.md)
import { pipeline } from '@huggingface/transformers';
import fs from 'fs'; import vm from 'vm'; import path from 'path'; import { fileURLToPath } from 'url';
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../');
const MODEL = 'Xenova/bge-small-en-v1.5', DIM = 384;
const ctx = {}; vm.createContext(ctx);
new vm.Script(fs.readFileSync(process.env.DATA || path.join(root, 'data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(root, 'engine.js'), 'utf8') + '\nglobalThis.KB=buildKB(MODULES);globalThis.H=kbHash(globalThis.KB);').runInContext(ctx);
const KB = ctx.KB, hash = ctx.H;
console.log('entries', KB.length, 'hash', hash);
const t0 = Date.now();
const ex = await pipeline('feature-extraction', MODEL, { dtype: 'q8' });
const f = new Float32Array(KB.length * DIM);
const B = 32;
for (let i = 0; i < KB.length; i += B) {
  const out = await ex(KB.slice(i, i + B).map(e => e.text), { pooling: 'cls', normalize: true });
  f.set(out.data, i * DIM);
  if (i % 640 === 0) console.log(i, Math.round((Date.now() - t0) / 1000) + 's');
}
let mx = 0; for (const v of f) mx = Math.max(mx, Math.abs(v));
const scale = 127 / mx;
const q = new Int8Array(f.length); for (let i = 0; i < f.length; i++) q[i] = Math.round(f[i] * scale);
const outDir = process.env.OUT || path.join(root, 'assets/kb'); fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'vecs.i8'), Buffer.from(q.buffer));
fs.writeFileSync(path.join(outDir, 'meta.json'), JSON.stringify({ count: KB.length, dim: DIM, scale, model: MODEL, hash, built: new Date().toISOString() }));
fs.writeFileSync(path.join(here, 'kb_vecs.f32'), Buffer.from(f.buffer)); // full-precision copy for tests
console.log('done', Math.round((Date.now() - t0) / 1000) + 's', 'bytes', q.length);
