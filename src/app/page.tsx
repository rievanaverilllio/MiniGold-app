import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BestSellersSection from '@/components/BestSellersSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BestSellersSection />
      
      {/* Additional content sections can be added here */}
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Our Collections</h2>
          <p className="text-gray-600">Discover our exclusive jewelry pieces</p>
        </div>
      </section>
    </main>
  );
}
