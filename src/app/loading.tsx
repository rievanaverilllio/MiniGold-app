
import type { CSSProperties } from 'react';

export default function Loading() {
	const text = 'Loading';
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
			{/* Large Loading Text with per-letter animation */}
			<div className="relative mb-6">
				<h1
					className="text-[80px] md:text-[120px] lg:text-[160px] font-light text-gray-200 leading-none select-none"
					style={{ WebkitTextStroke: '1px #000', color: 'transparent' }}
				>
					{Array.from(text).map((ch, idx) => (
						<span
							key={idx}
							className="loading-letter"
							style={{ ['--i']: `${idx * 0.08}s` } as CSSProperties}
							aria-hidden={ch === ' '}
						>
							{ch}
						</span>
					))}
				</h1>
			</div>

			<p className="text-gray-600 text-base max-w-md text-center">
				Please wait while we load the content.
			</p>
		</div>
	);
}
