import {motion} from 'motion/react';
import {useState, type ReactNode} from 'react';

const STONE = '#ebe5db';

const SWATCHES = [
  {name: 'Blush', colour: '#f2c4c9'},
  {name: 'Lilac', colour: '#d6c8ea'},
  {name: 'Sky', colour: '#c4d9ea'},
  {name: 'Sage', colour: '#c3d3b8'},
  {name: 'Butter', colour: '#f5e3a7'},
  {name: 'Pearl', colour: '#fbf7f0'},
];

// One butterfly half; the right half is the same shapes mirrored about x = 200.
const WING_UPPER = 'M197 150 C 178 100, 140 52, 92 44 C 52 38, 28 66, 38 100 C 48 134, 96 158, 197 160 Z';
const WING_LOWER = 'M197 168 C 150 170, 104 186, 92 222 C 82 252, 104 276, 134 270 C 166 262, 188 222, 199 180 Z';
const MIRROR = 'matrix(-1 0 0 1 400 0)';

type Region = {id: string; label: string; shape: (props: object) => ReactNode};

const REGIONS: Region[] = [
  {id: 'ul', label: 'Upper left wing', shape: (p) => <path d={WING_UPPER} {...p} />},
  {id: 'ur', label: 'Upper right wing', shape: (p) => <path d={WING_UPPER} transform={MIRROR} {...p} />},
  {id: 'll', label: 'Lower left wing', shape: (p) => <path d={WING_LOWER} {...p} />},
  {id: 'lr', label: 'Lower right wing', shape: (p) => <path d={WING_LOWER} transform={MIRROR} {...p} />},
  {
    id: 'uls',
    label: 'Left wing spot',
    shape: (p) => <ellipse cx="98" cy="94" rx="24" ry="17" transform="rotate(-22 98 94)" {...p} />,
  },
  {
    id: 'urs',
    label: 'Right wing spot',
    shape: (p) => <ellipse cx="302" cy="94" rx="24" ry="17" transform="rotate(22 302 94)" {...p} />,
  },
  {id: 'lls', label: 'Lower left spot', shape: (p) => <circle cx="132" cy="232" r="13" {...p} />},
  {id: 'lrs', label: 'Lower right spot', shape: (p) => <circle cx="268" cy="232" r="13" {...p} />},
  {
    id: 'body',
    label: 'Body',
    shape: (p) => (
      <g {...p}>
        <ellipse cx="200" cy="170" rx="9" ry="60" />
        <circle cx="200" cy="104" r="10" />
      </g>
    ),
  },
];

export default function StoneStudio() {
  const [brush, setBrush] = useState(SWATCHES[0]);
  const [fills, setFills] = useState<Record<string, string>>({});
  const [sealed, setSealed] = useState(false);

  const painted = Object.keys(fills).length;

  const paint = (id: string) => {
    if (sealed) return;
    setFills((f) => ({...f, [id]: brush.colour}));
  };

  const reset = () => {
    setFills({});
    setSealed(false);
  };

  const status = sealed
    ? 'Sealed and ready to treasure.'
    : painted === 0
      ? 'Choose a colour, then tap the butterfly to paint it.'
      : painted < REGIONS.length
        ? 'Looking lovely — keep going, or seal it when you’re happy.'
        : 'Every detail painted. Time to seal your keepsake.';

  return (
    <div className="rounded-[2rem] bg-paper p-6 shadow-[0_30px_80px_-40px_rgba(38,32,30,0.25)] md:p-10">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Paint · Personalise · Seal</p>
        <p className="font-serif text-sm italic text-ink-faint">casting stone</p>
      </div>

      <svg
        viewBox="20 30 360 260"
        className={`mt-4 w-full select-none ${sealed ? '' : 'cursor-pointer'}`}
        role="group"
        aria-label="Casting stone butterfly to paint"
      >
        <defs>
          {/* Irregular tile so the stone pitting doesn't read as a grid */}
          <pattern id="stone-speckle" width="37" height="41" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="5" r="0.9" fill="rgba(60,48,40,0.10)" />
            <circle cx="22" cy="3" r="0.6" fill="rgba(60,48,40,0.08)" />
            <circle cx="31" cy="14" r="1.1" fill="rgba(60,48,40,0.07)" />
            <circle cx="12" cy="17" r="0.5" fill="rgba(60,48,40,0.10)" />
            <circle cx="26" cy="27" r="0.7" fill="rgba(60,48,40,0.08)" />
            <circle cx="6" cy="31" r="1" fill="rgba(60,48,40,0.06)" />
            <circle cx="17" cy="37" r="0.6" fill="rgba(60,48,40,0.09)" />
            <circle cx="35" cy="35" r="0.5" fill="rgba(60,48,40,0.08)" />
            <circle cx="15" cy="9" r="0.6" fill="rgba(255,255,255,0.55)" />
            <circle cx="33" cy="22" r="0.5" fill="rgba(255,255,255,0.5)" />
            <circle cx="9" cy="24" r="0.7" fill="rgba(255,255,255,0.45)" />
          </pattern>
          <clipPath id="stone-clip">{REGIONS.map((r) => <g key={r.id}>{r.shape({})}</g>)}</clipPath>
          <linearGradient id="stone-shine" x1="0" x2="1" y1="0" y2="0.3">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="stone-gloss" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
            <stop offset="0.6" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter id="stone-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#5e5450" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* antennae */}
        <g stroke="#a89c91" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M196 98 C 188 70, 176 56, 162 52" />
          <path d="M204 98 C 212 70, 224 56, 238 52" />
        </g>
        <circle cx="161" cy="52" r="4" fill="#a89c91" />
        <circle cx="239" cy="52" r="4" fill="#a89c91" />

        <g filter="url(#stone-shadow)">
          {REGIONS.map((r) => (
            <g
              key={r.id}
              role="button"
              tabIndex={sealed ? -1 : 0}
              aria-label={`${r.label}${fills[r.id] ? ' (painted)' : ''}`}
              onClick={() => paint(r.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  paint(r.id);
                }
              }}
              className="outline-none transition-[filter] duration-300 hover:brightness-[0.97] focus-visible:brightness-95"
            >
              {r.shape({
                style: {fill: fills[r.id] ?? STONE, transition: 'fill 0.6s ease'},
                stroke: '#b5a99e',
                strokeWidth: 1.5,
              })}
              {r.shape({fill: 'url(#stone-speckle)', pointerEvents: 'none'})}
            </g>
          ))}
        </g>

        {sealed && (
          <g clipPath="url(#stone-clip)" pointerEvents="none">
            <motion.rect
              x="20"
              y="30"
              width="360"
              height="130"
              fill="url(#stone-gloss)"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.8, duration: 1}}
            />
            <motion.rect
              y="20"
              width="120"
              height="300"
              fill="url(#stone-shine)"
              initial={{x: -120}}
              animate={{x: 400}}
              transition={{duration: 1.4, ease: 'easeInOut'}}
            />
          </g>
        )}
      </svg>

      <p className="mt-2 min-h-[1.5rem] text-center text-sm text-ink-soft" aria-live="polite">
        {status}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3" role="radiogroup" aria-label="Paint colour">
        {SWATCHES.map((s) => (
          <button
            key={s.name}
            role="radio"
            aria-checked={brush.name === s.name}
            aria-label={s.name}
            title={s.name}
            disabled={sealed}
            onClick={() => setBrush(s)}
            className={`h-10 w-10 rounded-full border transition-all duration-300 disabled:opacity-40 ${
              brush.name === s.name ? 'scale-110 border-ink ring-2 ring-ink/15 ring-offset-2 ring-offset-paper' : 'border-ink/15'
            }`}
            style={{background: s.colour}}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {sealed ? (
          <button
            onClick={reset}
            className="rounded-full border border-ink/30 px-7 py-3 text-[0.7rem] uppercase tracking-[0.26em] transition-colors hover:border-ink"
          >
            Paint another
          </button>
        ) : (
          <>
            <button
              onClick={reset}
              disabled={painted === 0}
              className="rounded-full border border-ink/30 px-7 py-3 text-[0.7rem] uppercase tracking-[0.26em] transition-colors hover:border-ink disabled:opacity-40"
            >
              Start again
            </button>
            <button
              onClick={() => setSealed(true)}
              disabled={painted === 0}
              className="rounded-full bg-ink px-7 py-3 text-[0.7rem] uppercase tracking-[0.26em] text-paper transition-colors hover:bg-ink-soft disabled:opacity-40"
            >
              Seal it
            </button>
          </>
        )}
      </div>
    </div>
  );
}
