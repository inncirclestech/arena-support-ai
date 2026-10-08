import fs from 'fs'; import vm from 'vm';
import { pipeline } from '@huggingface/transformers';
const root='../../';const ctx={};vm.createContext(ctx);
new vm.Script(fs.readFileSync(root+'data.js','utf8')+fs.readFileSync(root+'engine.js','utf8')+'globalThis.KB=buildKB(MODULES);globalThis.plan=plan;globalThis.prepareQuery=prepareQuery;globalThis.P=SEM_PREFIX').runInContext(ctx);
const meta=JSON.parse(fs.readFileSync(root+'assets/kb/meta.json'));const b=fs.readFileSync(root+'assets/kb/vecs.i8');
const vecs={data:new Int8Array(b.buffer,b.byteOffset,b.length),scale:meta.scale,dim:meta.dim,count:meta.count};
const ex=await pipeline('feature-extraction',meta.model,{dtype:'q8'});
for(const q of process.argv.slice(2)){globalThis.V=process.env.V;const o=await ex(ctx.P+ctx.prepareQuery(ctx.KB,q),{pooling:'cls',normalize:true});const p=ctx.plan(ctx.KB,q,null,Float32Array.from(o.data),vecs);
if(process.env.V)for(const h of p.hits.slice(0,5))console.log("   ",h.entry.where,"["+h.entry.kind+"]",h.entry.title,h.score.toFixed(3),h.cos.toFixed(3),JSON.stringify(h.lex));console.log(q,"=>",p.type==='answer'?p.best.where+' ['+p.best.kind+'] '+p.best.title+(p.also?' | also '+p.also.where:''):'DECLINE '+p.reason);}
