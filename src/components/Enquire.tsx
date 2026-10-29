import {Check, Copy, Mail, X} from 'lucide-react';
import {useEffect, useState, type FormEvent} from 'react';
import {SITE, SOCIALS} from '../data';
import {onEnquire} from '../enquiry';
import {PaintReveal, SwipeStroke, Wash} from './Art';
import Reveal from './Reveal';
import SocialIcon from './SocialIcon';

const INTERESTS = [
  'Little Creators (kids)',
  'Creative Moments (adults)',
  'Corporate gifting',
  'Student gifting',
  'Party favours',
  'Something custom',
];

export default function Enquire() {
  const [interest, setInterest] = useState<string[]>([]);
  const [boxes, setBoxes] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // Boxes picked from the collections arrive here via "Enquire about this box"
  useEffect(() => onEnquire((box) => setBoxes((cur) => (cur.includes(box) ? cur : [...cur, box]))), []);

  const toggle = (i: string) =>
    setInterest((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));

  // No backend — the enquiry opens as a pre-filled WhatsApp chat.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [`Name: ${f.get('name')}`, `Contact: ${f.get('contact')}`];
    if (boxes.length) lines.push(`Boxes: ${boxes.join(', ')}`);
    if (interest.length) lines.push(`Interested in: ${interest.join(', ')}`);
    lines.push('', String(f.get('message') ?? ''));
    const body = lines.join('\n');
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — the address is still on screen and selectable
    }
  };

  const field =
    'w-full border-b border-ink/20 bg-transparent py-3 text-lg placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors';

  return (
    <section id="enquire" className="relative overflow-hidden px-6 py-28 md:py-40">
      <Wash colour="sage" className="-left-20 top-1/3 h-96 w-96 opacity-30" />
      <Wash colour="lilac" className="-right-20 bottom-0 h-80 w-80 opacity-30" />

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Enquire</p>
          <PaintReveal delay={0.15}>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-6xl">
              Let’s create something <em className="text-blush-deep">beautiful.</em>
            </h2>
          </PaintReveal>
          <SwipeStroke colour="blush" delay={0.9} className="mt-6 h-5 w-48" />
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            Planning a playdate, a birthday, a date night or a special gift? Tell us what you have in mind and we’ll
            help you choose the perfect kit.
          </p>

          <ul className="mt-12 space-y-5 border-t border-ink/10 pt-10">
            <li>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <SocialIcon name="WhatsApp" className="h-5 w-5 text-sage-deep" />
                <span>
                  <span className="eyebrow block">WhatsApp</span>
                  <span className="text-lg transition-colors group-hover:text-blush-deep">{SITE.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-lilac-deep" strokeWidth={1.5} />
                <span>
                  <span className="eyebrow block">Email</span>
                  <span className="select-all text-lg">{SITE.email}</span>
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`JAH Creative Co on ${s.name}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
          <form onSubmit={submit} className="space-y-8">
            <input name="name" required placeholder="Your name" className={field} />
            <input name="contact" required placeholder="Email or phone number" className={field} />
            {boxes.length > 0 && (
              <div>
                <p className="eyebrow mb-4">Boxes you’re enquiring about</p>
                <ul className="flex flex-wrap gap-3">
                  {boxes.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 rounded-full border border-blush-deep/40 bg-blush/40 py-2 pl-5 pr-3 text-sm"
                    >
                      {b}
                      <button
                        type="button"
                        aria-label={`Remove ${b}`}
                        onClick={() => setBoxes((cur) => cur.filter((x) => x !== b))}
                        className="rounded-full p-0.5 transition-colors hover:bg-ink/10"
                      >
                        <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="eyebrow mb-4">I’m interested in</p>
              <div className="flex flex-wrap gap-3">
                {INTERESTS.map((i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle(i)}
                    aria-pressed={interest.includes(i)}
                    className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                      interest.includes(i) ? 'border-ink bg-ink text-paper' : 'border-ink/20 hover:border-ink/50'
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us a little more…"
              className={`${field} resize-none`}
            />
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-ink px-8 py-4 text-[0.72rem] uppercase tracking-[0.26em] text-paper transition-colors hover:bg-ink-soft"
              >
                <SocialIcon name="WhatsApp" className="h-4 w-4" />
                Send on WhatsApp
              </button>
              <p className="text-sm text-ink-soft">
                Prefer email?
                <span className="mt-1 flex items-center gap-2">
                  <span className="select-all text-base text-ink">{SITE.email}</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    title="Copy email address"
                    className="rounded-full p-1.5 transition-colors hover:bg-ink/10"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-sage-deep" strokeWidth={2} />
                    ) : (
                      <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />
                    )}
                  </button>
                  <span aria-live="polite" className="text-xs text-sage-deep">
                    {copied ? 'Copied' : ''}
                  </span>
                </span>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
