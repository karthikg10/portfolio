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
    description: [
      'Developed modular Java + Spring Boot microservices to streamline payment reconciliation workflows; improved throughput and reduced latency by 30% via better API design and optimized resource handling.',
      'Designed and integrated REST APIs for internal reporting tools used by finance teams, delivering faster access to transaction histories and cutting manual audit prep time by several hours weekly.',
      'Optimized PostgreSQL queries and implemented Redis caching for recurring queries, reducing overall database load by 25% and ensuring consistent response times under peak loads.',
      'Containerized services with Docker and deployed to Kubernetes; enabled seamless blue-green deployments and zero-downtime upgrades for mission-critical financial services.',
    ],
  },
  {
    type: 'work',
    title: 'Graduate Research Assistant',
    company: 'San Jose State University, San Jose, CA',
    period: 'Sept 2023 - Dec 2024',
    description: [
      'Designed an LLM-powered QA system using RAG (LangChain, VectorDB); automated content summarization and structured Q&A generation on LMS datasets with fine-tuned GPT models.',
      'Deployed LLM inference microservices on GCP Vertex AI with Docker + Kubernetes for low-latency scalability.',
      'Fine-tuned BERT and GPT-3.5 for incident classification and log summarization; built a document-analysis pipeline with LLMs + autoencoders to detect semantic anomalies.',
      'Ran transparency/interpretability evaluations with SHAP/LIME; improved RAG accuracy by refining chunking and embeddings in VectorDB.',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Champion InfoMetrics, Bangalore',
    period: 'Aug 2021 - Jul 2023',
    description: [
      'Developed high-traffic APIs using Node.js + Express for client-facing financial applications; supported 50K+ concurrent users with secure, multi-region interactions.',
      'Migrated legacy apps to a modern microservices architecture on Kubernetes, improving deployment reliability by 40% and reducing MTTR during outages.',
      'Integrated Kafka pipelines and batch jobs to support near real-time analytics, reducing reporting delays from hours to minutes.',
      'Enhanced API security with role-based access controls and compliance checks, aligning services with PCI DSS standards.',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Eunoia Labs, Bengaluru',
    period: 'Jan 2021 - Jul 2021',
    description: [
      'Created backend components in Java + Spring for reconciliation and settlement processes, improving data consistency across financial ledgers during peak workloads.',
      'Tuned SQL queries and introduced connection pooling for PostgreSQL databases, reducing average query latency by 30%.',
      'Integrated Redis caching and asynchronous job queues for high-frequency workflows, supporting near real-time reporting while reducing stress on core transactional databases.',
    ],
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
          animate={inView ? 'visible' : 'hidden'}
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
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-accent-600 dark:text-accent-400 mr-2">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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


