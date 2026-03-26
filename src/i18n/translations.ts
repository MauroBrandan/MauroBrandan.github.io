export type Lang = 'en' | 'es'

export const translations = {
	en: {
		meta: {
			title: 'Mauro Brandan — Software Developer',
			description:
				'Fullstack developer specialized in TypeScript, React, and Node.js, with experience integrating AI in production. Available for remote and freelance projects.',
			ogTitle: 'Mauro Brandan · Builder. Fullstack Developer. AI integrations.'
		},
		nav: {
			links: [
				{ label: 'About', href: 'about' },
				{ label: 'Projects', href: 'projects' },
				{ label: 'Stack', href: 'stack' },
				{ label: 'Contact', href: 'contact' }
			],
			langToggle: 'ES',
			langToggleHref: '/es/'
		},
		hero: {
			headline: 'I build products.',
			subline: 'From idea to production.',
			desc: 'Fullstack developer with 3+ years building digital products end-to-end — from design to deployment. Specialized in TypeScript, React, and Node.js, with real AI integrations in production.',
			viewProjects: 'See my work',
			getInTouch: "Let's talk"
		},
		about: {
			label: 'About',
			title: "I'm a fullstack developer with a product mindset.",
			para1:
				'I like to understand the problem before writing code — and build solutions that work end-to-end.',
			para2:
				"I've shipped products from MVP to production, led technical teams, and integrated real AI into business workflows. Not as an experiment — as a production feature.",
			para3:
				'Today I combine the best of both worlds: solid technical foundations and the AI tools that multiply what a single developer can build.',
			cta: 'Download CV'
		},
		projects: {
			label: 'Projects',
			subtitle: '',
			items: [
				{
					title: 'Tackr',
					description:
						'From developer to tech lead. From marketplace to SaaS. A product built end-to-end, from MVP to production.',
					longDesc:
						'I joined as a developer and ended up leading the technical team. Together we took the product from a basic marketplace to a full SaaS — redefining the business model along the way.\n\nI built the product core: contracts, Stripe subscriptions, role-based access control (RBAC), authentication, and user dashboard. I designed the scalable frontend architecture and published the component library on NPM. And yes — I also integrated the first LLM-based assistants for internal support.\n\nThe biggest takeaway: code is only part of it. Product ownership, business decisions, and team communication carry equal weight.',
					coverImage: '/assets/tackr.png',
					tags: [
						'Next.js',
						'GraphQL',
						'Firebase',
						'Stripe',
						'TypeScript',
						'LLMs',
						'NPM Package'
					],
					cta: 'Read more',
					href: 'https://tackrjobs.com',
					meta: {
						type: 'SaaS · Freelancer Management',
						period: '2023 – 2025',
						role: 'Software Developer → Tech Lead'
					}
				},
				{
					title: 'OrderToB',
					description:
						'Integration of LLMs to process B2B orders in natural language. Applied AI in real production.',
					longDesc:
						"I designed and implemented order processing pipelines that transform free-form text into structured data — using LLMs and RAG architectures.\n\nThe challenge was real: orders arrived in inconsistent formats, with human errors and no structure. The solution couldn't just be a form — it had to understand natural language and convert it into something the system could process with confidence.\n\nThe result: fewer human errors, faster processing, and more predictable B2B operations for clients.\n\nFirst time I built AI that solves a concrete business problem — not a lab demo.",
					coverImage: '/assets/ordertob.png',
					tags: [
						'Node.js',
						'Express',
						'LLMs',
						'RAG',
						'PostgreSQL',
						'React',
						'TypeScript'
					],
					cta: 'Read more',
					href: 'https://ordertob.com',
					meta: {
						type: 'SaaS B2B · AI Operations',
						period: '2025 – Present',
						role: 'Software Developer'
					}
				}
			]
		},
		stack: {
			label: 'Stack',
			title: 'The tools I build with.',
			desc: '',
			categories: [
				{
					label: 'Frontend',
					tags: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'shadcn/ui']
				},
				{
					label: 'Backend',
					tags: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Prisma']
				},
				{
					label: 'Databases',
					tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Firestore']
				},
				{
					label: 'AI',
					tags: ['LLMs', 'RAG', 'MCP', 'n8n', 'Prompt Engineering', 'Agents'],
					accent: true as const
				},
				{
					label: 'DevOps',
					tags: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'CI/CD']
				}
			]
		},
		experience: {
			label: 'Experience',
			title: "Where I've built",
			entries: [
				{
					company: 'OrderToB',
					dates: '2025 – Present',
					role: 'Software Developer',
					description:
						'Building AI pipelines to automate B2B operations. LLM and RAG architectures to transform free-form text into structured data — in real production.'
				},
				{
					company: 'Tackr',
					dates: '2023 – 2025',
					role: 'Software Developer → Tech Lead',
					description:
						"Grew from developer to tech lead managing a team of 5. Took the product from MVP to production SaaS, redefining the business model along the way. Frontend architecture, Stripe integrations, RBAC, and the team's first NPM library."
				},
				{
					company: 'Virtual Code',
					dates: '2023',
					role: 'Fullstack Developer',
					description:
						'On-demand fullstack development for multiple clients: React interfaces and REST APIs with .NET Core.'
				},
				{
					company: 'Freelance',
					dates: '2022 – 2023',
					role: 'Web Developer',
					description:
						'First real projects working independently: landing pages, e-commerces, and web apps for local businesses.'
				}
			]
		},
		contact: {
			heading: 'Got something to build?',
			sub: "Let's talk.",
			supportingCopy:
				"If you have an idea and need someone to bring it to production, I'd love to hear about it. Always open to interesting projects and good conversations.",
			cta: 'Say hello',
			availability: '🟢 Available · Open to freelance projects and remote positions'
		},
		footer: {
			text: 'Designed and built by Mauro Brandan <feat AI 🚀> · 2026'
		}
	},

	es: {
		meta: {
			title: 'Mauro Brandan — Software Developer',
			description:
				'Desarrollador fullstack especializado en TypeScript, React y Node.js, con experiencia en integración de IA en producción. Disponible para proyectos remotos y freelance.',
			ogTitle: 'Mauro Brandan · Builder. Fullstack Developer. AI integrations.'
		},
		nav: {
			links: [
				{ label: 'Sobre mí', href: 'about' },
				{ label: 'Proyectos', href: 'projects' },
				{ label: 'Stack', href: 'stack' },
				{ label: 'Contacto', href: 'contact' }
			],
			langToggle: 'EN',
			langToggleHref: '/'
		},
		hero: {
			headline: 'Construyo productos.',
			subline: 'De la idea al deploy.',
			desc: 'Desarrollador fullstack con +3 años construyendo productos digitales de punta a punta, desde el diseño hasta el deploy. Especializado en TypeScript, React y Node.js, con integración real de IA en producción.',
			viewProjects: 'Ver proyectos',
			getInTouch: 'Hablemos'
		},
		about: {
			label: 'Sobre mí',
			title: 'Soy desarrollador fullstack con mentalidad de producto.',
			para1:
				'Me gusta entender el problema antes de escribir código, y construir soluciones que funcionen de punta a punta.',
			para2:
				'Trabajé llevando productos desde MVP a producción, lideré equipos técnicos, e integré IA real en flujos de trabajo de empresas. No como experimento, sino como feature en producción.',
			para3:
				'Hoy combino lo mejor de ambos mundos: fundamentos técnicos sólidos y las herramientas de IA que multiplican lo que un developer puede construir solo.',
			cta: 'Descargar CV'
		},
		projects: {
			label: 'Proyectos',
			subtitle: '',
			items: [
				{
					title: 'Tackr',
					description:
						'De developer a tech lead. De marketplace a SaaS. Un producto construido de punta a punta, desde el MVP hasta producción.',
					longDesc:
						'Entré como developer y terminé liderando el equipo técnico. Juntos llevamos el producto de un marketplace básico a un SaaS completo, redefiniendo el modelo de negocio en el camino.\n\nConstruí el core del producto: contratos, suscripciones con Stripe, sistema de roles (RBAC), autenticación y dashboard de usuarios. Diseñé la arquitectura frontend escalable y publiqué la librería de componentes en NPM. Y sí, también integré los primeros asistentes basados en LLMs para soporte interno.\n\nLo que más me llevé: entender que el código es solo una parte. El ownership del producto, las decisiones de negocio y la comunicación con el equipo pesan igual.',
					coverImage: '/assets/tackr.png',
					tags: [
						'Next.js',
						'GraphQL',
						'Firebase',
						'Stripe',
						'TypeScript',
						'LLMs',
						'NPM Package'
					],
					cta: 'Ver más',
					href: 'https://tackrjobs.com',
					meta: {
						type: 'SaaS · Gestión para freelancers',
						period: '2023 – 2025',
						role: 'Software Developer → Tech Lead'
					}
				},
				{
					title: 'OrderToB',
					description:
						'Integración de LLMs para procesar pedidos B2B en lenguaje natural. IA aplicada en producción real.',
					longDesc:
						'Diseñé e implementé pipelines de procesamiento de pedidos que transforman texto libre en datos estructurados, usando LLMs y arquitecturas RAG.\n\nEl desafío era real: los pedidos llegaban en formatos inconsistentes, con errores humanos y sin estructura. La solución no podía ser solo un formulario, tenía que entender el lenguaje natural y convertirlo en algo que el sistema pudiera procesar con confianza.\n\nEl resultado: menos errores humanos, procesamiento más rápido y operaciones B2B más predecibles para los clientes.\n\nPrimera vez que construí IA que resuelve un problema de negocio concreto, no un demo de laboratorio.',
					coverImage: '/assets/ordertob.png',
					tags: [
						'Node.js',
						'Express',
						'LLMs',
						'RAG',
						'PostgreSQL',
						'React',
						'TypeScript'
					],
					cta: 'Ver más',
					href: 'https://ordertob.com',
					meta: {
						type: 'SaaS B2B · IA aplicada a operaciones',
						period: '2025 – 2026',
						role: 'Software Developer'
					}
				}
			]
		},
		stack: {
			label: 'Stack',
			title: 'Las herramientas con las que construyo.',
			desc: '',
			categories: [
				{
					label: 'Frontend',
					tags: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'shadcn/ui']
				},
				{
					label: 'Backend',
					tags: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Prisma']
				},
				{
					label: 'Bases de datos',
					tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Firestore']
				},
				{
					label: 'IA',
					tags: ['LLMs', 'RAG', 'MCP', 'n8n', 'Prompt Engineering', 'Agentes'],
					accent: true as const
				},
				{
					label: 'DevOps',
					tags: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'CI/CD']
				}
			]
		},
		experience: {
			label: 'Experiencia',
			title: 'Dónde construí',
			entries: [
				{
					company: 'OrderToB',
					dates: '2025 – Actualidad',
					role: 'Software Developer',
					description:
						'Construyendo pipelines de IA para automatizar operaciones B2B. Integración de LLMs y arquitecturas RAG para transformar texto libre en datos estructurados, en producción real.'
				},
				{
					company: 'Tackr',
					dates: '2023 – 2025',
					role: 'Software Developer → Tech Lead',
					description:
						'Crecí de developer a tech lead liderando un equipo de 5. Llevé el producto de MVP a SaaS en producción, redefiniendo el modelo de negocio en el camino. Arquitectura frontend, integraciones con Stripe, RBAC y la primera librería NPM del equipo'
				},
				{
					company: 'Virtual Code',
					dates: '2023',
					role: 'Desarrollador Fullstack',
					description:
						'Desarrollo fullstack por demanda para múltiples clientes: interfaces en React y APIs REST con .NET Core.'
				},
				{
					company: 'Freelance',
					dates: '2022 – 2023',
					role: 'Desarrollador Web',
					description:
						'Primeros proyectos reales trabajando de forma independiente: landing pages, e-commerces y apps web para negocios locales.'
				}
			]
		},
		contact: {
			heading: '¿Tenés algo para construir?',
			sub: 'Hablemos.',
			supportingCopy:
				'Si tenés una idea y necesitás a alguien que la lleve a producción, escribime. Siempre abierto a proyectos interesantes y buenas conversaciones.',
			cta: 'Escribime',
			availability:
				'🟢 Disponible · Abierto a posiciones remotas y proyectos freelance'
		},
		footer: {
			text: 'Diseñado y construido por Mauro Brandan <feat AI 🚀> · 2026'
		}
	}
} as const

export type Translations = (typeof translations)[Lang]
