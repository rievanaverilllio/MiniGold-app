import Image from 'next/image';

export default function ExploreCollectionSection() {
  return (
    <section className="bg-[#f7efe9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left content */}
        <div className="p-12 lg:p-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide mb-6">Explore MiniGold Today!</h2>
          <p className="text-gray-700 max-w-xl leading-relaxed mb-8">
            Explore our latest collections. Each piece is crafted with precision and designed to
            complement your unique style.
          </p>

          <a
            href="/category"
            className="inline-block px-6 py-3 border border-gray-800 text-gray-800 font-medium tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            EXPLORE COLLECTION
          </a>
        </div>

        {/* Right image */}
        <div className="relative h-72 sm:h-96 lg:h-[520px]">
          <Image src="/hero-bg.jpg" alt="Explore collection" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
