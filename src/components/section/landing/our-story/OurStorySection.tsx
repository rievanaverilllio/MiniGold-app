"use client";

import Image from 'next/image';
import Link from 'next/link';

const OurStorySection = () => {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Page Title */}
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-10">Our Story</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

					{/* Left Column: small image, subtitle, paragraphs, button */}
					<div className="space-y-8 max-w-lg">
						<div className="flex items-start gap-6">
							<div className="w-32 h-32 relative flex-shrink-0 overflow-hidden rounded-none">
								<Image src="/hero-bg.jpg" alt="small jewelry" fill className="object-cover" />
							</div>

							<div className="flex-1">
								<h2 className="text-lg text-gray-700 leading-tight">Explore our collection and find<br/>jewelry that speaks to you</h2>
							</div>
						</div>

						<div className="text-gray-600 text-sm space-y-4">
							<p>
								We are committed to providing jewelry that not only enhances your appearance but also
								stands the test of time. Our focus on durability, design, and customer satisfaction drives
								everything we do.
							</p>

							<p>
								Our jewelry is created by master artisans who bring decades of experience and passion to their craft.
							</p>
						</div>

						<div>
							<Link
								href="/shop"
								className="inline-block border border-gray-400 text-gray-700 px-6 py-2.5 text-xs font-medium tracking-[0.12em] uppercase hover:bg-gray-50 hover:border-gray-600 transition-colors duration-300"
							>
								EXPLORE COLLECTION
							</Link>
						</div>
					</div>

					{/* Right Column: large image (reduced height) */}
					<div className="relative overflow-hidden h-72 md:h-96 lg:h-[350px]">
						<Image src="/hero-bg.jpg" alt="Jewelry Model Large" fill className="object-cover" />
					</div>
				</div>

				{/* New content block: image left, text right (matches provided screenshot) */}
				<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
						<Image src="/hero-bg.jpg" alt="Boxed jewelry" fill className="object-cover" />
					</div>

					<div className="pl-0 lg:pl-12">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6">
							Discover modern elegance with our stylish jewelry collections.
						</h2>

						<div className="text-gray-600 text-sm space-y-4">
							<p>
								We understand that jewelry is more than just an accessory; it&apos;s an expression of your
								story, style, and identity. We are dedicated to bringing you the finest in modern and
								stylish jewelry, meticulously crafted to complement your unique personality.
							</p>

							<p>
								Starting from a small workshop, we have grown into a beloved brand known for our
								dedication to quality, innovation, and customer satisfaction.
							</p>
						</div>

						<div className="mt-6">
							<Link
								href="/shop"
								className="inline-block border border-gray-400 text-gray-700 px-6 py-2.5 text-xs font-medium tracking-[0.12em] uppercase hover:bg-gray-50 hover:border-gray-600 transition-colors duration-300"
							>
								EXPLORE MORE
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurStorySection;

