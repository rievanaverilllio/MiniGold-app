import React from 'react'

export default function ProductOverview() {
  return (
    <section className="mt-12 border-t border-gray-100 pt-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Product Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We blend modern sophistication with timeless elegance in every piece of jewelry. Our collections are crafted with meticulous attention to detail, using only the finest materials to ensure exceptional quality and style. Whether you're searching for a statement necklace, delicate earrings, stylish bracelets, or elegant rings, MiniGold offers a diverse selection to suit every occasion and personal style.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-10">
          <li>Every piece is crafted with precision and care, ensuring exceptional quality and durability.</li>
          <li>Explore a diverse range of designs, from classic to contemporary, tailored to complement every style and occasion.</li>
          <li>Enjoy a personalized shopping experience with expert guidance and attentive customer support.</li>
          <li>We prioritize ethical sourcing and sustainable practices to bring you jewelry you can feel good about wearing.</li>
        </ul>
      </div>
    </section>
  )
}
