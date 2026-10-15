import {Check} from 'lucide-react';
import {INSIDE, OCCASIONS, type Pastel} from '../data';
import {BrushStroke, PaintReveal, pastel, Wash} from './Art';
import Reveal from './Reveal';

const DOTS: Pastel[] = ['blush', 'lilac', 'sky', 'sage', 'butter'];

export default function Occasions() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <Wash colour="blush" className="-right-24 top-10 h-96 w-96 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-20 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Everything in one kit</p>
          <PaintReveal delay={0.15}>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Every item has a purpose. <em className="text-butter-deep">Every detail</em> is considered.
            </h2>
          </PaintReveal>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            The best creative experiences are the ones you can enjoy without the stress of preparing everything
            yourself — convenient, enjoyable and as mess-manageable as possible.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INSIDE.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-sage-deep" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-[2rem] border border-ink/10 bg-paper-light p-10 md:p-14">
            <BrushStroke colour="butter" variant={1} className="absolute -top-6 left-8 h-12 w-56" />
            <p className="eyebrow relative">Made for</p>
            <ul className="mt-8 space-y-5">
              {OCCASIONS.map((o, i) => (
                <li key={o} className="flex items-center gap-5 font-serif text-2xl md:text-3xl">
                  <span className="h-3 w-3 shrink-0 rounded-full" style={{background: pastel(DOTS[i % DOTS.length])}} />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
