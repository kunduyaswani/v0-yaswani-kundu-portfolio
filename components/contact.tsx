'use client';

import { motion } from 'framer-motion';
import { Mail, GitBranch, Share2 } from 'lucide-react';

export default function Contact() {

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
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto" />
        </motion.div>

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
      </div>
    </section>
  );
}
