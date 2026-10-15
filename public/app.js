'use strict';
/* ===== Render ===== */
let io=null,first=true;
const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
function render(){
 const y=scrollY,f=document.activeElement&&document.activeElement.dataset,
  key=f&&(f.lang?`[data-lang="${f.lang}"]`:f.themeSet?`[data-theme-set="${f.themeSet}"]`:null);
 root.lang=state.lang;root.dir=state.lang==='ur'?'rtl':'ltr';root.dataset.theme=state.theme;
 $('#app').innerHTML=WeddingHeader()+'<main>'+WeddingHero()+WeddingCountdown()+CoupleSection()+HostsSection()+WeddingTimeline()+VenueSection()+InvitationMessage()+ClosingSection()+'</main>'+WeddingFooter();
 document.title=t('title');$('meta[name=description]').content=t('desc');
 $('meta[property="og:title"]').content=t('title');$('meta[property="og:description"]').content=t('desc');
 enhance();tick();
 scrollTo({top:y,behavior:'instant'});
 if(key){const el=$(key);if(el)el.focus({preventScroll:true})}
 first=false;$('#app').classList.add('settled');
}
function enhance(){
 $$('.arch>*').forEach((n,i)=>n.style.setProperty('--i',i));
 const hero=$('#hero');
 for(let i=0;i<16;i++){const s=document.createElement('i');s.className='sp';s.style.cssText=`left:${Math.random()*100}%;top:${30+Math.random()*65}%;animation-delay:${Math.random()*9}s;animation-duration:${7+Math.random()*6}s`;hero.append(s)}
 const rv=$$('.rv');
 rv.forEach(n=>n.style.setProperty('--d',[...n.parentNode.children].indexOf(n)*.12+'s'));
 if(io)io.disconnect();
 if(!first||!('IntersectionObserver' in window)){rv.forEach(n=>n.classList.add('in'));return} /* language/theme changes never re-hide content */
 io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
 rv.forEach(n=>io.observe(n));
}

/* ===== Events ===== */
document.addEventListener('click',e=>{
 const l=e.target.closest('[data-lang]'),th=e.target.closest('[data-theme-set]'),ics=e.target.closest('[data-ics]');
 if(l){state.lang=l.dataset.lang;store.set('os-lang',state.lang);render();say(t('lang_set'))}
 else if(th){state.theme=th.dataset.themeSet;store.set('os-theme',state.theme);render();say(t('theme_set')+t(state.theme))}
 else if(ics)downloadIcs();
});
function downloadIcs(){ /* only confirmed times; Mehndi is all-day with no venue */
 const ev=(id,sum,st,all)=>['BEGIN:VEVENT',`UID:${id}@obaid-samra-wedding`,'DTSTAMP:20261014T000000Z',all?`DTSTART;VALUE=DATE:${st}`:`DTSTART;TZID=Asia/Karachi:${st}`,`SUMMARY:${sum}`,'END:VEVENT'];
 const L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Obaid and Samra//Wedding//EN','BEGIN:VTIMEZONE','TZID:Asia/Karachi','BEGIN:STANDARD','DTSTART:19700101T000000','TZOFFSETFROM:+0500','TZOFFSETTO:+0500','TZNAME:PKT','END:STANDARD','END:VTIMEZONE',
  ...ev('mehndi','Mehndi - Obaid & Samra (time to be announced)','20261029',1),
  ...ev('baarat','Baarat departure - Al-Rehman Marque, Faisalabad Road, Chiniot','20261030T110000'),
  ...ev('walima','Walima - Rajpoot Marriage Hall, Sargodha Road, Chiniot','20261031T130000'),'END:VCALENDAR'];
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([L.join('\r\n')],{type:'text/calendar'}));a.download='obaid-samra-wedding.ics';document.body.append(a);a.click();a.remove();say(t('saved'));
}

/* ===== Scroll progress + hero parallax (skipped for reduced motion) ===== */
if(!reduced){let tk=false;const pg=$('#prog');
 const onS=()=>{tk=false;const y=scrollY,mx=root.scrollHeight-innerHeight,h=$('header'),a=$('.arch');
  pg.style.transform=`scaleX(${mx>0?y/mx:0})`;if(h)h.classList.toggle('sc',y>10);if(a&&y<innerHeight)a.style.transform=`translateY(${y*.12}px)`};
 addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});
}
root.classList.add('js');render();start();
