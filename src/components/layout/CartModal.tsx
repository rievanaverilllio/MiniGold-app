"use client";

import { useEffect } from 'react';
import Image from 'next/image';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0">
      {/* transparent overlay only to capture outside clicks (no visual effect) */}
      <div className="fixed inset-0 z-[60] bg-transparent" onClick={onClose} />

  {/* Dialog: narrow vertical rectangle (standing) centered horizontally, taller height - above overlay */}
  <div role="dialog" aria-modal="true" aria-label="Your cart" className="absolute left-1/2 top-24 z-[70] transform -translate-x-1/2 w-full max-w-sm h-[70vh] bg-white rounded-lg shadow-lg overflow-auto">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-lg font-serif text-gray-900">Your Cart</h3>
          <button aria-label="close cart" onClick={onClose} className="text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-4">
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded">
                <Image src="/jewelry-1.svg" alt="thumb" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Twilight Moon Locket</p>
                <p className="text-sm text-gray-600">$ 280.00 USD</p>
                <button className="text-sm text-gray-600 mt-2 underline">Remove</button>
              </div>
              <div className="w-14">
                <input type="number" defaultValue={1} min={1} className="w-full border rounded px-1 py-1 text-sm text-center" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded">
                <Image src="/jewelry-2.svg" alt="thumb" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Crystal Cascade Bracelet</p>
                <p className="text-sm text-gray-600">$ 630.00 USD</p>
                <button className="text-sm text-gray-600 mt-2 underline">Remove</button>
              </div>
              <div className="w-14">
                <input type="number" defaultValue={1} min={1} className="w-full border rounded px-1 py-1 text-sm text-center" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 border-t bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-700">Subtotal</span>
            <span className="font-semibold text-gray-900">$ 910.00 USD</span>
          </div>
          <button className="w-full border border-gray-800 text-sm py-2 font-medium">CONTINUE TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
