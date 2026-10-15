// Syntax-checks every browser script in public/ in load order.
const {execFileSync}=require('child_process'),path=require('path'),fs=require('fs'),vm=require('vm');
['config','i18n','dates','components','countdown','app'].forEach(n=>{
  execFileSync(process.execPath,['--check',path.join(__dirname,'..','public',n+'.js')],{stdio:'inherit'});
  console.log('ok',n+'.js');
});

const code=[
  fs.readFileSync(path.join(__dirname,'..','public','config.js'),'utf8'),
  "const state={lang:'ur'}; const t=k=>k;",
  fs.readFileSync(path.join(__dirname,'..','public','dates.js'),'utf8'),
  "JSON.stringify(['2026-10-29','2026-10-30','2026-10-31'].map(dateHtml))"
].join('\n');
const html=JSON.parse(vm.runInNewContext(code,{
  Intl:{DateTimeFormat(){throw new RangeError('Islamic calendar unsupported')}},
  Date,encodeURIComponent
}));
html.forEach((entry,i)=>{
  const day=String.fromCharCode(0x06f1,0x06f7+i);
  if(!entry.includes(day)||!entry.includes('h_calcl'))throw new Error('Urdu Hijri fallback failed');
});
console.log('ok Urdu Hijri event-date fallback');
