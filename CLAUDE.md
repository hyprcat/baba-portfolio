# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo summary

Single-page personal portfolio for Baba Subhani Syed — Astro 5 + Tailwind v4, statically rendered, **zero client-side JS**. The visual system, voice rules, and engineering rules are inherited from the **Midsphere** design system (see `DESIGN.md`, `docs/CODING_STANDARDS.md`); this site is a downstream consumer of those rules with one deliberate deviation (`output: 'static'`).

Node `>=20`. Package manager: npm.

## Commands

```bash
npm run dev          # astro dev — http://localhost:4321
npm run build        # static output to ./dist (this is the merge gate)
npm run preview      # serve the production build locally
npm run check        # astro check — TypeScript + Astro diagnostics
```

`npm run build` is the gate: it fails on Astro/TypeScript errors. There is no test suite, no lint config, no formatter — `astro check` + a clean build are the only quality bars.

## Architecture

### Content workflow (the most important convention)

The markdown files in `content/` are the **source of truth for prose**, but they are not consumed at build time. Editing flow is:

1. Edit `content/NN-*.md` (the prose).
2. Mirror the change into the matching `src/components/sections/*.astro` (the rendered version).
3. `npm run build` to verify.

The split keeps prose reviewable by non-developers. Never assume a markdown change has propagated — always update the section component too. Section ↔ markdown mapping is in `README.md` (Section map table).

### Page composition

- `src/pages/index.astro` is the only real page. It composes section components in narrative order: Hero → About → WhyFood → CaseAllianz → CaseSrikanth → CaseImpact → Contact.
- `src/pages/404.astro` is the catchall (referenced as `catchall_document: 404.html` in `.do/app.yaml`).
- `BaseLayout.astro` owns `<html>`, `<head>`, font preload, skip link. `PageLayout.astro` wraps it with `Navbar`, `<main id="main">`, `Footer`. Index uses `PageLayout`; standalone pages without chrome would use `BaseLayout` directly.
- TypeScript path alias: `~/*` → `src/*` (defined in `tsconfig.json`). Use it in imports.

### Design tokens & styling

- All design tokens (colors, type, spacing, radii, shadows, motion) live in **`src/styles/global.css`** under `:root` and are mapped into Tailwind v4 via `@theme`.
- **In markup, use Tailwind classes** (`bg-canvas`, `text-fg-2`, `text-fg-3`). Only reach for `var(--ms-*)` inside CSS rules.
- Component utilities (`.btn`, `.btn-primary`, `.card`, `.hl`, `.hl-soft`, `.eyebrow`, `.section`, `.container-x`, `.skip-link`, etc.) are defined in `@layer components` of `global.css`. Use them directly — don't rebuild them with Tailwind utilities.
- Three font families: **Google Sans Flex** (body + headings), **Fuzzy Bubbles** (scoped to `.hl` / `.hl-soft` ONLY — never elsewhere; the marker font cheapens fast), **JetBrains Mono** (eyebrows, code).
- Self-hosted woff2 in `public/fonts/`. Two faces are preloaded — `google-sans-flex.latin.woff2` (body + headline, dominant LCP font) and `fuzzy-bubbles-400.latin.woff2` (the `.hl` marker font; preloaded so it doesn't swap mid-paint and reshape the H1, which would push the LCP element down and inflate element render delay). All other faces (latin-ext subsets, JetBrains Mono) stay swap-loaded.

### Doodle components

Hand-drawn SVGs in `src/components/ui/*Doodle.astro` are **first-class components**, not inline SVG. Conventions: `stroke="#111"`, `stroke-width="1.6"`, `stroke-linecap="round"`, `fill="none"`, slight asymmetry. All decorative SVGs carry `aria-hidden="true"`. Never put readable `<text>` inside an SVG — it appears as orphan fragments to crawlers and screen readers.

### SEO

- `astro.config.mjs` sets `site: 'https://babasubhanisyed.com'` and `trailingSlash: 'never'`. Canonicals derive from this.
- `src/utils/seo.ts` exports schema generators (`personSchema`, `websiteSchema`, `breadcrumbSchema`, `faqSchema`). They return plain objects; `SEOHead.astro` is the only place that should `JSON.stringify` them into `<script type="application/ld+json">`.
- Person schema values are mirrored from `content/00-meta.md`. Update both when bio facts change.

### Build configuration (deliberate deviations)

`astro.config.mjs` deviates from default Astro in ways that matter:

- `output: 'static'` — no SSR. Deviates from Midsphere's default server output for cheaper hosting (DO Static Sites is free) and faster TTFB.
- `prefetch: false` — disables Astro's prefetch runtime. This is the only client-side JS Astro would ship; turning it off zeros the JS payload. The site is single-page with only in-page anchors and external links, so prefetch buys nothing.
- `inlineStylesheets: 'always'` — all CSS goes inline in `<head>`. Saves a render-blocking round trip; safe because Tailwind tree-shake leaves ~14KB raw CSS.
- `compressHTML: true`, esbuild minify for both JS and CSS.

Don't reintroduce client-side JS, prefetch, or external font CDN requests without a strong reason — those are load-bearing decisions for the perf budget (LCP <1.5s).

## Inherited rules from `DESIGN.md` and `docs/CODING_STANDARDS.md`

These two docs are the spec; CLAUDE.md is just a pointer. A few rules that come up often when editing this repo:

- **Banned marketing vocabulary** (don't appear anywhere in copy): `powerful · revolutionary · seamless · cutting-edge · leverage · empower · unlock · transform · magical · robust · scalable · innovative · intelligent`. Grep before claiming a section is clean.
- **One `.hl` / `.hl-soft` highlighter per paragraph**, max. The lime accent is the single accent color — there is no secondary brand color.
- **One `<h1>` per page.** Heading levels never skip.
- **Focus rings** on every interactive element: 2px solid black inner outline + 4px lime halo (or white inner on dark surfaces). Lime alone fails 3:1 — never use it as the sole focus indicator.
- **`prefers-reduced-motion`** must be honored. The 150/200ms transitions collapse to 0ms when set.
- **Performance budget.** Soft target ≤150KB JS gzipped (this site ships ~0KB), LCP <1.5s, INP <200ms.
- The case studies follow **STAR+R** (Situation, Task, Action, Result, Reflection); the Result is the headline metric.

## Deployment

Static output in `dist/` runs anywhere static. Configured for **DigitalOcean App Platform** in `.do/app.yaml` (CLI deploys via `doctl apps create --spec .do/app.yaml`) and `.do/deploy.template.yaml` (the README's Deploy button). Build command is `npm ci && npm run build`, output `dist/`, catchall `404.html`, region `fra`.

Forking note: replace `hyprcat` with the new GitHub username in **two** places — the README badge URL and `git.repo_clone_url` in `.do/deploy.template.yaml`.

Cache headers caveat: DO App Platform hardcodes static-site responses to `max-age=10` (browser) / `s-maxage=86400` (CDN edge) and provides no override (open feature request, no movement since 2022). This is what trips Lighthouse's "Use efficient cache lifetimes" audit on `/fonts/*`. `public/_headers` encodes the right rules in the Netlify / Cloudflare Pages convention so a host migration is the only real fix; don't waste time looking for an app-spec field.
