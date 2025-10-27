'use client'

import { motion } from 'framer-motion'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'

const certifications = [
  {
    title: 'NVIDIA-Certified Associate: Generative AI Multimodal',
    issuer: 'NVIDIA',
    date: '2024',
    description: 'The NCA Generative AI Multimodal certification is an entry-level credential that validates the foundational skills needed to design, implement, and manage AI systems that synthesize and interpret data across text, image, and audio modalities.',
    link: 'https://www.credly.com/badges/fbc27ceb-3668-429b-826d-6685ecc34a59/linked_in_profile',
    verification: 'https://www.credly.com/badges/fbc27ceb-3668-429b-826d-6685ecc34a59/linked_in_profile'
  },
  {
    title: 'Python 3 Programming Specialization',
    issuer: 'University of Michigan',
    date: '2024',
    description: 'Comprehensive specialization covering Python 3 programming fundamentals, data structures, and advanced topics from the University of Michigan.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/7DFBWGX4UECJ',
    verification: 'https://www.coursera.org/account/accomplishments/specialization/7DFBWGX4UECJ'
  },
]

export default function Certifications() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <motion.div 
        className="relative mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Certifications & <span className="gradient-text">Credentials</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group border border-white/10 shadow-xl"
          >
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                    <FaAward className="text-white text-xl" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {cert.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex gap-3">
                {cert.link !== '#' && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                )}
                {cert.verification !== '#' && (
                  <motion.a
                    href={cert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-gray-700 dark:text-white text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                  >
                    <span>Verify</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 