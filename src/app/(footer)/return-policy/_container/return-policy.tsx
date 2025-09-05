import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 pt-10">Return Policy</h1>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Introduction</h2>
            <p className="mt-2">
              Our return policy outlines the conditions under which returns and refunds will be
              accepted. Please read carefully to understand your rights and responsibilities.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Cancellation & Refund</h2>
            <p className="mt-2">
              Orders may be cancelled within the timeframe specified at checkout. Refunds for
              cancelled orders will be issued according to the original payment method and may
              take several business days to process.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Refund Owing to Cancellation</h2>
            <p className="mt-2">
              If a cancellation is initiated by us (for example, due to stock issues), we will
              issue a full refund. If you cancel within an allowable cancellation window, a
              refund may be provided less any applicable fees as described at the time of sale.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Returns & Refunds</h2>
            <p className="mt-2">
              To request a return, contact our support team within the return window listed on
              your order. Returned items must be in original condition and packaging. Refunds
              will be processed after inspection of the returned item.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Item Damaged During Shipment</h2>
            <p className="mt-2">
              If your item arrives damaged, please keep all packaging and contact our support
              team immediately with photos of the damage. We will arrange a replacement or
              refund after validating the claim.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
