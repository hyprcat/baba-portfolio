# Baba Subhani Syed — Portfolio

Personal portfolio site for Baba Subhani Syed — ESSEC Grande École, Food Business Challenges Chair, marketing & product candidate. Built on Astro 5 + Tailwind v4 with the Midsphere design system, statically rendered, deploy-ready for DigitalOcean App Platform.

## One-click deploy

[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/USER/baba-portifolio/tree/main)

> Replace `USER` in the link above with your GitHub username **after** pushing this repo. The button uses [`.do/app.yaml`](./.do/app.yaml) for the build spec — `npm ci && npm run build`, output to `dist/`, free static-site tier.

## Develop locally

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output to ./dist
npm run preview      # serve the production build locally
```

Node >=20 required. `npm run build` is the gate — it fails on Astro / TS errors.

## Stack

- **Astro 5.x** — `output: 'static'`, server-rendered at build time, zero client-side JS by default.
- **Tailwind v4** — via `@tailwindcss/vite`. Tokens live in `src/styles/global.css` inside `@theme { ... }`.
- **Fonts** — Google Sans Flex (body), Fuzzy Bubbles (highlighter), JetBrains Mono (mono). Loaded from Google Fonts CDN with `display=swap`; swap to self-hosted woff2 in `public/fonts/` before launch for the LCP win.
- **Design system** — see [`DESIGN.md`](./DESIGN.md). Coding standards (perf budget, a11y, SEO/GEO) live in [`docs/CODING_STANDARDS.md`](./docs/CODING_STANDARDS.md).

## Repo layout

```
content/                 # the prose source (markdown — read by humans, not imported)
src/
  components/
    global/              # Navbar, Footer, SEOHead
    sections/            # Hero, About, CaseAllianz, ... — page-level chunks
    ui/                  # Button, Card, Chip, doodles
  layouts/               # BaseLayout, PageLayout
  pages/                 # index.astro
  styles/global.css      # design tokens + component utilities
  utils/seo.ts           # JSON-LD schema generators
public/
  fonts/                 # self-hosted woff2 (TODO before launch)
  cv.pdf                 # downloadable CV (drop the latest tailored version here)
.do/app.yaml             # DigitalOcean App Platform spec
DESIGN.md                # design system spec
docs/CODING_STANDARDS.md # perf, a11y, SEO/GEO rules
```

The markdown in `content/` is **the source of truth for copy** — when prose changes, update the file in `content/` first, then mirror it into the matching `src/components/sections/*.astro`. Keeps recruiters' eyes (the markdown) and the rendered site (Astro) on the same page.

## Audience

This site is built to be skimmed by a French CPG / beauty / luxury / consulting recruiter in **2 minutes**. Every section answers a recruiter question:

## Audience

This site is built to be skimmed by a French CPG / beauty / luxury / consulting recruiter in **2 minutes**. Every section answers a recruiter question:
- Who is he? → hero
- What does he want? → about / pivot
- Can he do the work? → 3 case studies, all measurable
- Does he know the food industry? → ESSEC Food Chair section
- What tools? → skills matrix
- How do I reach him? → contact

## Content files

The numbered files in `content/` are the editable prose source. Each one maps to a section component:

| Markdown | Section component | Word count |
|---|---|---|
| `content/00-meta.md` | `src/components/global/SEOHead.astro` (head, OG, JSON-LD) | — |
| `content/01-hero.md` | `Hero.astro` | ~120 |
| `content/02-about.md` | `About.astro` | ~280 |
| `content/03-case-allianz-40-countries.md` | `CaseAllianz.astro` | ~520 |
| `content/04-case-srikanth-turnaround.md` | `CaseSrikanth.astro` | ~540 |
| `content/05-case-impact-brand-strategy.md` | `CaseImpact.astro` | ~360 |
| `content/06-essec-food-chair.md` | `WhyFood.astro` | ~380 |
| `content/07-skills-tools.md` | `Toolkit.astro` | ~220 |
| `content/08-contact.md` | `Contact.astro` | ~140 |
| `content/09-cv-summary.md` | `CVSummary.astro` | ~280 |
| `content/10-page-order-and-flow.md` | (informs `src/pages/index.astro` ordering) | — |

## Domain suggestions

- `babasubhanisyed.com` (matches LinkedIn handle)
- `babasyed.com`
- `basyed.fr` (French TLD signals Paris availability)
- `babasubhani.com`

Pick whichever's free; consistency with the LinkedIn handle is the cleanest.

## Brand direction (notes for whoever builds)

- **Type:** Inter or DM Sans for body, Space Grotesk or Söhne for headlines (matches `templates/cv-template.html` font choices in the career-ops repo for visual consistency between PDF CV and site).
- **Palette:** off-white (`#FAFAF7`), charcoal (`#1A1A1A`), one accent — recommend **deep emerald** (`#0A4D3C`) or **dusty terracotta** (`#B8593E`). Avoid blue (every consultant has a blue site).
- **Layout:** single-column, mobile-first, big margins, no sidebar. Recruiters scan on phones.
- **No carousels.** Recruiters don't click through; everything visible inline.
- **Photo:** one professional B&W headshot in the hero. Smiling, simple background, eye-level. If no photo yet, ship without — empty hero ≥ stock photo.
- **Case studies:** STAR+R format on each (Situation, Task, Action, Result, Reflection). The result is the headline metric, big and centered.
- **No clichés.** No "Passionate about innovation." No "Results-oriented." No "Synergies."

## What NOT to put on the site

- Phone number (LinkedIn DM + email is enough — phone invites cold sales)
- Salary expectations
- Anything from the career-ops `reports/` folder (those are internal evaluations, not for public)
- Photos of family / dog / hobbies (recruiter site, not personal blog)
- Quote of the day or "favorite books" (unless tied to a case study)

## What TO put

- One downloadable CV PDF (link to it from contact section)
- LinkedIn link, prominently
- ESSEC Food Chair explicit mention (it's the differentiator vs every other ESSEC MiM)
- Two languages: most copy in English, with a small "FR" toggle linking to a French version if you have time. Otherwise English only is fine — recruiters in Paris food/CPG read English daily.

## Update cadence

Once shipped, update only when:
- He has a new role / case study (e.g., once the stage de fin d'études starts, add a "currently at X" line)
- He gets a published case study or article (add to `proof_points` section)

Don't iterate on copy weekly — ship and forget for 6 months.
