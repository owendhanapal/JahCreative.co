// Runs after `vite build`: renders the home page into dist/index.html, writes the static keyword
// landing pages, a branded 404 and the sitemap.
import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const {render, renderLanding, renderNotFound, LANDING_PAGES, SITE_URL} = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Home page
const indexPath = path.join(dist, 'index.html');
const indexHtml = await readFile(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!indexHtml.includes(marker)) throw new Error('prerender: #root placeholder not found in dist/index.html');
await writeFile(indexPath, indexHtml.replace(marker, `<div id="root">${render()}</div>`));

// Shared <head> for the JavaScript-free pages, reusing the built stylesheet
const css = indexHtml.match(/<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/)?.[0];
if (!css) throw new Error('prerender: built stylesheet link not found');

const page = ({title, description, url, body, robots = 'index, follow, max-image-preview:large'}) => `<!doctype html>
<html lang="en-ZA">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    ${url ? `<link rel="canonical" href="${url}" />` : ''}
    <meta name="robots" content="${robots}" />
    <meta name="theme-color" content="#f9f1e4" />
    <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap" />
    ${css}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="JAH Creative Co" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    ${url ? `<meta property="og:url" content="${url}" />` : ''}
    <meta property="og:image" content="${SITE_URL}/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_ZA" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    ${body}
  </body>
</html>
`;

// Keyword landing pages
for (const p of LANDING_PAGES) {
  const url = `${SITE_URL}/${p.slug}/`;
  await mkdir(path.join(dist, p.slug), {recursive: true});
  await writeFile(
    path.join(dist, p.slug, 'index.html'),
    page({title: p.title, description: p.description, url, body: renderLanding(p.slug)}),
  );
}

// 404 (Netlify serves dist/404.html for unknown paths)
await writeFile(
  path.join(dist, '404.html'),
  page({
    title: 'Page not found | JAH Creative Co',
    description: 'This page does not exist. Explore JAH Creative Co art and casting stone kits.',
    robots: 'noindex',
    body: renderNotFound(),
  }),
);

// Sitemap
const today = new Date().toISOString().slice(0, 10);
const urls = [
  {loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly'},
  ...LANDING_PAGES.map((p) => ({loc: `${SITE_URL}/${p.slug}/`, priority: '0.8', changefreq: 'monthly'})),
];
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`,
);

await rm(ssrDir, {recursive: true, force: true});
console.log(`prerender: home, ${LANDING_PAGES.length} landing pages, 404 and sitemap written`);
