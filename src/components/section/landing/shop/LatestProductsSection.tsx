'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const LatestProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: "Amethyst Dragonfly Brooch",
      price: "$ 650.70 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 2,
      name: "Classic Zirconia Elegance",
      price: "$ 330.90 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 3,
      name: "Eternal Elegance Bracelet",
      price: "$ 460.30 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 4,
      name: "Classic Solitaire Earrings",
      price: "$ 120.90 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 5,
      name: "Diamond Infinity Chain",
      price: "$ 780.50 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 6,
      name: "Rose Gold Tennis Bracelet",
      price: "$ 925.40 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 7,
      name: "Vintage Pearl Drops",
      price: "$ 340.20 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 8,
      name: "Sapphire Halo Ring",
      price: "$ 1,250.90 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 9,
      name: "Emerald Cascade Pendant",
      price: "$ 895.00 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 10,
      name: "Opal Dream Ring",
      price: "$ 410.25 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 11,
      name: "Helios Cuff Bracelet",
      price: "$ 1,150.75 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 12,
      name: "Luna Knot Necklace",
      price: "$ 299.99 USD",
      image: "/hero-bg.jpg",
    },
    {
      id: 13,
      name: "Aurora Studs",
      price: "$ 220.00 USD",
      image: "/hero-bg.jpg",
    },
  ];

  const pageSize = 8; // products per page (4 columns × 2 rows on md+ screens)
  const pageCount = Math.max(1, Math.ceil(products.length / pageSize));
  const visibleProducts = products.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-left mb-16 pt-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide">
            Latest Products
          </h2>
        </div>

        {/* Products Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden mb-6 aspect-square">
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30 rounded-full">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-left">
                <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-medium tracking-wide">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="text-center mt-16 flex items-center justify-end gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page <= 0}
            className={`border border-gray-400 text-gray-700 px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-200 rounded ${
              page <= 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50 hover:border-gray-600'
            }`}
            aria-label="Previous products page"
          >
            Previous
          </button>

          <div className="text-xs text-gray-600 font-medium tracking-wide">
            Page {page + 1} of {pageCount}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page >= pageCount - 1}
            className={`border border-gray-400 text-gray-700 px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-200 rounded ${
              page >= pageCount - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50 hover:border-gray-600'
            }`}
            aria-label="Next products page"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProductsSection;
