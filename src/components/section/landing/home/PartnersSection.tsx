'use client';

import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    {
      name: "Lightbox",
      logo: "/partners/lightbox.svg"
    },
    {
      name: "FeatherDev",
      logo: "/partners/featherdev.svg"
    },
    {
      name: "Acme Corp",
      logo: "/partners/acme.svg"
    },
    {
      name: "CloudWatch",
      logo: "/partners/cloudwatch.svg"
    },
    {
      name: "Capsule",
      logo: "/partners/capsule.svg"
    }
  ];

  return (
    <section className="py-16 bg-[#f7efe9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
              Trusted Partners
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Explore our selection of top brands
              <br />
              known for quality & style.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 hover:bg-white rounded-lg transition-colors duration-300 cursor-pointer group"
                >
                  <div className="relative w-32 h-16 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
