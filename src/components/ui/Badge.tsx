import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: Props) {
  return (
    <span className={`inline-block bg-gray-100 text-gray-800 px-2 py-1 text-xs rounded ${className}`}>
      {children}
    </span>
  );
}
