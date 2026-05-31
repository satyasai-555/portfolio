import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Satya Sai Satyavarapu | Full Stack Engineer',
  description:
    'Full Stack Engineer with 4.5+ years building scalable web applications with React, Next.js, Node.js & TypeScript. Based in Hyderabad, India.',
  keywords: [
    'Full Stack Engineer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'TypeScript',
    'Hyderabad',
    'Satya Sai Satyavarapu',
  ],
  authors: [{ name: 'Satya Sai Satyavarapu' }],
  openGraph: {
    type: 'website',
    title: 'Satya Sai Satyavarapu | Full Stack Engineer',
    description:
      'Full Stack Engineer specializing in React, Next.js, and scalable backend architectures.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
