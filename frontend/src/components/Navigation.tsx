'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight whichever section is in the centre of the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[#e8e8e8] font-bold text-xl tracking-tight select-none"
        >
          SS<span className="text-[#3b82f6]">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm transition-colors duration-200 pb-0.5 ${
                active === l.id
                  ? 'text-[#e8e8e8] active'
                  : 'text-[#737373] hover:text-[#e8e8e8]'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Satya_Sai_Satyavarapu_Resume.pdf"
            className="flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#e8e8e8] transition-colors duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-md bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#3b82f6]/25"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5 h-[1.5px] bg-[#e8e8e8] transition-all duration-200 origin-center ${
              open ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#e8e8e8] transition-all duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#e8e8e8] transition-all duration-200 origin-center ${
              open ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80' : 'max-h-0'
        } bg-[#0a0a0a] border-b border-[#1a1a1a]`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-sm border-b border-[#111] last:border-0 transition-colors ${
                active === l.id ? 'text-[#e8e8e8]' : 'text-[#737373] hover:text-[#e8e8e8]'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 py-2.5 text-center rounded-md bg-[#3b82f6] text-white text-sm font-medium"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}
