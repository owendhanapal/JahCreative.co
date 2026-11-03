import {MotionConfig} from 'motion/react';
import About from './components/About';
import Different from './components/Different';
import Enquire from './components/Enquire';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Kits from './components/Kits';
import Learning from './components/Learning';
import Occasions from './components/Occasions';
import OurPromise from './components/OurPromise';
import JsonLd from './components/JsonLd';
import SurpriseCanvas from './components/SurpriseCanvas';
import {FAQS, SITE_URL} from './seo';
import {catalog, faqPage, graph, organization, website} from './structuredData';

const HOME_JSON_LD = graph(organization, website, catalog, faqPage(FAQS, `${SITE_URL}/`));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="paper-grain">
        <Header />
        <main>
          <Hero />
          <About />
          <Kits />
          <Different />
          <Learning />
          <Occasions />
          <SurpriseCanvas />
          <OurPromise />
          <Faq faqs={FAQS} />
          <Enquire />
        </main>
        <Footer />
        <JsonLd json={HOME_JSON_LD} />
      </div>
    </MotionConfig>
  );
}
