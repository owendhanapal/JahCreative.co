import {BrushStroke, Wash} from './Art';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28 md:py-40">
      <Wash colour="butter" className="-left-32 top-20 h-96 w-96 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">About us</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
            More than <em className="text-blush-deep">just</em> an art kit.
          </h2>
          <BrushStroke colour="lilac" variant={2} className="mt-6 h-5 w-48" />
        </Reveal>

        <div className="space-y-8 text-lg leading-relaxed text-ink-soft md:col-span-6 md:col-start-7 md:pt-4">
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
              We believe creativity is more than just making something beautiful — it is an opportunity to learn,
              explore, connect, and create memories that last.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Inspired by our love for creativity, meaningful experiences and the joy of learning, JAH Creative Co
              brings people together through thoughtfully curated art and DIY kits. Our mission is to make creativity
              accessible, enjoyable and educational for everyone — from little hands discovering colour for the first
              time to adults looking for a relaxing and meaningful creative escape.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              What makes us different is the thought, care and purpose behind every package. Art should be both fun
              and enriching, which is why our kits are designed to encourage imagination, develop practical skills, and
              make learning an exciting experience.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
