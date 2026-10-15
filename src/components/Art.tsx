import {motion, useInView} from 'motion/react';
import {useRef, type ReactNode} from 'react';
import type {Pastel} from '../data';

const paintEase = [0.65, 0, 0.35, 1] as const;

/** Wipes its content in left-to-right, as if painted on with one stroke, when scrolled into view. */
export function PaintReveal({
  children,
  delay = 0,
  duration = 1.3,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  // Watch an unclipped wrapper: a fully clipped element never registers as in view.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {once: true, margin: '-60px'});
  return (
    <div ref={ref} className={className}>
      <motion.div
        // Negative insets keep italic overhangs and descenders unclipped once revealed
        initial={{clipPath: 'inset(-20% 100% -20% -5%)'}}
        animate={inView ? {clipPath: 'inset(-20% -5% -20% -5%)'} : undefined}
        transition={{duration, delay, ease: paintEase}}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

/** A brush stroke that gets swept on when scrolled into view. */
export function SwipeStroke({
  colour,
  variant = 2,
  delay = 0.5,
  className = '',
}: {
  colour: Pastel;
  variant?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <PaintReveal delay={delay} duration={0.9} className={className}>
      <BrushStroke colour={colour} variant={variant} className="h-full w-full" />
    </PaintReveal>
  );
}

export const pastel = (c: Pastel) => `var(--color-${c})`;
export const pastelDeep = (c: Pastel) => `var(--color-${c}-deep)`;

/** A dry-brush paint swipe — a pre-rendered bristle mask (public/brush) filled with a pastel. */
export function BrushStroke({
  colour,
  variant = 0,
  className = '',
  opacity = 0.9,
}: {
  colour: Pastel;
  variant?: number;
  className?: string;
  opacity?: number;
}) {
  const mask = `url(/brush/stroke-${variant % 3}.png) center / 100% 100% no-repeat`;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{background: pastel(colour), opacity, mask, WebkitMask: mask}}
    />
  );
}

/** Soft watercolour bloom used behind content. */
export function Wash({colour, className = ''}: {colour: Pastel; className?: string}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{background: `radial-gradient(closest-side, ${pastel(colour)}, transparent)`}}
    />
  );
}

/** The hand-drawn heart with sparks from the banner. */
export function HeartDoodle({className = ''}: {className?: string}) {
  return (
    <svg viewBox="0 0 120 100" fill="none" aria-hidden="true" className={className}>
      <g stroke="var(--color-blush-deep)" strokeWidth="2.4" strokeLinecap="round" opacity="0.75">
        <path d="M60 78 C 40 62, 34 46, 40 38 C 46 30, 57 33, 60 44 C 63 33, 74 30, 80 38 C 86 46, 80 62, 60 78 Z" />
        <path d="M22 44 L 32 46" />
        <path d="M30 18 L 36 26" />
        <path d="M88 26 L 94 18" />
        <path d="M88 46 L 98 44" />
        <path d="M60 10 L 60 20" />
      </g>
    </svg>
  );
}

/** The little paired dashes that bracket the tagline. */
export function Dashes({flip = false, className = ''}: {flip?: boolean; className?: string}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 ${flip ? '-scale-x-100' : ''} ${className}`}
    >
      <g stroke="var(--color-blush-deep)" strokeWidth="1.8" strokeLinecap="round" opacity="0.8">
        <path d="M4 6 L 12 9" />
        <path d="M4 18 L 12 15" />
      </g>
    </svg>
  );
}
