import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BestSellersSection from '@/components/BestSellersSection';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import CategoriesSection from '@/components/CategoriesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BestSellersSection />
      <AboutSection />
      <PartnersSection />
      <CategoriesSection />
    </main>
  );
}
