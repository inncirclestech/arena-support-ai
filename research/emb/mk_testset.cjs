const fs=require('fs');const out=[];
fs.readFileSync(process.argv[2],'utf8').split('\n').filter(Boolean).forEach(l=>{
 const p=l.split('||').map(x=>x.trim());
 if(p[1]==='DECLINE')out.push({q:p[0],decline:true});
 else if(p[1]==='DECLINE_OR_ANY')out.push({q:p[0],any:true});
 else out.push({q:p[0],m:p[1],s:p[2],alt:(p[3]||'').split(';').filter(Boolean).map(a=>{const i=a.indexOf(':');return [a.slice(0,i).trim(),a.slice(i+1).trim()]})});
});
fs.writeFileSync('testset.json',JSON.stringify(out,null,1));console.log(out.length,'questions;',out.filter(x=>x.m).length,'answerable');
