// Syntax-checks every browser script in public/ in load order.
const {execFileSync}=require('child_process'),path=require('path');
['config','i18n','dates','components','countdown','app'].forEach(n=>{
  execFileSync(process.execPath,['--check',path.join(__dirname,'..','public',n+'.js')],{stdio:'inherit'});
  console.log('ok',n+'.js');
});
