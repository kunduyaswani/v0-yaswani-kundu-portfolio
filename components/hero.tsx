'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, GitBranch, Mail } from 'lucide-react';

const TYPING_TEXTS = [
  'Python Developer',
  'Full Stack Developer',
  'Problem Solver',
  'Web Developer'
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPING_TEXTS[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setCurrentIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      setIsDeleting(false);
    } else {
      const nextText = isDeleting
        ? currentText.substring(0, displayText.length - 1)
        : currentText.substring(0, displayText.length + 1);

      timeout = setTimeout(() => setDisplayText(nextText), isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-20 pb-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 animated-grid opacity-20" />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float opacity-50" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float opacity-50" style={{ animationDelay: '0.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center text-center min-h-screen"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-500/50 bg-cyan-500/10 neon-glow text-cyan-400 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Yaswani Kundu
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="mb-6 h-20 flex items-center">
            <p className="text-2xl md:text-4xl font-semibold text-cyan-400">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl"
          >
            Turning Ideas Into Real-World Solutions Through Code
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 transition-all duration-300 neon-border"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold flex items-center gap-2 transition-all duration-300"
            >
              Hire Me <Mail size={18} />
            </motion.a>

            <motion.a
              href="https://github.com/kunduyaswani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border-2 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 font-semibold flex items-center gap-2 transition-all duration-300"
            >
              GitHub <GitBranch size={18} />
            </motion.a>

            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-300 hover:border-blue-400 hover:text-blue-400 font-semibold flex items-center gap-2 transition-all duration-300"
            >
              Download Resume <Download size={18} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            variants={itemVariants}
            className="absolute bottom-10"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-400 text-sm">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-2 bg-cyan-500 rounded-full animate-bounce" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
