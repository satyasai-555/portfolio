'use client'

import { useInView } from '@/hooks/useInView'
import { experience } from '@/data/resume'

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs uppercase tracking-[0.15em] text-[#3b82f6] font-medium mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl font-bold text-[#e8e8e8] mb-14">Work History</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#2a2a2a]" />

            <div className="flex flex-col gap-14">
              {experience.map((job, i) => (
                <div key={i} className="relative pl-10">
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 ${
                      job.current
                        ? 'border-[#3b82f6] bg-[#3b82f6]/20'
                        : 'border-[#2a2a2a] bg-[#111]'
                    }`}
                  />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-5">
                    <div>
                      <h3 className="text-lg font-semibold text-[#e8e8e8]">{job.role}</h3>
                      <p className="text-sm text-[#737373]">
                        {job.company} &middot; {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#666]">{job.period}</span>
                      {job.current && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] font-medium border border-[#3b82f6]/20">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="flex flex-col gap-3">
                    {job.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#888] leading-relaxed">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#333] flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
