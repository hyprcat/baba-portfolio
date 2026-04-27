# Baba Subhani Syed — Portfolio

A single-page personal portfolio for **Baba Subhani Syed** (ESSEC Grande École, Food Business Challenges Chair) — built for a recruiter to skim in two minutes on a phone. Astro 5 + Tailwind v4, statically rendered, **zero client-side JS**.

[![Built with Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)
[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/hyprcat/baba-portfolio/tree/main)

---

## Contents

- [Quick start](#quick-start)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Content workflow](#content-workflow)
- [Section map](#section-map)
- [Deployment](#deployment)
- [Use as a template](#use-as-a-template)
- [Design philosophy](#design-philosophy)
- [License](#license)
- [Credits](#credits)

---

## Quick start

Requires Node `>= 20`.

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output to ./dist
npm run preview      # serve the production build locally
npm run check        # astro check (TypeScript + Astro diagnostics)
```

`npm run build` is the gate — it fails on Astro/TypeScript errors. Treat green as the merge bar.

---

## Tech stack

- **[Astro 5](https://astro.build)** — `output: 'static'`, server-rendered at build time, zero client-side JS, prefetch disabled, all CSS inlined into `<head>`.
- **[Tailwind v4](https://tailwindcss.com)** via `@tailwindcss/vite`. Design tokens live in `src/styles/global.css` inside `@theme { ... }`.
- **TypeScript 5** with `astro check` for diagnostics.
- **Fonts** — Google Sans Flex (body), Fuzzy Bubbles (highlighter), JetBrains Mono (mono). Loaded from Google Fonts CDN with `display=swap`. For LCP-critical deploys, self-host woff2 files in `public/fonts/`.
- **Design system** — see [`DESIGN.md`](./DESIGN.md). Performance, a11y, and SEO/GEO rules in [`docs/CODING_STANDARDS.md`](./docs/CODING_STANDARDS.md).

---

## Project structure

```
content/                      Editable prose source (markdown — see Content workflow)
src/
  components/
    global/                   Navbar, Footer, SEOHead
    sections/                 Hero, About, CaseAllianz, … — page-level chunks
    ui/                       Button, Card, Chip, doodles
  layouts/                    BaseLayout, PageLayout
  pages/
    index.astro               The single page
    404.astro                 Catchall 404
  styles/global.css           Design tokens + component utilities
  utils/seo.ts                JSON-LD schema generators
public/
  fonts/                      Self-hosted woff2 (optional — see Tech stack)
  Baba-Subhani-Syed-CV.pdf    Downloadable CV
.do/
  app.yaml                    DO App Platform spec (for `doctl`)
  deploy.template.yaml        DO App Platform spec (for the deploy button)
DESIGN.md                     Visual + voice spec
docs/CODING_STANDARDS.md      Engineering rules
```

---

## Content workflow

The markdown files in `content/` are **the source of truth for copy**. Editing flow:

1. Edit the relevant `content/NN-*.md` file.
2. Mirror the change into the matching `src/components/sections/*.astro`.
3. `npm run build` to verify.

This split keeps prose reviewable by non-developers (the markdown) while the rendered site (Astro) stays the deployable artifact.

---

## Section map

| Markdown source | Section component | Word count |
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
| `content/10-page-order-and-flow.md` | informs `src/pages/index.astro` ordering | — |

---

## Deployment

The site builds to plain static files in `dist/`. It runs anywhere static — DO App Platform, Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3+CloudFront, Nginx.

### DigitalOcean App Platform (one-click)

Click the **Deploy to DigitalOcean** badge at the top of this README. The button reads [`.do/deploy.template.yaml`](./.do/deploy.template.yaml) and pre-fills:

- **Region:** `fra` (Frankfurt) — closest EU region for European visitors.
- **Build:** `npm ci && npm run build`, output `dist/`.
- **Tier:** static site (free for the first 3 sites per DigitalOcean account).
- **Catchall:** `404.html`.

If you fork this repo, replace `hyprcat` with your GitHub username in two places:

1. The badge URL at the top of this README — `github.com/hyprcat/baba-portfolio/tree/main`.
2. `git.repo_clone_url` inside [`.do/deploy.template.yaml`](./.do/deploy.template.yaml).

### DigitalOcean App Platform (CLI)

For non-button deploys, [`.do/app.yaml`](./.do/app.yaml) is the same spec without the `spec:` wrapper, suitable for:

```bash
doctl apps create --spec .do/app.yaml
```

### Other static hosts

`npm run build` produces `dist/` — drop it on any static host. The `404.html` catchall is in the build output.

---

## Use as a template

The code is permissively licensed, but **the prose, CV, and personal identity in `content/` and `public/Baba-Subhani-Syed-CV.pdf` are not** — they're Baba's. To use this as a starting point for your own portfolio:

1. **Replace all of `content/*.md`** with your own prose. The numbered ordering and section semantics are scaffolding you can keep or rearrange.
2. **Update `src/components/sections/*.astro`** so each section reflects your new content.
3. **Replace `public/Baba-Subhani-Syed-CV.pdf`** with your own (and rename it to match — recruiters see the filename when they download).
4. **Edit `content/00-meta.md`** and `src/utils/seo.ts` for OG tags, JSON-LD, and canonical URL (`astro.config.mjs` → `site`).
5. **Swap fonts and tokens** in `src/styles/global.css` if you want a different visual identity. [`DESIGN.md`](./DESIGN.md) explains the current system.
6. **Update `.do/*.yaml`** if deploying to App Platform — change `name`, `region`, and `git.repo_clone_url`.

---

## Design philosophy

The choices in this site are deliberate; preserving them helps if you fork it:

- **One page, single column, mobile-first.** Recruiters scan on phones; sidebars and multi-page navigation cost more attention than they earn.
- **No carousels, no hidden content.** Everything visible inline. Click-throughs lose readers.
- **No client-side JS by default.** The page is HTML + inlined CSS. Anything interactive is opt-in per component.
- **Hand-drawn personality, precise typography.** A serious sans carries the prose; doodles and a marker font carry the warmth. The two surfaces stay deliberately mismatched — see [`DESIGN.md`](./DESIGN.md) for the full rationale.
- **Measurable case studies.** Each case follows STAR+R (Situation, Task, Action, Result, Reflection); the Result is the headline metric.

---

## License

[MIT](./LICENSE) for the **code**. Personal content (prose under `content/`, `public/Baba-Subhani-Syed-CV.pdf`, name, headshot) is **not** covered by the MIT grant — replace it before reusing the site.

---

## Credits

- Built on [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
- Visual system adapted from the **Midsphere** design system (see [`DESIGN.md`](./DESIGN.md)).
- Typography: [Google Sans Flex](https://fonts.google.com/specimen/Google+Sans+Code), [Fuzzy Bubbles](https://fonts.google.com/specimen/Fuzzy+Bubbles), [JetBrains Mono](https://www.jetbrains.com/lp/mono/).
