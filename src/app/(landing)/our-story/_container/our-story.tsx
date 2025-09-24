
'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OurStorySection from '@/components/section/landing/our-story/OurStorySection';
import ServicesSection from '@/components/section/landing/contact-us/ServicesSection';
import FAQSection from '@/components/section/landing/contact-us/FAQSection';
import LatestArticlesSection from '@/components/section/landing/our-story/LatestArticlesSection';
import ExploreCollectionSection from '@/components/section/landing/faq/ExploreCollectionSection';

export default function OurStory() {
	return (
		<>
			<Navbar />
			<OurStorySection />
            <ServicesSection />
            <LatestArticlesSection />
            <FAQSection />
            <ExploreCollectionSection />
			<Footer />
		</>
	);
}
