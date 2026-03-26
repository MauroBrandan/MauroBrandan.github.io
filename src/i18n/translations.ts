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
				'I like to understand the problem before writing code — and build solutions that work end-to-end, without depending on ten people to make it happen.',
			para2:
				"I've shipped products from MVP to production, led technical teams, and integrated real AI into business workflows. Not as an experiment — as a production feature.",
			para3:
				'Today I combine the best of both worlds: solid technical foundations and the AI tools that multiply what a single developer can build.',
			cta: 'Download CV'
		},
		projects: {
			label: 'Projects',
			subtitle: 'Real things I built, with the context of why they matter.',
			items: [
				{
					title: 'Tackr',
					description:
						'From developer to tech lead. From marketplace to SaaS. A product built end-to-end with a team of 5 people.',
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
					meta: {
						type: 'SaaS · Freelancer Management',
						period: '2023 – 2025',
						role: 'Software Developer → Tech Lead'
					}
				},
				{
					title: 'OrderToB',
					description:
						'Where AI stopped being a buzzword. Order processing pipelines using LLMs and RAG architectures — in real production.',
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
					meta: {
						type: 'SaaS B2B · AI Operations',
						period: 'Nov 2025 – Present',
						role: 'Software Developer'
					}
				}
			]
		},
		stack: {
			label: 'Stack',
			title: 'The tools I build with.',
			desc: "No padding with everything I've ever touched.",
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
					dates: 'Nov 2025 – Present',
					role: 'Software Developer',
					description:
						'Building AI pipelines to automate B2B operations. LLMs in production, not in demo.'
				},
				{
					company: 'Tackr',
					dates: '2023 – 2025',
					role: 'Software Developer → Tech Lead',
					description:
						'From developer to leading a team of 5. From MVP to production SaaS. My first fully end-to-end product.'
				},
				{
					company: 'Virtual Code',
					dates: '2023',
					role: 'Fullstack Developer',
					description:
						'Client-side React projects and .NET Core APIs for diverse clients.'
				},
				{
					company: 'Freelance',
					dates: '2022 – 2023',
					role: 'Web Developer',
					description:
						'Landing pages, e-commerces, and web apps for local clients. Full cycle: requirements, design, development, and deployment.'
				}
			]
		},
		contact: {
			heading: 'Got something to build?',
			sub: "Let's talk.",
			supportingCopy:
				"Whether it's a new product, an AI integration, or a team that needs a solid developer — I'd love to hear about it.",
			cta: 'Get in touch',
			availability: 'Open to freelance projects and remote positions.'
		},
		footer: {
			text: 'Designed and built by Mauro Brandan <feat Claude Code 🚀> · 2026'
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
				'Me gusta entender el problema antes de escribir código, y construir soluciones que funcionen de punta a punta, sin depender de diez personas para hacerlo.',
			para2:
				'Trabajé llevando productos desde MVP a producción, lideré equipos técnicos, e integré IA real en flujos de trabajo de empresas. No como experimento, sino como feature en producción.',
			para3:
				'Hoy combino lo mejor de ambos mundos: fundamentos técnicos sólidos y las herramientas de IA que multiplican lo que un developer puede construir solo.',
			cta: 'Descargar CV'
		},
		projects: {
			label: 'Proyectos',
			subtitle: 'Cosas reales que construí, con el contexto de por qué importan.',
			items: [
				{
					title: 'Tackr',
					description:
						'De developer a tech lead. De marketplace a SaaS. Un producto construido de punta a punta con un equipo de 5 personas.',
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
					meta: {
						type: 'SaaS · Gestión para freelancers',
						period: '2023 – 2025',
						role: 'Software Developer → Tech Lead'
					}
				},
				{
					title: 'OrderToB',
					description:
						'Donde la IA dejó de ser buzzword. Pipelines de procesamiento de pedidos con LLMs y arquitecturas RAG en producción real.',
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
					meta: {
						type: 'SaaS B2B · IA aplicada a operaciones',
						period: 'Nov 2025 – 2026',
						role: 'Software Developer'
					}
				}
			]
		},
		stack: {
			label: 'Stack',
			title: 'Las herramientas con las que construyo.',
			desc: 'Sin listar todo lo que alguna vez toqué.',
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
					dates: 'Nov 2025 – Actualidad',
					role: 'Software Developer',
					description:
						'Construyendo pipelines de IA para automatizar operaciones B2B. LLMs en producción, no en demo.'
				},
				{
					company: 'Tackr',
					dates: '2023 – 2025',
					role: 'Software Developer → Tech Lead',
					description:
						'De developer a líder de equipo de 5 personas. De MVP a SaaS en producción. Mi primer producto 100% end-to-end.'
				},
				{
					company: 'Virtual Code',
					dates: '2023',
					role: 'Desarrollador Fullstack',
					description:
						'Proyectos client-side en React y APIs con .NET Core para clientes diversos.'
				},
				{
					company: 'Freelance',
					dates: '2022 – 2023',
					role: 'Desarrollador Web',
					description:
						'Landing pages, e-commerces y apps web para clientes locales. Ciclo completo: relevamiento, diseño, desarrollo y deploy.'
				}
			]
		},
		contact: {
			heading: '¿Tenés algo para construir?',
			sub: 'Hablemos.',
			supportingCopy:
				'Ya sea un producto nuevo, una integración de IA, o un equipo que necesita un dev sólido; me interesa escucharte.',
			cta: 'Escribime',
			availability: 'Disponible para proyectos freelance y posiciones remotas.'
		},
		footer: {
			text: 'Diseñado y construido por Mauro Brandan <feat Claude Code 🚀> · 2026'
		}
	}
} as const

export type Translations = (typeof translations)[Lang]
