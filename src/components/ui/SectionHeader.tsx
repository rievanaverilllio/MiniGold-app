import React from 'react';

interface Props {
  pretitle?: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ pretitle, title, className = '' }: Props) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {pretitle && (
        <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 mb-4">{pretitle}</p>
      )}
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide">{title}</h2>
    </div>
  );
}
