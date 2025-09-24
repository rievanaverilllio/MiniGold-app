"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { getAllArticles } from '@/data/articles';

export default function LatestArticlesSection() {
  const ITEMS_PER_PAGE = 6; // 3 cols x 2 rows
  const [page, setPage] = useState(1);

  const allArticles = useMemo(() => getAllArticles(), []);
  const pageCount = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = allArticles.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 mb-4">OUR BLOGS</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide">Latest Articles</h2>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visible.map((a) => {
            const dateLabel = new Date(a.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
            return (
              <Link key={a.id} href={`/blogs/${a.id}`} className="group text-left block" prefetch>
                <div className="relative overflow-hidden mb-4 h-64 bg-gray-100">
                  <Image src={a.image} alt={a.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="mt-2 text-lg md:text-lg font-light text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">{a.title}</h3>
                <time className="block mt-1 text-sm text-gray-500">{dateLabel}</time>
              </Link>
            );
          })}
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
