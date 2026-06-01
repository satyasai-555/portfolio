'use client'

import Image from 'next/image'
import { useState } from 'react'
import { personalInfo, stats } from '@/data/resume'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Blue glow */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-center">

          {/* ── Left — content ────────────────────────── */}
          <div>
            {/* Mobile avatar (above name on small screens) */}
            <div className="flex lg:hidden justify-center mb-8 hero-line hero-line-1">
              <AvatarCard size="sm" />
            </div>

            <div className="hero-line hero-line-1 inline-flex items-center gap-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] pulse-green" />
              <span className="text-sm text-[#737373]">Open to opportunities</span>
            </div>

            <p className="hero-line hero-line-2 text-[#737373] text-lg mb-1">Hi, I&apos;m</p>
            <h1 className="hero-line hero-line-3 text-[56px] sm:text-[72px] lg:text-[80px] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-[#e8e8e8]">Satya Sai</span>
              <br />
              <span className="text-[#3b82f6]">Satyavarapu</span>
            </h1>

            <p className="hero-line hero-line-4 text-xl text-[#737373] mb-4">
              Full Stack Engineer
            </p>
            <p className="hero-line hero-line-4 text-[#888] text-base leading-relaxed max-w-lg mb-10">
              4.5+ years building performant web apps with{' '}
              <span className="text-[#a0a0a0]">React</span>,{' '}
              <span className="text-[#a0a0a0]">Next.js</span>, and{' '}
              <span className="text-[#a0a0a0]">Node.js</span>. From optimizing
              frontend bundles to architecting event-driven backends.
            </p>

            {/* CTAs */}
            <div className="hero-line hero-line-5 flex flex-wrap gap-3 mb-10">
              <a
                href={`https://wa.me/${personalInfo.phoneRaw}?text=Hi%20Satya%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#25d366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-[#25d366]/20"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#111] hover:bg-[#181818] border border-[#222] text-[#e8e8e8] font-medium text-sm transition-all duration-200"
              >
                View Projects <span className="text-[#737373]">→</span>
              </a>
              <a
                href="/resume.pdf"
                download="Satya_Sai_Satyavarapu_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#111] hover:bg-[#181818] border border-[#222] text-[#888] hover:text-[#e8e8e8] font-medium text-sm transition-all duration-200"
              >
                <DownloadIcon />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="hero-line hero-line-6 flex flex-wrap items-center gap-6">
              <SocialLink href={personalInfo.github} label="GitHub"><GitHubIcon /></SocialLink>
              <SocialLink href={personalInfo.linkedin} label="LinkedIn"><LinkedInIcon /></SocialLink>
              <SocialLink href={`mailto:${personalInfo.email}`} label={personalInfo.email}><EmailIcon /></SocialLink>
              <span className="flex items-center gap-1.5 text-sm text-[#666]">
                <LocationIcon />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* ── Right — avatar + stats (desktop only) ─── */}
          <div className="hidden lg:flex flex-col items-center gap-6 hero-line hero-stats">
            <AvatarCard size="lg" />

            {/* Stats below avatar */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-4 text-center hover:border-[#2a2a2a] transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-[#3b82f6] mb-0.5">{s.value}</div>
                  <div className="text-[10px] text-[#666] leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#555]" />
        </div>
      </div>
    </section>
  )
}

/* ─── Avatar with hover summary card ─────────────────────────── */
function AvatarCard({ size }: { size: 'sm' | 'lg' }) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const dim = size === 'lg' ? 176 : 112

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar circle */}
      <div
        className="rounded-full overflow-hidden ring-2 ring-[#3b82f6]/40 ring-offset-4 ring-offset-[#0a0a0a] transition-all duration-300"
        style={{
          width: dim,
          height: dim,
          boxShadow: hovered ? '0 0 32px rgba(59,130,246,0.2)' : undefined,
        }}
      >
        {!imgError ? (
          <Image
            src="/avatar.jpg"
            alt="Satya Sai Satyavarapu"
            width={dim}
            height={dim}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          /* Initials fallback — replace /public/avatar.jpg to show real photo */
          <div
            className="w-full h-full flex items-center justify-center text-[#3b82f6] font-bold"
            style={{
              background: 'linear-gradient(135deg, #0f0f1a 0%, #111827 100%)',
              fontSize: size === 'lg' ? '3rem' : '1.75rem',
            }}
          >
            SS
          </div>
        )}
      </div>

      {/* Online dot */}
      <span
        className="absolute bottom-2 right-2 rounded-full bg-[#22c55e] border-2 border-[#0a0a0a]"
        style={{ width: size === 'lg' ? 14 : 10, height: size === 'lg' ? 14 : 10 }}
      />

      {/* Hover — summary card (desktop large only) */}
      {size === 'lg' && (
        <div
          className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-72 bg-[#111] border border-[#222] rounded-xl p-4 shadow-2xl pointer-events-none transition-all duration-250"
          style={{
            opacity: hovered ? 1 : 0,
            transform: `translateX(-50%) translateY(${hovered ? 0 : 8}px)`,
          }}
        >
          {/* Arrow */}
          <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#111] border-r border-b border-[#222] rotate-45" />

          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[10px] text-[#22c55e] font-medium uppercase tracking-widest">
              Open to work
            </span>
          </div>
          <p className="text-xs text-[#888] leading-relaxed">
            Frontend-focused Full Stack Engineer with{' '}
            <span className="text-[#c8c8c8]">4.5+ years</span> of experience in{' '}
            <span className="text-[#c8c8c8]">React, Next.js &amp; Node.js</span>.
            Building scalable UIs and event-driven backends from Hyderabad, India.
          </p>
          <div className="mt-3 pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
            <span className="text-[10px] text-[#555]">Caprus IT · 4.5 yrs</span>
            <span className="text-[10px] text-[#555]">Hyderabad, India</span>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Shared sub-components ──────────────────────────────────── */
function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-1.5 text-sm text-[#666] hover:text-[#e8e8e8] transition-colors duration-200"
    >
      {children}
      {label}
    </a>
  )
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
