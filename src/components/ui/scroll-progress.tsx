'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-teal-400 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useSpring(scrollY, {
    stiffness: 100,
    damping: 30
  });

  return (
    <motion.div
      className="fixed bottom-8 right-8 w-12 h-12 bg-artistic rounded-full flex items-center justify-center text-white cursor-pointer scroll-indicator z-40"
      style={{ 
        opacity: opacity.get() > 100 ? 1 : 0,
        scale: opacity.get() > 100 ? 1 : 0.8
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg 
        width="16" 
        height="16" 
        fill="currentColor" 
        viewBox="0 0 16 16"
        className="rotate-180"
      >
        <path d="M8 12a.5.5 0 0 0 .5-.5V4.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 4.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>
    </motion.div>
  );
} 