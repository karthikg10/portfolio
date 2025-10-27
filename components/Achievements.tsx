'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaMicrophone, FaLaptopCode } from 'react-icons/fa'

const achievements = [
  {
    university: 'San Jose State University',
    period: '2023 - 2025',
    color: 'from-blue-500 via-indigo-600 to-purple-600',
    icon: FaTrophy,
    items: [
      { icon: FaUsers, text: 'Vice President Of Retention - Student Alumni Connection (SAC)' },
      { icon: FaUsers, text: 'Peer Mentor - Peer Connections' },
      { icon: FaMicrophone, text: 'Public Speaking' },
      { icon: FaLaptopCode, text: 'Technical Training' },
    ],
  },
  {
    university: 'Visvesvaraya Technological University',
    period: '2018 - 2022',
    color: 'from-green-500 via-emerald-600 to-teal-600',
    icon: FaTrophy,
    items: [
      { icon: FaTrophy, text: 'Best Outgoing Student of the Year 2022' },
      { icon: FaUsers, text: 'Vice Chair IEEE Student Branch 2021-2022' },
      { icon: FaMicrophone, text: 'Public Speaking' },
      { icon: FaLaptopCode, text: 'Technical Training' },
    ],
  },
]

export default function Achievements() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <motion.div 
        className="relative mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Leadership & <span className="gradient-text">Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.university}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-xl"
          >
            <div className={`h-2 bg-gradient-to-r ${achievement.color}`}></div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                    <achievement.icon className="text-white text-2xl" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.university}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {achievement.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {achievement.items.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon className="text-primary-500 dark:text-primary-400 text-lg group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {item.text}
                      </span>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
