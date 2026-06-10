'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function Resume() {
  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const opt = {
      margin: 10,
      filename: 'Yaswani_Kundu_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    };

    // Fallback: simple text download
    const resumeText = `
KUNDU YASWANI
Email: kunduyaswani@gmail.com | Phone: 8919345126
LinkedIn: linkedin.com/in/kunduyaswani | GitHub: github.com/kunduyaswani

PROFESSIONAL SUMMARY
Motivated and detail-oriented B.Tech Computer Science Engineering student with strong fundamentals in Python, Java, Web Development, and Database Management. Experienced in building web applications and developing software projects. Completed internships in Web Development and UI/UX Design. Passionate about problem-solving, software development, and continuous learning.

EDUCATION
B.Tech – Computer Science Engineering
Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal | JNTUA, Anantapur
Expected Graduation: 2027 | CGPA: 7.2

Diploma - Sri Venkateswara Government Polytechnic College, Tirupati | 2024 | CGPA: 7.8
SSC - A.P. Model School, Putlur | 2021 | CGPA: 9.8

TECHNICAL SKILLS
Programming Languages: Python, Java, JavaScript
Frontend: HTML5, CSS3
Backend: Python, PHP
Databases: MySQL, MongoDB
Tools: Git, GitHub, VS Code, Figma
Concepts: OOP, Responsive Web Design, Problem Solving

PROJECTS
Event Registration System
• Web-based platform for managing participant registrations using HTML, CSS, JavaScript, Python
• GitHub: github.com/kunduyaswani/event_registration_project

INTERNSHIPS
Web Development Intern - Codeon Technologies, Tirupati
UI/UX Design Intern - Codeon Technologies, Tirupati

CERTIFICATIONS
AWS Cloud Practitioner Certification | NPTEL – Soft Skills | NPTEL – Internet of Things

ACHIEVEMENTS
• Participated in coding competitions and technical events
• Participated in bug-fixing and problem-solving activities
• Participated in college hackathons, enhancing teamwork and analytical skills

SOFT SKILLS
Problem Solving | Team Collaboration | Communication Skills | Time Management | Adaptability | Fast Learner

CAREER OBJECTIVE
Seeking entry-level Python Developer or Full Stack Developer position to apply technical knowledge, contribute to software development projects, and continuously enhance professional skills.
    `;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Yaswani_Kundu_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="min-h-screen py-20 px-4 md:px-6 lg:px-8 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive overview of my education, experience, skills, and professional achievements
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            Download Resume (PDF)
          </button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          id="resume-content"
          variants={itemVariants}
          className="glassmorphism rounded-2xl p-8 md:p-12 space-y-8"
        >
          {/* Contact Info */}
          <div className="border-b border-gray-700 pb-8">
            <h3 className="text-3xl font-bold text-white mb-4">KUNDU YASWANI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-500">EMAIL</p>
                <p className="font-semibold">kunduyaswani@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">PHONE</p>
                <p className="font-semibold">8919345126</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">LINKEDIN</p>
                <p className="font-semibold">linkedin.com/in/kunduyaswani</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">GITHUB</p>
                <p className="font-semibold">github.com/kunduyaswani</p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              PROFESSIONAL SUMMARY
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Motivated and detail-oriented B.Tech Computer Science Engineering student with strong fundamentals in Python, Java, Web Development, and Database Management. Experienced in building web applications and developing software projects. Completed internships in Web Development and UI/UX Design. Passionate about problem-solving, software development, and continuous learning. Seeking an entry-level Python Developer or Full Stack Developer role to contribute technical skills and grow professionally.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              EDUCATION
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="font-bold text-white">B.Tech – Computer Science Engineering</p>
                <p className="text-gray-400 text-sm">Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal</p>
                <p className="text-gray-500 text-sm">JNTUA, Anantapur | Expected Graduation: 2027 | CGPA: 7.2</p>
              </div>
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="font-bold text-white">Diploma</p>
                <p className="text-gray-400 text-sm">Sri Venkateswara Government Polytechnic College, Tirupati</p>
                <p className="text-gray-500 text-sm">State Board of Technical Education, Andhra Pradesh | 2024 | CGPA: 7.8</p>
              </div>
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="font-bold text-white">SSC</p>
                <p className="text-gray-400 text-sm">A.P. Model School, Putlur</p>
                <p className="text-gray-500 text-sm">Board of Secondary Education, Andhra Pradesh | 2021 | CGPA: 9.8</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              TECHNICAL SKILLS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm font-semibold mb-2">PROGRAMMING LANGUAGES</p>
                <p className="text-gray-300">Python, Java, JavaScript</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold mb-2">FRONTEND TECHNOLOGIES</p>
                <p className="text-gray-300">HTML5, CSS3</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold mb-2">BACKEND TECHNOLOGIES</p>
                <p className="text-gray-300">Python, PHP</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold mb-2">DATABASES</p>
                <p className="text-gray-300">MySQL, MongoDB</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500 text-sm font-semibold mb-2">TOOLS & PLATFORMS</p>
                <p className="text-gray-300">Git, GitHub, VS Code, Figma</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500 text-sm font-semibold mb-2">CONCEPTS & METHODOLOGIES</p>
                <p className="text-gray-300">Object-Oriented Programming (OOP), Responsive Web Design, Problem Solving</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              PROJECTS
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white mb-2">Event Registration System</p>
                <ul className="space-y-1 text-gray-300 text-sm ml-4">
                  <li>• Developed a web-based event registration platform for managing participant registrations and event details</li>
                  <li>• Designed responsive user interfaces using HTML, CSS, and JavaScript</li>
                  <li>• Implemented backend functionality using Python for handling registration data</li>
                  <li>• Focused on user-friendly design and efficient data management</li>
                </ul>
                <p className="text-gray-500 text-sm mt-2">
                  <strong>Technologies:</strong> HTML, CSS, JavaScript, Python<br />
                  <strong>GitHub:</strong> github.com/kunduyaswani/event_registration_project
                </p>
              </div>
            </div>
          </div>

          {/* Internships */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              INTERNSHIPS
            </h4>
            <div className="space-y-3">
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="font-bold text-white">Web Development Intern</p>
                <p className="text-gray-400 text-sm">Codeon Technologies, Tirupati</p>
              </div>
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="font-bold text-white">UI/UX Design Intern</p>
                <p className="text-gray-400 text-sm">Codeon Technologies, Tirupati</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              CERTIFICATIONS
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>AWS Cloud Practitioner Certification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>NPTEL – Soft Skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>NPTEL – Internet of Things</span>
              </li>
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              ACHIEVEMENTS
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Participated in coding competitions and technical events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Participated in bug-fixing and problem-solving activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Participated in college hackathons, enhancing teamwork and analytical skills</span>
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              SOFT SKILLS
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Communication Skills',
                'Time Management',
                'Adaptability',
                'Fast Learner',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-blue-600/20 text-cyan-400 text-sm border border-blue-600/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Career Objective */}
          <div className="border-t border-gray-700 pt-8 bg-blue-600/10 rounded-lg p-6">
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              CAREER OBJECTIVE
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Seeking an entry-level Python Developer or Full Stack Developer position where I can apply my technical knowledge, contribute to software development projects, and continuously enhance my professional skills while delivering value to the organization.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
