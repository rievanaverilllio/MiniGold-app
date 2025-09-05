import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Changelog() {
  const releases = [
    {
      version: 'v1.2.0',
      date: 'Aug 12, 2025',
      changes: [
        'Added Latest Articles section to home.',
        'Improved 404 and coming-soon pages styling.',
      ],
    },
    {
      version: 'v1.1.0',
      date: 'Jul 03, 2025',
      changes: [
        'Introduced licensing, return policy and privacy pages.',
        'Added basic footer routes and legal content.',
      ],
    },
    {
      version: 'v1.0.0',
      date: 'Jun 15, 2025',
      changes: ['Initial site scaffold and homepage sections.'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 pt-10">Changelog</h1>

        <div className="space-y-8">
          {releases.map((r) => (
            <div key={r.version}>
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-medium text-gray-900">{r.version}</h2>
                <time className="text-sm text-gray-500">{r.date}</time>
              </div>

              <ul className="mt-3 list-disc list-inside text-gray-700">
                {r.changes.map((c, i) => (
                  <li key={i} className="mt-1">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
