'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer Intern',
    company: 'Infocareer Pvt Ltd, San Francisco',
    period: 'Jan 2025 - Aug 2025',
    summary:
      'Built Spring Boot microservices to streamline payment reconciliation and redesigned internal APIs. Optimized PostgreSQL and added Redis caching to cut latency by ~30% and DB load by ~25%, and shipped zero‑downtime blue‑green releases on Kubernetes.',
  },
  {
    type: 'work',
    title: 'Graduate Research Assistant',
    company: 'San Jose State University, San Jose, CA',
    period: 'Sept 2023 - Dec 2024',
    summary:
      'Developed an LLM RAG system with LangChain + VectorDB, fine‑tuned GPT/BERT models, and deployed inference on Vertex AI. Improved retrieval accuracy via better chunking/embeddings and validated with SHAP/LIME interpretability checks.',
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Champion InfoMetrics, Bangalore',
    period: 'Aug 2021 - Jul 2023',
    summary:
      'Delivered high‑traffic Node.js/Express APIs serving 50K+ users and migrated services to a Kubernetes microservices stack, boosting release reliability ~40%. Built Kafka pipelines for near real‑time analytics and enforced RBAC/PCI DSS controls.',
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Eunoia Labs, Bengaluru',
    period: 'Jan 2021 - Jul 2021',
    summary:
      'Implemented Java/Spring components for reconciliation and settlement, tuned PostgreSQL with pooling, and introduced Redis + async jobs to enable near real‑time reporting under peak load.',
  },
]

const education = [
  {
    degree: "Master's of Science, Artificial Intelligence",
    school: 'San Jose State University, San Jose, USA',
    period: 'Aug 2023 - May 2025',
    description: 'Pursuing advanced topics in machine learning, NLP, advanced data mining, and IoT',
  },
  {
    degree: "Bachelor's of Engineering, Computer Science",
    school: 'Visvesvaraya Technological University, Karnataka, India',
    period: 'Aug 2018 - Jun 2022',
    description: 'Graduated with strong foundation in algorithms, data structures, and software development',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-primary-400" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-2xl hover:shadow-neon transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.summary}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-2xl hover:shadow-neon-accent transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                      <p className="text-accent-600 dark:text-accent-400 font-semibold">{edu.school}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


