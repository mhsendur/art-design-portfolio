'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github, Figma, Palette, Code, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';

const projects = [
  {
    id: 1,
    title: "Banking App Redesign",
    category: "UI/UX Design",
    description: "Redesigned a complex banking application to improve user experience, focusing on simplifying financial workflows and enhancing accessibility.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    tags: ["Figma", "User Research", "Prototyping", "Accessibility"],
    type: "case-study",
    href: "/work/case-studies/banking-app-redesign",
    color: "from-red-400 to-red-600",
    featured: true
  },
  {
    id: 2,
    title: "SUConnect - Graduation Project",
    category: "Full-Stack Development",
    description: "Created a responsive digital platform for Erasmus & Exchange program exploration with intuitive navigation and real-time updates.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    tags: ["React", "Figma", "User Research", "Responsive Design"],
    type: "project",
    github: "https://github.com/mavisbalci/suconnect",
    live: "https://suconnect-demo.vercel.app",
    color: "from-teal-400 to-teal-600"
  },
  {
    id: 3,
    title: "Music Alchemy",
    category: "UI/UX Design",
    description: "Co-designed a web and mobile music recommendation system with focus on personalization and smooth user flows for enhanced discovery.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    tags: ["Mobile UX", "Wireframing", "User Flows", "Prototyping"],
    type: "project",
    figma: "https://figma.com/music-alchemy",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 4,
    title: "Security Dashboard - SOCRadar",
    category: "UX Research",
    description: "Designed specialized analysis tool interface for cloud security data, improving usability through research and iterative testing.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    tags: ["Information Architecture", "Usability Testing", "Security UX", "Enterprise Design"],
    type: "internship",
    color: "from-purple-400 to-purple-600"
  }
];

const skills = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design with focus on accessibility and usability",
    tools: ["Figma", "Adobe Illustrator", "Prototyping"]
  },
  {
    icon: Code,
    title: "Frontend Development", 
    description: "Modern web development with responsive design principles",
    tools: ["React.js", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understanding user needs through testing and analysis",
    tools: ["Usability Testing", "User Interviews", "Analytics"]
  },
  {
    icon: Zap,
    title: "Interaction Design",
    description: "Creating intuitive and engaging user interactions",
    tools: ["Micro-interactions", "Animation", "User Flows"]
  }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-6xl font-bold mb-8 text-gray-900 leading-tight">
              My <span className="text-artistic">Work</span>
            </h1>
            <p className="text-2xl text-gray-600 font-light leading-relaxed mb-8">
              Crafting digital experiences through user-centered design, 
              research-driven decisions, and technical excellence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From graduation projects to professional internships, each project represents 
              a commitment to solving real problems with thoughtful design and development.
            </p>
          </motion.div>
        </div>

        {/* Decorative Matisse elements */}
        <div className="absolute top-20 left-10 w-24 h-24 matisse-shape opacity-10 -z-10"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 matisse-shape opacity-15 -z-10"></div>
      </section>

      {/* Featured Project */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Featured <span className="text-artistic">Project</span>
              </h2>
              <p className="text-lg text-gray-600">
                A deep dive into my design process and problem-solving approach.
              </p>
            </div>

            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="watercolor-wash matisse-shape-lg group hover:scale-105 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white matisse-shape-sm font-medium`}>
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">Case Study</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-artistic transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium text-gray-700 watercolor-wash matisse-shape-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                                         {project.href && (
                       <Button asChild className="btn-artistic group">
                         <Link href={project.href}>
                           View Case Study
                           <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                         </Link>
                       </Button>
                     )}
                  </div>

                  <div className="overflow-hidden matisse-shape">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 group-hover:scale-105 transition-transform duration-300"
                      aspectRatio="landscape"
                      hover={false}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Core <span className="text-artistic">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A blend of design thinking, technical implementation, and user research 
              to create meaningful digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="watercolor-wash matisse-shape text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 matisse-shape
                    ${index === 0 ? 'bg-gradient-to-br from-red-400 to-red-600' : ''}
                    ${index === 1 ? 'bg-gradient-to-br from-teal-400 to-teal-600' : ''}
                    ${index === 2 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : ''}
                    ${index === 3 ? 'bg-gradient-to-br from-purple-400 to-purple-600' : ''}
                  `}>
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-artistic transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs font-medium text-gray-600 bg-white/50 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Other <span className="text-artistic">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From academic projects to professional internships, 
              each experience has shaped my approach to design and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="watercolor-wash matisse-shape group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6 overflow-hidden matisse-shape">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    aspectRatio="landscape"
                    hover={false}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white matisse-shape-sm text-sm font-medium`}>
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">{project.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-artistic transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-white/50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-artistic transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-artistic transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-artistic transition-colors"
                      >
                        <Figma className="h-4 w-4" />
                        Design
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="text-center max-w-3xl mx-auto watercolor-wash matisse-shape-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Let&apos;s Create <span className="text-artistic">Together</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I&apos;m always excited to work on new projects and collaborate with teams 
              who value user-centered design and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-artistic">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="watercolor-wash border-2 border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white">
                <Link href="/about">
                  Learn About Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 