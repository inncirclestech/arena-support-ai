// usage: node patch.cjs <patch.json>  patch={module, ops:[{heading, after?(new section), intro?, defs:[{term,definition,after?}], procs:[{title,steps}], replace:[{term,from,to}]}]}
// Upserts definitions by term / procedures by title into existing sections (or creates a section after `after`), then merges via merge_section.cjs
const fs=require('fs'),vm=require('vm'),cp=require('child_process');
const patch=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
function load(){const c={};vm.createContext(c);new vm.Script(fs.readFileSync('data.js','utf8')+'\nglobalThis.M=MODULES;').runInContext(c);return c.M.find(x=>x.id===patch.module)}
const out=[];
for(const op of patch.ops){
  const mod=load();let sec=mod.narrative.find(n=>n.heading===op.heading);const isNew=!sec;
  if(isNew){if(!op.after)throw new Error('new section needs after: '+op.heading);sec={heading:op.heading,intro:op.intro,definitions:[],procedures:[]}}
  else sec=JSON.parse(JSON.stringify(sec));
  if(op.intro)sec.intro=op.intro;
  sec.definitions=sec.definitions||[];sec.procedures=sec.procedures||[];
  for(const r of op.replace||[]){const d=sec.definitions.find(x=>x.term===r.term);if(!d)throw new Error('no term '+r.term);if(!d.definition.includes(r.from))throw new Error('no text '+r.from);d.definition=d.definition.replace(r.from,r.to)}
  for(const d of op.defs||[]){const i=sec.definitions.findIndex(x=>x.term.toLowerCase()===d.term.toLowerCase());
    if(i>=0){const old=sec.definitions[i];sec.definitions[i]={term:old.term,definition:d.definition,...(old.images?{images:old.images}:{})}}
    else{const e={term:d.term,definition:d.definition};const p=d.after?sec.definitions.findIndex(x=>x.term===d.after):-1;if(d.after&&p<0)throw new Error('no after '+d.after);if(p>=0)sec.definitions.splice(p+1,0,e);else sec.definitions.push(e)}}
  for(const p of op.procs||[]){const i=sec.procedures.findIndex(x=>x.title===p.title);const e={title:p.title,steps:p.steps};if(i>=0)sec.procedures[i]={...sec.procedures[i],...e};else sec.procedures.push(e)}
  const payload={sections:[sec]};if(isNew)payload.insertAfter=op.after;
  const f='research/rebuild/_tmp_payload.json';fs.writeFileSync(f,JSON.stringify(payload));
  cp.execFileSync('node',['research/rebuild/merge_section.cjs',patch.module,f],{stdio:'inherit'});
  out.push({heading:op.heading,new:isNew})
}
fs.unlinkSync('research/rebuild/_tmp_payload.json');console.log(JSON.stringify(out));
