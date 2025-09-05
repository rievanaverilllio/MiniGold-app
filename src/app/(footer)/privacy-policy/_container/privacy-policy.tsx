import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 py-16">
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 pt-10">Privacy Policy</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Introduction</h2>
            <p className="mt-2">
              This Privacy Policy explains how we collect, use, disclose, and protect your
              personal information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Data We Collect</h2>
            <p className="mt-2">
              We may collect personal information you provide directly (such as name, email,
              shipping address, and payment details), as well as technical data collected
              automatically (such as IP address, device type, and browsing behaviour).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">How We Use Your Data</h2>
            <p className="mt-2">
              Your information is used to provide and improve our services, process orders,
              communicate with you, personalise content, and for fraud prevention and security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Sharing & Disclosure</h2>
            <p className="mt-2">
              We may share your data with service providers who perform services on our
              behalf (payment processors, shipping partners), and when required by law.
              We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Cookies & Tracking</h2>
            <p className="mt-2">
              We use cookies and similar technologies to remember preferences, analyse site
              usage, and support advertising. You can control cookies through your browser
              settings, but disabling cookies may affect site functionality.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Your Rights</h2>
            <p className="mt-2">
              Depending on your jurisdiction, you may have rights to access, correct, or
              delete your personal data, and to object to or restrict certain processing.
              Contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Security</h2>
            <p className="mt-2">
              We implement reasonable measures to protect your data, but no method of
              transmission or storage is 100% secure. Report any suspected data breaches to
              our support team immediately.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Changes to this Policy</h2>
            <p className="mt-2">
              We may update this policy from time to time. We will post changes on this page
              with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Contact</h2>
            <p className="mt-2">
              For privacy questions, please contact us at <a className="text-blue-600" href="mailto:minigold@support.com">minigold@support.com</a>.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
