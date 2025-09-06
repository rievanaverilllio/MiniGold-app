import Image from 'next/image'
import React from 'react'

export default function ProductMedia() {
  return (
    <section className="md:col-span-7">
      <div className="bg-[#f7f6f5] flex items-center justify-center h-full min-h-[500px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-[520px] h-[520px]">
            <Image
              src="/jewelry-2.svg"
              alt="Product image"
              fill
              className="object-contain"
              priority
            />

            <button
              aria-label="expand gallery"
              className="absolute bottom-6 right-6 w-10 h-10 bg-[#eadfd4] text-gray-700 rounded-full flex items-center justify-center shadow-sm border border-transparent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block">
                <path d="M12 5v14M5 12h14" stroke="#6B5546" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
