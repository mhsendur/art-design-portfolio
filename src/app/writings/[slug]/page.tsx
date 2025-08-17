'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useEffect, useState } from 'react';

// For now, we'll use the same data as the writings page
// In a real implementation, you'd fetch this based on the slug
const writingData = {
  'design-thinking-ai': {
    id: 1,
    title: "Design Thinking in the Age of AI",
    excerpt: "How artificial intelligence is reshaping the design process and what it means for human creativity in digital experiences.",
    content: `# Design Thinking in the Age of AI

As artificial intelligence continues to evolve at breakneck speed, the design industry finds itself at a fascinating crossroads. The tools we use, the processes we follow, and even the fundamental nature of creative work are being transformed by AI technologies.

## The Changing Landscape

When I started my journey as a UI/UX designer, the process was purely human-driven. We conducted user interviews, sketched wireframes by hand, and spent hours iterating on designs in Figma. Today, AI assistants can generate user personas, create wireframes from simple descriptions, and even suggest color palettes based on brand guidelines.

### What AI Brings to Design

**Speed and Efficiency**: AI tools can rapidly generate multiple design variations, allowing designers to explore more possibilities in less time. Instead of spending hours creating dozens of layout options, we can now generate them in minutes.

**Data-Driven Insights**: Machine learning algorithms can analyze user behavior patterns at scale, providing insights that would take human researchers months to uncover.

**Accessibility Enhancement**: AI can automatically check designs for accessibility compliance, suggest improvements for color contrast, and even generate alt text for images.

## The Human Element Remains Crucial

Despite these technological advances, human creativity and empathy remain irreplaceable. AI can generate designs, but it cannot understand the nuanced emotional needs of users or the cultural context that influences design decisions.

### Where Humans Excel

**Emotional Intelligence**: Understanding user frustrations, motivations, and unspoken needs requires human empathy that AI cannot replicate.

**Creative Problem Solving**: While AI can optimize existing solutions, breakthrough innovations still require human creativity and lateral thinking.

**Ethical Considerations**: AI lacks the moral reasoning needed to make ethical design decisions, especially when dealing with sensitive user data or vulnerable populations.

## Conclusion

As we navigate this AI-enhanced design landscape, I'm optimistic about the possibilities ahead. AI can handle routine tasks, analyze vast amounts of data, and accelerate our workflows—but it cannot replace the human intuition, creativity, and empathy that lie at the heart of great design.

The challenge for designers like myself is to find the right balance: leveraging AI's power while preserving the uniquely human qualities that make our work meaningful and impactful.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Design Thinking",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    tags: ["AI", "Design Process", "Future of Design"],
    color: "from-red-400 to-red-600"
  },
  'creative-coding-art': {
    id: 2,
    title: "Creative Coding: Where Art Meets Algorithm",
    excerpt: "Exploring the intersection of programming and artistic expression through creative coding practices and generative art.",
    content: `# Creative Coding: Where Art Meets Algorithm

During my exchange program at Hong Kong Baptist University, I stumbled upon something that would fundamentally change how I view the relationship between technology and art: creative coding. What started as a computer science elective became a journey into the fascinating world where mathematical precision meets artistic expression.

## What is Creative Coding?

Creative coding is the practice of using programming languages as a medium for artistic expression. Unlike traditional software development, which focuses on functionality and efficiency, creative coding prioritizes aesthetics, experimentation, and emotional impact.

Think of it as digital paintbrush where instead of mixing colors on a palette, you're mixing algorithms, mathematical functions, and data structures to create visual experiences that can evolve, respond, and surprise even their creators.

## The Art of Algorithmic Thinking

Creative coding taught me to think differently about problem-solving. In traditional programming, we optimize for efficiency and clarity. In creative coding, we optimize for serendipity and aesthetic impact.

### Embracing Randomness

One of the most powerful concepts in creative coding is controlled randomness. The same code can produce infinite variations, each unique yet following the same underlying rules.

## Connecting to UX Design

My creative coding journey significantly influenced my approach to UX design:

### Micro-interactions

Understanding how to create smooth animations programmatically made me more conscious of timing, easing, and the emotional impact of micro-interactions in user interfaces.

### Data Visualization

Creative coding skills directly translate to creating more engaging and intuitive data visualizations in UX projects. Instead of relying solely on chart libraries, I can create custom visualizations that better serve user needs.

## Conclusion

Creative coding has enriched both my technical skills and my artistic vision. It's taught me that the most powerful tools are often the ones that blur the boundaries between disciplines, creating new possibilities for expression and connection.

Whether you're a designer looking to expand your toolkit or a developer seeking creative outlets, I encourage you to explore this fascinating intersection of art and algorithm.`,
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Creative Coding",
    readTime: "12 min read",
    publishDate: "2024-01-08",
    tags: ["Programming", "Art", "Creativity", "JavaScript"],
    color: "from-teal-400 to-teal-600"
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  publishDate: string;
  tags: string[];
  color: string;
}

export default function WritingDetailPage({ params }: PageProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the article based on slug
    const articleData = writingData[params.slug as keyof typeof writingData];
    if (articleData) {
      setArticle(articleData);
    }
    setIsLoading(false);
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Button asChild className="btn-artistic">
            <Link href="/writings">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Writings
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-8">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Button asChild variant="outline" className="watercolor-wash border-2 border-gray-400 text-gray-600 hover:bg-gray-100">
          <Link href="/writings">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Writings
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 bg-gradient-to-r ${article.color} text-white matisse-shape font-medium mb-4`}>
                {article.category}
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-artistic transition-colors">
                <Heart className="h-4 w-4" />
                <span>23</span>
              </button>
              <button className="flex items-center gap-2 hover:text-artistic transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium text-gray-700 watercolor-wash matisse-shape-sm flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="overflow-hidden matisse-shape shadow-lg">
              <OptimizedImage
                src={article.image}
                alt={article.title}
                className="w-full h-64 lg:h-96"
                aspectRatio="landscape"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg prose-gray max-w-none leading-relaxed">
              {/* Render article content - in a real app, you'd use MDX */}
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ 
                  __html: article.content.replace(/\n/g, '<br/>').replace(/#{1,6}\s/g, '<h2>').replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto watercolor-wash matisse-shape"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 flex-shrink-0">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&h=200&fit=crop&crop=face&auto=format&q=80"
                  alt="Mavis Busenur Balci"
                  className="w-full h-full rounded-full"
                  width={96}
                  height={96}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mavis Busenur Balci</h3>
                <p className="text-gray-600 leading-relaxed">
                  UI/UX Engineer at ShadowX with a passion for creating meaningful digital experiences. 
                  Computer Science graduate from Sabanci University, exploring the intersection of technology, 
                  design, and human creativity.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="/about" className="text-artistic hover:underline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="text-artistic hover:underline">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              More <span className="text-artistic">Articles</span>
            </h2>
            <p className="text-lg text-gray-600">
              Continue exploring thoughts on design, technology, and creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Button asChild className="watercolor-wash matisse-shape p-8 hover:scale-105 transition-all duration-300 h-auto">
              <Link href="/writings" className="text-left block">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Browse All Articles</h3>
                <p className="text-gray-600">Explore the full collection of writings on design, development, and creativity.</p>
              </Link>
            </Button>
            
            <Button asChild className="watercolor-wash matisse-shape p-8 hover:scale-105 transition-all duration-300 h-auto">
              <Link href="/work" className="text-left block">
                <h3 className="text-xl font-bold text-gray-900 mb-2">View My Work</h3>
                <p className="text-gray-600">See how these ideas translate into real projects and design solutions.</p>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
} 