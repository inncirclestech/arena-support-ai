// usage: node _edit.cjs module heading 'js body using n (section)'
const vm=require('vm'),fs=require('fs'),cp=require('child_process');const [,,mod,heading,body]=process.argv;
const c={};vm.createContext(c);new vm.Script(fs.readFileSync('data.js','utf8')+'\nglobalThis.M=MODULES;').runInContext(c);
const n=JSON.parse(JSON.stringify(c.M.find(x=>x.id===mod).narrative.find(x=>x.heading===heading)));new Function('n',body)(n);
fs.writeFileSync('research/rebuild/_p.json',JSON.stringify({sections:[n]}));cp.execFileSync('node',['research/rebuild/merge_section.cjs',mod,'research/rebuild/_p.json'],{stdio:'inherit'});fs.unlinkSync('research/rebuild/_p.json');
