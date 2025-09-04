import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BestSellersSection from '@/components/BestSellersSection';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import CategoriesSection from '@/components/CategoriesSection';
import LatestProductsSection from '@/components/LatestProductsSection';
import ServicesSection from '@/components/ServicesSection';
import StoreSection from '@/components/StoreSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BestSellersSection />
      <AboutSection />
      <PartnersSection />
      <CategoriesSection />
      <LatestProductsSection />
      <ServicesSection />
      <StoreSection />
      <Footer />
    </main>
  );
}
