'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 canvas-texture paint-texture paper-texture watercolor-wash relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-artistic">Mavis Busenur Balci</h3>
            <p className="text-gray-600 leading-relaxed">
              UI/UX Engineer with a passion for creating meaningful digital experiences 
              that bridge the gap between technical excellence and human-centered design.
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-artistic">Explore</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: 'Work & Projects', href: '/work' },
                { name: 'Photo Gallery', href: '/gallery/photos' },
                { name: 'Art & Paintings', href: '/gallery/paintings' },
                { name: 'Writings', href: '/writings' },
                { name: 'About Me', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-artistic transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-artistic">Connect</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:mavisbusenurbalci@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-artistic transition-colors duration-300"
              >
                <div className="w-10 h-10 watercolor-icon flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <span>Email Me</span>
              </a>
              <a
                href="https://linkedin.com/in/mavisbusenurbalci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-artistic transition-colors duration-300"
              >
                <div className="w-10 h-10 watercolor-icon flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/mavisbalci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-artistic transition-colors duration-300"
              >
                <div className="w-10 h-10 watercolor-icon flex items-center justify-center">
                  <Github className="h-5 w-5" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-white/30" 
             style={{ borderRadius: '50px 20px 40px 15px' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600">
              © 2024 Mavis Busenur Balci. Designed with passion and creativity.
            </div>
            <div className="text-sm text-gray-500">
              Built with Next.js, TypeScript & React | UI/UX Engineer & Designer
            </div>
          </div>
        </div>
      </div>

      {/* Artistic footer decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 brush-stroke opacity-60"></div>
    </footer>
  );
} 