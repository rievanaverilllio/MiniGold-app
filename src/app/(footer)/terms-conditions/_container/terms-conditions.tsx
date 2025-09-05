import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsConditions() {
  return (
    
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 pt-10">Terms & Conditions</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900">A. Termination</h2>
            <p className="mt-2 text-gray-600">
              We reserve the right to suspend or terminate access to the service at any time,
              with or without cause or notice, including for violation of these Terms. Termination
              will not relieve you of obligations incurred prior to termination.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-900">B. User Accounts</h2>
            <p className="mt-2 text-gray-600">
              Users may be required to create an account to access certain features. You agree to
              provide accurate information and to keep your credentials secure. You are responsible
              for all activity on your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-900">C. Usage and Access</h2>
            <p className="mt-2 text-gray-600">
              Your access to and use of the service must comply with all applicable laws and these
              Terms. You must not use the service for unlawful purposes or to transmit harmful
              content, malware, or spam.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-900">D. Payment and Billing</h2>
            <p className="mt-2 text-gray-600">
              If the service requires payment, you agree to provide current, complete, and accurate
              billing information. Fees are non-refundable except as required by law or as stated
              otherwise in these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-900">E. Data Privacy & Security</h2>
            <p className="mt-2 text-gray-600">
              We take reasonable measures to protect your data, but cannot guarantee absolute
              security. Our Privacy Policy describes how we collect and process your personal data.
              By using the service you consent to such processing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-900">F. Intellectual Property</h2>
            <p className="mt-2 text-gray-600">
              All content provided by the service, including text, images, trademarks, and logos,
              is owned by or licensed to us. You may not reproduce or distribute our content
              without prior written permission, except as expressly permitted by these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-900">G. Cancellation Policy</h2>
            <p className="mt-2 text-gray-600">
              You may cancel subscriptions or services according to the cancellation terms provided
              at the time of purchase. Cancellation may take effect at the end of the current
              billing period and refunds will be processed according to our refund policy.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
