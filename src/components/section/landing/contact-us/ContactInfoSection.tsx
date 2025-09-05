"use client";

import Image from 'next/image';

export default function ContactInfoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: text and addresses */}
          <div>
            <h2 className="text-3xl font-medium mb-6 text-gray-900">Contact Information</h2>

            <p className="text-sm text-gray-600 mb-8">
              Visit any of our locations to experience our collections in person. Our friendly and knowledgeable staff are here to help you find the perfect piece of jewelry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm text-gray-700 font-semibold uppercase tracking-wider flex items-center gap-3">
                  <span className="inline-flex w-6 h-6 items-center justify-center text-xs ">📍</span>
                  CALIFORNIA, USA
                </h3>

                <address className="not-italic mt-2 text-sm text-gray-700">
                  3891 Ranchview Dr. Richardson,
                  <br /> California 62639
                </address>

                <div className="mt-3 text-sm text-gray-700">
                  <a className="underline" href="mailto:minigold@support.com">minigold@support.com</a>
                  <span className="mx-2">·</span>
                  <a className="underline" href="tel:+4805550103">+(480) 555-0103</a>
                </div>
              </div>

              <div>
                <h3 className="text-gray-700 text-sm font-semibold uppercase tracking-wider flex items-center gap-3">
                  <span className="inline-flex w-6 h-6 items-center justify-center text-xs">📍</span>
                  NEW MEXICO, USA
                </h3>

                <address className="not-italic mt-2 text-sm text-gray-700">
                  4140 Parker Rd. Allentown, New Mexico
                  <br /> 31134
                </address>

                <div className="mt-3 text-sm text-gray-700">
                  <a className="underline" href="mailto:minigold@support.com">minigold@support.com</a>
                  <span className="mx-2">·</span>
                  <a className="underline" href="tel:+6715550110">+(671) 555-0110</a>
                </div>
              </div>
            </div>

            <div className="pt-6 text-gray-700 border-t">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700 font-medium">Follow us</span>

                <div className="flex items-center gap-3 ml-4">
                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.737 2.816c-.267 1.02-.992 2.3-1.474 3.081C9.587 23.746 10.778 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </a>

                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-80 lg:h-96 overflow-hidden rounded-sm">
              <Image src="/hero-bg.jpg" alt="contact photo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
