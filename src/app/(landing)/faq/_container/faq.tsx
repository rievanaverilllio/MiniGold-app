import FAQSection from '@/components/section/landing/faq/FAQSection';
import ExploreCollectionSection from '@/components/section/landing/faq/ExploreCollectionSection';
import LatestArticlesSection from '@/components/section/landing/faq/LatestArticlesSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function FAQ() {
	return (
		<>
			<Navbar />
			<FAQSection />
            <LatestArticlesSection />
            <ExploreCollectionSection />
			<Footer />
		</>
	);
}

