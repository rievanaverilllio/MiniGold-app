
import ContactInfoSection from '@/components/section/landing/contact-us/ContactInfoSection';
import ContactUsSection from '@/components/section/landing/contact-us/ContactUsSection';
import ServicesSection from '@/components/section/landing/contact-us/ServicesSection';
import FAQSection from '@/components/section/landing/contact-us/FAQSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactUsContainer() {
	return (
		<>
            <Navbar />
			<ContactUsSection />
			<ContactInfoSection />
            <ServicesSection />
            <FAQSection />
            <Footer />
		</>
	);
}

