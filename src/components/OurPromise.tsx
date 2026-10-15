import {BrushStroke, HeartDoodle} from './Art';
import Reveal from './Reveal';

export default function OurPromise() {
  return (
    <section className="relative overflow-hidden bg-paper-deep px-6 py-32 text-ink md:py-44">
      <div className="absolute -left-20 top-12 w-[30rem] -rotate-12 opacity-80">
        <BrushStroke colour="lilac" variant={0} className="h-32 w-full" />
      </div>
      <div className="absolute -right-24 bottom-10 w-[30rem] -rotate-[20deg] opacity-70">
        <BrushStroke colour="sky" variant={1} className="h-32 w-full" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Our promise</p>
          <blockquote className="mt-10 font-serif text-3xl leading-snug md:text-5xl">
            “From a child’s first colour-mixing discovery to a beautifully painted keepsake,{' '}
            <em className="text-blush-deep">every creation tells a story.</em>”
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We want to be part of those little moments, big milestones and special memories. You don’t have to be an
            artist — because creativity isn’t about perfection, it’s about the experience.
          </p>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 text-[0.72rem] uppercase tracking-[0.32em] text-ink md:flex-row md:gap-8">
            <span>Thoughtfully created</span>
            <span className="hidden h-1 w-1 rounded-full bg-blush-deep md:block" />
            <span>Educational by design</span>
            <span className="hidden h-1 w-1 rounded-full bg-blush-deep md:block" />
            <span>Made to inspire</span>
          </div>
          <HeartDoodle className="mx-auto mt-12 w-16 opacity-80" />
        </Reveal>
      </div>
    </section>
  );
}
