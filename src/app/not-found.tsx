import Link from 'next/link';

export default function NotFound() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Large 404 Text */}
      <div className="relative mb-6">
        <h1
          className="text-[120px] md:text-[180px] lg:text-[220px] font-light text-gray-200 leading-none select-none"
          style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
        >
          404
        </h1>
      </div>

      {/* Error Message */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-3">
          We lost that page...
        </h2>
        <p className="text-gray-600 text-base max-w-md mx-auto">
          Sorry, the page you are looking for does&#39;t exist or has been moved.
        </p>
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-sm hover:bg-gray-800 hover:text-white transition-colors duration-300 tracking-wide"
      >
        BACK TO HOME
      </Link>
    </div>
  );
}