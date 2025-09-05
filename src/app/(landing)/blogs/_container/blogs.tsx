import Navbar from '@/components/layout/Navbar';
import LatestArticlesSection from '@/components/section/landing/blogs/LatestArticlesSection';
import Footer from '@/components/layout/Footer';
import ExploreCollectionSection from '@/components/section/landing/blogs/ExploreCollectionSection';

export default function HomeContainer() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LatestArticlesSection />
      <ExploreCollectionSection />
      <Footer />
    </main>
  );
}
