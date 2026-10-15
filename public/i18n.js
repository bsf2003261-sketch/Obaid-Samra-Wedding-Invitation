'use strict';
/* ===== Translations ===== */
const T={en:{
nav_couple:'The Couple',nav_events:'Celebrations',nav_venue:'Venues',light:'Light',dark:'Dark',lang_aria:'Language',theme_aria:'Colour theme',scroll:'Scroll to countdown',
tag:'Together with their families',groom:'Obaid ur Rehman',bride:'Samra Younas',son:'Son of',dau:'Daughter of',gf:'Hajji Ali Muhammad Nasir Mughal',bf:'Muhammad Younas',
invite:'Joyfully invite you to celebrate their wedding',range:'29 — 31 October 2026',range_s:'29–31 October 2026',place:'Chiniot, Pakistan',
cd_title:'Counting Down to Our Celebrations',days:'Days',hours:'Hours',mins:'Minutes',secs:'Seconds',
cd_mehndi:'Until Mehndi — time to be announced (counting from the start of 29 October, PKT)',cd_baarat:'Until Baarat departure — 11:00 AM PKT',cd_walima:'Until Walima — 1:00 PM PKT',
done:'Three beautiful days, countless precious memories. Thank you for celebrating with us.',
couple_title:'The Bride & Groom',groom_l:'The Groom',bride_l:'The Bride',
hosts_title:'With the Support of Our Families',hosts_intro:'We are grateful to the family members and loved ones who stand beside us as we celebrate this special occasion.',
gfrel:"Groom's Father",brother_rel:"Groom's Brother",h2:'Molvi Muhammad Umar Abdul Mannan',h3:'Muhammad Ali',h4:'Muhammad Ali',
events_title:'Our Wedding Celebrations',mehndi:'Mehndi',baarat:'Baarat',walima:'Walima',
mehndi_line:'A celebration of color, tradition, and joy.',tba:'Venue and timing to be announced.',time:'Time',dep:'Departure',
t_baarat:'11:00 AM',t_walima:'1:00 PM',dep_note:'Departure time — not the ceremony start.',
v_baarat:'Al-Rehman Marque',a_baarat:'Faisalabad Road, Chiniot, Pakistan',v_walima:'Rajpoot Marriage Hall',a_walima:'Sargodha Road, Chiniot, Pakistan',
find_title:'Find Your Way',dir_b:'Get Baarat Directions',dir_w:'Get Walima Directions',mehndi_dir:'Mehndi directions will be shared once the venue is confirmed.',
inv_title:'Your Presence Is Our Greatest Gift',inv1:'With the blessings of Allah and the love and support of our families, we warmly invite you to join us as we celebrate the wedding of Obaid ur Rehman and Samra Younas.',inv2:'Your presence, duas, and good wishes will make these special moments even more memorable.',inv3:'We look forward to celebrating together.',
love:'With Love & Gratitude',names:'Obaid ur Rehman & Samra Younas',looking:'Looking forward to celebrating with you.',
save:'Save the Wedding Dates',save_note:'Downloads a calendar file you can open to add the dates.',saved:'Calendar file downloaded. Open it to add the dates to your calendar.',
foot:'Made with love for our special beginning.',dev:'Developed by',
h_calc:'Hijri dates are calculated and may differ by a day depending on local moon sighting.',h_ver:'Verified date',h_calcl:'Calculated',
lang_set:'Language: English',theme_set:'Theme: ',title:'Obaid & Samra | Wedding Invitation',desc:'Join us in celebrating the wedding of Obaid ur Rehman and Samra Younas, 29–31 October 2026, in Chiniot, Pakistan.'},
ur:{
nav_couple:'دلہا دلہن',nav_events:'تقریبات',nav_venue:'مقامات',light:'روشن',dark:'تاریک',lang_aria:'زبان',theme_aria:'رنگوں کا انداز',scroll:'کاؤنٹ ڈاؤن تک جائیں',
tag:'اپنے اہلِ خانہ کے ہمراہ',groom:'عبید الرحمٰن',bride:'سمرا یونس',son:'فرزندِ',dau:'صاحبزادیِ',gf:'حاجی علی محمد ناصر مغل',bf:'محمد یونس',
invite:'آپ کو اپنی شادی کی خوشیوں میں شریک ہونے کی دلی دعوت دیتے ہیں',range:'۲۹ تا ۳۱ اکتوبر ۲۰۲۶ء',range_s:'۲۹ تا ۳۱ اکتوبر ۲۰۲۶ء',place:'چنیوٹ، پاکستان',
cd_title:'ہماری تقریبات میں باقی وقت',days:'دن',hours:'گھنٹے',mins:'منٹ',secs:'سیکنڈ',
cd_mehndi:'مہندی تک — وقت کا اعلان بعد میں ہوگا (۲۹ اکتوبر کے آغاز سے شمار)',cd_baarat:'بارات کی روانگی تک — صبح ۱۱:۰۰ بجے',cd_walima:'ولیمہ تک — دوپہر ۱:۰۰ بجے',
done:'تین حسین دن، بے شمار یادگار لمحات۔ ہماری خوشیوں میں شریک ہونے کا شکریہ۔',
couple_title:'دلہا اور دلہن',groom_l:'دولہا',bride_l:'دلہن',
hosts_title:'ہمارے اہلِ خانہ کے تعاون سے',hosts_intro:'ہم ان تمام اہلِ خانہ اور عزیز و اقارب کے شکر گزار ہیں جو اس خوشی کے موقع پر ہمارے ساتھ کھڑے ہیں۔',
gfrel:'دولہا کے والد',brother_rel:'دولہا کے بھائی',h2:'مولوی محمد عمر عبدالمنان',h3:'محمد علی',h4:'محمد علی',
events_title:'ہماری شادی کی تقریبات',mehndi:'مہندی',baarat:'بارات',walima:'ولیمہ',
mehndi_line:'رنگوں، روایت اور خوشیوں کا جشن۔',tba:'مقام اور وقت کا اعلان بعد میں کیا جائے گا۔',time:'وقت',dep:'روانگی',
t_baarat:'صبح ۱۱:۰۰ بجے',t_walima:'دوپہر ۱:۰۰ بجے',dep_note:'یہ روانگی کا وقت ہے، تقریب کے آغاز کا نہیں۔',
v_baarat:'الرحمٰن مارکی',a_baarat:'فیصل آباد روڈ، چنیوٹ، پاکستان',v_walima:'راجپوت میرج ہال',a_walima:'سرگودھا روڈ، چنیوٹ، پاکستان',
find_title:'راستہ تلاش کریں',dir_b:'بارات کے لیے راستہ دیکھیں',dir_w:'ولیمہ کے لیے راستہ دیکھیں',mehndi_dir:'مقام طے ہونے کے بعد مہندی کا راستہ فراہم کیا جائے گا۔',
inv_title:'آپ کی موجودگی ہمارے لیے سب سے بڑا تحفہ ہے',inv1:'اللہ کے فضل و کرم اور اپنے اہلِ خانہ کی محبت اور تعاون سے، ہم آپ کو عبید الرحمٰن اور سمرا یونس کی شادی کی خوشیوں میں شرکت کی پُرخلوص دعوت دیتے ہیں۔',inv2:'آپ کی آمد، دعائیں اور نیک تمنائیں ان خاص لمحات کو مزید یادگار بنا دیں گی۔',inv3:'ہم آپ کے ساتھ مل کر خوشیاں منانے کے منتظر ہیں۔',
love:'محبت اور شکر گزاری کے ساتھ',names:'عبید الرحمٰن اور سمرا یونس',looking:'آپ کے ساتھ خوشیاں منانے کے منتظر ہیں۔',
save:'شادی کی تاریخیں محفوظ کریں',save_note:'کیلنڈر فائل ڈاؤن لوڈ ہوگی، اسے کھول کر تاریخیں اپنے کیلنڈر میں شامل کریں۔',saved:'کیلنڈر فائل ڈاؤن لوڈ ہو گئی ہے۔ اسے کھول کر تاریخیں اپنے کیلنڈر میں شامل کریں۔',
foot:'ہماری نئی زندگی کے آغاز پر محبت کے ساتھ۔',dev:'تیار کنندہ:',
h_calc:'ہجری تاریخیں حسابی ہیں اور مقامی رویتِ ہلال کے مطابق ایک دن کے فرق کا امکان ہے۔',h_ver:'تصدیق شدہ تاریخ',h_calcl:'حسابی',
lang_set:'زبان: اردو',theme_set:'انداز: ',title:'عبید اور سمرا | دعوتِ ولیمہ و شادی',desc:'عبید الرحمٰن اور سمرا یونس کی شادی میں شرکت کی دعوت، ۲۹ تا ۳۱ اکتوبر ۲۰۲۶ء، چنیوٹ، پاکستان۔'}};

/* ===== State: one source for language, one for theme ===== */
const root=document.documentElement,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const state={lang:store.get('os-lang')==='ur'?'ur':'en',theme:store.get('os-theme')==='dark'?'dark':'light'};
const t=k=>T[state.lang][k];
const say=m=>{$('#live').textContent=m};
