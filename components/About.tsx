'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaBriefcase, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

interface AboutProps {
  handleOpenExperience?: () => void
}

const contactInfo = [
  { icon: FaUser, label: 'Full Name', value: 'Karthik Ganesh Malini' },
  { icon: FaPhone, label: 'Phone', value: '+1 669 588 6706' },
  { icon: FaEnvelope, label: 'Email', value: 'karthikganesh.ma@gmail.com' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'San Jose, CA, USA' },
]

export default function About({ handleOpenExperience }: AboutProps) {
  return (
    <div className="max-w-4xl mx-auto relative px-4 md:px-0">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`about-bg-${i}`}
            className="absolute w-20 h-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.3, 0.1, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Profile Section */}
      <motion.div 
        className="flex flex-col items-center mb-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-6 relative"
          whileHover={{ scale: 1.05, rotateY: 5 }}
        >
          <div 
            className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg"
          >
            <Image
              src="/images/profile.jpg"
              alt="Karthik Ganesh"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          Hi, I&apos;m <span className="gradient-text">Karthik Ganesh</span>
        </h1>
        <div className="text-xl text-blue-700 dark:text-blue-300 mb-6 text-center">
          <TypeAnimation
            sequence={[
              'SOFTWARE ENGINEER', 1500,
              'FULL STACK ENGINEER', 1500,
              'AI/ML ENGINEER', 1500,
              'DATA SCIENTIST', 1500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={50}
            deletionSpeed={60}
            className="tracking-wide"
          />
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl leading-relaxed mb-4">
          Passionate and driven MS in Artificial Intelligence student with close to 5 years of professional experience in backend development, cloud computing, and systems engineering. With a strong foundation in AI/ML, GPU acceleration, and kernel-level optimization, I am eager to explore how low-level system design and high-performance computing can power the next generation of intelligent solutions.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl leading-relaxed mb-4">
          I enjoy building robust backend architectures, scaling applications on the cloud, and leveraging cutting-edge hardware/software integration to maximize efficiency in AI workloads. My curiosity pushes me to experiment across the full stack—from data pipelines and distributed systems to GPU kernels and deep learning frameworks.
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl leading-relaxed mb-6">
          Excited to collaborate with researchers, engineers, and innovators, I aim to contribute to projects at the intersection of artificial intelligence, cloud technologies, and high-performance computing. I am seeking opportunities to learn, grow, and make a meaningful impact by driving scalable, efficient, and future-ready solutions.
        </p>

        {handleOpenExperience && (
          <div className="mt-4">
            <motion.button
              onClick={handleOpenExperience}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-white/10 bg-white text-gray-900 dark:bg-white/5 dark:text-white shadow-md hover:bg-gray-50 dark:hover:bg-white/10"
            >
              <FaBriefcase className="text-primary-400" />
              <span className="text-sm font-medium">View Experience</span>
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {contactInfo.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                  <Icon className="text-base text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium text-sm">{item.value}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Interest Tags */}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {['Distributed Systems', 'Enterprise Software', 'Parallel Computing', 'Cloud Computing', 'Machine Learning', 'AI'].map((interest) => (
          <span
            key={interest}
            className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:bg-blue-500/30 transition-colors"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  )
}