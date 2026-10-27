import {Bell} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useState} from 'react';
import {COLLECTIONS, type Collection} from '../collections';
import {enquireAbout} from '../enquiry';
import {BrushStroke, HeartDoodle, pastelDeep, Wash} from './Art';
import BoxCard from './BoxCard';

function ComingSoon({collection}: {collection: Collection}) {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-ink/10 bg-paper px-8 py-20 text-center md:px-16 md:py-28">
      <Wash colour="sage" className="-left-24 -top-24 h-80 w-80 opacity-60" />
      <Wash colour="sky" className="-bottom-24 -right-24 h-80 w-80 opacity-50" />
      <HeartDoodle className="absolute right-8 top-8 w-14 opacity-70" />

      <div className="relative">
        <div className="relative mx-auto w-fit">
          <BrushStroke colour="butter" variant={1} className="absolute -inset-x-10 -inset-y-3" />
          <p className="eyebrow relative !text-ink">Coming soon</p>
        </div>
        <h4 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">{collection.name}</h4>
        <p className="mt-3 font-serif text-2xl italic text-sage-deep">{collection.tagline}</p>
        {collection.intro.map((p) => (
          <p key={p} className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
        <button
          onClick={() => enquireAbout(`${collection.name} (coming soon)`)}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-paper transition-colors hover:bg-ink-soft"
        >
          <Bell className="h-3.5 w-3.5" strokeWidth={1.5} />
          Let me know
        </button>
      </div>
    </div>
  );
}

export default function Collections() {
  const [activeId, setActiveId] = useState(COLLECTIONS[0].id);
  const active = COLLECTIONS.find((c) => c.id === activeId)!;

  return (
    <div className="mt-16">
      <div
        role="tablist"
        aria-label="Collections"
        className="mx-auto grid w-full grid-cols-3 gap-1 rounded-[1.75rem] border border-ink/10 bg-paper p-1.5 md:flex md:w-fit md:rounded-full"
      >
        {COLLECTIONS.map((c) => {
          const selected = c.id === activeId;
          return (
            <button
              key={c.id}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`panel-${c.id}`}
              onClick={() => setActiveId(c.id)}
              className="relative rounded-[1.4rem] px-2 py-3 text-center md:rounded-full md:px-8 md:text-left"
            >
              {selected && (
                <motion.span
                  layoutId="collection-pill"
                  className="absolute inset-0 rounded-[1.4rem] bg-ink md:rounded-full"
                  transition={{type: 'spring', stiffness: 380, damping: 34}}
                />
              )}
              <span className="relative block">
                <span
                  className={`block font-serif text-base leading-tight transition-colors md:text-xl ${
                    selected ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {c.tab}
                </span>
                <span
                  className={`mt-1 block text-[0.58rem] uppercase tracking-[0.2em] transition-colors md:mt-0 md:text-[0.62rem] md:tracking-[0.24em] ${
                    selected ? 'text-paper/70' : 'text-ink-faint'
                  }`}
                >
                  {c.audience}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -8}}
          transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
          className="mt-16"
        >
          {active.comingSoon ? (
            <ComingSoon collection={active} />
          ) : (
            <>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow" style={{color: pastelDeep(active.colour)}}>
                  {active.audience}
                </p>
                <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{active.name}</h3>
                <p className="mt-3 font-serif text-2xl italic text-ink-soft">{active.tagline}</p>
                {active.intro.map((p) => (
                  <p key={p} className="mt-6 text-lg leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
                {active.boxes.map((box, i) => (
                  <BoxCard key={box.name} box={box} index={i} />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
