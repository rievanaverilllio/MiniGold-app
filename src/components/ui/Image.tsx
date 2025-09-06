"use client";

import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type Props = Omit<NextImageProps, 'src'> & {
  src: string;
  alt?: string;
};

export default function Image({ src, alt = '', className = '', ...rest }: Props) {
  return (
    <NextImage src={src} alt={alt} className={className} {...rest} />
  );
}
