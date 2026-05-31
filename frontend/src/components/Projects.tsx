'use client'

import { useInView } from '@/hooks/useInView'
import { projects } from '@/data/resume'

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs uppercase tracking-[0.15em] text-[#3b82f6] font-medium mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl font-bold text-[#e8e8e8] mb-14">What I&apos;ve Built</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#252525] transition-all duration-300"
              >
                {/* Badge + title */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-base font-semibold text-[#e8e8e8] leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full font-medium border ${
                      project.badge === 'Live Project'
                        ? 'bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20'
                        : 'bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20'
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#888] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#777] leading-relaxed">
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-[#2a2a2a] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#151515] border border-[#252525] text-[#777] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
