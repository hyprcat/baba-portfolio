# Page order, flow, and copy strategy

How to assemble the markdown files into a finished site. Read this once before you start building.

---

## Recommended page order (single-page site)

```
[ Hero ]
   ↓ scroll
[ About — pivot story ]
   ↓
[ Case study 1 — Allianz 40 countries ]
   ↓
[ Case study 2 — Srikanth turnaround ]
   ↓
[ Case study 3 — IMPACT brand work ]
   ↓
[ Why food — ESSEC Food Chair ]
   ↓
[ Toolkit — skills & tools ]
   ↓
[ CV summary block ] (optional, can also live on a /cv page)
   ↓
[ Contact / CTA ]
[ Footer ]
```

## Why this order

- **Hero** sets the timeline expectation immediately ("available July 2026") — recruiters with no near-term need bounce.
- **About** earns the right to keep reading by naming the pivot honestly. Skips the cliche "passionate about food" opener.
- **Case studies in reverse-chronological** because the most recent one (Allianz) is the most legibly impressive — front-load it.
- **Why food** comes AFTER the case studies, not before. By the time the recruiter gets here, they already trust him on rigour; the food angle is now framing, not pitch.
- **Toolkit** is short and scannable — a final "yes I can do the thing" before the CTA.
- **Contact** is the action. Not buried, not hidden behind a form.

## Alternative — multi-page site (only if you really want)

```
/             → hero + about + 1 featured case study + CTA
/work         → all 3 case studies
/about        → expanded about + ESSEC Food Chair narrative
/cv           → CV summary block + downloadable PDF
/contact      → contact (or just a section, depending on need)
```

I don't recommend this unless you have time to maintain it. **Single-page wins for a portfolio at this stage** — recruiters scroll, they don't navigate.

## Copy strategy — three rules

### 1. Lead every section with a number

Hero: "40 countries · stage de fin d'études · May 2026"
Allianz: "40 countries · zero late deviations · 4 months"
Srikanth: "47% bottleneck cut · 35% efficiency gain · 4 years"
IMPACT: "5 BUs · -40% reporting time · 6 months"

Numbers are the only thing recruiters consistently believe.

### 2. Don't write more than the case study deserves

The Allianz case is 4 months old; it gets 5 paragraphs. The Srikanth case is 4 years old with 4 metrics; it gets 6. The IMPACT case is the bridge; it gets 4. Don't pad to fill.

### 3. Reference the next step

Every case study ends with "why this transfers" — a one-paragraph link to the role types this case study supports. Recruiters read fast and need help connecting the dots; do the connecting.

## What to remove or downplay

- **Telugu / Hindi** — keep them in the languages block (factually true, signals international background) but don't lead the page with them. The market is French food/beauty/luxury — French and English are the load-bearing languages.
- **Bachelor's-degree details** — "Public Administration" and "Osmania University" are factually correct but don't hype them. The GPA + 1st-of-300 ranking IS the headline for this part. Mention degree title once, move on.
- **Vasavya NGO** — it's real and worth keeping in CV summary, but it shouldn't be a separate site section. Risk of looking like you're padding.

## What to upweight if there's room

- **The Casino × ESSEC Food Chair partnership** — September 2025 was 7 months ago; it's the freshest news on the Chair partner page and the most directly leverageable.
- **Cécile Béliot-Zind being an ESSEC E97 alumna** — this matters for Bel applications specifically.
- **The Allianz "Elle & Vire mirror"** framing from cv.md — recruiters at Lactalis read this and immediately understand the transfer.

## Final pre-launch checklist

- [ ] No emoji anywhere on the site
- [ ] No "passionate about" or "results-oriented" or "synergies"
- [ ] No em-dashes that ATS systems mangle (use hyphens or " — " consistently)
- [ ] Every link tested (LinkedIn, mailto, CV PDF download)
- [ ] OG image renders correctly on LinkedIn preview tool (https://www.linkedin.com/post-inspector/)
- [ ] Mobile width tested at 375 px (iPhone SE)
- [ ] Page weight under 500 KB on first load
- [ ] LCP under 2 seconds (PageSpeed Insights)
- [ ] No tracking scripts beyond Plausible / Fathom (avoid Google Analytics — it adds weight and signals a low-effort build)
- [ ] One French version OR one English version, not both half-finished. Pick one and ship.
- [ ] Domain points to the site (not a Vercel subdomain in the wild — looks unfinished)
