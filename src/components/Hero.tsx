import {motion} from 'motion/react';
import {SITE} from '../data';
import {BrushStroke, Dashes, HeartDoodle, Wash} from './Art';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* Corner brushwork, after the banner */}
      <motion.div
        initial={{opacity: 0, x: -60}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.4, ease}}
        className="absolute -left-24 top-10 w-[34rem] -rotate-[28deg] md:-left-16 md:top-6 md:w-[42rem]"
      >
        <BrushStroke colour="sage" variant={1} className="h-40 w-full md:h-52" />
      </motion.div>
      <motion.div
        initial={{opacity: 0, x: 60}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.4, delay: 0.2, ease}}
        className="absolute -right-28 bottom-6 w-[34rem] -rotate-[32deg] md:-right-16 md:bottom-0 md:w-[42rem]"
      >
        <BrushStroke colour="blush" variant={0} className="h-40 w-full md:h-52" />
      </motion.div>

      <Wash colour="lilac" className="-right-20 top-1/4 h-72 w-72 opacity-40" />
      <Wash colour="sky" className="-left-24 bottom-10 h-80 w-80 opacity-35" />
      <Wash colour="butter" className="-top-24 left-1/3 h-64 w-64 opacity-40" />

      <motion.div
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1, delay: 1, ease}}
        className="absolute right-6 top-20 w-16 md:right-24 md:top-32 md:w-28"
      >
        <HeartDoodle />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.img
          src="/jah-logo.png"
          alt="JAH Creative Co"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1.2, ease}}
          className="h-72 w-auto md:h-[26rem]"
        />

        <motion.div
          initial={{opacity: 0, scaleX: 0}}
          animate={{opacity: 1, scaleX: 1}}
          transition={{duration: 1, delay: 0.6, ease}}
          className="-mt-2 w-64 origin-left md:w-80"
        >
          <BrushStroke colour="sage" variant={2} className="h-6 w-full md:h-7" opacity={0.9} />
        </motion.div>

        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.9}}
          className="mt-6 flex items-center gap-3 text-base tracking-[0.14em] text-ink-soft md:gap-5 md:text-xl"
        >
          <Dashes className="hidden shrink-0 sm:block" />
          {SITE.tagline}
          <Dashes flip className="hidden shrink-0 sm:block" />
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 1.2, ease}}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#kits"
            className="rounded-full bg-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-paper transition-colors hover:bg-ink-soft"
          >
            Explore the kits
          </a>
          <a
            href="#about"
            className="rounded-full border border-ink/30 px-9 py-4 text-[0.72rem] uppercase tracking-[0.28em] transition-colors hover:border-ink"
          >
            Our story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
