'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitBranch, Share2, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-lg mb-8">
                I&apos;m always interested in hearing about new opportunities and collaborations. Feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <motion.a
                variants={itemVariants}
                href="mailto:kunduyaswani@gmail.com"
                className="flex items-center gap-4 p-4 glassmorphism rounded-xl hover:bg-blue-500/10 transition-colors duration-300 group"
              >
                <div className="p-3 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/40 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">kunduyaswani@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://www.linkedin.com/in/kunduyaswani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glassmorphism rounded-xl hover:bg-blue-500/10 transition-colors duration-300 group"
              >
                <div className="p-3 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/40 transition-colors">
                  <Share2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">linkedin.com/in/kunduyaswani</p>
                </div>
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://github.com/kunduyaswani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glassmorphism rounded-xl hover:bg-blue-500/10 transition-colors duration-300 group"
              >
                <div className="p-3 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/40 transition-colors">
                  <GitBranch className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">github.com/kunduyaswani</p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 rounded-2xl neon-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-blue-900/40 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-blue-900/40 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-blue-900/40 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 neon-border"
              >
                <Send size={18} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyan-400 text-center font-semibold"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
