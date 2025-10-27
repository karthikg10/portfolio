'use client'

import { motion } from 'framer-motion'
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiTensorflow, SiPytorch, SiDocker, SiGit,
  SiPostgresql, SiMongodb, SiKubernetes, SiAmazonwebservices,
  SiGooglecloud, SiOpenai
} from 'react-icons/si'
import { FaBrain, FaDatabase, FaChartLine, FaCloud, FaCode, FaServer, FaFlask } from 'react-icons/fa'

const technicalSkills = [
  // AI/ML
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
  { name: 'scikit-learn', icon: FaCode, color: '#F7931E' },
  { name: 'Pandas', icon: FaChartLine, color: '#150458' },
  { name: 'NumPy', icon: FaCode, color: '#013243' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'FastAPI', icon: FaCode, color: '#009688' },
  { name: 'Flask', icon: FaFlask, color: '#000000' },
  { name: 'Java', icon: FaCode, color: '#ED8B00' },
  { name: 'Spring', icon: FaServer, color: '#6DB33F' },
  
  // Frontend
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#fff' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  
  // Databases
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: FaDatabase, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', icon: FaDatabase, color: '#DC382D' },
  
  // Cloud & DevOps
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  
  // Tools
  { name: 'Data Sci', icon: FaChartLine, color: '#1f77b4' },
  { name: 'NLP', icon: FaBrain, color: '#9c27b0' },
]

const softSkills = [
  { name: 'Communication', level: 95 },
  { name: 'Team Work', level: 93 },
  { name: 'Problem Solving', level: 94 },
  { name: 'Leadership', level: 87 },
  { name: 'Time Management', level: 90 },
  { name: 'Student Support', level: 92 },
]

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <motion.div 
        className="relative mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
      </motion.div>

      {/* Core Competencies */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Competencies</h3>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {[
            { name: 'Machine Learning', level: 95, colors: ['#4f7cac','#357abd'] },
            { name: 'Deep Learning', level: 93, colors: ['#9c27b0','#7b1fa2'] },
            { name: 'NLP & AI', level: 91, colors: ['#ef6c00','#e65100'] },
            { name: 'Data Science', level: 92, colors: ['#1f77b4','#1565c0'] },
            { name: 'Full Stack Dev', level: 90, colors: ['#d84343','#c62828'] },
            { name: 'Cloud Engineering', level: 88, colors: ['#00695c','#00897b'] },
          ].map((s, i) => (
            <div key={s.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white font-mono text-lg">{s.name}</span>
                <span className="text-gray-900 dark:text-white font-mono text-lg">{s.level}%</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 dark:bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                  className="h-full rounded-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${s.colors[0]} 0 10px, ${s.colors[1]} 10px 20px)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {technicalSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="glass p-3 rounded-2xl flex flex-col items-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-all group"
              >
                <Icon 
                  className="text-3xl transition-all" 
                  style={{ color: skill.color }}
                />
                <p className="text-gray-900 dark:text-white text-[10px] font-medium text-center leading-tight">{skill.name}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Professional Skills */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Professional Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Communication', level: 95 },
            { name: 'Team Work', level: 93 },
            { name: 'Management', level: 90 },
            { name: 'Creativity', level: 89 },
          ].map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="relative flex flex-col items-center justify-center h-40">
              <svg className="w-32 h-32 rotate-[-90deg]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#2d2d2d" strokeWidth="6" fill="none" />
                <motion.circle
                  cx="50" cy="50" r="45" fill="none"
                  stroke="#ff9800" strokeWidth="6" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: s.level / 100 }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                />
              </svg>
              <div className="absolute text-center">
                <div className="text-gray-900 dark:text-white text-[13px] font-semibold leading-tight px-1">{s.name}</div>
                <div className="text-gray-700 dark:text-white/70 text-xs mt-1">{s.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
