/**
 * Default site content mirroring the Figma design.
 * Used as fallback when Sanity is not configured or a field is empty.
 */
export interface SiteContent {
  nav: { links: { label: string; href: string }[] };
  hero: {
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    ctaText: string;
    ctaHref: string;
  };
  ticker1: string;
  ticker2: string;
  ticker3: string;
  about1: {
    lead: string;
    headline: string;
    floats: string[];
    outroPlain: string;
    outroAccent: string;
  };
  about2: {
    labels: string[];
    callLine: string;
    theWord: string;
    scribble: string;
  };
  services: {
    heading: string;
    ctaText: string;
    items: string[];
    caseStudyImage: string;
    projects: {
      name: string;
      category: string;
      logo: string;
      caseStudyImage?: string;
    }[];
  };
  ecosystem: {
    headingPre: string;
    headingPost: string;
    ctaText: string;
  };
  roster: {
    heading: string;
    logos: { src: string; alt: string; width: number; height: number }[];
  };
  contact: {
    headingLine1: string;
    headingLine2: string;
    body: string;
    submitText: string;
    serviceOptions: string[];
  };
  marqueePhotos: string[];
  footer: {
    heading: string;
    methods: { icon: string; label: string; href: string }[];
    creditLine: string;
    navLinks: string[];
  };
}

export const defaults: SiteContent = {
  nav: {
    links: [
      { label: 'about us', href: '#about' },
      { label: 'our services', href: '#services' },
      { label: 'the co. store', href: '#store' },
      { label: 'contact', href: '#contact' },
    ],
  },
  hero: {
    titleLine1: 'be the',
    titleLine2: 'greater fool',
    tagline:
      'someone with the perfect blend of ideas and ideals, convinced that there is a better way to do all of this.',
    ctaText: 'our approach',
    ctaHref: '#about',
  },
  ticker1: 'We are not for everyone and that’s okay',
  ticker2: 'Creative First • Human Positive • Solution Focused • ',
  ticker3: 'Thinkers •  Visualisers •  Doers ',
  about1: {
    lead: 'what do you get when an',
    headline:
      'unhealthy obsession with storytelling meets curiosity, aesthetics, and an understanding of what constitutes an audience?',
    floats: ['inherent', 'high-key', 'almost-intuitive'],
    outroPlain: 'you get us. ',
    outroAccent: 'and we get you.',
  },
  about2: {
    labels: [
      'a medium-agnostic agency',
      'a multidisciplinary mothership',
      'a creative ecosystem',
    ],
    callLine: 'you can call us',
    theWord: 'the',
    scribble: 'your brand’s\nGTM bestie',
  },
  services: {
    heading: 'what we do',
    ctaText: 'view complete profile',
    items: [
      'UI UX Design',
      'Brand Identity',
      'Digital Marketing',
      'Packaging',
      'Video / Photoshoot',
      'Pitch Decks',
      'Merchandise',
    ],
    caseStudyImage: '/images/case-study.png',
    projects: [
      { name: 'Essajees Atelier', category: 'Interior Design', logo: '/images/brands/essajee.png' },
      { name: 'Take Ten', category: 'Interior Design', logo: '/images/brands/take-ten.png' },
      { name: 'Condivio', category: 'Interior Design', logo: '/images/brands/condivio.png' },
      { name: 'O! Womaniya', category: 'Interior Design', logo: '/images/brands/essajee.png' },
      { name: 'Majhi Mumbai', category: 'Interior Design', logo: '/images/brands/essajee.png' },
      { name: 'Trace Law', category: 'Interior Design', logo: '/images/brands/essajee.png' },
    ],
  },
  ecosystem: {
    headingPre: 'part of the e',
    headingPost: 'system',
    ctaText: 'explore products',
  },
  roster: {
    heading: 'our roster',
    logos: [
      { src: '/images/brands/abra.png', alt: 'Abra', width: 146, height: 146 },
      { src: '/images/brands/amazon.png', alt: 'Amazon Prime', width: 200, height: 48 },
      { src: '/images/brands/arre.png', alt: 'Arré', width: 158, height: 158 },
      { src: '/images/brands/boond.png', alt: 'Boondh', width: 200, height: 200 },
      { src: '/images/brands/condivio.png', alt: 'Condivio', width: 250, height: 63 },
      { src: '/images/brands/essajee.png', alt: 'Essajees Atelier', width: 152, height: 156 },
      { src: '/images/brands/euff.png', alt: 'EU Film Festival', width: 156, height: 156 },
      { src: '/images/brands/fcs.png', alt: 'Film Companion Studios', width: 162, height: 162 },
      { src: '/images/brands/iffla.png', alt: 'Indian Film Festival of Los Angeles', width: 223, height: 64 },
      { src: '/images/brands/ispl.png', alt: 'ISPL', width: 160, height: 160 },
      { src: '/images/brands/kisan-connect.png', alt: 'Kisan Konnect', width: 151, height: 151 },
      { src: '/images/brands/mami.png', alt: 'MAMI', width: 120, height: 120 },
      { src: '/images/brands/netflix.png', alt: 'Netflix', width: 205, height: 55 },
      { src: '/images/brands/planet-paaduks.png', alt: 'Planet Paaduks', width: 170, height: 170 },
      { src: '/images/brands/ras.png', alt: 'RAS Luxury Skincare', width: 120, height: 120 },
      { src: '/images/brands/take-ten.png', alt: 'Take Ten', width: 89, height: 106 },
      { src: '/images/brands/tpl.png', alt: 'Tennis Premier League', width: 180, height: 180 },
      { src: '/images/brands/himalayan-film-festival.png', alt: 'The Himalayan Film Festival', width: 152, height: 152 },
      { src: '/images/brands/tgr.png', alt: 'The Garden Room', width: 200, height: 200 },
      { src: '/images/brands/salt.png', alt: 'Salt by Flavia', width: 213, height: 89 },
      { src: '/images/brands/surreal.png', alt: 'Surreal Global', width: 115, height: 134 },
    ],
  },
  contact: {
    headingLine1: 'If you are',
    headingLine2: 'a brand...',
    body:
      'seeking end-to-end branding solutions, creative marketing strategy, a dynamic website, social media campaigns that stick, cool content creation, shoots that captivate, and design that does more than just look good...',
    submitText: 'let’s talk',
    serviceOptions: [
      'UI UX Design',
      'Brand Identity',
      'Digital Marketing',
      'Packaging',
      'Video / Photoshoot',
      'Pitch Decks',
      'Merchandise',
    ],
  },
  marqueePhotos: Array.from({ length: 32 }, (_, i) =>
    `/images/marquee/photo-${String(i + 1).padStart(2, '0')}.jpg`,
  ),
  footer: {
    heading: 'let’s talk',
    methods: [
      { icon: '/icons/icon-email.svg', label: 'Over email.', href: 'mailto:hello@independentcreators.co' },
      { icon: '/icons/icon-instagram.svg', label: 'Over instagram.', href: 'https://instagram.com' },
      { icon: '/icons/icon-heart.svg', label: 'Over to you.', href: '#contact' },
    ],
    creditLine: 'this website is created by',
    navLinks: ['About', 'services', 'projects', 'the co. store', 'contact'],
  },
};
