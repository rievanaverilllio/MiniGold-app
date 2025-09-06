import Image from 'next/image'
import React from 'react'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import ProductHero from '../../../components/section/landing/product/ProductHero'
import ProductOverview from '../../../components/section/landing/product/ProductOverview'
import CareInstructions from '../../../components/section/landing/product/CareInstructions'

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-24">
      <ProductHero />
      <ProductOverview />
      <CareInstructions />
      </main>
      <Footer />
    </>
  )
}
