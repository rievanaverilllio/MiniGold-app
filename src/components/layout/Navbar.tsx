'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CartModal from './CartModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mengecek apakah sudah scroll melewati tinggi viewport (hero section)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      if (scrollPosition > heroHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Throttle scroll event untuk performa yang lebih baik
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedHandleScroll);
    return () => window.removeEventListener('scroll', optimizedHandleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out transform ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border border-gray-200 rounded-[40px] mx-3 mt-3 shadow-xl scale-[0.98]' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-100 scale-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-700 ease-out ${
          isScrolled ? 'h-14 py-2' : 'h-16 py-3'
        }`}>
          {/* Logo */}
          <Link href="/" className={`flex items-center space-x-1 text-black tracking-wider transition-all duration-700 ease-out transform ${
            isScrolled ? 'text-xl scale-95' : 'text-2xl scale-100'
          }`}>
            <div className={`relative transition-all duration-700 ease-out ${
              isScrolled ? 'w-10 h-10' : 'w-12 h-12'
            }`}>
              <Image
                src="/logo-minigold-removebg.png"
                alt="MiniGold Logo"
                fill
                className="object-contain"
              />
            </div>
            <span>MiniGold</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-700 ease-out ${
            isScrolled ? 'space-x-6 transform scale-95' : 'space-x-8 transform scale-100'
          }`}>
            <Link 
              href="/shop" 
              className={`text-gray-700 hover:text-black transition-all duration-500 font-medium transform hover:scale-105 ${
                isScrolled ? 'text-sm opacity-90' : 'text-base opacity-100'
              }`}
            >
              Shop
            </Link>
            <Link 
              href="/our-story" 
              className={`text-gray-700 hover:text-black transition-all duration-500 font-medium transform hover:scale-105 ${
                isScrolled ? 'text-sm opacity-90' : 'text-base opacity-100'
              }`}
            >
              Our Story
            </Link>
            <Link 
              href="/category" 
              className={`text-gray-700 hover:text-black transition-all duration-500 font-medium transform hover:scale-105 ${
                isScrolled ? 'text-sm opacity-90' : 'text-base opacity-100'
              }`}
            >
              Category
            </Link>
            <Link 
              href="/contact-us" 
              className={`text-gray-700 hover:text-black transition-all duration-500 font-medium transform hover:scale-105 ${
                isScrolled ? 'text-sm opacity-90' : 'text-base opacity-100'
              }`}
            >
              Contact
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                aria-expanded={isResourcesOpen}
                className={`text-gray-700 hover:text-black transition-all duration-500 font-medium flex items-center transform hover:scale-105 ${
                  isScrolled ? 'text-sm opacity-90' : 'text-base opacity-100'
                }`}
              >
                Resources
                <svg className={`ml-1 transition-all duration-500 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown (desktop): open only when isResourcesOpen is true; dropdown itself keeps open on hover */}
              <div
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className={`absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                  isResourcesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-2">
                  <Link href="/blogs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Blogs</Link>
                  <Link href="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Reviews</Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">FAQ</Link>
                  <Link href="/changelog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Change Log</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className={`hidden md:flex items-center transition-all duration-700 ease-out transform ${
            isScrolled ? 'space-x-3 scale-95' : 'space-x-4 scale-100'
          }`}>
            <button className="text-gray-700 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <svg className={`transition-all duration-500 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-black transition-all duration-300 transform hover:scale-110">
              <svg className={`transition-all duration-500 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
      <button onClick={() => setIsCartOpen(true)} className="text-gray-700 hover:text-black transition-all duration-300 transform hover:scale-110 relative">
              <svg className={`transition-all duration-500 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5v5m4-5v5" />
              </svg>
              {/* Cart badge */}
              <span className={`absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs transition-all duration-500 ${
                isScrolled ? 'w-3 h-3 text-[8px]' : 'w-4 h-4 text-[10px]'
              } flex items-center justify-center`}>
        2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-gray-700 hover:text-black transition-all duration-500 transform hover:scale-110 ${
              isMenuOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <svg className={`transition-all duration-500 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className={`px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 transition-all duration-700 ease-out ${
              isScrolled ? 'rounded-b-[30px] mx-2 shadow-lg' : ''
            }`}>
              <Link href="/shop" className="block px-3 py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg transform hover:scale-105">
                Shop
              </Link>
              <Link href="/our-story" className="block px-3 py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg transform hover:scale-105">
                Our Story
              </Link>
              <Link href="/category" className="block px-3 py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg transform hover:scale-105">
                Category
              </Link>
              <Link href="/contact-us" className="block px-3 py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg transform hover:scale-105">
                Contact
              </Link>
              <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg transform hover:scale-105">
                Resources
              </Link>
            </div>
          </div>
        )}
      </div>
  <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
