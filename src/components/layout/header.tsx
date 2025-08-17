'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palette, Camera, Paintbrush, Edit, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'Gallery', href: '/gallery/photos' },
  { name: 'Writings', href: '/writings' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const studioTools = [
  { 
    icon: Palette, 
    label: 'Design', 
    href: '/work',
    color: 'text-red-600 hover:text-red-700'
  },
  { 
    icon: Camera, 
    label: 'Photography', 
    href: '/gallery/photos',
    color: 'text-teal-600 hover:text-teal-700'
  },
  { 
    icon: Paintbrush, 
    label: 'Art', 
    href: '/gallery/paintings',
    color: 'text-yellow-600 hover:text-yellow-700'
  },
  { 
    icon: Edit, 
    label: 'Writing', 
    href: '/writings',
    color: 'text-purple-600 hover:text-purple-700'
  },
];

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com',
    label: 'GitHub',
    color: 'text-gray-700 hover:text-gray-900'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'text-blue-600 hover:text-blue-700'
  },
  { 
    icon: Mail, 
    href: 'mailto:mavisbusenurbalci@gmail.com',
    label: 'Email',
    color: 'text-green-600 hover:text-green-700'
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 watercolor-wash shadow-artistic-lg"
        style={{
          borderRadius: '0 0 40px 30px',
          borderBottom: '4px solid rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div 
                  className="w-12 h-12 bg-gradient-to-br from-red-400 via-yellow-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-artistic"
                  style={{ borderRadius: '60% 40% 70% 30%' }}
                >
                  M
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900 group-hover:text-artistic transition-colors">
                    Mavis Busenur Balci
                  </h1>
                  <p className="text-sm text-gray-600">UI/UX Engineer & Designer</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-artistic transition-colors duration-300 font-medium relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-100 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
                    style={{ borderRadius: '50% 60% 40% 70%' }}
                    initial={false}
                    whileHover={{ scale: 1.1 }}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild className="btn-artistic">
                <Link href="/contact">
                  Let&apos;s Connect
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-700">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 watercolor-wash">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between py-6 border-b border-white/20">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 bg-gradient-to-br from-red-400 via-yellow-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-artistic"
                          style={{ borderRadius: '60% 40% 70% 30%' }}
                        >
                          M
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-900">Mavis Busenur Balci</h2>
                          <p className="text-sm text-gray-600">UI/UX Engineer</p>
                        </div>
                      </div>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 py-8">
                      <div className="space-y-6">
                        {navigation.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className="block text-lg font-medium text-gray-700 hover:text-artistic transition-colors py-3 px-4 watercolor-wash hover:shadow-artistic brush-hover"
                                style={{ borderRadius: '25px 15px 30px 10px' }}
                              >
                                {item.name}
                              </Link>
                            </SheetClose>
                          </motion.div>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="py-6 border-t border-white/20">
                      <SheetClose asChild>
                        <Button asChild className="w-full btn-artistic">
                          <Link href="/contact">
                            Let&apos;s Connect
                          </Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Floating Studio Toolbar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div 
          className="watercolor-wash p-4 shadow-artistic-lg"
          style={{
            borderRadius: '30px 20px 35px 15px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="flex flex-col space-y-4">
            {studioTools.map((tool, index) => (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <Link
                  href={tool.href}
                  className={`w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 group watercolor-icon shadow-artistic ${tool.color}`}
                  title={tool.label}
                >
                  <tool.icon className="h-6 w-6" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social Links - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="fixed left-6 bottom-6 z-40 hidden lg:block"
      >
        <div 
          className="watercolor-wash p-3 shadow-artistic"
          style={{
            borderRadius: '25px 15px 30px 10px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + index * 0.1 }}
                className={`w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 watercolor-icon shadow-artistic ${social.color}`}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
} 