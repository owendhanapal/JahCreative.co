// Branded 404, rendered to dist/404.html at build time (Netlify serves it for unknown paths).
import {LANDING_PAGES} from '../seo';
import {BrushStroke, HeartDoodle, Wash} from '../components/Art';

export default function NotFound() {
  return (
    <main className="paper-grain relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <Wash colour="blush" className="-right-24 top-10 h-96 w-96 opacity-50" />
      <Wash colour="sky" className="-left-24 bottom-10 h-96 w-96 opacity-40" />
      <div className="relative max-w-xl">
        <HeartDoodle className="mx-auto w-20" />
        <p className="eyebrow mt-8">Page not found</p>
        <h1 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
          This canvas is <em className="text-blush-deep">still blank.</em>
        </h1>
        <BrushStroke colour="sage" variant={2} className="mx-auto mt-6 h-5 w-48" />
        <p className="mt-6 text-lg text-ink-soft">The page you’re looking for doesn’t exist — but plenty of creativity does.</p>
        <a
          href="/"
          className="mt-10 inline-flex rounded-full bg-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-paper transition-colors hover:bg-ink-soft"
        >
          Back to JAH Creative Co
        </a>
        <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-soft">
          {LANDING_PAGES.map((l) => (
            <a key={l.slug} href={`/${l.slug}/`} className="hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
