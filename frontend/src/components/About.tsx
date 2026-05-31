'use client'

import { useInView } from '@/hooks/useInView'
import { personalInfo } from '@/data/resume'

const highlights = [
  { label: 'Frontend Architecture', desc: 'Building scalable component systems and optimizing bundles for production performance.' },
  { label: 'Backend Engineering', desc: 'Designing event-driven APIs, queue systems, and real-time WebSocket architectures.' },
  { label: 'AI Integrations', desc: 'Shipping production-ready workflows with Gemini API, HeyGen, and multi-modal processing.' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`reveal ${inView ? 'in-view' : ''}`}
        >
          <span className="section-label text-xs uppercase tracking-[0.15em] font-medium mb-4 block">
            About
          </span>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold text-[#e8e8e8] mb-6 leading-tight">
                Turning complex requirements into clean, scalable systems.
              </h2>
              <p className="text-[#888] leading-relaxed text-[15px]">
                {personalInfo.summary}
              </p>
            </div>

            {/* Right — highlights */}
            <div className="flex flex-col gap-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#e8e8e8] mb-1">{h.label}</p>
                    <p className="text-sm text-[#888] leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
