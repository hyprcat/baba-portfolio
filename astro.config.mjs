import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output: portfolio has no dynamic routes, no auth, no forms.
// DESIGN.md prescribes server output for Midsphere; we deviate here for
// cheaper hosting (DO Static Sites is free) and faster TTFB.
export default defineConfig({
  output: 'static',
  site: 'https://babasubhanisyed.com',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    // Inline all stylesheets directly into <head>. Saves a render-blocking
    // round trip on this single-page site. CSS is small after Tailwind's
    // tree-shake (~14KB + ~24KB raw).
    inlineStylesheets: 'always',
  },
  // Prefetch is disabled. This is a single-page portfolio whose only links
  // are in-page anchors, mailto, and external (LinkedIn). Astro's prefetch
  // runtime would be unused JS shipped to every visitor. Removing it drops
  // the only client-side script bundle and zeroes the JS payload.
  prefetch: false,
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Belt-and-braces: ensure any remaining JS/CSS Vite emits is minified.
      // Astro defaults to esbuild minify; this makes it explicit and fails
      // loudly if a future plugin disables it.
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },
  },
});
