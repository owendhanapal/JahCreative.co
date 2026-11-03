// Search content: FAQs and keyword landing pages. Answers stick to what the client's copy states.
import {SITE} from './data';

export const SITE_URL = 'https://www.jahcreativeco.co.za';

export type Faq = {id: string; q: string; a: string};

export const FAQS: Faq[] = [
  {
    id: 'ages',
    q: 'What ages are JAH Creative Co kits for?',
    a: 'Our Little Creators Collection is curated for children aged three and above, with appropriate adult supervision. Our Creative Moments Collection is designed for adults — perfect for date nights, girls’ days, family time and gifting.',
  },
  {
    id: 'casting-stone',
    q: 'What is casting stone?',
    a: 'Casting stone is a durable alternative to traditional plaster. Our casting stone figures can be painted, personalised, sealed and proudly kept long after the activity is over.',
  },
  {
    id: 'sealant',
    q: 'Is sealant included in the kits?',
    a: 'Yes — our casting stone and canvas kits include sealant to help protect finished creations, so they can be displayed, gifted and treasured. Each box’s “What’s included” list shows exactly what you get.',
  },
  {
    id: 'experience',
    q: 'Do I need art experience to use a kit?',
    a: 'Not at all. You don’t have to be an artist and you don’t need prior experience — every kit includes a colour-mixing palette guide, and all you need is a willingness to have fun and get creative.',
  },
  {
    id: 'personalised',
    q: 'Can kids’ kits be personalised with a name?',
    a: 'Yes. The Toddler Educational Box includes a personalised casting stone mould featuring your child’s name, and the Holiday Activity Box includes a personalised casting stone figure with your child’s name.',
  },
  {
    id: 'themes',
    q: 'Which themes can I choose for the Holiday and Themed Boxes?',
    a: 'Girl-themed options include unicorns, doughnuts, flowers, honey pots, sea animals and land animals; boy-themed options include dinosaurs, space, Formula One, cars, trucks, sea animals and land animals — or choose a mixture of themes.',
  },
  {
    id: 'bulk',
    q: 'Do you offer corporate, student or bulk orders?',
    a: 'Yes. We offer corporate gifting, simple corporate gifts and student gifting with customised cards, and discounts are available for qualifying bulk orders.',
  },
  {
    id: 'custom',
    q: 'Can you create customised gifts or party favours?',
    a: 'Yes — we create customised gifting and party favours tailored to your occasion, theme and creative vision, from birthday parties and school functions to corporate gatherings.',
  },
  {
    id: 'order',
    q: 'How do I order a kit?',
    a: `Send us an enquiry on WhatsApp at ${SITE.phone} or email ${SITE.email} with the box you’re interested in, and we’ll help you choose the perfect kit.`,
  },
  {
    id: 'sensory',
    q: 'What is the Sensory Collection?',
    a: 'The Sensory Collection is a brand-new collection that’s coming soon. Get in touch and we’ll let you know as soon as it’s ready.',
  },
];

export const faqsById = (ids: string[]) => ids.map((id) => FAQS.find((f) => f.id === id)!);

export type LandingPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  boxes: string[];
  faqs: string[];
};

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'kids-art-kits',
    label: 'Kids’ art kits',
    title: 'Kids’ Art Kits for Ages 3+ | Little Creators Collection — JAH Creative Co',
    description:
      'Educational art and casting stone kits for kids aged 3+. Colour-mixing guide cards, personalised name figures, paints, brushes and sealant — all in one box. Order on WhatsApp.',
    eyebrow: 'The Little Creators Collection',
    h1: 'Kids’ art kits where little hands create, learn and imagine',
    intro: [
      'Our Little Creators Collection is thoughtfully designed to combine creativity, learning and fun through exciting, hands-on art activities — curated for children aged three and above with appropriate adult supervision.',
      'Every kit includes an educational colour-mixing palette guide, so little ones learn about primary and secondary colours while developing colour recognition, fine motor skills, hand–eye coordination and confidence in their own creativity.',
    ],
    boxes: ['Toddler Educational Box', 'Holiday Activity Box', 'Themed Box', 'Little Santa’s Helpers Box'],
    faqs: ['ages', 'personalised', 'themes', 'sealant', 'order'],
  },
  {
    slug: 'casting-stone-painting-kits',
    label: 'Casting stone painting kits',
    title: 'Casting Stone Painting Kits for Kids & Adults — JAH Creative Co',
    description:
      'Paint, personalise, seal and keep. Casting stone painting kits — a durable alternative to plaster — with paints, brushes, sealant and a colour-mixing guide. For kids and adults.',
    eyebrow: 'Paint · Personalise · Seal',
    h1: 'Casting stone painting kits — a durable alternative to plaster',
    intro: [
      'Our casting stone creations offer a durable alternative to traditional plaster-based crafts. Paint them, personalise them, seal them and proudly keep your finished masterpieces.',
      'We include a suitable sealant in our casting stone kits to help protect completed creations, so the hard work can be treasured long after the activity is over.',
    ],
    boxes: [
      'Toddler Educational Box',
      'Holiday Activity Box',
      'Themed Box',
      'Little Santa’s Helpers Box',
      'Friendsmas Box',
      'Family Christmas Box',
    ],
    faqs: ['casting-stone', 'sealant', 'ages', 'experience', 'order'],
  },
  {
    slug: 'paint-party-boxes',
    label: 'Paint night boxes',
    title: 'DIY Paint Night Boxes: Girls’ Day, Date Night & Family — JAH Creative Co',
    description:
      'DIY paint party boxes for girls’ days, date nights, bridal and baby showers, Friendsmas and family Christmas. Mini canvases, easels, paints, sealant and guides included.',
    eyebrow: 'The Creative Moments Collection',
    h1: 'DIY paint night boxes for girls’ days, date nights and family time',
    intro: [
      'Creativity has no age limit. Our Creative Moments boxes are designed to encourage relaxation, self-expression and connection — a little time away from the demands of everyday life.',
      'Whether it’s a date night, a girls’ day, a festive get-together or simply a quiet evening of painting, every box brings everything together for a memorable creative experience. You don’t have to be an artist — creativity isn’t about perfection, it’s about the experience.',
    ],
    boxes: ['Girls’ Day Box', 'Mini Date Night Box', 'Friendsmas Box', 'Family Christmas Box'],
    faqs: ['experience', 'sealant', 'custom', 'order'],
  },
  {
    slug: 'corporate-gifts',
    label: 'Corporate & student gifts',
    title: 'Creative Corporate & Student Gifts | Art Kit Gifting — JAH Creative Co',
    description:
      'Thoughtful corporate gifts, year-end and New Year art kits with customised cards, plus student gifting and party favours. Discounts for qualifying bulk orders.',
    eyebrow: 'Corporate & student gifting',
    h1: 'Creative corporate gifts and student gifting with a personal touch',
    intro: [
      'Make your year-end celebrations or New Year gifting memorable with thoughtfully curated art kits — a unique way to show appreciation to employees, clients, colleagues and business partners.',
      'Every gift includes a customised card, and discounts are available for qualifying bulk orders. Have something special in mind? We also create customised gifting and party favours for your occasion.',
    ],
    boxes: ['Corporate Gifting', 'Simple Corporate Gift', 'Student Gifting', 'Customised Gifting & Party Favours'],
    faqs: ['bulk', 'custom', 'order'],
  },
  {
    slug: 'christmas-art-kits',
    label: 'Christmas art kits',
    title: 'Christmas Art Kits & Gift Boxes for Kids, Friends & Family — JAH Creative Co',
    description:
      'Festive art kits for Christmas: Little Santa’s Helpers for kids (with the Birth of Christ Bible story), Friendsmas boxes and Family Christmas boxes for four.',
    eyebrow: 'Christmas collection',
    h1: 'Christmas art kits that make the season even more meaningful',
    intro: [
      'Make the festive season extra special with Christmas-themed casting stone figures, mini canvases and easels — creative experiences for little ones, friends and the whole family.',
      'Our Little Santa’s Helpers Box pairs festive creativity with the story of Jesus’ birth, a meaningful reminder of the true reason for the season.',
    ],
    boxes: ['Little Santa’s Helpers Box', 'Friendsmas Box', 'Family Christmas Box'],
    faqs: ['ages', 'sealant', 'bulk', 'order'],
  },
];
