import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = '', ...rest }: Props) {
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`} {...rest}>
      {children}
    </div>
  );
}
