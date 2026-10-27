// The product catalogue: collections and the boxes in each. Copy is the client's own.
import type {Pastel} from './data';

export type Box = {
  name: string;
  tagline: string;
  body: string;
  includes?: string[];
  themes?: {label: string; options: string[]}[];
  notes?: string[];
  tag?: string;
  colour: Pastel;
};

export type Photo = {src: string; box: string; alt: string};

export type Collection = {
  id: string;
  tab: string;
  audience: string;
  name: string;
  tagline: string;
  intro: string[];
  boxes: Box[];
  gallery?: Photo[];
  comingSoon?: boolean;
  colour: Pastel;
};

const GIRL_THEMES = ['Unicorns', 'Doughnuts', 'Flowers', 'Honey Pots', 'Sea Animals', 'Land Animals', 'A mixture of themes'];
const BOY_THEMES = ['Dinosaurs', 'Space', 'Formula One', 'Cars', 'Trucks', 'Sea Animals', 'Land Animals', 'A mixture of themes'];
const THEMES = [
  {label: 'Girl-themed options', options: GIRL_THEMES},
  {label: 'Boy-themed options', options: BOY_THEMES},
];

const KIDS_SUPPLIES = 'Art supplies: placemat, paint palette and syringe';
const PALETTE_GUIDE = 'Colour-mixing palette guide — learn about primary and secondary colours';
const BULK = 'Discounts are available for qualifying bulk orders.';

export const COLLECTIONS: Collection[] = [
  {
    id: 'little-creators',
    tab: 'Little Creators',
    audience: 'For kids',
    name: 'The Little Creators Collection',
    tagline: 'Where little hands create, learn and imagine',
    intro: [
      'At JAH Creative Co, we believe that little hands can create wonderful things! Our Little Creators Collection is thoughtfully designed to combine creativity, learning and fun through exciting, hands-on art activities. From learning colours, letters and numbers to exploring themed creations, each box encourages little ones to use their imagination while developing their creative skills.',
      'Whether you’re looking for an educational activity, a fun-filled holiday surprise or a festive Christmas experience, there’s something special for every little creator!',
    ],
    colour: 'blush',
    gallery: [
      {
        src: '/boxes/holiday-activity-box.jpg',
        box: 'Holiday Activity Box',
        alt: 'Holiday Activity Box with Formula One casting stone cars, the name LIAM in casting stone letters, paints, brushes, palette and sealant',
      },
    ],
    boxes: [
      {
        name: 'Toddler Educational Box',
        tagline: 'Learn through play, create through imagination',
        body: 'Specially curated to introduce little ones to colours, letters, numbers, days, months and seasons through interactive learning resources and creative activities. A wonderful way to encourage early learning, creativity and hands-on exploration, all in one exciting box!',
        tag: 'Early learning',
        colour: 'sky',
        includes: [
          PALETTE_GUIDE,
          'Alphabet casting stone figures (A–Z)',
          'Number casting stone figures (1–10)',
          'Personalised casting stone mould featuring your child’s name',
          'Alphabet learning card',
          'Number learning card',
          'Days of the week card',
          'Months of the year card',
          'Seasons of the year card',
          '18 tubs of paint',
          '2 paint brushes',
          '2 tubs of sealant',
          KIDS_SUPPLIES,
        ],
      },
      {
        name: 'Holiday Activity Box',
        tagline: 'Big creativity, endless holiday fun',
        body: 'Keep little hands busy and imaginations growing during the holidays! Packed with creative activities, casting stone figures and a fun game to enjoy, this box is perfect for little creators who love to paint, play and make something special.',
        tag: 'Holidays',
        colour: 'butter',
        includes: [
          'Mini canvas and easel',
          '6 casting stone figures',
          'Personalised casting stone figure featuring your child’s name',
          PALETTE_GUIDE,
          '18 tubs of paint',
          '2 paint brushes',
          '2 tubs of sealant',
          KIDS_SUPPLIES,
        ],
        themes: THEMES,
      },
      {
        name: 'Themed Box',
        tagline: 'Small boxes, big imagination',
        body: 'A fun, creative activity without the fuss — perfect for little creators who love bringing their favourite characters, animals and interests to life. Perfect for creative play, little surprises, birthday gifts and keeping little hands entertained!',
        tag: 'Gifts & birthdays',
        colour: 'lilac',
        includes: [
          '3 casting stone figures',
          PALETTE_GUIDE,
          '6 tubs of paint',
          '2 paint brushes',
          '1 tub of sealant',
          KIDS_SUPPLIES,
        ],
        themes: THEMES,
      },
      {
        name: 'Little Santa’s Helpers Box',
        tagline: 'A little Christmas magic in every box',
        body: 'This festive art kit gives little creators the opportunity to paint, decorate and create their own Christmas treasures while enjoying a meaningful reminder of the true reason for the season — a beautiful combination of festive creativity, hands-on fun and the story of Jesus’ birth.',
        tag: 'Christmas',
        colour: 'sage',
        includes: [
          'Mini canvas and easel',
          '4 Christmas-themed casting stone figures',
          PALETTE_GUIDE,
          '6 tubs of paint',
          '2 paint brushes',
          '1 tub of sealant',
          KIDS_SUPPLIES,
          'The Birth of Christ Bible story',
        ],
      },
    ],
  },
  {
    id: 'creative-moments',
    tab: 'Creative Moments',
    audience: 'For adults',
    name: 'The Creative Moments Collection',
    tagline: 'Where faith, creativity and imagination come together',
    intro: [
      'Create beautiful memories, share special moments and let your imagination come to life with our thoughtfully curated DIY art and casting stone kits. Whether you’re celebrating with friends, spending quality time with family, enjoying a date night or showing appreciation through gifting, we have a creative experience for every occasion.',
    ],
    colour: 'lilac',
    gallery: [
      {
        src: '/boxes/girls-day-box.jpg',
        box: 'Girls’ Day Box',
        alt: 'Girls’ Day Box with a mini canvas and easel, an oval trinket tray holding flower and butterfly casting stone figures, twelve paint pots, brushes and palette',
      },
      {
        src: '/boxes/friendsmas-box.jpg',
        box: 'Friendsmas Box',
        alt: 'Friendsmas Box with a mini canvas and easel, Santa, gift and Christmas tree casting stone figures, six paint pots, brushes, palette and sealant',
      },
    ],
    boxes: [
      {
        name: 'Friendsmas Box',
        tagline: 'Gather your friends, get creative',
        body: 'Make your festive season extra special with a creative Friendsmas experience — and make beautiful memories together.',
        tag: 'Christmas',
        colour: 'sage',
        includes: [
          'Mini canvas and easel',
          '3 mini Christmas-themed casting stone figures',
          'Colour-mixing palette guide and instructions',
          '6 paint colours',
          '2 paintbrushes',
          '2 sealants (for the canvas and casting stone figures)',
          'Art consumables: placemat, disposable apron and syringe',
        ],
      },
      {
        name: 'Family Christmas Box',
        tagline: 'Festive memories, made together',
        body: 'Bring the family together this Christmas for a fun-filled creative experience. Designed for a family of four.',
        tag: 'Family of four',
        colour: 'blush',
        includes: [
          '4 mini canvases and easels',
          '8 casting stone figures',
          'Colour-mixing palette guide and instructions',
          '4 sets of art consumables (paint palette, syringes, disposable mat and disposable apron)',
          '24 paint tubs',
          '8 paintbrushes',
          '8 sealants (for the canvases and casting stone figures)',
        ],
        notes: ['Add-ons are available for additional family members.'],
      },
      {
        name: 'Girls’ Day Box',
        tagline: 'A creative escape with your girls',
        body: 'Laughter, colour and unforgettable memories. Perfect for birthday gifts, bridal showers, picnics, baby showers, Women’s Day celebrations and team-building activities.',
        tag: 'Celebrations',
        colour: 'butter',
        includes: [
          'Mini canvas and easel',
          'Trinket tray (choose your preferred style)',
          'Colour-mixing palette guide and instructions',
          '6 paint colours',
          '2 paintbrushes',
          '2 tubs of sealant',
          'Art consumables: placemat, disposable apron and syringe',
        ],
        notes: ['Option to add an Initial Letter, Flower or Butterfly casting stone figure at an additional cost.'],
      },
      {
        name: 'Mini Date Night Box',
        tagline: 'Turn an ordinary evening into something special',
        body: 'Designed for couples to unwind, get creative and enjoy a meaningful experience together.',
        tag: 'For two',
        colour: 'blush',
        includes: [
          '2 mini canvases and easels',
          'Colour-mixing palette guide and instructions',
          '12 paint colours',
          '4 paintbrushes',
          '2 tubs of sealant',
          '2 sets of art consumables (placemat, disposable apron and syringe)',
        ],
      },
      {
        name: 'Corporate Gifting',
        tagline: 'Appreciation, beautifully boxed',
        body: 'Make your year-end celebrations or New Year gifting memorable with thoughtfully curated corporate art kits — a unique way to show appreciation to employees, clients, colleagues and business partners.',
        tag: 'Business',
        colour: 'sky',
        includes: [
          'Gift box packaging',
          'Mini canvas and easel',
          'Colour-mixing palette guide and instructions',
          '6 paint colours',
          '2 paintbrushes',
          'Sealant',
          'Art consumables: placemat, disposable apron and syringe',
          'Customised card (year-end or New Year message)',
        ],
        notes: [BULK],
      },
      {
        name: 'Simple Corporate Gift',
        tagline: 'Thoughtful gifting, uncomplicated',
        body: 'A fun, creative and meaningful way to appreciate your employees, clients, colleagues and teams.',
        tag: 'Business',
        colour: 'lilac',
        includes: ['Customised card', 'Mini canvas and easel', 'Colour-mixing palette', '6 paint colours', '2 paintbrushes'],
        notes: [BULK],
      },
      {
        name: 'Student Gifting',
        tagline: 'Gifts they make themselves',
        body: 'Encourage creativity and imagination — ideal for school celebrations, year-end gifts and other special occasions.',
        tag: 'Schools',
        colour: 'sage',
        includes: [
          'Customised card',
          'Mini canvas and easel or a casting stone mould',
          'Colour-mixing palette',
          '6 paint colours',
          '2 paintbrushes',
        ],
        notes: [BULK],
      },
      {
        name: 'Customised Gifting & Party Favours',
        tagline: 'Have something special in mind?',
        body: 'Tailored to your occasion, theme and creative vision — whether you’re planning a birthday party, celebration, special event, school function or corporate gathering, we’d love to help you create something memorable.',
        tag: 'Made to order',
        colour: 'butter',
        notes: ['Get in touch with us via WhatsApp or email to discuss your requirements.'],
      },
    ],
  },
  {
    id: 'sensory',
    tab: 'Sensory',
    audience: 'Coming soon',
    name: 'The Sensory Collection',
    tagline: 'Something new is on its way',
    intro: [
      'We’re busy creating a brand-new collection. Get in touch and we’ll let you know as soon as it’s ready.',
    ],
    colour: 'sage',
    boxes: [],
    comingSoon: true,
  },
];
