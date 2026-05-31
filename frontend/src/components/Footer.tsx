import { personalInfo } from '@/data/resume'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#111] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#e8e8e8]">
            SS<span className="text-[#3b82f6]">.</span>
          </span>
          <span className="text-xs text-[#555]">
            &copy; {year} Satya Sai Satyavarapu. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-[#737373] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-[#737373] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs text-[#555] hover:text-[#737373] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
