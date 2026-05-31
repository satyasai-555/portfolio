'use client'

import { useInView } from '@/hooks/useInView'
import { skills } from '@/data/resume'

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs uppercase tracking-[0.15em] text-[#3b82f6] font-medium mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl font-bold text-[#e8e8e8] mb-14">Technical Stack</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#666]">
                    {group.category}
                  </span>
                  <div className="flex-1 h-px bg-[#1a1a1a]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-[#111] border border-[#1e1e1e] text-[#888] hover:text-[#e8e8e8] hover:border-[#2a2a2a] transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
