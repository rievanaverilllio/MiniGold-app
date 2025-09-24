'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { getAllProducts } from '../../../../data/products';

const BestSellersSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // For now pick first 4 as best sellers (placeholder logic)
  const products = useMemo(() => {
    return getAllProducts().slice(0, 4);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 mb-4">
            EVERYONE&#39;S LOVING
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide">
            Best Sellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group cursor-pointer block"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              prefetch
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden mb-2 aspect-square">
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/30 backdrop-blur-md text-white px-6 py-2 text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-white/40 rounded-lg">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-left">
                <h3 className="text-l font-small text-gray-500 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-light tracking-wide font-small">
                  {Intl.NumberFormat('en-US', { style: 'currency', currency: product.currency }).format(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-16">
          <button className="bg-black text-white px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors duration-300 shadow-lg">
            VIEW ALL PRODUCTS
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default BestSellersSection;
