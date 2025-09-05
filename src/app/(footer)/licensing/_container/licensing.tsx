import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Licensing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 pt-10">Licensing</h1>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Overview</h2>
            <p className="mt-2">
              This page describes the licensing terms under which our content, code, and
              assets are provided. By using our site or downloading materials, you agree to
              comply with these licensing terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">License Grant</h2>
            <p className="mt-2">
              We grant you a limited, non-exclusive, non-transferable license to use the
              content for personal, non-commercial purposes unless a separate commercial
              license is obtained. Any use beyond the license granted here requires prior
              written permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Restrictions</h2>
            <p className="mt-2">
              You may not reproduce, distribute, modify, create derivative works, publicly
              display, or otherwise exploit our content for commercial purposes without a
              proper license. Removing attributions or licensing notices is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Third-party Components</h2>
            <p className="mt-2">
              Some parts of the site may include third-party libraries or assets licensed
              under their own terms. You are responsible for complying with those licenses
              where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Termination</h2>
            <p className="mt-2">
              We may revoke any license granted here at any time if you breach these terms.
              Upon termination, you must cease all use of the licensed content and delete
              any copies in your possession.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Contact</h2>
            <p className="mt-2">
              For licensing inquiries or to request permission for uses not covered here,
              please contact us at <a className="text-blue-600" href="mailto:minigold@support.com">minigold@support.com</a>.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
