'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';

const writings = [
  {
    id: 1,
    title: "Design Thinking in the Age of AI",
    excerpt: "How artificial intelligence is reshaping the design process and what it means for human creativity in digital experiences.",
    content: "As AI tools become more sophisticated, designers must evolve their approach to problem-solving. This article explores how to leverage AI while maintaining the human touch that makes design meaningful...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Design Thinking",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    tags: ["AI", "Design Process", "Future of Design"],
    color: "from-red-400 to-red-600"
  },
  {
    id: 2,
    title: "Creative Coding: Where Art Meets Algorithm",
    excerpt: "Exploring the intersection of programming and artistic expression through creative coding practices and generative art.",
    content: "Creative coding opens up new possibilities for artistic expression. By combining programming skills with artistic vision, we can create dynamic, interactive experiences that evolve and respond...",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Creative Coding",
    readTime: "12 min read", 
    publishDate: "2024-01-08",
    tags: ["Programming", "Art", "Creativity", "JavaScript"],
    color: "from-teal-400 to-teal-600"
  },
  {
    id: 3,
    title: "From Canvas to Code: A Designer's Journey",
    excerpt: "Personal reflections on transitioning from traditional art to digital design and the unexpected connections between the two mediums.",
    content: "My journey from oil painting to UI design has revealed surprising parallels between traditional art techniques and digital design principles. Color theory, composition, and visual hierarchy...",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Personal Journey",
    readTime: "6 min read",
    publishDate: "2024-01-01",
    tags: ["Career", "Art", "Design", "Personal Growth"],
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 4,
    title: "Building Accessible Design Systems",
    excerpt: "A comprehensive guide to creating inclusive design systems that work for everyone, regardless of ability or technology.",
    content: "Accessibility shouldn't be an afterthought in design systems. This guide walks through creating components that are inclusive by design, from color contrast to keyboard navigation...",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Accessibility",
    readTime: "15 min read",
    publishDate: "2023-12-20",
    tags: ["Accessibility", "Design Systems", "Inclusive Design"],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 5,
    title: "The Psychology of Color in Digital Interfaces",
    excerpt: "Understanding how color affects user behavior and emotional response in digital products, backed by research and real-world examples.",
    content: "Color is one of the most powerful tools in a designer's arsenal. This article examines the psychological impact of color choices in digital interfaces and how to use them effectively...",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Color Theory",
    readTime: "10 min read",
    publishDate: "2023-12-15",
    tags: ["Color Theory", "Psychology", "UI Design"],
    color: "from-green-400 to-green-600"
  }
];

const categories = [
  "All",
  "Design Thinking", 
  "Creative Coding",
  "Personal Journey",
  "Accessibility",
  "Color Theory"
];

export default function WritingsPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-6xl font-bold mb-8 text-gray-900 leading-tight">
              <span className="text-artistic">Writings</span> & Thoughts
            </h1>
            <p className="text-2xl text-gray-600 font-light leading-relaxed mb-8">
              Exploring the intersection of design, technology, and creativity through 
              stories, insights, and lessons learned along the way.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From design philosophy to coding adventures, these writings capture my journey 
              as a creative developer navigating the evolving landscape of digital design.
            </p>
          </motion.div>
        </div>

        {/* Decorative Matisse elements */}
        <div className="absolute top-20 left-10 w-24 h-24 matisse-shape opacity-10 -z-10"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 matisse-shape opacity-15 -z-10"></div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Featured <span className="text-artistic">Article</span>
            </h2>
            <p className="text-lg text-gray-600">
              My latest thoughts on design, technology, and creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Link href={`/writings/${writings[0].id}`} className="block group">
              <div className="watercolor-wash p-8 matisse-shape hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className={`px-3 py-1 bg-gradient-to-r ${writings[0].color} text-white matisse-shape font-medium`}>
                        {writings[0].category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(writings[0].publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{writings[0].readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-artistic transition-colors">
                      {writings[0].title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {writings[0].excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {writings[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium text-gray-700 watercolor-wash matisse-shape flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-artistic font-medium group-hover:translate-x-2 transition-transform">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>

                  <div className="overflow-hidden matisse-shape">
                    <OptimizedImage
                      src={writings[0].image}
                      alt={writings[0].title}
                      className="w-full h-64 lg:h-80 group-hover:scale-105 transition-transform duration-300"
                      aspectRatio="landscape"
                      hover={false}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 watercolor-wash matisse-shape hover:scale-105 ${
                  category === "All" 
                    ? "bg-artistic-vibrant text-white" 
                    : "text-gray-700 hover:text-artistic"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              All <span className="text-artistic">Articles</span>
            </h2>
            <p className="text-lg text-gray-600">
              Dive deeper into design thinking, creative coding, and professional insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writings.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/writings/${article.id}`} className="block">
                  <div className="watercolor-wash p-6 matisse-shape hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    {/* Image */}
                    <div className="mb-6 overflow-hidden matisse-shape">
                      <OptimizedImage
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                        aspectRatio="landscape"
                        hover={false}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className={`px-2 py-1 bg-gradient-to-r ${article.color} text-white matisse-shape text-xs font-medium`}>
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-artistic transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed text-sm line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-gray-500">
                          {new Date(article.publishDate).toLocaleDateString()}
                        </span>
                        <div className="flex items-center text-artistic font-medium text-sm group-hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto watercolor-wash p-12 matisse-shape"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 matisse-shape flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Stay <span className="text-artistic">Updated</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get notified when I publish new articles about design, development, 
              and the creative process. No spam, just thoughtful content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 border border-gray-300 watercolor-wash matisse-shape focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Button className="btn-artistic whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 200+ designers and developers who read my weekly insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto watercolor-wash p-12 matisse-shape"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Let&apos;s <span className="text-artistic">Discuss</span> Ideas
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Found an article interesting? Have a different perspective? 
              I&apos;d love to hear your thoughts and continue the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-artistic">
                <Link href="/contact">
                  Start a Discussion
                </Link>
              </Button>
              <Button asChild variant="outline" className="watercolor-wash border-2 border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white">
                <Link href="/work">
                  View My Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 