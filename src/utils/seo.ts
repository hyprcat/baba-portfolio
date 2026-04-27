/**
 * SEO + JSON-LD helpers for the Baba Subhani Syed portfolio.
 *
 * Site constants and schema.org generators. Schemas return plain JS objects so
 * the layout can JSON.stringify them into a <script type="application/ld+json">
 * once, in one place. Do not stringify inside this file.
 *
 * Source of truth for Person schema values: content/00-meta.md.
 */

// ---------- Site constants ----------

export const SITE_URL = 'https://babasubhanisyed.com';
export const SITE_NAME = 'Baba Subhani Syed';
export const DEFAULT_TITLE = 'Baba Subhani Syed · Marketing & Product, Paris';
export const DEFAULT_DESCRIPTION =
  'ESSEC Grande École student and Food Business Challenges Chair member, building toward marketing and product roles in food, beauty, and luxury brands.';
export const DEFAULT_OG_IMAGE = '/og.jpg';
export const LOCALE = 'en_US';

// ---------- Types ----------

export interface PostalAddress {
  '@type': 'PostalAddress';
  addressLocality: string;
  addressCountry: string;
}

export interface EducationalOrganization {
  '@type': 'EducationalOrganization';
  name: string;
}

export interface Organization {
  '@type': 'Organization';
  name: string;
  url?: string;
}

export interface PersonSchema {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  givenName: string;
  familyName: string;
  url: string;
  jobTitle: string;
  alumniOf: EducationalOrganization[];
  address: PostalAddress;
  sameAs: string[];
  knowsLanguage: string[];
  memberOf: Organization;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbListItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbListItem[];
}

export interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  inLanguage: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface FaqSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: FaqQuestion[];
}

// ---------- Schema generators ----------

/**
 * Person schema. Values copied verbatim from content/00-meta.md.
 */
export function personSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Baba Subhani Syed',
    givenName: 'Baba Subhani',
    familyName: 'Syed',
    url: 'https://babasubhanisyed.com',
    jobTitle: 'Master in Management student, ESSEC Grande École',
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'ESSEC Business School',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Osmania University',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    sameAs: ['https://www.linkedin.com/in/babasubhanisyed'],
    knowsLanguage: ['English', 'French'],
    memberOf: {
      '@type': 'Organization',
      name: 'ESSEC Food Business Challenges Chair',
      url: 'https://foodchair.essec.edu',
    },
  };
}

/**
 * BreadcrumbList. Pass an ordered array of { name, url } items.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * WebSite schema. Marks the site as bilingual (en + fr) for LLM and search
 * surfaces, even though the current build is English first.
 */
export function websiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['en', 'fr'],
  };
}

/**
 * FAQPage schema, per docs/CODING_STANDARDS.md §5 GEO. Question wording should
 * match how a user phrases the prompt, not internal jargon.
 */
export function faqSchema(items: FaqItem[]): FaqSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
