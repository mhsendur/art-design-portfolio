'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, Clock, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';

const projectDetails = {
  title: "Banking App Redesign",
  subtitle: "Streamlining Financial Interactions",
  year: "2024",
  duration: "3 months",
  team: "4 designers",
  role: "Lead UX Designer",
  tools: ["Figma", "Miro", "Principle", "Maze"],
  overview: "Complete UX overhaul of a mobile banking application serving 2.5M users. The project focused on reducing task completion time by 40% while improving accessibility and user satisfaction scores.",
};

const challenges = [
  "Complex navigation with 5+ levels deep menu structures",
  "Poor accessibility with WCAG AA compliance at only 60%", 
  "High abandonment rate (65%) during money transfer flows",
  "Inconsistent design patterns across 15+ product teams"
];

const solutions = [
  "Redesigned information architecture with card sorting methodology",
  "Implemented comprehensive accessibility audit and remediation",
  "Streamlined transfer flow from 8 steps to 3 with progressive disclosure",
  "Created unified design system with 50+ reusable components"
];

const results = [
  { metric: "Task Completion Time", before: "4.2 minutes", after: "2.5 minutes", improvement: "40% reduction" },
  { metric: "User Satisfaction", before: "3.2/5", after: "4.6/5", improvement: "44% increase" },
  { metric: "Accessibility Score", before: "60% WCAG AA", after: "95% WCAG AA", improvement: "35% improvement" },
  { metric: "Support Tickets", before: "850/month", after: "340/month", improvement: "60% reduction" }
];

export default function BankingAppCaseStudy() {
  return (
    <div className="min-h-screen py-8">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Button asChild variant="outline" className="watercolor-wash border-2 border-gray-400 text-gray-600 hover:bg-gray-100">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              <span className="text-artistic">{projectDetails.title}</span>
            </h1>
            <p className="text-2xl text-gray-600 font-light mb-8">
              {projectDetails.subtitle}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {projectDetails.overview}
            </p>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { icon: Calendar, label: "Year", value: projectDetails.year },
              { icon: Clock, label: "Duration", value: projectDetails.duration },
              { icon: Users, label: "Team", value: projectDetails.team },
              { icon: Target, label: "Role", value: projectDetails.role }
            ].map((item, index) => (
              <div key={item.label} className="text-center watercolor-wash p-6 matisse-shape">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 matisse-shape flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="overflow-hidden matisse-shape shadow-lg">
                          <OptimizedImage
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center&auto=format&q=80"
              alt="Banking App Redesign Overview"
                className="w-full h-96 lg:h-[500px]"
                aspectRatio="landscape"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                The <span className="text-artistic">Challenge</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The existing banking app suffered from poor usability, leading to frustrated users 
                and increased support costs. Our challenge was to redesign the experience while 
                maintaining trust and security—critical factors for financial applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="watercolor-wash p-8 matisse-shape">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Target className="mr-3 h-6 w-6 text-red-500" />
                  Key Problems
                </h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="watercolor-wash p-8 matisse-shape">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Lightbulb className="mr-3 h-6 w-6 text-yellow-500" />
                  Our Solutions
                </h3>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Images */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Design <span className="text-artistic">Process</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden matisse-shape mb-6">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="User Research Phase"
                    className="w-full h-64"
                    aspectRatio="landscape"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Research & Discovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conducted 25 user interviews and analyzed 6 months of analytics data to understand 
                  pain points and user behavior patterns. Created personas and journey maps to guide design decisions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden matisse-shape mb-6">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="Wireframing and Prototyping"
                    className="w-full h-64"
                    aspectRatio="landscape"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Wireframing & Prototyping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Created low-fidelity wireframes and interactive prototypes to test new information 
                  architecture. Conducted 3 rounds of usability testing with 40+ participants.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                <span className="text-artistic">Results</span> & Impact
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The redesigned banking app launched to over 2.5M users with significant improvements 
                across all key metrics, resulting in higher user satisfaction and reduced support costs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center watercolor-wash p-6 matisse-shape"
                >
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">{result.metric}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">Before: {result.before}</div>
                    <div className="text-sm text-gray-900 font-medium">After: {result.after}</div>
                  </div>
                  <div className="text-lg font-bold text-artistic">{result.improvement}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
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
              Want to Learn <span className="text-artistic">More?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              This case study represents just a glimpse of the full design process. 
                             I&apos;d love to share more details about the research methodology, design decisions, and implementation challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-artistic">
                <Link href="/contact">
                  Discuss This Project
                </Link>
              </Button>
              <Button asChild variant="outline" className="watercolor-wash border-2 border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white">
                <Link href="/work">
                  View More Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 