import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
}

export default function Button({ children, variant = 'primary', className = '', ...rest }: Props) {
  const base = 'inline-flex items-center justify-center rounded-lg font-medium';
  const variants: Record<string, string> = {
    primary: 'bg-black text-white px-6 py-3',
    ghost: 'bg-white/80 text-black px-6 py-3',
    outline: 'border border-gray-300 text-gray-700 px-6 py-2.5'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
