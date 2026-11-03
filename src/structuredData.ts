// schema.org JSON-LD built from the site data, so search markup never drifts from what the page shows.
import {COLLECTIONS, type Box} from './collections';
import {SITE, SOCIALS} from './data';
import {SITE_URL, type Faq} from './seo';

const ORG_ID = `${SITE_URL}/#organization`;

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  slogan: 'Where faith, creativity and imagination come together',
  description: 'Thoughtfully curated art and casting stone kits for kids and adults in South Africa.',
  email: SITE.email,
  telephone: `+${SITE.whatsapp}`,
  areaServed: {'@type': 'Country', name: 'South Africa'},
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: `+${SITE.whatsapp}`,
    email: SITE.email,
    availableLanguage: 'English',
  },
  sameAs: SOCIALS.map((s) => s.href),
};

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE.name,
  url: `${SITE_URL}/`,
  inLanguage: 'en-ZA',
  publisher: {'@id': ORG_ID},
};

const offer = (box: Box) => ({
  '@type': 'Offer',
  availability: 'https://schema.org/InStock',
  itemOffered: {
    '@type': 'Product',
    name: box.name,
    description: `${box.tagline}. ${box.body}`,
    brand: {'@id': ORG_ID},
  },
});

export const catalog = {
  '@type': 'OfferCatalog',
  '@id': `${SITE_URL}/#catalog`,
  name: 'JAH Creative Co collections',
  itemListElement: COLLECTIONS.filter((c) => !c.comingSoon).map((c) => ({
    '@type': 'OfferCatalog',
    name: c.name,
    description: c.tagline,
    itemListElement: c.boxes.map(offer),
  })),
};

export const faqPage = (faqs: Faq[], url: string) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {'@type': 'Answer', text: f.a},
  })),
});

export const breadcrumbs = (name: string, url: string) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    {'@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/`},
    {'@type': 'ListItem', position: 2, name, item: url},
  ],
});

export const boxCatalog = (name: string, boxes: Box[]) => ({
  '@type': 'OfferCatalog',
  name,
  itemListElement: boxes.map(offer),
});

export const graph = (...nodes: object[]) => JSON.stringify({'@context': 'https://schema.org', '@graph': nodes});
