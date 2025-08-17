'use client';

import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Artwork } from '@/types';
import { useState } from 'react';

interface GalleryGridProps {
  items: Artwork[];
  type: 'photo' | 'oil' | 'illustration';
}

export function GalleryGrid({ items, type }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % items.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {items.map((artwork, index) => (
        <motion.div
          key={artwork.slug}
          variants={item}
          whileHover={{ 
            y: -4,
            scale: 1.02
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            duration: 0.3
          }}
          className={`group relative overflow-hidden transition-all duration-300 cursor-pointer ${
            type === 'photo' ? 'aspect-[3/2]' :
            type === 'oil' ? 'aspect-[4/5]' :
            'aspect-square'
          }`}
          onClick={() => openLightbox(index)}
        >
          <OptimizedImage
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            aspectRatio={
              type === 'photo' ? 'landscape' :
              type === 'oil' ? 'portrait' :
              'square'
            }
          />
          
          {/* Elegant overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-white font-bold text-lg mb-2"
              >
                {artwork.title}
              </motion.h3>
              <div className="space-y-1">
                {artwork.medium && (
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-200 text-sm"
                  >
                    {artwork.medium}
                  </motion.p>
                )}
                {artwork.location && (
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-gray-300 text-xs"
                  >
                    {artwork.location}
                  </motion.p>
                )}
              </div>
            </div>
          </div>

          {/* View icon on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
              <svg 
                className="w-4 h-4 text-gray-800" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
      
      <ImageLightbox
        images={items}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </motion.div>
  );
} 