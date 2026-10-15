// All site copy and contact details live here.

export type Pastel = 'blush' | 'lilac' | 'sky' | 'sage' | 'butter';

export const SITE = {
  name: 'JAH Creative Co',
  domain: 'jahcreative.co',
  tagline: 'where faith, creativity and imagination come together',
  // TODO: confirm contact details with the client before launch
  email: 'hello@jahcreative.co',
  whatsapp: '', // international format, digits only, e.g. 27821234567
};

export const NAV = [
  {label: 'About', href: '#about'},
  {label: 'Kits', href: '#kits'},
  {label: 'Learning', href: '#learning'},
  {label: 'Why JAH', href: '#different'},
  {label: 'Enquire', href: '#enquire'},
];

export const KITS: {
  title: string;
  kicker: string;
  body: string;
  points: string[];
  colour: Pastel;
}[] = [
  {
    kicker: 'For ages 3+',
    title: 'Little Hands, Big Discoveries',
    body:
      'Thoughtfully curated for little learners ready to explore, experiment and develop their creativity — with appropriate adult supervision.',
    points: [
      'Colour-mixing guide cards to keep',
      'Primary & secondary colour play',
      'Fine motor skills & confidence',
    ],
    colour: 'blush',
  },
  {
    kicker: 'For grown-ups',
    title: 'Creativity Has No Age Limit',
    body:
      'Designed for relaxation, self-expression and connection — a little time away from the demands of everyday life. No experience needed.',
    points: ['Date nights & girls’ days', 'Festive get-togethers', 'A quiet evening of painting'],
    colour: 'lilac',
  },
];

export const MEDIUMS: {title: string; body: string; colour: Pastel}[] = [
  {
    title: 'Casting Stone',
    body:
      'A durable alternative to traditional plaster. Paint, personalise, seal and proudly keep — sealant included so the work is treasured long after the activity is over.',
    colour: 'sky',
  },
  {
    title: 'Canvas',
    body:
      'Each canvas kit includes a sealant to protect the finished artwork, ready to hang on a wall or display on an easel as a keepsake.',
    colour: 'butter',
  },
];

export const SKILLS = [
  'Colour recognition',
  'Fine motor skills',
  'Hand–eye coordination',
  'Problem-solving',
  'Creative confidence',
];

export const DIFFERENT: {title: string; body: string; colour: Pastel}[] = [
  {
    title: 'Durable Creations',
    body:
      'We use casting stone for our moulded crafts — a durable alternative to traditional plaster, with sealant included to protect finished pieces.',
    colour: 'sky',
  },
  {
    title: 'Learning Through Creativity',
    body: 'Our educational colour-mixing cards help children explore primary and secondary colours through hands-on fun.',
    colour: 'blush',
  },
  {
    title: 'Everything in One Kit',
    body:
      'From paints and brushes to sealants, protective accessories and learning guides — the essential tools needed to get creative.',
    colour: 'butter',
  },
  {
    title: 'Designed With Purpose',
    body:
      'Every package is curated with age-appropriate activities and educational value in mind, particularly for children aged three and above with adult supervision.',
    colour: 'sage',
  },
  {
    title: 'Creativity for All Ages',
    body:
      'From little artists discovering their imagination to adults enjoying a relaxing painting session — experiences everyone can enjoy.',
    colour: 'lilac',
  },
  {
    title: 'Art Worth Keeping',
    body:
      'Our sealant protects finished canvases and casting stone creations, so your masterpieces can be displayed, gifted and treasured.',
    colour: 'blush',
  },
];

export const INSIDE = [
  'Art materials',
  'Brushes',
  'Casting stone or canvas',
  'Sealant',
  'Protective accessories',
  'Colour-mixing guide cards',
];

export const OCCASIONS = [
  'A fun afternoon at home',
  'Playdates',
  'Birthday activities',
  'Family bonding',
  'A special gift',
  'Date night',
  'Girls’ day',
  'Festive get-togethers',
];
