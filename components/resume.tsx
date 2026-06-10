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
    const resumeText = `KUNDU YASWANI
Aspiring Python Developer | Full Stack Developer
Email: kunduyaswani@gmail.com | Phone: +91 8919345126
LinkedIn: linkedin.com/in/kunduyaswani | GitHub: github.com/kunduyaswani

PROFESSIONAL SUMMARY
Motivated and detail-oriented B.Tech Computer Science Engineering student with strong fundamentals in Python,
Java, Web Development, and Database Management. Experienced in building web applications and developing
software projects. Completed internships in Web Development and UI/UX Design. Passionate about
problem-solving, software development, and continuous learning. Seeking an entry-level Python Developer or Full
Stack Developer role to contribute technical skills and grow professionally.

TECHNICAL SKILLS
Programming Languages: Python, Java, JavaScript
Frontend Technologies: HTML5, CSS3
Backend Technologies: Python, PHP
Databases: MySQL, MongoDB
Tools & Platforms: Git, GitHub, VS Code, Figma
Concepts: Object-Oriented Programming (OOP), Responsive Web Design, Problem Solving

EDUCATION
B.Tech – Computer Science Engineering
Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal (JNTUA, Anantapur)
Expected Graduation: 2027 | CGPA: 7.2

Diploma
Sri Venkateswara Government Polytechnic College, Tirupati (SBTET, Andhra Pradesh)
2024 | CGPA: 7.8

SSC
A.P. Model School, Putlur (Board of Secondary Education, Andhra Pradesh)
2021 | CGPA: 9.8

PROJECTS
Event Registration System — HTML, CSS, JavaScript, Python
• Developed a web-based event registration platform for managing participant registrations and event details.
• Designed responsive user interfaces using HTML, CSS, and JavaScript.
• Implemented backend functionality using Python for handling registration data.
• Focused on user-friendly design and efficient data management.
GitHub: github.com/kunduyaswani/event_registration_project

INTERNSHIPS
Web Development Intern — Codeon Technologies, Tirupati
• Built responsive web interfaces using HTML, CSS, and JavaScript.
• Collaborated on real-world frontend workflows and version control with Git.

UI/UX Design Intern — Codeon Technologies, Tirupati
• Designed clean, user-centric interfaces in Figma focused on usability and visual hierarchy.
• Produced wireframes and prototypes for client-facing web applications.

CERTIFICATIONS
• AWS Cloud Practitioner Certification
• NPTEL – Soft Skills
• NPTEL – Internet of Things

ACHIEVEMENTS
• Participated in coding competitions and technical events.
• Engaged in bug-fixing and problem-solving activities.
• Participated in college hackathons, enhancing teamwork and analytical skills.

SOFT SKILLS
Problem Solving • Team Collaboration • Communication • Time Management • Adaptability • Fast Learner

CAREER OBJECTIVE
Seeking an entry-level Python Developer or Full Stack Developer position where I can apply my technical
knowledge, contribute to software development projects, and continuously enhance my professional skills while
delivering value to the organization.
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
                  <div><span className="font-bold">Languages:</span> Python, Java, JavaScript</div>
                  <div><span className="font-bold">Frontend:</span> HTML5, CSS3</div>
                  <div><span className="font-bold">Backend:</span> Python, PHP</div>
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
                    <p className="text-gray-700">Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal (JNTUA, Anantapur)</p>
                    <p className="text-gray-600">Expected Graduation: 2027 | CGPA: 7.2</p>
                  </div>
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">Diploma</p>
                    <p className="text-gray-700">Sri Venkateswara Government Polytechnic College, Tirupati (SBTET, Andhra Pradesh)</p>
                    <p className="text-gray-600">2024 | CGPA: 7.8</p>
                  </div>
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">SSC – Secondary School Certificate</p>
                    <p className="text-gray-700">A.P. Model School, Putlur</p>
                    <p className="text-gray-600">Board of Secondary Education, Andhra Pradesh | 2021 | CGPA: 9.8/10</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Projects</h3>
                <div className="border-l-3 border-blue-600 pl-3 text-xs space-y-1">
                  <p className="font-bold text-gray-900">Event Registration System — HTML, CSS, JavaScript, Python</p>
                  <ul className="text-gray-700 list-disc list-inside space-y-0">
                    <li>Developed a web-based event registration platform for managing participant registrations and event details.</li>
                    <li>Designed responsive user interfaces using HTML, CSS, and JavaScript.</li>
                    <li>Implemented backend functionality using Python for handling registration data.</li>
                    <li>Focused on user-friendly design and efficient data management.</li>
                  </ul>
                  <p className="text-gray-700"><span className="font-bold">GitHub:</span> github.com/kunduyaswani/event_registration_project</p>
                </div>
              </div>

              {/* Internships */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Internships</h3>
                <div className="space-y-2 text-xs">
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">Web Development Intern — Codeon Technologies, Tirupati</p>
                    <ul className="text-gray-700 list-disc list-inside space-y-0">
                      <li>Built responsive web interfaces using HTML, CSS, and JavaScript.</li>
                      <li>Collaborated on real-world frontend workflows and version control with Git.</li>
                    </ul>
                  </div>
                  <div className="border-l-3 border-blue-600 pl-3">
                    <p className="font-bold text-gray-900">UI/UX Design Intern — Codeon Technologies, Tirupati</p>
                    <ul className="text-gray-700 list-disc list-inside space-y-0">
                      <li>Designed clean, user-centric interfaces in Figma focused on usability and visual hierarchy.</li>
                      <li>Produced wireframes and prototypes for client-facing web applications.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Certifications</h3>
                <ul className="text-xs text-gray-800 list-disc list-inside space-y-0">
                  <li>AWS Cloud Practitioner Certification</li>
                  <li>NPTEL Online Course – Soft Skills</li>
                  <li>NPTEL Online Course – Internet of Things</li>
                </ul>
              </div>

              {/* Achievements */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Achievements</h3>
                <ul className="text-xs text-gray-800 list-disc list-inside space-y-0">
                  <li>Participated in coding competitions and technical events.</li>
                  <li>Engaged in bug-fixing and problem-solving activities.</li>
                  <li>Participated in college hackathons, enhancing teamwork and analytical skills.</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Soft Skills</h3>
                <p className="text-xs text-gray-800">
                  Problem Solving • Team Collaboration • Communication • Time Management • Adaptability • Fast Learner
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
            <p>Click the download button above to save your resume as a PDF</p>
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
