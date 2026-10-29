import {NAV, SITE, SOCIALS} from '../data';
import {Dashes} from './Art';
import SocialIcon from './SocialIcon';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 pb-12 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <img src="/jah-logo.png" alt="JAH Creative Co" className="h-36 w-auto" />
        <p className="mt-6 flex items-center gap-3 tracking-[0.14em] text-ink-soft">
          <Dashes className="hidden shrink-0 sm:block" />
          {SITE.tagline}
          <Dashes flip className="hidden shrink-0 sm:block" />
        </p>
        <nav className="mt-10 flex flex-wrap justify-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="eyebrow transition-colors hover:!text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="mt-10 flex gap-3">
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
        <p className="mt-8 flex flex-col items-center gap-2 text-ink-soft sm:flex-row sm:gap-6">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            WhatsApp {SITE.phone}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-blush-deep sm:block" />
          <span className="select-all">{SITE.email}</span>
        </p>
        <p className="mt-14 text-sm text-ink-faint">
          © {new Date().getFullYear()} {SITE.name}. One beautiful creation at a time.
        </p>
      </div>
    </footer>
  );
}
