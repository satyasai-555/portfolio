'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { personalInfo } from '@/data/resume'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const contactMethods = [
  {
    label: 'WhatsApp',
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phoneRaw}?text=Hi%20Satya%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`,
    external: true,
    color: '#25d366',
    icon: 'whatsapp',
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    external: false,
    color: '#3b82f6',
    icon: 'phone',
  },
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
    color: '#a78bfa',
    icon: 'email',
  },
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'}/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      )
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs uppercase tracking-[0.15em] text-[#3b82f6] font-medium mb-4 block">
            Contact
          </span>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16">

            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold text-[#e8e8e8] mb-4 leading-tight">
                Let&apos;s work together.
              </h2>
              <p className="text-[#888] text-sm leading-relaxed mb-10">
                I&apos;m available for full-time roles, contract work, and technical collaborations.
                The fastest way to reach me is WhatsApp.
              </p>

              <div className="flex flex-col gap-3">
                {contactMethods.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.external ? '_blank' : undefined}
                    rel={m.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#252525] transition-all duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${m.color}15`, border: `1px solid ${m.color}25` }}
                    >
                      {m.icon === 'whatsapp' && <WhatsAppIcon color={m.color} />}
                      {m.icon === 'phone' && <PhoneIcon color={m.color} />}
                      {m.icon === 'email' && <EmailIcon color={m.color} />}
                    </div>
                    <div>
                      <p className="text-xs text-[#666] mb-0.5">{m.label}</p>
                      <p className="text-sm text-[#888] group-hover:text-[#e8e8e8] transition-colors">
                        {m.value}
                      </p>
                    </div>
                    <ArrowIcon />
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-4 mt-8">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#666] hover:text-[#e8e8e8] transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#666] hover:text-[#e8e8e8] transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs text-[#666] mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="John Smith"
                    className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#666] mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="john@company.com"
                    className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#666] mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#3b82f6]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-50 text-white text-sm font-medium transition-colors duration-200"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-xs text-[#22c55e] text-center">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-[#f87171] text-center">
                    Something went wrong. Try reaching me directly on WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ color }: { color: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon({ color }: { color: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon({ color }: { color: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="ml-auto text-[#2a2a2a] group-hover:text-[#555] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}
