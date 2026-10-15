import {KITS, MEDIUMS} from '../data';
import {BrushStroke, pastel, pastelDeep} from './Art';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import StoneStudio from './StoneStudio';

export default function Kits() {
  return (
    <section id="kits" className="relative bg-paper-light px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The collection" stroke="lilac">
          Ready-to-create kits,
          <br />
          <em className="text-lilac-deep">thoughtfully curated</em>
        </SectionHeading>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {KITS.map((k, i) => (
            <Reveal key={k.title} delay={i * 0.15}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-ink/10 bg-paper p-10 md:p-14">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-60 blur-2xl transition-transform duration-700 group-hover:scale-125"
                  style={{background: pastel(k.colour)}}
                />
                <div className="relative">
                  <p className="eyebrow" style={{color: pastelDeep(k.colour)}}>
                    {k.kicker}
                  </p>
                  <h3 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{k.title}</h3>
                  <p className="mt-6 text-lg leading-relaxed text-ink-soft">{k.body}</p>
                  <ul className="mt-10 space-y-4 border-t border-ink/10 pt-8">
                    {k.points.map((p) => (
                      <li key={p} className="flex items-center gap-4">
                        <span className="h-2 w-2 shrink-0 rounded-full" style={{background: pastelDeep(k.colour)}} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid items-center gap-16 md:grid-cols-12 md:gap-10">
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
