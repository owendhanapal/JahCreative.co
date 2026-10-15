import type {ReactNode} from 'react';
import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  children,
  align = 'center',
}: {
  eyebrow: string;
  children: ReactNode;
  align?: 'center' | 'left';
}) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">{children}</h2>
    </Reveal>
  );
}
