import About from './components/About';
import Different from './components/Different';
import Enquire from './components/Enquire';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Kits from './components/Kits';
import Learning from './components/Learning';
import Occasions from './components/Occasions';
import OurPromise from './components/OurPromise';

export default function App() {
  return (
    <div className="paper-grain">
      <Header />
      <main>
        <Hero />
        <About />
        <Kits />
        <Learning />
        <Different />
        <Occasions />
        <OurPromise />
        <Enquire />
      </main>
      <Footer />
    </div>
  );
}
