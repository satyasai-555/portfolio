export const personalInfo = {
  name: 'Satya Sai Satyavarapu',
  title: 'Full Stack Engineer',
  location: 'Hyderabad, India',
  phone: '+91 9502963873',
  phoneRaw: '919502963873',
  email: 'satyasai97.ss@gmail.com',
  linkedin: 'https://linkedin.com/in/satyasai-satyavarapu',
  github: 'https://github.com/satyasai-555',
  summary:
    'Results-driven Full Stack Engineer with 4.5+ years of experience specializing in frontend architecture and scalable backend workflows. Expert in React.js, TypeScript, Next.js, React Native, and Node.js. Proven track record of optimizing frontend performance, designing reusable component systems, and building event-driven backend architectures, real-time WebSocket systems, and production-ready AI integrations.',
}

export const stats = [
  { value: '4.5+', label: 'Years Experience' },
  { value: '40+', label: 'UI Components' },
  { value: '50%', label: 'Perf Improvement' },
  { value: '3', label: 'Core Products' },
]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'React Native', 'Redux', 'Context API', 'Tailwind CSS', 'Material UI', 'List Virtualization'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'Socket.io', 'Redis', 'BullMQ', 'Webhooks'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'Mongoose ODM', 'PostgreSQL', 'Azure Blob Storage'],
  },
  {
    category: 'AI & Integrations',
    items: ['Google Gemini API', 'HeyGen API', 'Multi-modal Processing'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Docker', 'Azure', 'Nginx', 'Vercel', 'Render', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    category: 'Testing & Architecture',
    items: ['Jest', 'React Testing Library', 'Event-driven Architecture', 'Rate Limiting', 'Cron Jobs', 'Postman'],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Caprus IT Private Limited',
    location: 'Hyderabad, India',
    period: 'May 2024 – Present',
    current: true,
    achievements: [
      'Scaled engineering scope from frontend delivery to full backend ownership — API architecture, MongoDB schemas, and queue infrastructure.',
      'Reduced initial JS payload by 50% (1.8 MB → 900 KB) via route-based code splitting; Lighthouse scores rose from mid-50s to mid-80s.',
      'Built event-driven pipeline with BullMQ and Redis for third-party AI workflows, with custom retry and automated error handling.',
      'Replaced legacy polling with real-time WebSocket streams using Socket.io, significantly improving client-side efficiency.',
      'Resolved critical memory leaks in long-lived WebSocket connections by redesigning lifecycle management, boosting production uptime.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Caprus IT Private Limited',
    location: 'Hyderabad, India',
    period: 'Jan 2022 – Apr 2024',
    current: false,
    achievements: [
      'Shipped high-performance, responsive UIs across web (React) and mobile (React Native) with strict feature parity.',
      'Built a shared atomic component library with 40+ reusable primitives, accelerating development velocity by 30%.',
      'Fixed rendering bottlenecks on lower-spec Android devices via Redux selector optimization, memoization, and list virtualization.',
      'Formalized declarative API data contracts with product, QA, and backend teams — unblocking parallel feature development.',
    ],
  },
]

export const projects = [
  {
    title: 'Aauti Marketplace',
    badge: 'Company Project',
    description:
      'Async AI video generation pipeline processing 50–100+ jobs daily, with centralized webhook handling and secure server-side API routing.',
    tech: ['MERN Stack', 'Redis', 'BullMQ', 'WebSockets', 'HeyGen API'],
    highlights: [
      'Async pipeline offloads AI compute to isolated Redis workers, keeping primary server load-free.',
      'Webhook ingest handler with automated fallback recovery guards data integrity against API drops.',
      'Server-side routers protect API credentials while supporting long-running operations.',
    ],
  },
  {
    title: 'Aauti School',
    badge: 'Company Project',
    description:
      'K-12 educational platform with grade-specific curriculum delivery, complex Redux state trees, and dynamic lesson trajectory mapping.',
    tech: ['React', 'React Native', 'Redux', 'RESTful APIs'],
    highlights: [
      'Complex client-side state management for a scalable, grade-specific learning platform.',
      'Dynamic curriculum endpoints let educators modify lesson paths without static file overhead.',
    ],
  },
  {
    title: 'Content Guard-AI',
    badge: 'Live Project',
    description:
      'Full-stack multi-modal content moderation engine for text, image, PDF, and video assets — powered by Gemini API with Docker-isolated services.',
    tech: ['Next.js', 'FastAPI', 'MongoDB', 'Docker', 'Gemini API'],
    highlights: [
      'Multi-modal moderation with dynamic safety thresholds across text, image, PDF, and video.',
      'Custom token-bucket rate limiting middleware for predictable API cost control.',
      'Fully containerized with Docker for deterministic local dev and Vercel deployments.',
    ],
  },
]

export const education = [
  {
    degree: 'MBA, Information Technology',
    institution: 'Kakinada Institute of Engineering & Technology',
    location: 'Kakinada, India',
    period: 'Jul 2019 – Sep 2021',
  },
  {
    degree: 'BSc, Computer and Information Sciences',
    institution: 'Aditya Degree College',
    location: 'Kakinada, India',
    period: 'Apr 2015 – Jun 2018',
  },
]
