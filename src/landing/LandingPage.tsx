// Static keyword landing page, rendered to HTML at build time (no client JavaScript).
import {Check} from 'lucide-react';
import {COLLECTIONS, type Box} from '../collections';
import {SITE, SOCIALS} from '../data';
import {LANDING_PAGES, SITE_URL, faqsById, type LandingPage as Page} from '../seo';
import {boxCatalog, breadcrumbs, faqPage, graph, organization} from '../structuredData';
import {BrushStroke, Dashes, pastel, pastelDeep, Wash} from '../components/Art';
import {FaqList} from '../components/Faq';
import JsonLd from '../components/JsonLd';
import SocialIcon from '../components/SocialIcon';

const ALL_BOXES = COLLECTIONS.flatMap((c) => c.boxes);
const findBox = (name: string) => ALL_BOXES.find((b) => b.name === name)!;
const waLink = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

const btn =
  'inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.72rem] uppercase tracking-[0.26em] transition-colors';

function StaticBox({box, index}: {box: Box; index: number}) {
  const deep = pastelDeep(box.colour);
  return (
    <article className="relative flex flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-paper p-8 md:p-10">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-70"
        style={{background: `radial-gradient(closest-side, ${pastel(box.colour)}, transparent)`}}
      />
      <div className="relative flex items-baseline justify-between gap-4">
        {box.tag && (
          <p className="eyebrow" style={{color: deep}}>
            {box.tag}
          </p>
        )}
        <span className="font-serif text-lg italic text-ink-faint">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h2 className="relative mt-5 font-serif text-3xl leading-tight md:text-4xl">{box.name}</h2>
      <p className="relative mt-2 font-serif text-xl italic text-ink-soft">{box.tagline}</p>
      <p className="relative mt-5 leading-relaxed text-ink-soft">{box.body}</p>

      {box.includes && (
        <div className="relative mt-8 border-t border-ink/10 pt-6">
          <h3 className="eyebrow">What’s included</h3>
          <ul className="mt-4 space-y-2.5">
            {box.includes.map((item) => (
              <li key={item} className="flex gap-3 text-[0.95rem] leading-snug">
                <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} style={{color: deep}} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {box.themes && (
        <div className="relative mt-6 space-y-4 border-t border-ink/10 pt-6">
          <h3 className="eyebrow">Choose your favourite theme</h3>
          {box.themes.map((g) => (
            <div key={g.label}>
              <p className="font-serif text-lg italic text-ink-soft">{g.label}</p>
              <p className="mt-1 text-[0.95rem]">{g.options.join(' · ')}</p>
            </div>
          ))}
        </div>
      )}

      {box.notes?.map((n) => (
        <p key={n} className="relative mt-6 text-sm italic text-ink-soft">
          {n}
        </p>
      ))}

      <a
        href={waLink(`Hi JAH Creative Co, I’m interested in the ${box.name}.`)}
        className="relative mt-auto inline-flex items-center gap-3 self-start pt-8 text-[0.72rem] uppercase tracking-[0.26em] transition-colors hover:text-blush-deep"
      >
        <SocialIcon name="WhatsApp" className="h-4 w-4" />
        Enquire on WhatsApp
      </a>
    </article>
  );
}

export default function LandingPage({page}: {page: Page}) {
  const url = `${SITE_URL}/${page.slug}/`;
  const boxes = page.boxes.map(findBox);
  const faqs = faqsById(page.faqs);
  const others = LANDING_PAGES.filter((p) => p.slug !== page.slug);
  const json = graph(organization, breadcrumbs(page.label, url), boxCatalog(page.h1, boxes), faqPage(faqs, url));

  return (
    <div className="paper-grain">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="/" aria-label="JAH Creative Co — home" className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-medium tracking-[0.12em]">JAH</span>
            <span className="eyebrow !tracking-[0.36em]">Creative Co.</span>
          </a>
          <a href="/#kits" className="eyebrow !text-ink transition-colors hover:!text-blush-deep">
            All collections
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <Wash colour="blush" className="-right-24 -top-10 h-96 w-96 opacity-50" />
          <Wash colour="sage" className="-left-28 bottom-0 h-96 w-96 opacity-40" />
          <div className="relative mx-auto max-w-4xl text-center">
            <nav aria-label="Breadcrumb" className="eyebrow">
              <a href="/" className="hover:!text-ink">
                Home
              </a>
              <span className="mx-3">/</span>
              <span>{page.label}</span>
            </nav>
            <p className="eyebrow mt-10 !text-blush-deep">{page.eyebrow}</p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] md:text-6xl">{page.h1}</h1>
            <BrushStroke colour="lilac" variant={2} className="mx-auto mt-6 h-5 w-48" />
            {page.intro.map((p) => (
              <p key={p} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={waLink(`Hi JAH Creative Co, I’d like to enquire about your ${page.label.toLowerCase()}.`)}
                className={`${btn} bg-ink text-paper hover:bg-ink-soft`}
              >
                <SocialIcon name="WhatsApp" className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
              <a href="/#kits" className={`${btn} border border-ink/30 hover:border-ink`}>
                See every collection
              </a>
            </div>
          </div>
        </section>

        <section className="bg-paper-light px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:gap-8">
            {boxes.map((b, i) => (
              <StaticBox key={b.name} box={b} index={i} />
            ))}
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow text-center">Good to know</p>
            <h2 className="mt-5 text-center font-serif text-4xl md:text-5xl">
              Questions, <em className="text-butter-deep">answered</em>
            </h2>
            <div className="mt-12">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </section>

        <section className="bg-paper-deep px-6 py-20 text-center md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Let’s create something <em className="text-blush-deep">beautiful.</em>
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              WhatsApp us on {SITE.phone} or email <span className="select-all text-ink">{SITE.email}</span>
            </p>
            <a
              href={waLink('Hi JAH Creative Co, I’d like to enquire about a kit.')}
              className={`${btn} mt-10 bg-ink text-paper hover:bg-ink-soft`}
            >
              <SocialIcon name="WhatsApp" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 px-6 pb-12 pt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <img src="/jah-logo.png" alt="JAH Creative Co logo" width={687} height={977} loading="lazy" className="h-28 w-auto" />
          <p className="mt-6 flex items-center gap-3 tracking-[0.14em] text-ink-soft">
            <Dashes className="hidden shrink-0 sm:block" />
            {SITE.tagline}
            <Dashes flip className="hidden shrink-0 sm:block" />
          </p>
          <nav aria-label="More from JAH Creative Co" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/" className="text-ink-soft hover:text-ink">
              Home
            </a>
            {others.map((o) => (
              <a key={o.slug} href={`/${o.slug}/`} className="text-ink-soft hover:text-ink">
                {o.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`JAH Creative Co on ${s.name}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink-faint">
            © {new Date().getFullYear()} {SITE.name}. One beautiful creation at a time.
          </p>
        </div>
      </footer>

      <JsonLd json={json} />
    </div>
  );
}
