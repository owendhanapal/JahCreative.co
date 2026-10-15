import {useState} from 'react';
import {SKILLS} from '../data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PRIMARIES = [
  {label: 'Pink', colour: '#f4bcc4', cx: 130, cy: 120},
  {label: 'Yellow', colour: '#f8e3a4', cx: 210, cy: 120},
  {label: 'Blue', colour: '#bdd5ec', cx: 170, cy: 188},
];

const MIXES = [
  {a: 'Pink', b: 'Yellow', result: 'Peach', colour: '#f5bf96'},
  {a: 'Yellow', b: 'Blue', result: 'Green', colour: '#b9d3a8'},
  {a: 'Blue', b: 'Pink', result: 'Lilac', colour: '#c7b6e2'},
];

export default function Learning() {
  const [active, setActive] = useState<(typeof MIXES)[number] | null>(null);

  return (
    <section id="learning" className="relative overflow-hidden bg-paper-light px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Learning through creativity" align="left" stroke="sky">
            Every brushstroke,
            <br />
            <em className="text-sky-deep">something new</em>
          </SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              We go beyond simply providing paints and canvases. Our kits include educational colour-mixing guide cards
              that children keep and return to as they learn how primary colours combine into something new.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {SKILLS.map((s) => (
                <li key={s} className="rounded-full border border-ink/15 px-5 py-2 text-sm tracking-wide">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <figure className="rounded-[2rem] bg-paper p-8 shadow-[0_30px_80px_-40px_rgba(38,32,30,0.25)] md:p-12">
            <svg viewBox="40 30 260 250" className="mx-auto w-full max-w-sm" role="img" aria-label="Colour mixing wheel">
              {PRIMARIES.map((p) => (
                <circle
                  key={p.label}
                  cx={p.cx}
                  cy={p.cy}
                  r="72"
                  fill={p.colour}
                  style={{mixBlendMode: 'multiply'}}
                  opacity={active && active.a !== p.label && active.b !== p.label ? 0.25 : 0.85}
                  className="transition-opacity duration-500"
                />
              ))}
            </svg>
            <figcaption className="mt-8 space-y-3">
              <p className="eyebrow text-center">Tap a mix</p>
              {MIXES.map((m) => (
                <button
                  key={m.result}
                  onMouseEnter={() => setActive(m)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(m)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive((a) => (a === m ? null : m))}
                  className={`flex w-full items-center justify-between rounded-full border px-6 py-3 text-left transition-colors ${
                    active === m ? 'border-ink/40 bg-paper-light' : 'border-ink/10'
                  }`}
                >
                  <span className="font-serif text-xl">
                    {m.a} <span className="text-ink-faint">+</span> {m.b}
                  </span>
                  <span className="flex items-center gap-3 text-sm tracking-wide">
                    {m.result}
                    <span className="h-6 w-6 rounded-full" style={{background: m.colour}} />
                  </span>
                </button>
              ))}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
