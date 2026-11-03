// Build-time rendering: the home page, keyword landing pages and 404 become real HTML before any JavaScript runs.
import {StrictMode, type ReactNode} from 'react';
import {renderToString} from 'react-dom/server';
import App from './App.tsx';
import LandingPage from './landing/LandingPage.tsx';
import NotFound from './landing/NotFound.tsx';
import {LANDING_PAGES} from './seo.ts';

export {LANDING_PAGES, SITE_URL} from './seo.ts';

const html = (node: ReactNode) => renderToString(<StrictMode>{node}</StrictMode>);

export const render = () => html(<App />);
export const renderNotFound = () => html(<NotFound />);
export function renderLanding(slug: string) {
  return html(<LandingPage page={LANDING_PAGES.find((p) => p.slug === slug)!} />);
}
