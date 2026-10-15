import {Sparkles} from 'lucide-react';
import {motion} from 'motion/react';
import {useState} from 'react';
import type {Pastel} from '../data';
import {BrushStroke, pastel, pastelDeep, SwipeStroke} from './Art';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PASTELS: Pastel[] = ['blush', 'lilac', 'sky', 'sage', 'butter'];
const MOODS = ['Blush', 'Lilac', 'Butter', 'Sage', 'Morning', 'Quiet', 'Golden', 'Gentle', 'Sunday', 'Soft'];
const SUBJECTS = ['Grace', 'Bloom', 'Psalm', 'Garden', 'Reverie', 'Hope', 'Light', 'Joy', 'Promise', 'Meadow'];

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const pick = <T,>(xs: readonly T[]) => xs[Math.floor(Math.random() * xs.length)];
const shuffled = <T,>(xs: readonly T[]) => [...xs].sort(() => Math.random() - 0.5);

type Stroke = {x: number; y: number; w: number; h: number; rot: number; colour: Pastel; variant: number};
type Artwork = {
  id: number;
  title: string;
  ground: Pastel;
  arch?: {x: number; size: number; bands: Pastel[]};
  sun?: {x: number; y: number; size: number; colour: Pastel};
  strokes: Stroke[];
  line: string;
  dots: {x: number; y: number; r: number}[];
  dotColour: Pastel;
};

function compose(id: number): Artwork {
  const palette = shuffled(PASTELS);
  const withArch = Math.random() < 0.65;
  const strokeCount = withArch ? Math.round(rand(1, 2)) : Math.round(rand(2, 4));
  const dotX = rand(15, 70);
  const dotY = rand(15, 75);

  // A loose hand-drawn ink line wandering across the canvas
  const y0 = rand(20, 80);
  const line = `M ${rand(-5, 20)} ${y0} C ${rand(20, 45)} ${rand(0, 100)}, ${rand(55, 80)} ${rand(0, 100)}, ${rand(85, 105)} ${rand(15, 85)}`;

  return {
    id,
    title: `${pick(MOODS)} ${pick(SUBJECTS)}`,
    ground: palette[4],
    arch: withArch
      ? {x: rand(25, 75), size: rand(45, 70), bands: palette.slice(0, Math.round(rand(3, 4)))}
      : undefined,
    sun: Math.random() < 0.8 ? {x: rand(20, 80), y: rand(14, 40), size: rand(16, 28), colour: palette[1]} : undefined,
    strokes: Array.from({length: strokeCount}, () => ({
      x: rand(-15, 45),
      y: rand(10, 80),
      w: rand(55, 95),
      h: rand(9, 16),
      rot: rand(-35, 35),
      colour: pick(palette.slice(0, 4)),
      variant: Math.floor(rand(0, 3)),
    })),
    line,
    dots: Array.from({length: Math.round(rand(4, 8))}, () => ({
      x: dotX + rand(-8, 8),
      y: dotY + rand(-6, 6),
      r: rand(0.6, 1.4),
    })),
    dotColour: pick(PASTELS),
  };
}

const ease = [0.22, 1, 0.36, 1] as const;

function Canvas({art}: {art: Artwork}) {
  let step = 0;
  const next = () => 0.15 + 0.18 * step++;

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden bg-paper-light"
      style={{
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.8) inset, 6px 6px 0 -1px #e9dcc6, 0 40px 70px -30px rgba(38,32,30,0.35)',
      }}
    >
      {/* faint wash of the ground colour */}
      <motion.div
        className="absolute inset-0"
        style={{background: `radial-gradient(120% 90% at 30% 20%, ${pastel(art.ground)}, transparent 70%)`}}
        initial={{opacity: 0}}
        animate={{opacity: 0.55}}
        transition={{duration: 1}}
      />

      {art.sun && (
        <motion.div
          className="absolute rounded-full"
          style={{
            left: `${art.sun.x}%`,
            top: `${art.sun.y}%`,
            width: `${art.sun.size}%`,
            aspectRatio: '1',
            translate: '-50% -50%',
            background: pastel(art.sun.colour),
          }}
          initial={{scale: 0, opacity: 0}}
          animate={{scale: 1, opacity: 0.95}}
          transition={{duration: 0.9, delay: next(), ease}}
        />
      )}

      {art.arch && (
        <motion.svg
          viewBox="0 0 200 100"
          className="absolute bottom-0"
          style={{left: `${art.arch.x}%`, width: `${art.arch.size * 1.4}%`, translate: '-50% 0'}}
          initial={{clipPath: 'inset(100% 0 0 0)'}}
          animate={{clipPath: 'inset(0% 0 0 0)'}}
          transition={{duration: 1.1, delay: next(), ease}}
        >
          {art.arch.bands.map((c, i) => {
            const r = 92 - i * (70 / art.arch!.bands.length);
            return (
              <path
                key={i}
                d={`M ${100 - r} 100 A ${r} ${r} 0 0 1 ${100 + r} 100`}
                fill="none"
                stroke={pastel(c)}
                strokeWidth={70 / art.arch!.bands.length - 2}
                strokeLinecap="butt"
              />
            );
          })}
        </motion.svg>
      )}

      {art.strokes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%`, height: `${s.h}%`, rotate: `${s.rot}deg`}}
          initial={{clipPath: 'inset(0 100% 0 0)'}}
          animate={{clipPath: 'inset(0 0% 0 0)'}}
          transition={{duration: 0.8, delay: next(), ease: [0.65, 0, 0.35, 1]}}
        >
          <BrushStroke colour={s.colour} variant={s.variant} className="h-full w-full" opacity={0.92} />
        </motion.div>
      ))}

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <motion.path
          d={art.line}
          fill="none"
          stroke="var(--color-ink)"
          strokeOpacity="0.55"
          strokeWidth="0.35"
          strokeLinecap="round"
          initial={{pathLength: 0}}
          animate={{pathLength: 1}}
          transition={{duration: 1.4, delay: next(), ease: 'easeInOut'}}
        />
        {art.dots.map((d, i) => (
          <motion.circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill={pastelDeep(art.dotColour)}
            initial={{opacity: 0}}
            animate={{opacity: 0.8}}
            transition={{delay: next() * 0.6 + 0.6 + i * 0.05}}
          />
        ))}
      </svg>

      {/* linen weave */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(120,100,80,0.05) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(120,100,80,0.05) 0 1px, transparent 1px 3px)',
        }}
      />
    </div>
  );
}

export default function SurpriseCanvas() {
  const [art, setArt] = useState(() => compose(1));

  return (
    <section id="create" className="relative overflow-hidden bg-paper-light px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <SectionHeading eyebrow="Creativity has no rules" align="left" stroke="blush">
            You don’t have to be <em className="text-blush-deep">an artist.</em>
          </SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              You don’t need prior experience. All you need is a willingness to have fun, get creative, and discover
              what you can make. Because creativity isn’t about perfection — it’s about the experience.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">Go on — tap the button and see.</p>
            <button
              onClick={() => setArt((a) => compose(a.id + 1))}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-paper transition-colors hover:bg-ink-soft"
            >
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              Surprise me
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
          <div className="relative mx-auto max-w-sm">
            <SwipeStroke colour="sage" variant={1} delay={0.4} className="absolute -left-10 -top-6 h-14 w-56" />
            <Canvas key={art.id} art={art} />
            <motion.div
              key={`label-${art.id}`}
              initial={{opacity: 0, y: 6}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 1.2, duration: 0.6}}
              className="mt-10 ml-auto w-fit border-l border-ink/20 pl-5"
              aria-live="polite"
            >
              <p className="font-serif text-2xl italic">{art.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-ink-faint">
                No. {String(art.id).padStart(2, '0')} · Pastel on canvas, sealed
              </p>
              <p className="mt-1 text-sm text-ink-soft">Artist: you</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
