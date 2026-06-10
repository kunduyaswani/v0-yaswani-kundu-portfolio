'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Phone, Share2, GitBranch } from 'lucide-react';

const Resume = () => {
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

  const downloadResume = () => {
    const resumeText = `YASWANI KUNDU
Aspiring Python Developer | Full Stack Developer

CONTACT INFORMATION
Email: kunduyaswani@gmail.com | Phone: +91 8919345126
LinkedIn: linkedin.com/in/kunduyaswani | GitHub: github.com/kunduyaswani
Location: Tirupati, Andhra Pradesh, India

________________________________________________________________________________

PROFESSIONAL SUMMARY

Passionate developer with a strong foundation in Computer Science Engineering, focused on building 
modern, scalable, and user-friendly applications. Proven ability to solve complex problems through 
clean code and continuous learning. Currently pursuing B.Tech in Computer Science Engineering with 
active project development to achieve industry-ready expertise.

________________________________________________________________________________

TECHNICAL SKILLS

Programming Languages:        Python, Java, JavaScript, C
Frontend Development:         HTML5, CSS3, Responsive Design, UI/UX Design
Backend Development:          Python, PHP, REST APIs
Databases:                    MySQL, MongoDB
Tools & Platforms:            Git, GitHub, VS Code, Figma
Key Competencies:             Object-Oriented Programming (OOP), Problem Solving, 
                             Data Structures, Web Development, Database Design

________________________________________________________________________________

EDUCATION

B.Tech – Computer Science Engineering
Rajiv Gandhi Memorial College of Engineering and Technology (RGMCE), Nandyal
CGPA: 7.2/10 | Expected Graduation: 2027

Diploma – Computer Science & Engineering
Sri Venkateswara Polytechnic College (SVGP), Tirupati
CGPA: 7.8/10

SSC – Secondary School Certificate
A.P. Model School, Tirupati
CGPA: 9.8/10

________________________________________________________________________________

PROJECTS

Event Registration System
Technologies: HTML5, CSS3, JavaScript, Python, MySQL
• Developed web-based platform for efficient event registration and management
• Implemented user authentication and real-time event updates
• Designed professional UI/UX with responsive layout
• GitHub: github.com/kunduyaswani/event-registration-system

________________________________________________________________________________

INTERNSHIPS & EXPERIENCE

Web Development Intern
Codeon Technologies, Tirupati
• Developed responsive web applications using HTML5, CSS3, and JavaScript
• Collaborated with design team to implement UI mockups
• Fixed bugs and improved code quality

UI/UX Design Intern
Codeon Technologies, Tirupati
• Designed user interfaces for web and mobile applications
• Created wireframes and prototypes using design tools
• Conducted user research and incorporated feedback

________________________________________________________________________________

CERTIFICATIONS

• AWS Certified Cloud Practitioner (In Progress)
• NPTEL Online Courses (Database Design, Web Development)

________________________________________________________________________________

ACHIEVEMENTS

• Developed multiple full-stack projects from concept to deployment
• Strong problem-solving skills demonstrated through competitive coding
• Quick learner with ability to master new technologies

________________________________________________________________________________

SOFT SKILLS

Team Collaboration | Problem Solving | Communication | Time Management | 
Adaptability | Quick Learning | Leadership | Attention to Detail

________________________________________________________________________________

CAREER OBJECTIVE

Seeking opportunities as a Python Developer or Full Stack Developer where I can 
contribute, learn, and grow while building impactful software solutions and 
gaining real-world industry experience. Committed to delivering high-quality 
code and becoming an industry-ready professional.
`;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeText));
    element.setAttribute('download', 'Yaswani_Kundu_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-gradient-to-b from-background to-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Resume</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
            >
              <Download size={20} /> Download Resume
            </motion.button>
          </motion.div>

          {/* Resume Document - Professional A4 Style */}
          <motion.div
            variants={itemVariants}
            className="bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden"
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              aspectRatio: '8.5 / 11',
            }}
          >
            {/* Document Container with proper margins */}
            <div className="h-full overflow-y-auto p-8 md:p-10 space-y-3 text-sm leading-relaxed print-friendly">
              {/* Header */}
              <div className="text-center border-b border-gray-300 pb-3 mb-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">YASWANI KUNDU</h1>
                <p className="text-base text-blue-700 font-semibold mt-1">
                  Aspiring Python Developer | Full Stack Developer
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col md:flex-row md:justify-center gap-2 text-xs text-gray-700 border-b border-gray-300 pb-2 mb-3">
                <div className="flex items-center gap-1">
                  <Mail size={14} className="text-blue-600 flex-shrink-0" />
                  <span>kunduyaswani@gmail.com</span>
                </div>
                <span className="hidden md:inline text-gray-400">|</span>
                <div className="flex items-center gap-1">
                  <Phone size={14} className="text-blue-600 flex-shrink-0" />
                  <span>+91 8919345126</span>
                </div>
                <span className="hidden md:inline text-gray-400">|</span>
                <div className="flex items-center gap-1">
                  <Share2 size={14} className="text-blue-600 flex-shrink-0" />
                  <span>linkedin.com/in/kunduyaswani</span>
                </div>
                <span className="hidden md:inline text-gray-400">|</span>
                <div className="flex items-center gap-1">
                  <GitBranch size={14} className="text-blue-600 flex-shrink-0" />
                  <span>github.com/kunduyaswani</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Professional Summary</h3>
                <div className="border-l-3 border-blue-600 pl-3">
                  <p className="text-xs text-gray-800 leading-snug">
                    Passionate developer with a strong foundation in Computer Science Engineering, focused on building modern, scalable, and user-friendly applications. Proven ability to solve complex problems through clean code and continuous learning.
                  </p>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Technical Skills</h3>
                <div className="space-y-1 text-xs text-gray-800">
                  <div><span className="font-bold">Languages:</span> Python, Java, JavaScript, C</div>
                  <div><span className="font-bold">Frontend:</span> HTML5, CSS3, Responsive Design</div>
                  <div><span className="font-bold">Backend:</span> Python, PHP, REST APIs</div>
                  <div><span className="font-bold">Databases:</span> MySQL, MongoDB</div>
                  <div><span className="font-bold">Tools:</span> Git, GitHub, VS Code, Figma</div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Education</h3>
                <div className="space-y-2 text-xs">
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">B.Tech – Computer Science Engineering</p>
                    <p className="text-gray-700">Rajiv Gandhi Memorial College of Engineering and Technology (RGMCE), Nandyal</p>
                    <p className="text-gray-600">CGPA: 7.2/10 | Expected Graduation: 2027</p>
                  </div>
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">Diploma – Computer Science & Engineering</p>
                    <p className="text-gray-700">Sri Venkateswara Polytechnic College (SVGP), Tirupati</p>
                    <p className="text-gray-600">CGPA: 7.8/10</p>
                  </div>
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">SSC – Secondary School Certificate</p>
                    <p className="text-gray-700">A.P. Model School, Tirupati | CGPA: 9.8/10</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Projects</h3>
                <div className="border-l-3 border-blue-600 pl-3 text-xs">
                  <p className="font-bold text-gray-900">Event Registration System</p>
                  <p className="text-gray-700"><span className="font-bold">Tech Stack:</span> HTML5, CSS3, JavaScript, Python, MySQL</p>
                  <p className="text-gray-700">Web-based platform for efficient event registration and management with user authentication and real-time updates.</p>
                </div>
              </div>

              {/* Internships */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Internships</h3>
                <div className="space-y-1 text-xs">
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">Web Development Intern</p>
                    <p className="text-gray-700">Codeon Technologies, Tirupati</p>
                  </div>
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">UI/UX Design Intern</p>
                    <p className="text-gray-700">Codeon Technologies, Tirupati</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Certifications</h3>
                <ul className="text-xs text-gray-800 list-disc list-inside space-y-0">
                  <li>AWS Certified Cloud Practitioner (In Progress)</li>
                  <li>NPTEL Online Courses (Database Design, Web Development)</li>
                </ul>
              </div>

              {/* Achievements */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Achievements</h3>
                <ul className="text-xs text-gray-800 list-disc list-inside space-y-0">
                  <li>Developed multiple full-stack projects from concept to deployment</li>
                  <li>Strong problem-solving skills demonstrated through competitive programming</li>
                  <li>Quick learner with ability to master new technologies rapidly</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Soft Skills</h3>
                <p className="text-xs text-gray-800">
                  Team Collaboration • Problem Solving • Communication • Time Management • Adaptability • Quick Learning
                </p>
              </div>

              {/* Career Objective */}
              <div className="border-t border-gray-300 pt-3 space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Career Objective</h3>
                <p className="text-xs text-gray-800 leading-snug">
                  Seeking opportunities as a Python Developer or Full Stack Developer where I can contribute, learn, and grow while building impactful software solutions and gaining real-world industry experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Actions */}
          <motion.div variants={itemVariants} className="text-center text-gray-400 text-sm">
            <p>Click the download button above to save your resume as a text file</p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media print {
          .print-friendly {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
