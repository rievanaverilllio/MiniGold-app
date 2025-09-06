
'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExploreCollectionSection from '@/components/section/landing/shop/ExploreCollectionSection';
import LatestProductsSection from '@/components/section/landing/shop/LatestProductsSection';

export default function OurStory() {
	return (
		<>
			<Navbar />
			<LatestProductsSection />
            <ExploreCollectionSection />
			<Footer />
		</>
	);
}
