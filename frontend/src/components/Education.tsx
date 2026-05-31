'use client'

import { useInView } from '@/hooks/useInView'
import { education } from '@/data/resume'

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          <span className="section-label text-xs uppercase tracking-[0.15em] font-medium mb-4 block">
            Education
          </span>
          <h2 className="text-3xl font-bold text-[#e8e8e8] mb-14">Academic Background</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="card-lift bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#2a2a2a]"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                    <GraduationIcon />
                  </div>
                  <span className="text-xs text-[#666] mt-1">{edu.period}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#e8e8e8] mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-[#888]">{edu.institution}</p>
                <p className="text-xs text-[#666] mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GraduationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}
