'use strict';
/* ===== Countdown (computed from Date.now(); never negative; one interval) ===== */
const targets=[{k:'cd_mehndi',at:ts(CFG.mehndiFallback.date,CFG.mehndiFallback.time)},{k:'cd_baarat',at:ts('2026-10-30','11:00')},{k:'cd_walima',at:ts('2026-10-31','14:00')}];
const num=n=>state.lang==='ur'?new Intl.NumberFormat('ur-PK-u-nu-arabext').format(n):String(n);
function tick(){
 if(!$('#d'))return;
 const now=Date.now(),tg=targets.find(x=>x.at>now),done=$('#done'),lab=$('#cdlabel');
 if(!tg){['d','h','m','s'].forEach(i=>$('#'+i).textContent=num(0));lab.hidden=true;done.hidden=false;done.textContent=t('done');return}
 done.hidden=true;lab.hidden=false;lab.textContent=t(tg.k);
 const r=Math.max(0,Math.floor((tg.at-now)/1000));
 $('#d').textContent=num(Math.floor(r/86400));$('#h').textContent=num(Math.floor(r%86400/3600));$('#m').textContent=num(Math.floor(r%3600/60));
 const se=$('#s');se.textContent=num(r%60);se.classList.remove('pop');void se.offsetWidth;se.classList.add('pop');
}
let timer=null;const start=()=>{if(!timer)timer=setInterval(tick,1000)},stop=()=>{clearInterval(timer);timer=null};
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else{tick();start()}});
addEventListener('pagehide',stop);
