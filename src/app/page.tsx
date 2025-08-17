'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Palette, Camera, Paintbrush, Edit, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Placeholder artwork data - replace with real content
const featuredArtwork = [
  { id: 1, src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', alt: 'Oil painting', type: 'oil', href: '/gallery/paintings' },
  { id: 2, src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', alt: 'Photography', type: 'photo', href: '/gallery/photos' },
  { id: 3, src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', alt: 'Illustration', type: 'illustration', href: '/gallery/illustrations' },
  { id: 4, src: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', alt: 'UX Project', type: 'project', href: '/work' },
  { id: 5, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', alt: 'Oil painting', type: 'oil', href: '/gallery/paintings' },
  { id: 6, src: 'https://images.unsplash.com/photo-1493329025335-2fe5c05150f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', alt: 'Photography', type: 'photo', href: '/gallery/photos' },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const featuredReveal = useScrollReveal({ threshold: 0.2, delay: 200 });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative py-16 overflow-hidden"
      >
        <div className="container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight"
                >
                  <span className="block text-gray-900">Mavis Busenur</span>
                  <span className="block text-artistic">Balci</span>
                  <span className="block text-gray-700">UI/UX Engineer</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl text-gray-600 max-w-2xl leading-relaxed font-light"
                >
                  Crafting meaningful digital experiences that bridge technology 
                  and human-centered design. Currently at ShadowX.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/work">
                  <EnhancedButton size="lg" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </EnhancedButton>
                </Link>
                
                <EnhancedButton variant="secondary" size="lg" className="group border-3 border-orange-400 text-orange-600 hover:border-orange-500 hover:text-white hover:bg-orange-400">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </EnhancedButton>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-12 pt-12 border-t border-gray-200"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2024</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">CS Graduate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">∞</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Design Ideas</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Portfolio Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {featuredArtwork.map((item, index) => {
                  // Create a more reliable layout pattern
                  const layoutClasses = [
                    'col-span-2 aspect-[3/2]', // Wide landscape
                    'col-span-1 aspect-[3/4]', // Portrait
                    'col-span-1 aspect-square', // Square
                    'col-span-2 md:col-span-1 aspect-square', // Square (responsive)
                    'col-span-1 aspect-[4/3]', // Landscape
                    'col-span-1 aspect-square'  // Square
                  ];

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                                             className={`group image-grid-item matisse-shape shadow-artistic hover:shadow-artistic-lg transition-all duration-300 ${layoutClasses[index] || 'col-span-1 aspect-square'}`}
                    >
                      <Link href={item.href} className="block w-full h-full">
                        <OptimizedImage
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 matisse-image-border"
                          aspectRatio="auto"
                          priority={index < 3}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Matisse-style decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 matisse-shape opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 matisse-shape opacity-15 -z-10"></div>
            </motion.div>
          </div>
        </div>


      </motion.section>

      {/* Featured Sections Preview */}
      <section className="pt-4 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            ref={featuredReveal.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: featuredReveal.isInView ? 1 : 0,
              y: featuredReveal.isInView ? 0 : 50 
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-8"
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-900 leading-tight">
              My <span className="text-artistic">Work</span> & Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Combining computer science expertise with design thinking to create 
              user-centered solutions that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'UI/UX Design', href: '/work', icon: Palette, description: 'User-centered design and prototyping' },
              { title: 'Photography', href: '/gallery/photos', icon: Camera, description: 'Visual storytelling and composition' },
              { title: 'Art & Creativity', href: '/gallery/paintings', icon: Paintbrush, description: 'Exploring traditional and digital art' },
              { title: 'Insights', href: '/writings', icon: Edit, description: 'Design thinking and technology trends' },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={section.href} className="block group">
                  <div className="watercolor-wash p-8 text-center hover:scale-105 transition-all duration-300 relative overflow-hidden matisse-shape">
                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className={`w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 matisse-shape
                          ${index === 0 ? 'bg-gradient-to-br from-red-400 to-red-600' : ''}
                          ${index === 1 ? 'bg-gradient-to-br from-teal-400 to-teal-600' : ''}
                          ${index === 2 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : ''}
                          ${index === 3 ? 'bg-gradient-to-br from-purple-400 to-purple-600' : ''}
                        `}>
                          <section.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-artistic transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-medium">{section.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
