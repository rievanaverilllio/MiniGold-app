'use client';

import Image from 'next/image';

const StoreSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Card Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Left Side - Store Information */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Our Store
              </h2>
              
              <div className="space-y-3 text-gray-600 mb-6">
                <p className="text-base">
                  6391 Elgin St. Celina, Delaware 10299
                </p>
                
                <p className="text-base">
                  info@example.com
                </p>
                
                <p className="text-base">
                  +(480) 555-0103
                </p>
              </div>
              
              {/* Visit Store Button */}
              <div>
                <a href="/store"className="border border-gray-400 text-gray-700 px-6 py-2.5 text-xs font-medium tracking-[0.1em] uppercase hover:bg-gray-50 hover:border-gray-600 transition-colors duration-300">
                  VISIT STORE
                </a>
              </div>
            </div>

            {/* Right Side - Store Image */}
            <div className="relative h-80 lg:h-106 lg:col-span-2">
              <Image
                src="/hero-bg.jpg"
                alt="Our Store Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
