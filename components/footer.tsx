'use client';

import { motion } from 'framer-motion';
import { GitBranch, Share2, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-gradient-to-t from-blue-900/10 to-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* About Footer */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4">Yaswani Kundu</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aspiring Python Developer and Full Stack Developer passionate about building scalable, user-friendly applications and creating real-world solutions through code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/kunduyaswani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-blue-600/20 text-cyan-400 hover:bg-blue-600/40 transition-all duration-300"
              >
                <GitBranch size={20} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/kunduyaswani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-blue-600/20 text-cyan-400 hover:bg-blue-600/40 transition-all duration-300"
              >
                <Share2 size={20} />
              </motion.a>

              <motion.a
                href="mailto:kunduyaswani@gmail.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-blue-600/20 text-cyan-400 hover:bg-blue-600/40 transition-all duration-300"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >
          <motion.p variants={itemVariants}>
            © {currentYear} Yaswani Kundu. All rights reserved.
          </motion.p>

          <motion.p variants={itemVariants}>
            Designed and Developed by <span className="text-cyan-400 font-semibold">Yaswani Kundu</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6"
          >
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
              Terms of Service
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
