import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {NAV} from '../data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-paper/85 shadow-[0_1px_0_rgba(38,32,30,0.08)] backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          aria-label="JAH Creative Co — home"
          className={`transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <span className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-medium tracking-[0.12em]">JAH</span>
            <span className="eyebrow !tracking-[0.36em]">Creative Co.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.slice(0, -1).map((n) => (
            <a key={n.href} href={n.href} className="eyebrow !text-ink transition-colors hover:!text-blush-deep">
              {n.label}
            </a>
          ))}
          <a
            href="#enquire"
            className="rounded-full border border-ink/80 px-6 py-2.5 text-[0.72rem] uppercase tracking-[0.28em] transition-colors hover:bg-ink hover:text-paper"
          >
            Enquire
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X strokeWidth={1.25} /> : <Menu strokeWidth={1.25} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col items-center gap-6 pb-10 pt-4 md:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-serif text-2xl">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
