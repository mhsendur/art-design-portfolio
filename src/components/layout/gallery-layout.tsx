'use client';

import { motion } from 'framer-motion';
import { Camera, Paintbrush, PenTool } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const tabs = [
  { name: 'Photography', href: '/gallery/photos', icon: Camera },
  { name: 'Oil Paintings', href: '/gallery/paintings', icon: Paintbrush },
  { name: 'Illustrations', href: '/gallery/illustrations', icon: PenTool },
];

interface GalleryLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function GalleryLayout({ children, title, description }: GalleryLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section - matching home page style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            {title} <span className="text-artistic">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Navigation Tabs - Matisse style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <nav className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={cn(
                    'group flex items-center gap-3 px-6 py-3 transition-all duration-300 matisse-shape',
                    isActive
                      ? 'bg-gradient-to-r from-red-400 to-red-600 text-white shadow-artistic'
                      : 'watercolor-wash text-gray-700 hover:text-artistic border-2 border-gray-200 hover:border-artistic'
                  )}
                >
                  <div className={cn(
                    'w-12 h-12 flex items-center justify-center transition-colors',
                    isActive ? 'text-white' : 'text-gray-600 group-hover:text-artistic'
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium">{tab.name}</span>
                </Link>
              );
            })}
          </nav>
        </motion.div>

        {/* Gallery Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
} 