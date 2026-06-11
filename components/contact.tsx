'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitBranch, Share2, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const submissionDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const templateParams = {
        to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'kunduyaswani@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        submission_date: submissionDate,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

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
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 rounded-2xl neon-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className={`w-full px-4 py-3 rounded-lg bg-blue-900/20 border text-white placeholder-gray-500 focus:outline-none focus:bg-blue-900/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-cyan-500/30 focus:border-cyan-500'
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className={`w-full px-4 py-3 rounded-lg bg-blue-900/20 border text-white placeholder-gray-500 focus:outline-none focus:bg-blue-900/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-cyan-500/30 focus:border-cyan-500'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-blue-900/20 border text-white placeholder-gray-500 focus:outline-none focus:bg-blue-900/40 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-cyan-500/30 focus:border-cyan-500'
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={!loading ? { scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 neon-border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="inline-block"
                    >
                      <Send size={18} />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <p className="text-green-400 font-semibold">Message sent successfully! I&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                >
                  <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                  <p className="text-red-400 font-semibold">{errorMessage}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
