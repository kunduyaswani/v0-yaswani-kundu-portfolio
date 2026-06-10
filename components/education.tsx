'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" />
              Education
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="relative pl-8 pb-8">
                {/* Timeline line */}
                <div className="absolute left-3 top-8 w-1 h-16 bg-gradient-to-b from-blue-600 to-cyan-400" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-600 border-2 border-cyan-400" />

                <div className="glassmorphism p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-2">
                    B.Tech – Computer Science Engineering
                  </h4>
                  <p className="text-gray-400 mb-2">Expected Graduation: 2027</p>
                  <p className="text-gray-300">
                    Pursuing undergraduate degree with focus on software development, data structures, algorithms, and modern web technologies.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-cyan-400" />
              Career & Internships
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Career Objective */}
              <motion.div variants={itemVariants} className="glassmorphism p-6 rounded-xl border-l-4 border-cyan-400">
                <h4 className="text-lg font-bold text-cyan-400 mb-3">Career Objective</h4>
                <p className="text-gray-300 leading-relaxed">
                  Seeking opportunities as a Python Developer or Full Stack Developer where I can contribute, learn, and grow while building impactful software solutions and gaining real-world industry experience.
                </p>
              </motion.div>

              {/* Internships */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-lg font-bold text-white">Internships</h4>

                <div className="glassmorphism p-4 rounded-xl">
                  <h5 className="font-bold text-white mb-1">Web Development Intern</h5>
                  <p className="text-cyan-400 text-sm mb-2">Codeon Technologies, Tirupati</p>
                  <p className="text-gray-400 text-sm">Built responsive web applications and learned modern development practices.</p>
                </div>

                <div className="glassmorphism p-4 rounded-xl">
                  <h5 className="font-bold text-white mb-1">UI/UX Design Intern</h5>
                  <p className="text-cyan-400 text-sm mb-2">Codeon Technologies, Tirupati</p>
                  <p className="text-gray-400 text-sm">Designed user interfaces and improved user experience across multiple projects.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
