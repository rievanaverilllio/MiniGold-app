'use client';

import Image from 'next/image';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Bracelets",
      image: "/hero-bg.jpg"
    },
    {
      id: 2,
      name: "Necklaces",
      image: "/hero-bg.jpg"
    },
    {
      id: 3,
      name: "Chains",
      image: "/hero-bg.jpg"
    },
    {
      id: 4,
      name: "Rings",
      image: "/hero-bg.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 mb-4">
            ENDLESS OPTIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide">
            Our Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-medium tracking-wide">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
