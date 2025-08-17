'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Rotating outer ring */}
      <motion.div
        className={`absolute inset-0 border-2 border-artistic/20 border-t-artistic rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating dots in Matisse style */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${dotSizes[size]} rounded-full`}
          style={{
            background: `linear-gradient(45deg, 
              ${i === 0 ? '#ff6b6b, #ff8e8e' : ''}
              ${i === 1 ? '#4ecdc4, #7ed7d1' : ''}
              ${i === 2 ? '#ffe66d, #ffef96' : ''}
              ${i === 3 ? '#a8e6cf, #c7eed8' : ''}
            )`,
            top: i === 0 || i === 1 ? '10%' : '75%',
            left: i === 0 || i === 3 ? '10%' : '75%',
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Central pulsing core */}
      <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${dotSizes[size]} bg-artistic rounded-full`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Alternative organic loading animation
export function OrganicLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-4 h-4 bg-artistic rounded-full"
          style={{
            borderRadius: i === 0 ? '60% 40% 30% 70%' : 
                         i === 1 ? '40% 60% 70% 30%' : '70% 30% 60% 40%'
          }}
          animate={{
            y: [0, -20, 0],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Page transition loader
export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-600 font-medium"
        >
          Loading beautiful content...
        </motion.p>
      </div>
    </motion.div>
  );
} 