import React from 'react'

export default function ProductDetails() {
  return (
    <aside className="md:col-span-5">
      <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
        Crystal Cascade Bracelet
      </h1>

      <p className="mt-4 text-xl md:text-2xl font-medium text-gray-800">$ 630.00 USD</p>

      <div className="mt-6 flex items-center text-xs text-gray-500 gap-6">
        <div>SKU: <span className="text-gray-700">CCB-759</span></div>
        <div className="border-l border-gray-200 pl-6">Category: <span className="text-gray-700">Bracelets</span></div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <label className="sr-only" htmlFor="qty">Quantity</label>
        <input id="qty" type="number" min={1} defaultValue={1} className="w-16 px-3 py-2 border border-gray-200 text-center rounded-sm" />

        <button className="ml-2 bg-black text-white px-6 py-3 flex items-center gap-3 text-sm tracking-wider uppercase">
          ADD TO CART
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block">
            <path stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H6.4" />
            <circle cx="10" cy="20" r="1" fill="#fff" />
            <circle cx="18" cy="20" r="1" fill="#fff" />
          </svg>
        </button>
      </div>

      <hr className="my-8 border-gray-200" />

      <div>
        <h3 className="text-base font-semibold text-gray-800">Product Info</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
          <li>Crafted with high-quality metals and genuine gemstones.</li>
          <li>Available in a variety of styles, from classic to contemporary.</li>
          <li>Comes with a limited lifetime warranty for peace of mind.</li>
        </ul>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-3 p-3 border border-gray-100">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gray-500">
            <path d="M3 7v10a2 2 0 0 0 2 2h14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="3" width="6" height="4" rx="1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="text-xs font-medium text-gray-800">Orders processed in 3-5 business days.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 border border-gray-100">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gray-500">
            <circle cx="12" cy="12" r="9" stroke="#6B7280" strokeWidth="1.5" />
            <path d="M12 7v6l3 2" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="text-xs font-medium text-gray-800">Easy returns within 30 days of purchase.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 border border-gray-100">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gray-500">
            <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 3h10v4H7z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="text-xs font-medium text-gray-800">Free shipping on all orders over $500</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
