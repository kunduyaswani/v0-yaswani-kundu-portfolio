'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const HIGHLIGHTS = [
  'Fresher',
  'B.Tech Computer Science Engineering',
  'Graduation Year: 2027',
  'Team Player',
  'Problem Solver',
  'Fast Learner'
];

export default function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I&apos;m Yaswani Kundu, a passionate developer focused on building modern, scalable, and user-friendly applications. I enjoy solving problems through clean code and continuously improving my technical skills.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am currently pursuing a <span className="text-cyan-400 font-semibold">B.Tech in Computer Science Engineering</span> and actively building projects to strengthen my software development expertise and become industry-ready.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech has been driven by a genuine passion for problem-solving and creating solutions that make a real impact. I believe in continuous learning and am excited to contribute to challenging projects while growing as a developer.
            </p>
          </motion.div>

          {/* Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Profile Highlights</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {HIGHLIGHTS.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-200">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
