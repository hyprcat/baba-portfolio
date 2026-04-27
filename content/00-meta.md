# SEO + meta tags

Drop this into the `<head>` of the site (or fill the equivalent fields in your CMS).

## Page title (50–60 chars)

```
Baba Subhani Syed — Marketing & Product, Paris
```

## Meta description (150–160 chars)

```
ESSEC Grande École student and Food Business Challenges Chair member, building toward marketing and product roles in food, beauty, and luxury brands.
```

## Open Graph (Facebook / LinkedIn / WhatsApp previews)

```html
<meta property="og:title" content="Baba Subhani Syed — Marketing & Product, Paris" />
<meta property="og:description" content="ESSEC Grande École student. Operations PM background. Building toward marketing in food and culinary brands." />
<meta property="og:type" content="profile" />
<meta property="og:url" content="https://babasubhanisyed.com" />
<meta property="og:image" content="https://babasubhanisyed.com/og.jpg" />
<meta property="og:locale" content="en_US" />
<meta property="profile:first_name" content="Baba Subhani" />
<meta property="profile:last_name" content="Syed" />
```

## Twitter / X card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Baba Subhani Syed — Marketing & Product, Paris" />
<meta name="twitter:description" content="ESSEC Grande École. Food Business Challenges Chair. Operations PM building toward marketing in food and culinary brands." />
<meta name="twitter:image" content="https://babasubhanisyed.com/og.jpg" />
```

## OG image specs

- **Size:** 1200×630 px
- **Content:** Big serif type "BABA SUBHANI SYED" on left, small subtitle "Marketing & Product · Paris · ESSEC Food Chair" beneath, off-white background (`#FAFAF7`), charcoal type. Optional B&W headshot on right at 60% opacity.
- **No logo, no slogans, no emoji.**

## JSON-LD (structured data — helps Google index him as a person)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Baba Subhani Syed",
  "givenName": "Baba Subhani",
  "familyName": "Syed",
  "url": "https://babasubhanisyed.com",
  "jobTitle": "Master in Management student, ESSEC Grande École",
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "ESSEC Business School"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Osmania University"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.linkedin.com/in/babasubhanisyed"
  ],
  "knowsLanguage": ["English", "French"],
  "memberOf": {
    "@type": "Organization",
    "name": "ESSEC Food Business Challenges Chair",
    "url": "https://foodchair.essec.edu"
  }
}
</script>
```

## Favicon / icons

Generate from a simple monogram "BS" on the chosen accent color background. Use [realfavicongenerator.net](https://realfavicongenerator.net) for the full set (`/favicon.ico`, `/apple-touch-icon.png`, `/icon-192.png`, `/icon-512.png`, `/manifest.webmanifest`).

## Robots / sitemap

```
User-agent: *
Allow: /
Sitemap: https://babasubhanisyed.com/sitemap.xml
```

Single-page site → sitemap can be omitted, but include if multi-page.

## Performance targets (so recruiters on bad office WiFi don't bounce)

- LCP < 1.8s
- Total page weight < 500 KB on first load
- One web font max (Inter or DM Sans), `font-display: swap`
- Hero image: WebP, lazy-loaded below the fold, 800 KB ceiling for the hero portrait
