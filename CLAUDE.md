# PingPro — Table Tennis Equipment Store

## What This Is
An online store selling high-performance Chinese table tennis blades/rubbers to US players. Fills the gap between slow/risky AliExpress and overpriced US retailers carrying only Japanese/European brands.

## Business Strategy (May 2025 Pivot)
- **Primary profit**: Rubber boosters (Haifu Seamoon, Falco Tempo Long, DHS No.15) — 50-70% margin, zero US competition, consumable
- **Secondary**: Chinese performance blades (Yinhe V14 Pro, Sanwei 75 ALC, LOKI) — loss leaders for customer acquisition
- **Positioning**: "Stop Waiting 3 Weeks" — US warehouse, 2-day shipping, expert curation, authenticity

## Current State
- Static site: `index.html` + `styles.css` + `script.js`
- Hosted on GitHub Pages: https://wish210.github.io/pingpro/
- Blade Finder quiz works end-to-end
- All products marked "Coming Soon" (no payment integration yet)
- Contact form wired to Formspree (endpoint: xzdwvopa) — collecting emails NOW
- JS hardened for cross-browser compatibility (IE11+, older iOS Safari)

## Next Steps (pick up here)
See `docs/WORKLOG.md` for full task list. Key next actions:
1. **Get SDS sheets** — email Falco (info@falcott.com) + Haifu AliExpress seller for Safety Data Sheets (determines shipping method)
2. **Contact Falco for wholesale** — they're French/Belgian, distribute to 36 countries, likely want a US retail partner
3. **First inventory order** — 10x Haifu Seamoon 60ml + 5x Haifu 120ml + 5x Falco Tempo Long (~$315)
4. **Switch "Coming Soon" to "Pre-Order"** — validate demand with real money before stocking blades
5. **Post in r/tabletennis** — "Where do you buy boosters in the US?" thread (build presence, don't sell)
6. Add Google Analytics (GA4)
7. Push updated site to GitHub Pages

## Knowledge Base
Research and planning docs live in `docs/skills/`:

| File | Topic |
|------|-------|
| `01-market-landscape.md` | Industry structure, brand tiers, OEM factories |
| `02-pricing-margins.md` | Price comparisons, margin analysis, pricing strategy |
| `03-supply-chain-sourcing.md` | How to source: AliExpress, direct, OEM, Taobao |
| `04-business-models.md` | Dropship vs import vs private label — model comparison |
| `05-blade-knowledge.md` | Technical blade info: woods, carbon, ply configs |
| `06-competitive-landscape.md` | Competitor analysis, market gaps, SEO opportunity |
| `07-next-steps-roadmap.md` | Phased plan with tasks and revenue targets |
| `08-platform-comparison.md` | E-commerce platforms, Stripe setup, shipping |

## Tech Stack
- Pure HTML/CSS/JS (no framework, no build step)
- Hosting: GitHub Pages (free)
- Payments: Stripe Checkout (planned — hosted, no backend needed)
- Forms: Formspree (planned)
- Analytics: GA4 (planned)

## Design Decisions
- No framework intentionally — keeps it simple, fast, free to host
- Blade Finder quiz is the key differentiator from competitors
- "Coming Soon" badges until inventory is secured
- Mobile-first responsive design

## For Claude
- Read `docs/skills/` files for deep market/product knowledge before making business recommendations
- Read `docs/WORKLOG.md` for session history and what's been done
- The owner is an intermediate TT player who buys from AliExpress — speak that language
- Focus on boosters as the profit center, blades as acquisition
