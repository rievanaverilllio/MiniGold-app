'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Jewelry Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left text-white max-w-lg">
          {/* Subtitle */}
          <p className="text-xs md:text-sm font-light tracking-[0.25em] uppercase mb-6 opacity-90 text-gray-200">
            NEW ARRIVALS AWAIT YOU
          </p>
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-light leading-tight mb-8">
            <span className="block font-serif text-white">Exclusive Collections</span>
            <span className="block font-serif italic text-white mt-1">Just for You</span>
          </h1>
          
          {/* CTA Button */}
          <div className="mt-10">
            <a href="/shop" className="bg-white/95 backdrop-blur-sm text-black px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white transition-all duration-300 border border-white/30 shadow-lg">
              VIEW COLLECTION
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs uppercase tracking-wide mb-2 opacity-70">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
