import {motion} from 'motion/react';
import {SITE} from './data';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{opacity: 0, y: 16}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        {SITE.name}
      </motion.h1>
      <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3, duration: 0.6}}
        className="mt-4 text-brand-muted"
      >
        {SITE.tagline}
      </motion.p>
    </main>
  );
}
