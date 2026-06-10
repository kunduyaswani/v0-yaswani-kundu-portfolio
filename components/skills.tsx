'use client';

import { motion } from 'framer-motion';
import { Code, Database, Palette, Wrench } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'Java', 'JavaScript'],
    color: 'from-blue-600 to-cyan-400',
  },
  {
    title: 'Frontend Development',
    icon: Palette,
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    color: 'from-purple-600 to-pink-400',
  },
  {
    title: 'Backend Development',
    icon: Wrench,
    skills: ['Python', 'PHP', 'RESTful APIs'],
    color: 'from-orange-600 to-red-400',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
    color: 'from-green-600 to-teal-400',
  },
];

const OTHER_SKILLS = [
  'Object-Oriented Programming (OOP)',
  'Responsive Web Design',
  'UI/UX Design',
  'Problem Solving',
  'Git & GitHub',
  'VS Code',
  'Figma',
];

export default function Skills() {
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
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400" />
        </motion.div>

        {/* Main Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
                className="glassmorphism p-6 rounded-xl group cursor-pointer transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${category.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Other Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER_SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
              >
                <p className="text-gray-200 text-center font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
