import {ArrowRight, Check, ChevronDown} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useState} from 'react';
import type {Box} from '../collections';
import {enquireAbout} from '../enquiry';
import {pastel, pastelDeep} from './Art';

const PREVIEW = 4;

function Expand({open, children}: {open: boolean; children: React.ReactNode}) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{height: 0, opacity: 0}}
          animate={{height: 'auto', opacity: 1}}
          exit={{height: 0, opacity: 0}}
          transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BoxCard({box, index}: {box: Box; index: number}) {
  const [allItems, setAllItems] = useState(false);
  const [themesOpen, setThemesOpen] = useState(false);

  const items = box.includes ?? [];
  const shown = allItems ? items : items.slice(0, PREVIEW);
  const hidden = items.length - PREVIEW;
  const deep = pastelDeep(box.colour);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-paper p-8 md:p-10">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-70 transition-transform duration-700 group-hover:scale-125"
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

      <h4 className="relative mt-5 font-serif text-3xl leading-tight md:text-4xl">{box.name}</h4>
      <p className="relative mt-2 font-serif text-xl italic text-ink-soft">{box.tagline}</p>
      <p className="relative mt-5 leading-relaxed text-ink-soft">{box.body}</p>

      {items.length > 0 && (
        <div className="relative mt-8 border-t border-ink/10 pt-6">
          <p className="eyebrow">What’s included</p>
          <ul className="mt-4 space-y-2.5">
            {shown.map((item) => (
              <li key={item} className="flex gap-3 text-[0.95rem] leading-snug">
                <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} style={{color: deep}} />
                {item}
              </li>
            ))}
          </ul>
          {hidden > 0 && (
            <button
              onClick={() => setAllItems((o) => !o)}
              aria-expanded={allItems}
              className="mt-4 text-sm underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
            >
              {allItems ? 'Show less' : `+ ${hidden} more`}
            </button>
          )}
        </div>
      )}

      {box.themes && (
        <div className="relative mt-6 border-t border-ink/10 pt-6">
          <button
            onClick={() => setThemesOpen((o) => !o)}
            aria-expanded={themesOpen}
            className="flex w-full items-center justify-between"
          >
            <span className="eyebrow">Choose your favourite theme</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${themesOpen ? 'rotate-180' : ''}`}
              strokeWidth={1.5}
            />
          </button>
          <Expand open={themesOpen}>
            <div className="space-y-5 pt-5">
              {box.themes.map((group) => (
                <div key={group.label}>
                  <p className="font-serif text-lg italic text-ink-soft">{group.label}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.options.map((o) => (
                      <li key={o} className="rounded-full border border-ink/15 bg-paper-light/60 px-3.5 py-1 text-sm">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Expand>
        </div>
      )}

      {box.notes && (
        <div className="relative mt-6 space-y-1">
          {box.notes.map((n) => (
            <p key={n} className="text-sm italic text-ink-soft">
              {n}
            </p>
          ))}
        </div>
      )}

      <button
        onClick={() => enquireAbout(box.name)}
        className="relative mt-auto inline-flex items-center gap-3 self-start pt-8 text-[0.72rem] uppercase tracking-[0.26em] transition-colors hover:text-blush-deep"
      >
        Enquire about this box
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
      </button>
    </article>
  );
}
