import {DIFFERENT} from '../data';
import {pastel, pastelDeep} from './Art';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Different() {
  return (
    <section id="different" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What makes us different" stroke="sage">
          Creativity made <em className="text-sage-deep">meaningful</em>
        </SectionHeading>

        <div className="mt-20 grid gap-x-16 md:grid-cols-3">
          {DIFFERENT.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.1}>
              <div className="group h-full border-t border-ink/10 py-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl italic" style={{color: pastelDeep(d.colour)}}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="h-0.5 flex-1 origin-left scale-x-50 rounded-full transition-transform duration-700 group-hover:scale-x-100"
                    style={{background: pastel(d.colour)}}
                  />
                </div>
                <h3 className="mt-6 font-serif text-3xl">{d.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
