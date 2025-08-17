'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function EnhancedButton({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}: EnhancedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = cn(
    'relative overflow-hidden transition-all duration-300 transform-gpu',
    'focus:outline-none focus:ring-2 focus:ring-artistic focus:ring-offset-2',
    {
      // Variants
      'btn-artistic text-white': variant === 'primary',
      'watercolor-wash border-2 border-artistic text-artistic hover:bg-artistic hover:text-white': variant === 'secondary',
      'text-artistic hover:bg-artistic/10': variant === 'ghost',
      
      // Sizes
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      
      // States
      'opacity-50 cursor-not-allowed': disabled,
      'cursor-pointer': !disabled,
    },
    className
  );

  return (
    <motion.button
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 17,
        mass: 0.5
      }}
      {...props}
    >
      {/* Content with micro bounce */}
      <motion.div
        animate={{ y: isHovered ? -1 : 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '200%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Subtle particle effects */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 60}%`,
                y: `${50 + (Math.random() - 0.5) * 60}%`,
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
} 