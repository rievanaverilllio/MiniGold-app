import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/section/landing/home/HeroSection';
import BestSellersSection from '@/components/section/landing/home/BestSellersSection';
import AboutSection from '@/components/section/landing/home/AboutSection';
import PartnersSection from '@/components/section/landing/home/PartnersSection';
import CategoriesSection from '@/components/section/landing/home/CategoriesSection';
import LatestProductsSection from '@/components/section/landing/home/LatestProductsSection';
import ServicesSection from '@/components/section/landing/home/ServicesSection';
import StoreSection from '@/components/section/landing/home/StoreSection';
import LatestArticlesSection from '@/components/section/landing/home/LatestArticlesSection';
import Footer from '@/components/layout/Footer';

export default function HomeContainer() {
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
      <LatestArticlesSection />
      <StoreSection />
      <Footer />
    </main>
  );
}
