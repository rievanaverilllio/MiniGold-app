import Image from 'next/image';

export default function LatestArticlesSection() {
  const articles = [
    {
      id: 1,
      title: 'How to maintain and care for your jewelry',
      date: 'Jul 3, 2024',
      image: '/hero-bg.jpg',
    },
    {
      id: 2,
      title: 'Choose the perfect gemstones for yourself',
      date: 'Jul 3, 2024',
      image: '/hero-bg.jpg',
    },
    {
      id: 3,
      title: 'Art of layered necklace looks with style tip',
      date: 'Jul 3, 2024',
      image: '/hero-bg.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 mb-4">OUR BLOGS</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide">Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((a) => (
            <article key={a.id} className="group text-left">
              <div className="relative overflow-hidden mb-4 h-64 bg-gray-100">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-xl md:text-xl font-light text-gray-900 leading-tight">
                {a.title}
              </h3>
              <time className="block mt-2 text-sm text-gray-500">{a.date}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
