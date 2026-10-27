import {MEDIUMS} from '../data';
import {BrushStroke} from './Art';
import Collections from './Collections';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import StoneStudio from './StoneStudio';

export default function Kits() {
  return (
    <section id="kits" className="relative bg-paper-light px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Our collections" stroke="lilac">
          Ready-to-create kits,
          <br />
          <em className="text-lilac-deep">thoughtfully curated</em>
        </SectionHeading>

        <Collections />

        <div className="mt-32 grid items-center gap-16 md:grid-cols-12 md:gap-10">
          <div className="space-y-14 md:col-span-5">
            <Reveal>
              <p className="eyebrow">Try it yourself</p>
              <h3 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Paint it, <em className="text-sky-deep">seal it,</em> keep it.
              </h3>
            </Reveal>
            {MEDIUMS.map((m, i) => (
              <Reveal key={m.title} delay={0.1 + i * 0.15}>
                <div className="relative">
                  <BrushStroke colour={m.colour} variant={i} className="absolute -left-6 -top-3 h-14 w-56" />
                  <h4 className="relative font-serif text-3xl">
                    {m.title} <em className="text-ink-faint">kits</em>
                  </h4>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{m.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
            <StoneStudio />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
