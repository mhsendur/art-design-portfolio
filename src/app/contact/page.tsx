'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Coffee, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@example.com",
    description: "Best for project inquiries and professional discussions",
    color: "from-red-400 to-red-600"
  },
  {
    icon: Coffee,
    title: "Remote Work",
    detail: "Available Worldwide",
    description: "Open to remote opportunities globally",
    color: "from-teal-400 to-teal-600"
  },
  {
    icon: Coffee,
    title: "Coffee Chat",
    detail: "Let's meet up!",
    description: "Always happy to discuss design over coffee",
    color: "from-yellow-400 to-yellow-600"
  }
];

const reasons = [
  {
    title: "UI/UX Design Projects",
    description: "Looking to create user-centered digital experiences that solve real problems."
  },
  {
    title: "Frontend Development",
    description: "Need a developer who understands both code and design principles."
  },
  {
    title: "Design System Creation",
    description: "Want to build scalable, consistent design languages for your product."
  },
  {
    title: "Creative Collaboration",
    description: "Interested in exploring the intersection of art, design, and technology."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Let&apos;s <span className="text-artistic">Connect</span>
            </h1>
            <p className="text-2xl text-gray-600 font-light leading-relaxed mb-8">
              Ready to bring your ideas to life? I&apos;d love to hear about your project 
              and explore how we can create something amazing together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re looking for a UI/UX designer, frontend developer, or someone who 
              brings both technical and artistic perspectives to your team, let&apos;s start a conversation.
            </p>
          </motion.div>
        </div>

        {/* Decorative Matisse elements */}
        <div className="absolute top-20 left-10 w-24 h-24 matisse-shape opacity-10 -z-10"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 matisse-shape opacity-15 -z-10"></div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="watercolor-wash p-8 matisse-shape">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <MessageSquare className="mr-3 h-8 w-8 text-red-500" />
                Send a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 matisse-shape flex items-center justify-center">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 watercolor-wash matisse-shape focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 watercolor-wash matisse-shape focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 watercolor-wash matisse-shape focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 watercolor-wash matisse-shape focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-artistic ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Get in <span className="text-artistic">Touch</span>
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="watercolor-wash p-6 matisse-shape hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.color} matisse-shape flex items-center justify-center flex-shrink-0`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-lg font-medium text-gray-700 mb-2">{method.detail}</p>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reasons to Connect */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Perfect for <span className="text-artistic">Projects</span> Like:
              </h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="watercolor-wash p-4 matisse-shape"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{reason.title}</h4>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="watercolor-wash p-6 matisse-shape text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quick <span className="text-artistic">Response</span>
              </h3>
              <p className="text-gray-600">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to mention it in your message!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
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
              Frequently <span className="text-artistic">Asked</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quick answers to common questions about working together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your design process?",
                answer: "I follow a user-centered approach: research, ideation, prototyping, testing, and iteration. Every project starts with understanding your users and business goals."
              },
              {
                question: "Do you work remotely?",
                answer: "Yes! I work with clients worldwide. I'm based in Istanbul but available for remote collaboration across different time zones."
              },
              {
                question: "What's your development stack?",
                answer: "I specialize in React/Next.js, TypeScript, and modern frontend technologies. I also have experience with Node.js and databases for full-stack projects."
              },
              {
                question: "How long do projects typically take?",
                answer: "It depends on scope, but most design projects take 2-8 weeks, and development projects 3-12 weeks. I'll provide a detailed timeline after understanding your requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="watercolor-wash p-6 matisse-shape"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
            className="text-center max-w-3xl mx-auto watercolor-wash p-12 matisse-shape"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Start Your <span className="text-artistic">Project?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every great design starts with a conversation. Let&apos;s discuss your vision 
              and explore how we can bring it to life together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-artistic">
                <a href="mailto:hello@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me Directly
                </a>
              </Button>
              <Button asChild variant="outline" className="watercolor-wash border-2 border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white">
                <a href="#contact-form" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  Back to Form
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 