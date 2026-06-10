'use client';

import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Code, Zap } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Event Registration System',
    description: 'A web-based event registration platform that allows users to register and manage event participation efficiently.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    image: 'bg-gradient-to-br from-blue-600 to-purple-600',
    github: 'https://github.com/kunduyaswani',
    demo: '#',
  },
  {
    title: 'ATM Simulation System',
    description: 'A Python-based ATM simulator implementing deposit, withdrawal, balance enquiry, and transaction management.',
    tech: ['Python'],
    image: 'bg-gradient-to-br from-purple-600 to-pink-600',
    github: 'https://github.com/kunduyaswani',
    demo: '',
  },
  {
    title: 'Student Management System',
    description: 'A console-based application to manage student records and operations efficiently.',
    tech: ['Python'],
    image: 'bg-gradient-to-br from-cyan-600 to-blue-600',
    github: 'https://github.com/kunduyaswani',
    demo: '',
  },
  {
    title: 'Quiz Application',
    description: 'An interactive quiz application with score tracking and multiple-choice questions.',
    tech: ['Python'],
    image: 'bg-gradient-to-br from-orange-600 to-red-600',
    github: 'https://github.com/kunduyaswani',
    demo: '',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group glassmorphism rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
            >
              {/* Project Image */}
              <div className={`${project.image} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-black transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white/40 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-cyan-400 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    <GitBranch size={18} /> GitHub
                  </motion.a>
                  {project.demo && project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 px-4 rounded-lg border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
