'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Palette, Coffee, Heart, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';

const skills = [
  {
    category: "Design",
    icon: Palette,
    color: "from-red-400 to-red-600",
    items: ["Figma", "Adobe Illustrator", "Wireframing", "Prototyping", "User Flows", "Information Architecture"]
  },
  {
    category: "Development", 
    icon: Code,
    color: "from-teal-400 to-teal-600",
    items: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Node.js", ".NET", "SQL", "Git"]
  },
  {
    category: "Research",
    icon: Heart,
    color: "from-yellow-400 to-yellow-600", 
    items: ["Usability Testing", "User Research", "HCI Principles", "Interaction Design", "Accessibility", "Mobile UX"]
  }
];

const values = [
  {
    icon: Users,
    title: "Human-Centered",
    description: "Every design decision starts with understanding real user needs and creating meaningful connections."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries by combining traditional art principles with cutting-edge technology."
  },
  {
    icon: Coffee,
    title: "Craftsmanship",
    description: "Attention to detail and dedication to quality in every pixel, line of code, and brushstroke."
  }
];

const journey = [
  {
    year: "2024",
    title: "UI/UX Engineer at ShadowX",
    description: "Designing user-centric features, implementing prototypes with Figma, and building responsive UI components using Bootstrap."
  },
  {
    year: "2024",
    title: "Graduated from Sabanci University",
    description: "Bachelor of Science in Computer Science and Engineering, with focus on HCI and software development."
  },
  {
    year: "2023",
    title: "Exchange at Hong Kong Baptist University",
    description: "Studied Computer Science abroad, gaining international perspective on technology and design practices."
  },
  {
    year: "2023",
    title: "UX Design Intern at SOCRadar",
    description: "Designed specialized analysis tool interfaces for cloud security, conducted usability research and improved workflows."
  },
  {
    year: "2022",
    title: "Strategy Intern at AJ Worldwide Logistics",
    description: "Mapped cross-department workflows and designed efficient banking interaction flows for U.S. operations setup."
  },
  {
    year: "2021",
    title: "Product Intern at Phishup",
    description: "Gained exposure to startup design processes and conducted market analysis to support product roadmap decisions."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
                  About <span className="text-artistic">Mavis</span>
                </h1>
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  UI/UX Engineer passionate about creating meaningful digital experiences 
                  through user-centered design and innovative technology.
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I&apos;m a Computer Science graduate from Sabanci University 
                  with expertise in UI/UX design, frontend development, and user research.
                </p>
                <p>
                  Currently working as a UI/UX Engineer at ShadowX, I specialize in designing user-centric 
                  features, creating accessible interfaces, and conducting usability research to improve 
                  complex applications.
                </p>
                <p>
                  My international experience includes an exchange program at Hong Kong Baptist University 
                  and internships across security systems, logistics, and startup environments, giving me 
                  a global perspective on design challenges.
                </p>
              </div>

              <Button asChild className="btn-artistic group">
                <Link href="/contact">
                  Let&apos;s Connect
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden matisse-shape shadow-lg">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=500&h=600&fit=crop&crop=face&auto=format&q=80"
                  alt="Profile photo"
                  className="w-full h-96 lg:h-[500px]"
                  aspectRatio="portrait"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 matisse-shape opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 matisse-shape opacity-15"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Skills & <span className="text-artistic">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A blend of technical proficiency, design thinking, and artistic sensibility 
              that brings unique perspectives to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="watercolor-wash p-8 matisse-shape text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${skillSet.color} matisse-shape flex items-center justify-center`}>
                  <skillSet.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{skillSet.category}</h3>
                <div className="space-y-3">
                  {skillSet.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 text-sm font-medium text-gray-700 watercolor-wash matisse-shape"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What I <span className="text-artistic">Believe</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Core principles that guide my approach to design, development, and life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center watercolor-wash p-8 matisse-shape"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 matisse-shape flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
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
              My <span className="text-artistic">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Key moments that shaped my path from development to design.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 matisse-shape flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 watercolor-wash p-6 matisse-shape ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="watercolor-wash p-12 matisse-shape text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Beyond <span className="text-artistic">Work</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">When I&apos;m Not Designing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>🎨 Oil painting landscapes and portraits</li>
                    <li>📸 Street photography around Istanbul</li>
                    <li>☕ Exploring local coffee shops</li>
                    <li>📚 Reading about color theory and composition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Fun Facts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>🌍 Speak Turkish, English, and learning French</li>
                    <li>🎭 Fascinated by Matisse&apos;s cut-out technique</li>
                    <li>🚀 Dream of designing for space exploration</li>
                    <li>🎵 Code better with lo-fi hip hop playing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Let&apos;s Create <span className="text-artistic">Together</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you&apos;re looking for a designer, developer, or someone who brings 
              both technical and artistic perspectives to your project, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-artistic">
                <Link href="/contact">
                  Start a Conversation
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