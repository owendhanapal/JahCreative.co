import type {SOCIALS} from '../data';

type Network = (typeof SOCIALS)[number]['name'] | 'WhatsApp';

// Line icons drawn to sit alongside lucide's 24px / 1.5 stroke set.
const PATHS: Record<Network, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  Facebook: <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />,
  TikTok: (
    <path d="M13 3v12.5a3.5 3.5 0 1 1-3.5-3.5M13 3c.4 2.9 2.4 4.8 5.5 5" />
  ),
  WhatsApp: (
    <>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" />
    </>
  ),
};

export default function SocialIcon({name, className = 'h-5 w-5'}: {name: Network; className?: string}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
