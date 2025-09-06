"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function LatestArticlesSection() {
  const articles = [
    { id: 1, title: 'How to maintain and care for your jewelry', date: 'Jul 3, 2024', image: '/hero-bg.jpg' },
    { id: 2, title: 'Choose the perfect gemstones for yourself', date: 'Jul 10, 2024', image: '/hero-bg.jpg' },
    { id: 3, title: 'Art of layered necklace looks with style tip', date: 'Jul 17, 2024', image: '/hero-bg.jpg' },
    { id: 4, title: 'Top 10 gold trends this season', date: 'Aug 1, 2024', image: '/hero-bg.jpg' },
    { id: 5, title: 'How to size your rings correctly', date: 'Aug 8, 2024', image: '/hero-bg.jpg' },
    { id: 6, title: 'Caring for pearls: dos and don\'ts', date: 'Aug 15, 2024', image: '/hero-bg.jpg' },
    { id: 7, title: 'Mixing metals: when it works', date: 'Aug 22, 2024', image: '/hero-bg.jpg' },
    { id: 8, title: 'Sapphire vs. diamond: what to choose', date: 'Aug 29, 2024', image: '/hero-bg.jpg' },
    { id: 9, title: 'Everyday jewelry that elevates your outfit', date: 'Sep 5, 2024', image: '/hero-bg.jpg' },
    { id: 10, title: 'How to store your jewelry at home', date: 'Sep 12, 2024', image: '/hero-bg.jpg' },
    { id: 11, title: 'Statement earrings for special occasions', date: 'Sep 19, 2024', image: '/hero-bg.jpg' },
    { id: 12, title: 'Minimalist necklace guide', date: 'Sep 26, 2024', image: 'hero-bg.jpg' },
    { id: 13, title: 'Budget-friendly gemstone picks', date: 'Oct 3, 2024', image: 'hero-bg.jpg' },
    { id: 14, title: 'How to evaluate gemstone quality', date: 'Oct 10, 2024', image: 'hero-bg.jpg' },
    { id: 15, title: 'Choosing jewelry for gifting', date: 'Oct 17, 2024', image: 'hero-bg.jpg' },
    { id: 16, title: 'Bridal jewelry trends', date: 'Oct 24, 2024', image: 'hero-bg.jpg' },
    { id: 17, title: 'Cleaning tips for oxidized silver', date: 'Oct 31, 2024', image: 'hero-bg.jpg' },
    { id: 18, title: 'How to authenticate precious metals', date: 'Nov 7, 2024', image: 'hero-bg.jpg' },
  ];

  const ITEMS_PER_PAGE = 6; // 3 cols x 2 rows
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = articles.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 mb-4">OUR BLOGS</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide">Latest Articles</h2>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visible.map((a) => (
            <article key={a.id} className="group text-left">
              <div className="relative overflow-hidden mb-4 h-64 bg-gray-100">
                <Image src={a.image} alt={a.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>

              <h3 className="mt-2 text-lg md:text-lg font-light text-gray-900 leading-tight">{a.title}</h3>
              <time className="block mt-1 text-sm text-gray-500">{a.date}</time>
            </article>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-end gap-4 mt-8 pt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border rounded-md text-sm text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>

          <div className="text-sm text-gray-700">
            Page {page} of {pageCount}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="px-4 py-2 border rounded-md text-sm text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
