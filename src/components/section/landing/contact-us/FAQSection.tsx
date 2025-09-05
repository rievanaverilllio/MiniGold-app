"use client";

import { useState } from 'react';

type Item = { q: string; a: string };

export default function FAQSection() {
  const faqs: Item[] = [
    {
      q: 'Can you help with content creation for websites and marketing materials?',
      a: 'Yes — we offer content creation services including product descriptions, homepage copy, campaign copy and basic imagery guidance to match your brand voice.',
    },
    {
      q: 'Can I change or cancel my order after it has been placed?',
      a: 'Orders can be changed or canceled within 24 hours of placement. Please contact support with your order number to request a modification.',
    },
    {
      q: 'Can I combine multiple promotions or discounts on a single order?',
      a: 'Generally only one promotion can be applied per order. Some exclusions may apply — check the terms of each promotion at checkout.',
    },
    {
      q: 'How can I stay updated on new collections and promotions?',
      a: 'Subscribe to our newsletter and follow us on social media to be the first to hear about new drops and exclusive offers.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept major credit cards, PayPal, and selected local payment methods depending on your region.',
    },
    {
      q: 'Do you offer international shipping?',
      a: 'Yes — we ship internationally. Shipping times and rates vary by destination and will be shown at checkout.',
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 text-center">FAQ'S</p>
        <h1 className="text-3xl md:text-3xl font-light mb-12 text-gray-900 pt-8 text-center">Frequently Asked Questions</h1>

        <div className="max-w-2xl mx-auto">
          <div className="border-t border-b divide-y">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="py-6">
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="text-base md:text-lg text-gray-900 text-left flex-1 pr-4"
                      aria-expanded={isOpen}
                    >
                      {item.q}
                    </button>

                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-label={isOpen ? 'Collapse' : 'Expand'}
                      className={`w-9 h-9 flex items-center justify-center text-xl text-gray-800 transition-transform ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
