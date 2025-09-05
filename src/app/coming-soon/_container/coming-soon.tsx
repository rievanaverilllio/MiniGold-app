export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl text-center py-16">
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-serif font-extrabold text-black leading-snug">
          Coming Soon
        </h1>

        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Our website is currently undergoing scheduled maintenance. We
          should be back shortly.
        </p>

        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-serif text-black">Contact us for any inquiry</h3>
          <p className="mt-3 text-gray-600">minigold@support.com</p>
        </div>
      </div>
    </div>
  );
}
