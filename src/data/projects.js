export const projects = [
  {
    id: 1,
    title: "Sistema Clínico SHODAIR",
    company: "CODERIO",
    period: "2025",
    description: "Desarrollo full-stack para sistema médico cumpliendo estándares HIPAA",
    challenge: "Crear un sistema seguro y escalable para manejo de información médica sensible con integración de múltiples proveedores externos.",
    role: "Desarrollador FullStack",
    process: [
      "Diseño y desarrollo de APIs con Laravel aplicando principios SOLID",
      "Desarrollo de interfaces React.js basadas en prototipos Figma",
      "Implementación de seguridad HIPAA para datos sensibles",
      "Integración con AWS services y proveedores externos (FedEx, Glidian)",
      "Automatización de procesos con AWS Lambda y CRON Jobs"
    ],
    technologies: ["Laravel", "React.js", "PostgreSQL", "Redis", "Docker", "AWS", "Node.js"],
    tools: ["S3", "SNS", "Lambda", "EC2", "PHPUnit", "Pest", "JWT", "OAuth2"],
    results: [
      "Reducción del 40% en intervención manual mediante automatización",
      "Mejora del 30% en rendimiento de APIs existentes",
      "Implementación de pipelines CI/CD con GitHub Actions",
      "Garantía de seguridad con JWT, OAuth2 y Passport"
    ],
    image: "/clinical-system.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "Sistemas Conapesca y CFE",
    company: "ASTRUM",
    period: "2022-2025",
    description: "Desarrollo backend para sistemas gubernamentales e integraciones ERP/CRM",
    challenge: "Optimizar procesos de transferencia de información entre sistemas internos y externos para entidades gubernamentales.",
    role: "Desarrollador Backend",
    process: [
      "Desarrollo e integración de APIs para interoperabilidad",
      "Implementación de integraciones entre ERP, CRM y plataformas logísticas",
      "Diseño y administración de modelos de datos e infraestructura",
      "Creación de stored procedures para grandes volúmenes de datos",
      "Desarrollo de modelos de predicción de datos"
    ],
    technologies: ["Node.js", "Python", "MySQL", "PostgreSQL", "Docker", "AWS"],
    tools: ["DynamoDB", "SQL Server", "Stored Procedures", "Lambdas", "API Gateway", "Cognito"],
    results: [
      "Reducción del 35% en tiempos de transferencia de información",
      "Mejora del 30% en tiempos de consulta con stored procedures optimizados",
      "Reducción del 25% en tiempos de ejecución de procesos",
      "Implementación de medidas de seguridad avanzadas"
    ],
    image: "/government-system.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "backend",
    featured: true
  },
  {
    id: 3,
    title: "Sistema Académico Maristas",
    company: "MARISTAS",
    period: "2021-2022",
    description: "Plataforma integral para gestión académica y financiera institucional",
    challenge: "Desarrollar un sistema unificado para manejar procesos administrativos, académicos y financieros.",
    role: "Desarrollador FullStack",
    process: [
      "Desarrollo de aplicaciones web completas con tecnologías frontend y backend",
      "Integración con pasarelas de pago y sistemas de facturación",
      "Automatización de procesos con CRON Jobs",
      "Diseño de esquemas de datos escalables",
      "Implementación de gestión granular de permisos"
    ],
    technologies: ["Laravel", "Blade", "Livewire", "Vue.js", "Node.js", "MySQL"],
    tools: ["CRON Jobs", "APIs RESTful", "Sistemas de facturación"],
    results: [
      "Reducción del 30% en tiempos de carga",
      "Automatización de generación y envío de documentos",
      "Mejora significativa en la estabilidad del sistema",
      "Soporte a grandes volúmenes de información académica"
    ],
    image: "/academic-system.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
    featured: false
  },
  {
    id: 4,
    title: "Plataforma Turística SAVAS",
    company: "SAVAS",
    period: "2018-2021",
    description: "Sistema completo para gestión de reservas y control administrativo",
    challenge: "Crear una plataforma unificada para gestión turística con integración en tiempo real.",
    role: "Desarrollador FullStack & Líder de Proyecto",
    process: [
      "Diseño y desarrollo de aplicaciones web y móviles",
      "Implementación de arquitecturas escalables y seguras",
      "Integración con APIs de proveedores y agencias",
      "Desarrollo de aplicaciones móviles con Ionic",
      "Automatización de procesos operativos"
    ],
    technologies: ["Laravel", "Vue.js", "Ionic", "Node.js", "MySQL", "AWS"],
    tools: ["Blade", "Livewire", "Pasarelas de pago", "CRON Jobs"],
    results: [
      "Reducción del 40% en carga operativa manual",
      "Incremento del 30% en rendimiento del sistema",
      "Mejora en accesibilidad mediante aplicaciones móviles",
      "Sincronización en tiempo real de inventarios y tarifas"
    ],
    image: "/tourism-system.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
    featured: true
  }


];

export const freelanceProjects = [
  {
    id: 1,
    title: "Cashship Miami - Plataforma Fintech",
    client: "Cashship Miami",
    description: "Plataforma de envíos internacionales de dinero con focus en seguridad y escalabilidad",
    challenge: "Desarrollar un sistema financiero seguro y confiable que cumpla con regulaciones internacionales y soporte alto volumen de transacciones.",
    role: "Backend Developer & QA Engineer",
    process: [
      "Arquitectura y desarrollo backend con Laravel y Livewire",
      "Implementación de servicios AWS para alta disponibilidad",
      "Diseño e implementación de estrategias de QA y testing",
      "Optimización de procesos de transferencia financiera",
      "Garantía de seguridad y cumplimiento normativo"
    ],
    technologies: ["Laravel", "Livewire", "AWS", "PHPUnit", "Docker"],
    tools: ["EC2", "RDS", "S3", "CloudWatch"],
    results: [
      "Sistema procesando transacciones internacionales seguras",
      "Implementación completa de estrategia QA",
      "Arquitectura escalable preparada para crecimiento",
      "Cumplimiento de estándares de seguridad financiera"
    ],
    image: "/cashship-project.jpg",
    category: "fintech",
    featured: true
  },
  {
    id: 2,
    title: "AGROGUZMAN - Automatización de Cartera",
    client: "AGROGUZMAN",
    description: "Sistema de automatización para gestión inteligente de cartera y cobranza",
    challenge: "Automatizar el proceso de gestión de cartera vencida y sincronización con sistemas contables legacy para mejorar eficiencia en cobranza.",
    role: "Consultor Técnico & Implementador",
    process: [
      "Análisis y diseño de arquitectura de integración",
      "Desarrollo de APIs para conexión con CONTPAQi",
      "Implementación de pipelines de datos automatizados",
      "Creación de sistema de reportes inteligentes",
      "Capacitación del equipo en uso del sistema"
    ],
    technologies: ["Node.js", "Python", "MySQL", "SQL Server", "FastAPI"],
    tools: ["APIs REST", "ETL Processes", "Data Analytics"],
    results: [
      "Reducción del 60% en tiempo de procesamiento de cartera",
      "Automatización del 80% de reportes mensuales",
      "Integración exitosa con sistemas contables legacy",
      "Mejora en efectividad de cobranza en 45%"
    ],
    image: "/agroguzman-project.jpg",
    category: "enterprise",
    featured: true
  },
  {
    id: 3,
    title: "Paralideres.org - Biblioteca Digital",
    client: "Paralideres.org",
    description: "Plataforma e-commerce especializada en libros cristianos digitales",
    challenge: "Crear una experiencia de compra y lectura fluida para contenido digital cristiano con alcance internacional.",
    role: "Consultor & Implementador Full Stack",
    process: [
      "Desarrollo de plataforma e-commerce con Laravel y Vue.js",
      "Implementación de AWS S3 para almacenamiento seguro",
      "Integración de múltiples métodos de pago internacionales",
      "Optimización de UX/UI para conversión",
      "Implementación de DRM para protección de contenido"
    ],
    technologies: ["Laravel", "Vue.js", "AWS S3", "Stripe", "MySQL"],
    tools: ["CloudFront", "Redis", "Payment Gateways"],
    results: [
      "Aumento del 35% en tasa de conversión",
      "Expansión a 3 nuevos países",
      "Implementación de 5 métodos de pago adicionales",
      "Reducción del 40% en tiempo de carga"
    ],
    image: "/paralideres-project.jpg",
    category: "ecommerce",
    featured: false
  },
  {
    id: 4,
    title: "TU ENTREGA - Escalabilidad Logística",
    client: "TU ENTREGA",
    description: "Reestructuración arquitectónica para plataforma de logística y entregas",
    challenge: "Rediseñar la arquitectura existente para soportar crecimiento exponencial de usuarios y mejorar rendimiento.",
    role: "Consultor Técnico & Full Stack Developer",
    process: [
      "Auditoría completa de arquitectura existente",
      "Diseño de nueva arquitectura microservicios",
      "Migración progresiva de monolitico a microservicios",
      "Optimización de bases de datos y consultas",
      "Implementación de nuevas funcionalidades"
    ],
    technologies: ["Ionic", "Laravel", "Angular", "MySQL", "AWS"],
    tools: ["Microservices", "Docker", "Redis", "API Gateway"],
    results: [
      "Capacidad para soportar 300% más usuarios",
      "Mejora del 45% en rendimiento general",
      "Reducción del 60% en tiempos de respuesta",
      "Arquitectura preparada para escalamiento futuro"
    ],
    image: "/tuentrega-project.jpg",
    category: "logistics",
    featured: true
  },
  {
    id: 5,
    title: "TIFI COLOMBIA - Infraestructura Escalable",
    client: "TIFI COLOMBIA",
    description: "Reestructuración completa de infraestructura para plataforma fintech",
    challenge: "Transformar arquitectura monolítica en sistema de microservicios escalable para soportar crecimiento masivo de usuarios.",
    role: "Consultor de Arquitectura & Full Stack Developer",
    process: [
      "Diseño de arquitectura de microservicios con FastAPI",
      "Migración de base de datos y optimización",
      "Implementación de estrategias de caching",
      "Configuración de infraestructura AWS",
      "Integración de sistemas de pagos regionales"
    ],
    technologies: ["FastAPI", "Angular", "Ionic", "PostgreSQL", "AWS"],
    tools: ["Docker", "Kubernetes", "Redis", "ELK Stack"],
    results: [
      "Capacidad para 500% más usuarios concurrentes",
      "Mejora del 40% en eficiencia del sistema",
      "Reducción del 70% en latencia de API",
      "Implementación de 3 nuevos métodos de pago"
    ],
    image: "/tifi-project.jpg",
    category: "fintech",
    featured: true
  },
  {
    id: 6,
    title: "RIDE COSTA RICA - Plataforma de Movilidad",
    client: "RIDE COSTA RICA",
    description: "Optimización de plataforma de transporte con integración de mapas y pagos",
    challenge: "Mejorar la experiencia de usuario mediante integración avanzada de mapas y expansión de opciones de pago para mercado centroamericano.",
    role: "Consultor & Full Stack Developer",
    process: [
      "Integración de APIs de Google Maps y geolocalización",
      "Desarrollo de funcionalidades de optimización de rutas",
      "Implementación de pasarelas de pago regionales",
      "Optimización de flujos de usuario",
      "Mejora de rendimiento en aplicaciones móviles"
    ],
    technologies: ["Node.js", "React Native", "Angular", "PostgreSQL", "AWS"],
    tools: ["Google Maps API", "Firebase", "Payment Gateways"],
    results: [
      "Mejora del 25% en precisión de geolocalización",
      "Aumento del 30% en retención de usuarios",
      "Implementación de 4 nuevas pasarelas de pago",
      "Reducción del 40% en tiempo de viaje estimado"
    ],
    image: "/ridecr-project.jpg",
    category: "mobility",
    featured: false
  },
 {
  id: 7,
  title: "OVERALL - CRM & Business Automation",
  client: "OVERALL PERU",
  description: "Plataforma integral de CRM con automatización de procesos mediante chatbots de WhatsApp y APIs personalizadas",
  challenge: "Modernizar el sistema de atención al cliente y automatizar procesos de ventas, soporte técnico y seguimiento post-venta mediante integración de inteligencia artificial y APIs empresariales.",
  role: "Full Stack Developer & Automation Specialist",
  process: [
    "Diseño e implementación de arquitectura de chatbots multi-propósito para WhatsApp Business API",
    "Desarrollo de APIs RESTful para integración con sistemas legacy y plataformas externas",
    "Automatización de flujos de conversación para lead generation y cualificación",
    "Implementación de sistema de tickets automático para soporte técnico 24/7",
    "Creación de dashboard de analytics para monitoreo de performance de chatbots",
    "Desarrollo de módulos de CRM para seguimiento de clientes y historial de interacciones",
    "Mantenimiento continuo y optimización de performance del sistema"
  ],
  technologies: ["Node.js", "Angular", "PostgreSQL", "AWS", "Laravel", "Python", "Redis", "Docker"],
  tools: ["WhatsApp Business API", "Dialogflow", "Botmaker", "Firebase", "Postman", "GitLab CI/CD", "New Relic"],
  results: [
    "Reducción del 65% en carga de trabajo del equipo de soporte mediante automatización",
    "Implementación de 12 flujos conversacionales diferentes para ventas y soporte",
    "Tiempo de respuesta a clientes reducido de horas a segundos",
    "Procesamiento automático del 80% de consultas recurrentes",
    "Integración con 5 sistemas internos via APIs personalizadas",
    "Mantenimiento proactivo con 99.5% uptime del sistema"
  ],
  image: "/overall-crm-project.jpg",
  category: "crm-automation",
  featured: true
}
];