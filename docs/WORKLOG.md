# PingPro - Work Log

## 2026-05-24 — Formspree, Bug Fixes, Market Validation

### Done
- Wired contact form to Formspree (endpoint: xzdwvopa) — email capture is live
- Fixed 8 JS bugs: DOMContentLoaded wrapper, null guards, IntersectionObserver feature check, double-click debounce on quiz, template literal removal for old browser compat, cached DOM refs, dead link handling
- Market research: validated pricing against Megaspin (only real US booster competitor)
- Confirmed Yinhe gap still real (Megaspin carries Sanwei but NOT Yinhe, NOT 75 ALC)
- ZeroPong confirmed dead (redirects to GamblerTT), Cole's TT likely defunct (ECONNREFUSED)
- Falco is French/Belgian (not Spanish), distributes to 36 countries — good wholesale prospect
- Updated skills: 02-pricing-margins (booster pricing benchmarks), 06-competitive-landscape (booster market intel)
- Created /PingGit skill for automated project sync

### Decisions
- Reprice boosters UP (was underpricing vs Megaspin — market pays $30+ for Falco, $50 for premium Haifu)
- Pursue bundle strategy (blade + booster combos) — nobody does this
- Pre-sell before stocking (use Stripe pre-orders to fund first inventory)
- First order: boosters heavy (15 bottles) + minimal blades (6) — ~$591 total investment
- Must get SDS sheets from Falco/Haifu before ordering (hazmat shipping classification)

### Next Steps
- [ ] Email Falco (info@falcott.com) for wholesale pricing + SDS
- [ ] Email Haifu AliExpress seller for bulk pricing + SDS
- [ ] Post in r/tabletennis (build credibility, don't sell)
- [ ] Switch "Coming Soon" to "Pre-Order — Ships [date]" + Stripe integration
- [ ] Add GA4
- [ ] Push updated site to GitHub Pages
- [ ] Consider booster subscription model ("Booster Club" quarterly auto-ship)

---

## 2026-05-23 — Strategy Pivot & Site Rebuild

### Strategy Change
- Researched market deeply: tariffs (25% Section 301), competition (Cole's TT), realistic margins, US market size
- Identified **rubber boosters** as primary profit product (50-70% margin, zero US competition, consumable)
- Pivoted from "general TT store" to "boosters + high-end Chinese blades" niche
- Blades become loss leaders for customer acquisition; consumables are the business

### Done
- Rebuilt landing page around revised strategy:
  - Hero: "Stop Waiting 3 Weeks" — addresses AliExpress pain point directly
  - Boosters section (primary) with Haifu Seamoon, Falco Tempo Long, DHS No.15
  - Blades section (secondary) with V14 Pro, Sanwei 75 ALC, HL5, LOKI Arthur Asia
  - Added price comparisons to Butterfly equivalents
  - Blade Finder quiz (4 steps: level → style → budget → handle → recommendation)
  - Consumables section (edge tape, cleaner, cases, protectors)
  - "Why PingPro" section: 2-day shipping, player-tested, authenticity, returns
  - Social proof from real Reddit community sentiment
  - Contact form pivoted to "launch notification" email capture
- Added SEO meta tags + Open Graph
- Fully functional Blade Finder quiz with tailored recommendations per player profile

### Current State
- Site reflects real business strategy
- Blade Finder quiz works end-to-end
- All products marked "Coming Soon" (no payment integration yet)
- Form still needs Formspree wiring

### Next Steps (pick up here)
- [ ] Wire contact form to Formspree for email capture
- [ ] Order booster samples (Haifu Seamoon, Falco Tempo Long, DHS No.15)
- [ ] Order blade samples (V14 Pro, Sanwei 75 ALC)
- [ ] Contact Falco (falcott.com) about US wholesale/distribution
- [ ] Contact Yinhe/Sanwei export departments
- [ ] Verify HTS code 9506.40 tariff rate + HTS 2710/3403 for boosters
- [ ] Check if booster bottles need SDS for domestic shipping
- [ ] Post in r/tabletennis as community member (build credibility before selling)
- [ ] Add Google Analytics (GA4)
- [ ] Push updated site to GitHub Pages

---

## 2026-05-22 — Initial Launch

### Done
- Created static landing page (HTML/CSS/JS)
- Sections: hero, products (blades, rubbers, tables, accessories), features, testimonials, contact form, footer
- Responsive design (desktop, tablet, mobile)
- Scroll animations, smooth nav, form submission feedback
- Pushed to GitHub: https://github.com/wish210/pingpro
- Enabled GitHub Pages: https://wish210.github.io/pingpro/

### State at end of session
- Generic table tennis store landing page
- No real business strategy behind it
- Emoji placeholders, fake testimonials
