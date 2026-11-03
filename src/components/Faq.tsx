import {Plus} from 'lucide-react';
import type {Faq as FaqItem} from '../seo';
import {Wash} from './Art';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export function FaqList({faqs}: {faqs: FaqItem[]}) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((f) => (
        <details key={f.id} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif text-2xl leading-snug md:text-[1.7rem]">{f.q}</h3>
            <Plus
              className="mt-2 h-5 w-5 shrink-0 text-blush-deep transition-transform duration-300 group-open:rotate-45"
              strokeWidth={1.5}
            />
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function Faq({faqs}: {faqs: FaqItem[]}) {
  return (
    <section id="faq" className="relative overflow-hidden bg-paper-light px-6 py-28 md:py-40">
      <Wash colour="sky" className="-right-24 top-16 h-96 w-96 opacity-30" />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading eyebrow="Good to know" stroke="butter">
          Questions, <em className="text-butter-deep">answered</em>
        </SectionHeading>
        <Reveal delay={0.1} className="mt-16">
          <FaqList faqs={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
