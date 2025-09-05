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
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-sm hover:bg-gray-800 hover:text-white transition-colors duration-300 tracking-wide"
      >
        BACK TO HOME
      </Link>

      {/* Optional: Get Template Button (if needed) */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 text-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          GET TEMPLATE
        </button>
      </div>
    </div>
  );
}