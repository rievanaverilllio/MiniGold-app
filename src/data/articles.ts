export interface Article {
  id: number;
  title: string;
  slug?: string;
  date: string; // ISO date or readable format
  image: string;
  excerpt: string;
  content: string; // full markdown/plain content placeholder
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'How to maintain and care for your jewelry',
    date: '2024-07-03',
    image: '/hero-bg.jpg',
    excerpt: 'Preserve brilliance and longevity of your favorite pieces with these core care principles.',
    content: 'Full content for article 1. You can replace with markdown or fetched content later.'
  },
  {
    id: 2,
    title: 'Choose the perfect gemstones for yourself',
    date: '2024-07-10',
    image: '/hero-bg.jpg',
    excerpt: 'A concise guide to evaluating color, clarity, cut, and meaning when selecting gemstones.',
    content: 'Full content for article 2.'
  },
  {
    id: 3,
    title: 'Art of layered necklace looks with style tip',
    date: '2024-07-17',
    image: '/hero-bg.jpg',
    excerpt: 'Build balanced and expressive layered necklace aesthetics with proportion & texture mixing.',
    content: 'Full content for article 3.'
  },
  {
    id: 4,
    title: 'Top 10 gold trends this season',
    date: '2024-08-01',
    image: '/hero-bg.jpg',
    excerpt: 'From bold textures to refined minimalism—current directional gold wear statements.',
    content: 'Full content for article 4.'
  },
  {
    id: 5,
    title: 'How to size your rings correctly',
    date: '2024-08-08',
    image: '/hero-bg.jpg',
    excerpt: 'Avoid resizing hassles—use temperature, width, and comfort fit guidelines properly.',
    content: 'Full content for article 5.'
  },
  {
    id: 6,
    title: `Caring for pearls: dos and don'ts`,
    date: '2024-08-15',
    image: '/hero-bg.jpg',
    excerpt: 'Pearls are organic—learn storage, cleaning, and wearing best practices.',
    content: 'Full content for article 6.'
  },
  {
    id: 7,
    title: 'Mixing metals: when it works',
    date: '2024-08-22',
    image: '/hero-bg.jpg',
    excerpt: 'Rules of contrast, balance, and repetition for elevated mixed-metal styling.',
    content: 'Full content for article 7.'
  },
  {
    id: 8,
    title: 'Sapphire vs. diamond: what to choose',
    date: '2024-08-29',
    image: '/hero-bg.jpg',
    excerpt: 'Cut, meaning, hardness, and budget—a direct comparison for decision clarity.',
    content: 'Full content for article 8.'
  },
  {
    id: 9,
    title: 'Everyday jewelry that elevates your outfit',
    date: '2024-09-05',
    image: '/hero-bg.jpg',
    excerpt: 'Subtle modular pieces that transition from casual to refined effortlessly.',
    content: 'Full content for article 9.'
  },
  {
    id: 10,
    title: 'How to store your jewelry at home',
    date: '2024-09-12',
    image: '/hero-bg.jpg',
    excerpt: 'Prevent tarnish, tangles, and stone abrasion with optimized storage methods.',
    content: 'Full content for article 10.'
  },
  {
    id: 11,
    title: 'Statement earrings for special occasions',
    date: '2024-09-19',
    image: '/hero-bg.jpg',
    excerpt: 'Scale, silhouette, and harmony tips for impactful event earring choices.',
    content: 'Full content for article 11.'
  },
  {
    id: 12,
    title: 'Minimalist necklace guide',
    date: '2024-09-26',
    image: '/hero-bg.jpg',
    excerpt: 'Curate a capsule of refined, versatile minimalist neck adornments.',
    content: 'Full content for article 12.'
  },
  {
    id: 13,
    title: 'Budget-friendly gemstone picks',
    date: '2024-10-03',
    image: '/hero-bg.jpg',
    excerpt: 'Alternative vibrant stones that deliver presence without premium pricing.',
    content: 'Full content for article 13.'
  },
  {
    id: 14,
    title: 'How to evaluate gemstone quality',
    date: '2024-10-10',
    image: '/hero-bg.jpg',
    excerpt: 'Assess critical value drivers to make informed gemstone investments.',
    content: 'Full content for article 14.'
  },
  {
    id: 15,
    title: 'Choosing jewelry for gifting',
    date: '2024-10-17',
    image: '/hero-bg.jpg',
    excerpt: 'Personalization, symbolism, and timelessness—keys to meaningful jewelry gifting.',
    content: 'Full content for article 15.'
  },
  {
    id: 16,
    title: 'Bridal jewelry trends',
    date: '2024-10-24',
    image: '/hero-bg.jpg',
    excerpt: 'Modern silhouettes, heirloom revival, and subtle color accents shaping bridal adornment.',
    content: 'Full content for article 16.'
  },
  {
    id: 17,
    title: 'Cleaning tips for oxidized silver',
    date: '2024-10-31',
    image: '/hero-bg.jpg',
    excerpt: 'Safe restoration methods that preserve patina while reviving luster.',
    content: 'Full content for article 17.'
  },
  {
    id: 18,
    title: 'How to authenticate precious metals',
    date: '2024-11-07',
    image: '/hero-bg.jpg',
    excerpt: 'Hallmarks, density tests, and professional verification approaches explained.',
    content: 'Full content for article 18.'
  }
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleById(id: number): Article | undefined {
  return articles.find(a => a.id === id);
}
