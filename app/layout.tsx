import type { Metadata } from 'next'
import { Inter, Space_Mono, Kaushan_Script } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono'
})
const kaushanScript = Kaushan_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-kaushan'
})

export const metadata: Metadata = {
  title: 'Karthik Ganesh - AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Karthik Ganesh - Master\'s student in AI at San Jose State University. Specializing in Machine Learning, Data Science, and Full Stack Development.',
  keywords: ['Karthik Ganesh', 'AI Engineer', 'ML Engineer', 'Data Scientist', 'Full Stack Developer', 'San Jose State University'],
  authors: [{ name: 'Karthik Ganesh' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Karthik Ganesh - AI/ML Engineer',
    description: 'Portfolio showcasing AI/ML projects, experience, and skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} ${kaushanScript.variable} antialiased bg-black`}>
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}

