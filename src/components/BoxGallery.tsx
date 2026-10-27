import {X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useState} from 'react';
import type {Photo} from '../collections';
import {BrushStroke} from './Art';

const TILTS = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]'];

export default function BoxGallery({photos}: {photos: Photo[]}) {
  const [open, setOpen] = useState<Photo | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="mt-24">
      <div className="text-center">
        <p className="eyebrow">A peek inside</p>
        <h4 className="mt-4 font-serif text-3xl md:text-4xl">
          Unboxed, <em className="text-blush-deep">ready to create</em>
        </h4>
      </div>

      <div
        className={`mx-auto mt-12 grid gap-10 md:gap-12 ${
          photos.length > 1 ? 'max-w-5xl md:grid-cols-2' : 'max-w-2xl'
        }`}
      >
        {photos.map((p, i) => (
          <figure key={p.src} className="group relative">
            <BrushStroke
              colour={i % 2 ? 'lilac' : 'sage'}
              variant={i % 3}
              className="absolute -left-6 -top-5 z-10 h-10 w-44 md:-left-8"
            />
            <button
              onClick={() => setOpen(p)}
              aria-label={`View larger photo of the ${p.box}`}
              className={`block w-full bg-paper-light p-3 shadow-[0_30px_60px_-30px_rgba(38,32,30,0.35)] transition-transform duration-500 group-hover:rotate-0 md:p-4 ${TILTS[i % TILTS.length]}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="mt-6 text-center">
              <span className="font-serif text-2xl italic">{p.box}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={open.box}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm md:p-10"
          >
            <motion.figure
              initial={{scale: 0.95, y: 10}}
              animate={{scale: 1, y: 0}}
              exit={{scale: 0.97}}
              transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full max-w-5xl bg-paper-light p-3 md:p-4"
            >
              <img src={open.src} alt={open.alt} className="max-h-[80vh] w-auto object-contain" />
              <figcaption className="pt-4 text-center font-serif text-xl italic">{open.box}</figcaption>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                autoFocus
                className="absolute -right-3 -top-3 rounded-full bg-ink p-2 text-paper transition-colors hover:bg-ink-soft"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
