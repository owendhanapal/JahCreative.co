import {NAV, SITE} from '../data';
import {Dashes} from './Art';

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
        <p className="mt-14 text-sm text-ink-faint">
          © {new Date().getFullYear()} {SITE.name}. One beautiful creation at a time.
        </p>
      </div>
    </footer>
  );
}
