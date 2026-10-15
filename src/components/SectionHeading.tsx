import type {ReactNode} from 'react';
import type {Pastel} from '../data';
import {PaintReveal, SwipeStroke} from './Art';
import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  children,
  stroke,
  align = 'center',
}: {
  eyebrow: string;
  children: ReactNode;
  stroke?: Pastel;
  align?: 'center' | 'left';
}) {
  const center = align === 'center';
  return (
    <div className={center ? 'text-center' : ''}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <PaintReveal delay={0.15}>
        <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">{children}</h2>
      </PaintReveal>
      {stroke && <SwipeStroke colour={stroke} delay={0.9} className={`mt-5 h-5 w-48 ${center ? 'mx-auto' : ''}`} />}
    </div>
  );
}
