'use strict';
/* ===== Central configuration (single source of truth) ===== */
const CFG={tz:'Asia/Karachi', /* PKT = UTC+05:00, no DST */
 mehndiFallback:{date:'2026-10-29',time:'00:00'}, /* used until the exact Mehndi time is confirmed */
 hijriOverride:{}, /* verified Pakistan Hijri dates, e.g. {'2026-10-29':'<Urdu text>'} */
 events:[{id:'mehndi',date:'2026-10-29'},{id:'baarat',date:'2026-10-30',time:'11:00'},{id:'walima',date:'2026-10-31',time:'14:00'}],
 maps:{baarat:'Al-Rehman Marque, Faisalabad Road, Chiniot, Pakistan',walima:'Rajpoot Marriage Hall, Sargodha Road, Chiniot, Pakistan'},
 developer:'M. Umar Asim (Web Engineer)'};
