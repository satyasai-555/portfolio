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
    'Frontend-focused Software Engineer with 4.5+ years of experience building scalable, high-performance web and mobile applications using React.js, TypeScript, Next.js, and React Native. Experienced in frontend architecture, performance optimization, reusable component systems, and responsive UI development. Additionally experienced in Node.js backend services, real-time systems, and AI-driven integrations for full-stack product development.',
}

export const stats = [
  { value: '4.5+', label: 'Years Experience' },
  { value: '40+', label: 'UI Components' },
  { value: '50%', label: 'Perf Improvement' },
  { value: '3', label: 'Core Products' },
]

export const achievements = [
  { metric: '50%', text: 'Reduced JS bundle size improving Lighthouse score from 55 → 85' },
  { metric: '40+', text: 'Reusable UI components accelerating feature delivery by 30%' },
  { metric: '100+', text: 'AI processing pipeline jobs handled per day' },
  { metric: '0ms', text: 'Polling eliminated — replaced with WebSocket streaming' },
  { metric: '↑', text: 'Resolved production memory leaks improving application uptime' },
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
      'Expanded from frontend development to backend ownership by building APIs, MongoDB schemas, and queue-based workflows for product features.',
      'Engineered a 50% reduction in initial JavaScript payload size (from 1.8 MB to under 900 KB) using route-based code splitting and dependency pruning, elevating Lighthouse Performance scores from the mid-50s to the mid-80s.',
      'Built an event-driven workflow using BullMQ and Redis to manage AI processing with retry handling.',
      'Established real-time job tracking using WebSockets and Socket.io, replacing polling and improving live status updates for users.',
      'Resolved WebSocket memory leaks by improving connection handling, increasing application stability in production.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Caprus IT Private Limited',
    location: 'Hyderabad, India',
    period: 'Jan 2022 – Apr 2024',
    current: false,
    achievements: [
      'Shipped high-performance, responsive cross-platform user interfaces across web (React) and mobile (React Native) ecosystems, maintaining strict feature parity and design consistency.',
      'Developed a reusable component library with 40+ shared UI components, reducing duplicate code and improving development speed.',
      'Improved application loading and rendering performance on lower-end Android devices using optimized Redux selectors, memoization, lazy loading, and list virtualization.',
      'Worked closely with QA, product, and backend teams to finalize API requirements and speed up feature integration.',
    ],
  },
]

export const projects = [
  {
    title: 'Aauti Marketplace',
    badge: 'Company Project',
    description:
      'AI video generation workflow handling 50–100+ daily jobs with webhook retry logic and secure backend API routing.',
    tech: ['MERN Stack', 'Redis', 'BullMQ', 'WebSockets', 'HeyGen API'],
    highlights: [
      'Architected an AI video generation workflow handling 50–100+ daily jobs using Redis, BullMQ, and background workers.',
      'Created webhook handling with retry and fallback logic to handle third-party API failures reliably.',
      'Built backend APIs to securely connect with external AI services while protecting API keys.',
    ],
  },
  {
    title: 'Aauti School',
    badge: 'Company Project',
    description:
      'K-12 educational platform with grade-based curriculum delivery, dynamic lesson planning, and complex Redux state management.',
    tech: ['React', 'React Native', 'Redux', 'RESTful APIs'],
    highlights: [
      'Developed dynamic curriculum flows and state management for grade-based learning experiences.',
      'Integrated curriculum APIs to support dynamic lesson planning and content updates.',
    ],
  },
  {
    title: 'Content Guard-AI',
    badge: 'Personal Project',
    description:
      'Multi-modal content moderation platform analyzing text, PDFs, images, and videos using Gemini API with configurable risk scoring.',
    tech: ['Next.js', 'FastAPI', 'MongoDB', 'Docker', 'Gemini API'],
    highlights: [
      'Built a multi-modal content moderation platform analyzing text, PDFs, images, and videos using Gemini API.',
      'Developed configurable risk scoring and flagged-content workflows to detect unsafe content.',
      'Deployed Dockerized setup ensuring consistent environments across development and production.',
    ],
  },
]

export const education = [
  {
    degree: 'MBA, Information Technology',
    institution: 'Kakinada Institute of Engineering & Technology',
    location: 'Kakinada, India',
    period: 'Sep 2019 – Sep 2021',
  },
  {
    degree: 'BSc, Computer and Information Sciences',
    institution: 'Aditya Degree College',
    location: 'Kakinada, India',
    period: 'Jul 2015 – Apr 2018',
  },
]
