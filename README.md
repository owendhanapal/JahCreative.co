# Jah Creative

Marketing site for JAH Creative Co — https://jahcreativeco.co.za

## Stack

Vite 6 · React 19 · TypeScript · Tailwind v4 · lucide-react · motion — same
setup as the LX Auto, Rustic Steel and S.W.A.G builds. Deployed on Netlify
(`netlify.toml`).

## Commands

```
npm run dev      # dev server on :3000
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # tsc --noEmit
```

## Design

Cream paper background (sampled from the client's banner) with a pastel set —
blush, lilac, sky, sage and butter — each with a `-deep` tone for text and
lines. Cormorant Garamond for headings, Jost for body. Tokens live in the
`@theme static` block of `src/index.css` (`static` so every colour variable is
emitted, since components read them via `var()`).

## Content

All copy and contact details live in `src/data.ts`. The product catalogue — the
Little Creators, Creative Moments and Sensory collections and every box in them —
lives in `src/collections.ts`; set `comingSoon: true` on a collection to show it
as a teaser. "Enquire about this box" buttons hand the box name to the enquiry
form via `src/enquiry.ts`.

## Artwork

- `design/` holds the client's original logo and banner.
- `public/jah-logo.png` is the logo with the white background keyed out to
  transparency; `favicon.png` and `apple-touch-icon.png` are generated from it.
- `public/brush/stroke-*.png` are dry-brush alpha masks. `BrushStroke` fills
  them with a pastel via CSS `mask`, which is far cheaper to render than live
  SVG noise filters.

## Outstanding before launch

- Product photography for the kits.
- Sensory collection contents (currently shown as coming soon).
