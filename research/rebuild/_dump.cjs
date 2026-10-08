const vm=require('vm'),fs=require('fs');const c={};vm.createContext(c);new vm.Script(fs.readFileSync('data.js','utf8')+'\nglobalThis.M=MODULES;').runInContext(c);
const m=c.M.find(x=>x.id===process.argv[2]);const only=process.argv[3]?process.argv[3].split('|'):null;
for(const n of m.narrative){if(only&&!only.includes(n.heading))continue;console.log('## '+n.heading+' :: '+(n.intro||'').replace(/<[^>]+>/g,''));
for(const d of n.definitions||[])console.log('  - '+d.term+': '+d.definition.replace(/<[^>]+>/g,''));
for(const p of n.procedures||[])console.log('  * '+p.title+' ['+(p.steps||[]).length+']');}
