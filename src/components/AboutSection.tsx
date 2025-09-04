'use client';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Image and Statistics */}
          <div className="space-y-8">
            {/* Left Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/hero-bg.jpg"
                alt="Jewelry Collection"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Find something new in
              <br />
              every <span className="font-medium">MiniGold</span> collection
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              We are passionate about modern & stylish jewelry. We specialize in offering a curated selection of modern & stylish jewelry that reflects elegance.
            </p>

            <div className="pt-3">
              <a href="/" className="border border-gray-400 text-gray-700 px-6 py-2.5 text-xs font-medium tracking-[0.1em] uppercase hover:bg-gray-50 hover:border-gray-600 transition-colors duration-300">
                ABOUT US
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="/hero-bg.jpg"
              alt="Jewelry Model"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
