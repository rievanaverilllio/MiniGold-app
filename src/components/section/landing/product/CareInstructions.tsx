import React from 'react'

export default function CareInstructions() {
  return (
    <section className="mt-8">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Care Instructions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Store your jewelry in a cool, dry place away from sunlight and humidity. Regularly clean your jewelry using a soft, lint-free cloth to remove oils, dirt, and fingerprints. For deeper cleaning, use a mild soap diluted in lukewarm water and a soft brush to gently scrub the surface. Rinse thoroughly and pat dry with a clean cloth.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Keep your jewelry in a cool, dry place away from sunlight and moisture.</li>
          <li>Remove jewelry before swimming, showering, or using household cleaners.</li>
          <li>Inspect settings periodically and seek professional cleaning annually.</li>
          <li>Avoid contact with perfumes, lotions, and hairsprays to preserve finishes and gemstones.</li>
        </ul>
      </div>
    </section>
  )
}
