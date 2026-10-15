'use strict';
/* ===== Components (template functions styled with Tailwind utilities) ===== */
const Div=()=>'<div class="div rv"></div>';
const Heading=k=>`<h2 class="rv font-serif text-3xl md:text-5xl mb-2">${t(k)}</h2>${Div()}`;
const Section=(id,cls,inner)=>`<section id="${id}" class="${cls} px-4 py-16 md:py-24 text-center"><div class="mx-auto max-w-5xl">${inner}</div></section>`;
const Person=(label,name,rel,parent)=>`<div class="card rv z"><p class="eyebrow">${t(label)}</p><h3 class="font-serif text-3xl mt-1">${t(name)}</h3>${Div()}<p class="text-mute">${t(rel)} ${t(parent)}</p></div>`;

const LanguageSwitcher=()=>`<div class="seg" role="group" aria-label="${t('lang_aria')}"><button data-lang="en" aria-pressed="${state.lang==='en'}" lang="en">English</button><button data-lang="ur" aria-pressed="${state.lang==='ur'}" lang="ur">اردو</button></div>`;
const ThemeToggle=()=>`<div class="seg" role="group" aria-label="${t('theme_aria')}"><button data-theme-set="light" aria-pressed="${state.theme==='light'}"><span aria-hidden="true">☀</span> ${t('light')}</button><button data-theme-set="dark" aria-pressed="${state.theme==='dark'}"><span aria-hidden="true">☾</span> ${t('dark')}</button></div>`;
const WeddingHeader=()=>`<header class="reg sticky top-0 z-50 flex items-center justify-between gap-2 px-4 py-2.5"><a class="mono text-xl" href="#hero" aria-label="O &amp; S">O ❖ S</a>
<nav class="hidden md:flex gap-5 text-sm" aria-label="Main"><a class="text-mute hover:text-gold" href="#couple">${t('nav_couple')}</a><a class="text-mute hover:text-gold" href="#events">${t('nav_events')}</a><a class="text-mute hover:text-gold" href="#venues">${t('nav_venue')}</a></nav>
<div class="flex gap-2">${LanguageSwitcher()}${ThemeToggle()}</div></header>`;

const WeddingHero=()=>`<section id="hero" class="reg relative overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-10 pb-8" style="min-height:calc(100svh - 62px)">
<div class="arch relative w-full max-w-[580px] px-6 pt-20 pb-12">
<p class="bis text-2xl" lang="ar" dir="rtl">بسم اللہ الرحمٰن الرحیم</p>
<p class="eyebrow mt-3">${t('tag')}</p>
<h1 class="nm">${t('groom')}</h1><p class="text-mute">${t('son')} ${t('gf')}</p>
<p class="amp">&amp;</p>
<h1 class="nm">${t('bride')}</h1><p class="text-mute">${t('dau')} ${t('bf')}</p>
<div class="div"></div><p>${t('invite')}</p>
<p class="font-serif text-2xl text-gold mt-2">${t('range')}</p><p class="text-[13px] text-mute">${t('place')}</p></div>
<a class="bob mt-7 text-2xl text-gold no-underline" href="#countdown" aria-label="${t('scroll')}">⌄</a></section>`;

const unit=(id,k)=>`<div class="u rv z"><b id="${id}">0</b><span>${t(k)}</span></div>`;
const WeddingCountdown=()=>Section('countdown','alt',`${Heading('cd_title')}<div class="flex justify-center gap-2 sm:gap-5 my-7" style="direction:ltr" role="timer">${unit('d','days')}${unit('h','hours')}${unit('m','mins')}${unit('s','secs')}</div><p id="cdlabel" class="rv text-mute max-w-xl mx-auto"></p><p id="done" hidden class="font-serif text-2xl"></p>`);
const CoupleSection=()=>Section('couple','',`${Heading('couple_title')}<div class="grid gap-6 md:grid-cols-2 mt-9">${Person('groom_l','groom','son','gf')}${Person('bride_l','bride','dau','bf')}</div>`);
const host=(k,rel)=>`<div class="card rv z"><h3 class="font-serif text-3xl">${t(k)}</h3>${rel?`<p class="text-[13px] text-mute">${t(rel)}</p>`:''}</div>`;
const HostsSection=()=>Section('hosts','alt',`${Heading('hosts_title')}<p class="rv text-mute max-w-xl mx-auto mb-9">${t('hosts_intro')}</p><div class="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">${host('gf','gfrel')}${host('h2','brother_rel')}${host('h3','brother_rel')}${host('h4','brother_rel')}${host('h5','brother_rel')}</div>`);

function EventCard(e,i){
 let body;
 if(e.id==='mehndi')body=`<p class="text-[13px] text-mute">${t('mehndi_line')}</p><p class="mt-2">${t('tba')}</p>`;
 else{const b=e.id==='baarat';
  body=`<p class="mt-2"><span class="text-[13px] text-mute">${t(b?'dep':'time')}:</span> <b>${t('t_'+e.id)}</b></p>${b?`<p class="text-[13px] text-mute">${t('dep_note')}</p>`:''}
  <p class="font-serif text-xl mt-2">${t('v_'+e.id)}</p>${state.lang==='ur'?`<p class="text-[13px] text-mute ltr" dir="ltr">${T.en['v_'+e.id]}</p><br>`:''}<p class="text-[13px] text-mute">${t('a_'+e.id)}</p>`;}
 return `<article class="card rv z"><p class="eyebrow">0${i+1}</p><h3 class="font-serif text-3xl">${t(e.id)}</h3>${dateHtml(e.date)}${body}</article>`;
}
const WeddingTimeline=()=>Section('events','',`${Heading('events_title')}<div class="grid gap-6 md:grid-cols-3 mt-9">${CFG.events.map(EventCard).join('')}</div><p class="text-[13px] text-mute mt-7">${state.lang==='ur'?t('h_calc'):''}</p>`);
const venue=id=>`<div class="card rv z"><h3 class="font-serif text-3xl">${t(id)}</h3><p class="font-serif text-xl mt-2">${t('v_'+id)}</p><p class="text-[13px] text-mute">${t('a_'+id)}</p><a class="btn" href="${mapUrl(CFG.maps[id])}" target="_blank" rel="noopener noreferrer">${t(id==='baarat'?'dir_b':'dir_w')}</a></div>`;
const VenueSection=()=>Section('venues','alt',`${Heading('find_title')}<div class="grid gap-6 md:grid-cols-2 mt-9">${venue('baarat')}${venue('walima')}</div><p class="text-[13px] text-mute mt-5">${t('mehndi_dir')}</p>`);
const InvitationMessage=()=>`<section id="invite" class="px-4 py-16 md:py-24 text-center"><div class="frame rv mx-auto max-w-2xl px-7 py-14"><h2 class="font-serif text-3xl md:text-4xl">${t('inv_title')}</h2>${Div()}<p class="mt-3">${t('inv1')}</p><p class="mt-3">${t('inv2')}</p><p class="mt-3">${t('inv3')}</p></div></section>`;
const ClosingSection=()=>`<section id="close" class="reg px-4 py-16 md:py-24 text-center"><div class="mx-auto max-w-3xl"><p class="eyebrow rv">${t('love')}</p><h2 class="rv font-serif text-4xl md:text-6xl mt-2">${t('names')}</h2><p class="rv font-serif text-2xl text-gold">${t('range')}</p><p class="rv">${t('looking')}</p><button class="btn rv" data-ics>${t('save')}</button><p class="text-[13px] text-mute mt-2">${t('save_note')}</p></div></section>`;
const WeddingFooter=()=>`<footer class="reg px-5 py-12 text-center text-sm"><p class="font-serif text-2xl text-gold2">${t('names')}</p><p>${t('range_s')}</p><p>${t('foot')}</p><p class="text-[13px] mt-4">${t('dev')} <span class="ltr">${CFG.developer}</span></p></footer>`;
