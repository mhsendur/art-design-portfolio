'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto';
  hover?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  aspectRatio = 'auto',
  hover = true,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    auto: '',
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={cn(
        'bg-neutral-100 flex items-center justify-center text-neutral-400',
        aspectRatioClasses[aspectRatio],
        className
      )}>
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden bg-neutral-100',
        aspectRatioClasses[aspectRatio],
        className
      )}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200" />
      )}
      
      <Image
        src={src}
        alt={alt}
        fill={!width || !height}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        unoptimized={src.endsWith('.svg') || src.includes('/api/placeholder/') || src.includes('unsplash.com')}
        className={cn(
          'object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
      

    </motion.div>
  );
} 