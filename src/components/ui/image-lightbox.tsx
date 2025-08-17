'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { OptimizedImage } from './optimized-image';
import { Artwork } from '@/types';

interface ImageLightboxProps {
  images: Artwork[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: ImageLightboxProps) {
  const [isLiked, setIsLiked] = useState(false);
  const currentImage = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevious();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </>
          )}

          {/* Main content */}
          <div className="flex items-center justify-center min-h-screen p-6" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Image */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-1 max-w-4xl"
              >
                <div className="relative matisse-shape overflow-hidden shadow-2xl">
                  <OptimizedImage
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain matisse-image-border"
                    aspectRatio="auto"
                    priority
                  />
                </div>
              </motion.div>

              {/* Image Info Panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="lg:w-80 w-full space-y-6"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {currentImage.title}
                  </h2>
                  
                  

                  <div className="space-y-3 text-sm">
                    {currentImage.year && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Year</span>
                        <span className="text-white">{currentImage.year}</span>
                      </div>
                    )}
                    
                    {currentImage.medium && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Medium</span>
                        <span className="text-white">{currentImage.medium}</span>
                      </div>
                    )}
                    
                    {currentImage.dimensions && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Dimensions</span>
                        <span className="text-white">{currentImage.dimensions}</span>
                      </div>
                    )}

                    {currentImage.location && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location</span>
                        <span className="text-white">{currentImage.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                        isLiked
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      <span className="text-sm">{isLiked ? 'Liked' : 'Like'}</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white hover:bg-white/30 rounded-full transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>

                {/* Image counter */}
                {images.length > 1 && (
                  <div className="text-center text-white/80 text-sm">
                    {currentIndex + 1} of {images.length}
                  </div>
                )}

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                    {images.map((image, index) => (
                                             <button
                         key={image.slug}
                         onClick={() => {
                           const diff = index - currentIndex;
                           if (diff > 0) {
                             for (let i = 0; i < diff; i++) onNext();
                           } else if (diff < 0) {
                             for (let i = 0; i < -diff; i++) onPrevious();
                           }
                         }}
                         title={`View ${image.title}`}
                         className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                           index === currentIndex
                             ? 'ring-2 ring-white scale-110'
                             : 'opacity-60 hover:opacity-100'
                         }`}
                       >
                        <OptimizedImage
                          src={image.image}
                          alt={image.title}
                          className="w-full h-full object-cover"
                          aspectRatio="square"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 