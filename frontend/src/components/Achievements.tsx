'use client'

import { useInView } from '@/hooks/useInView'
import { achievements } from '@/data/resume'

export default function Achievements() {
  const { ref, inView } = useInView()

  return (
    <section id="achievements" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          <span className="section-label text-xs uppercase tracking-[0.15em] font-medium mb-4 block">
            Key Achievements
          </span>
          <h2 className="text-3xl font-bold text-[#e8e8e8] mb-14">
            Impact by the numbers.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="card-lift group relative bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#2a2a2a] overflow-hidden"
              >
                {/* Faint blue accent top-left */}
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#3b82f6]/5 group-hover:bg-[#3b82f6]/10 transition-colors duration-300" />

                <div className="relative">
                  <div className="text-4xl font-bold text-[#3b82f6] mb-3 tracking-tight">
                    {a.metric}
                  </div>
                  <p className="text-sm text-[#888] leading-relaxed">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
