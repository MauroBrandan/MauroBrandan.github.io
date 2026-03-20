export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      links: [
        { label: 'About', href: 'about' },
        { label: 'Projects', href: 'projects' },
        { label: 'Stack', href: 'stack' },
        { label: 'Experience', href: 'experience' },
        { label: 'Contact', href: 'contact' },
      ],
      langToggle: 'ES',
      langToggleHref: '/es/',
    },
    hero: {
      headline: 'I build products.',
      subline: 'From idea to production.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
    },
    about: {
      label: 'About',
      title: 'Builder mindset.',
      para1:
        "I'm a software developer who ships real products — from concept to production, solo or in small teams. I don't just write code; I build complete systems that solve real problems.",
      para2:
        'My approach is pragmatic: understand the problem deeply, choose the simplest architecture that works, and iterate fast. I care about clean code, but I care more about shipping.',
    },
    projects: {
      label: 'Projects',
      items: [
        {
          title: 'Syncflow',
          description:
            'Real-time collaboration engine for distributed teams. Handles conflict resolution, presence, and state sync across devices.',
          tags: ['TypeScript', 'WebSocket', 'React'],
        },
        {
          title: 'Cortex AI',
          description:
            'AI-powered code review assistant that integrates with GitHub. Analyzes PRs for security issues, performance, and best practices.',
          tags: ['Node.js', 'OpenAI', 'GitHub API'],
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Technologies I work with',
      desc: 'Tools chosen for shipping fast, not for résumé padding.',
      categories: [
        { label: 'Frontend', tags: ['TypeScript', 'React', 'Next.js', 'Tailwind'] },
        { label: 'Backend', tags: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
        { label: 'DevOps', tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Turborepo'] },
      ],
    },
    experience: {
      label: 'Experience',
      title: "Where I've built",
      entries: [
        {
          company: 'Vercel',
          dates: '2023 — Present',
          role: 'Senior Software Engineer',
          description:
            'Leading frontend infrastructure for the dashboard platform. Shipped real-time collaboration features used by 100k+ developers.',
        },
        {
          company: 'Linear',
          dates: '2021 — 2023',
          role: 'Full-Stack Engineer',
          description:
            'Built the real-time sync engine and offline-first architecture. Reduced P95 latency by 40% across all workspace operations.',
        },
        {
          company: 'Stripe',
          dates: '2019 — 2021',
          role: 'Software Engineer',
          description:
            'Worked on the Payments API team. Designed and shipped webhook retry logic handling 2M+ events daily.',
        },
      ],
    },
    contact: {
      heading: 'Got something to build?',
      sub: "Let's talk.",
    },
    footer: {
      left: '© 2026 MB. Built with focus.',
      right: 'Designed & developed by hand.',
    },
  },

  es: {
    nav: {
      links: [
        { label: 'Sobre mí', href: 'about' },
        { label: 'Proyectos', href: 'projects' },
        { label: 'Stack', href: 'stack' },
        { label: 'Experiencia', href: 'experience' },
        { label: 'Contacto', href: 'contact' },
      ],
      langToggle: 'EN',
      langToggleHref: '/',
    },
    hero: {
      headline: 'Construyo productos.',
      subline: 'De la idea a producción.',
      viewProjects: 'Ver Proyectos',
      getInTouch: 'Contactar',
    },
    about: {
      label: 'Sobre mí',
      title: 'Mentalidad constructora.',
      para1:
        'Soy desarrollador de software que lanza productos reales — desde el concepto hasta producción, solo o en equipos pequeños. No solo escribo código; construyo sistemas completos que resuelven problemas reales.',
      para2:
        'Mi enfoque es pragmático: entender el problema en profundidad, elegir la arquitectura más simple que funcione, e iterar rápido. Me importa el código limpio, pero me importa más entregar.',
    },
    projects: {
      label: 'Proyectos',
      items: [
        {
          title: 'Syncflow',
          description:
            'Motor de colaboración en tiempo real para equipos distribuidos. Maneja resolución de conflictos, presencia y sincronización de estado entre dispositivos.',
          tags: ['TypeScript', 'WebSocket', 'React'],
        },
        {
          title: 'Cortex AI',
          description:
            'Asistente de revisión de código con IA que se integra con GitHub. Analiza PRs para detectar problemas de seguridad, rendimiento y buenas prácticas.',
          tags: ['Node.js', 'OpenAI', 'GitHub API'],
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Tecnologías con las que trabajo',
      desc: 'Herramientas elegidas para entregar rápido, no para inflar el CV.',
      categories: [
        { label: 'Frontend', tags: ['TypeScript', 'React', 'Next.js', 'Tailwind'] },
        { label: 'Backend', tags: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
        { label: 'DevOps', tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Turborepo'] },
      ],
    },
    experience: {
      label: 'Experiencia',
      title: 'Dónde construí',
      entries: [
        {
          company: 'Vercel',
          dates: '2023 — Presente',
          role: 'Senior Software Engineer',
          description:
            'Liderando la infraestructura frontend de la plataforma del dashboard. Lancé funciones de colaboración en tiempo real usadas por más de 100k desarrolladores.',
        },
        {
          company: 'Linear',
          dates: '2021 — 2023',
          role: 'Full-Stack Engineer',
          description:
            'Construí el motor de sincronización en tiempo real y la arquitectura offline-first. Reduje la latencia P95 un 40% en todas las operaciones del workspace.',
        },
        {
          company: 'Stripe',
          dates: '2019 — 2021',
          role: 'Software Engineer',
          description:
            'Trabajé en el equipo de la API de Pagos. Diseñé y lancé la lógica de reintentos de webhooks que maneja más de 2M eventos diarios.',
        },
      ],
    },
    contact: {
      heading: '¿Tenés algo para construir?',
      sub: 'Hablemos.',
    },
    footer: {
      left: '© 2026 MB. Construido con foco.',
      right: 'Diseñado y desarrollado a mano.',
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
