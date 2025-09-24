import React from 'react'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import CareInstructions from '../../../components/section/landing/product/CareInstructions'
import { getProductById } from '../../../data/products'

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const numericId = Number(params.id)
  if (Number.isNaN(numericId)) {
    notFound()
  }

  const product = getProductById(numericId)
  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative w-full aspect-square overflow-hidden rounded-md bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-light mb-4 tracking-wide text-gray-900">
              {product.name}
            </h1>
            {product.category && (
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-6">{product.category}</p>
            )}
            <p className="text-gray-700 leading-relaxed mb-8 max-w-prose">
              {product.description}
            </p>
            <div className="text-2xl font-medium tracking-wide text-gray-900 mb-8">
              {Intl.NumberFormat('en-US', { style: 'currency', currency: product.currency }).format(product.price)}
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors">Add to Cart</button>
              <button className="px-8 py-3 border border-gray-400 text-sm tracking-[0.15em] uppercase hover:bg-gray-50 transition-colors">Wishlist</button>
            </div>
          </div>
        </div>

        {/* Additional section placeholder (keeping previous structure minimal) */}
        <div className="mt-24">
          <CareInstructions />
        </div>
      </main>
      <Footer />
    </>
  )
}
