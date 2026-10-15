'use strict';
/* ===== Dates (timestamps fixed in PKT; language only changes display) ===== */
const ts=(d,tm)=>Date.parse(d+'T'+(tm||'00:00')+':00+05:00');
const fmt=(loc,iso,o)=>{try{return new Intl.DateTimeFormat(loc,{timeZone:'UTC',...o}).format(new Date(iso+'T12:00:00Z'))}catch(e){return null}};
const LONG={weekday:'long',day:'numeric',month:'long',year:'numeric'};
function dateHtml(iso){
 const g=fmt(state.lang==='ur'?'ur-PK':'en-GB',iso,LONG)||iso;
 if(state.lang==='en')return `<div class="date">${g}</div>`;
 const o=CFG.hijriOverride[iso],h=o||CFG.hijriFallback[iso]||fmt('ur-PK-u-ca-islamic-civil-nu-arabext',iso,LONG);
 if(!h)return `<div class="date">${g}</div>`; /* conversion failure never hides the date */
 return `<div class="date">${h}</div><div class="text-[13px] text-mute">${g}</div><span class="pill">${o?t('h_ver'):t('h_calcl')}</span>`;
}
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
