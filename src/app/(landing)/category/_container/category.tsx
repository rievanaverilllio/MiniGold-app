import CategoriesSection from '@/components/section/landing/category/CategoriesSection';
import FAQSection from '@/components/section/landing/category/FAQSection';
import ExploreCollectionSection from '@/components/section/landing/category/ExploreCollectionSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';



export default function CategoryContainer() {
	return (
		<>
            <Navbar />
            <CategoriesSection />
            <FAQSection />
            <ExploreCollectionSection />
            <Footer />
		</>
	);
};