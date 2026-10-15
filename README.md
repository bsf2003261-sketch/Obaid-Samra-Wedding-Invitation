# Obaid & Samra — Wedding Invitation (JavaScript + Tailwind CSS)

public/
  index.html      page shell, Tailwind CDN + config
  styles.css      theme tokens, ornaments, animations
  config.js       wedding facts (dates, venues, hosts, Hijri overrides)
  i18n.js         English/Urdu dictionary + language/theme state
  dates.js        PKT timestamps, Gregorian/Hijri formatting
  components.js   page sections as template functions
  countdown.js    live countdown (Asia/Karachi)
  app.js          render, events, ICS download, scroll effects

## Run locally
npm run dev            (needs Node)   -> or: cd public && python3 -m http.server 8000
Or double-click public/index.html.

## Deploy on Vercel
1. Push this folder to GitHub, then Vercel > Add New > Project > Import. Framework preset: Other. Deploy.
   (vercel.json already sets the output directory to public.)
2. Or from this folder: npm i -g vercel && vercel --prod

Needs internet for the Tailwind CDN and Google Fonts.
