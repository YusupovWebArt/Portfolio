import type { Translation } from './types'

export const es: Translation = {
  header: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      aiWorkflow: 'AI Workflow',
      projects: 'Proyectos',
      skills: 'Habilidades',
      whyMe: 'Por qué yo',
      contact: 'Contacto',
    },
    langToggle: 'Cambiar idioma',
    themeToggle: {
      toLight: 'Cambiar a modo claro',
      toDark: 'Cambiar a modo oscuro',
    },
  },
  hero: {
    elevatorPitch:
      'Desarrollo arquitecturas PHP personalizadas de bajo nivel para WordPress y aplicaciones web modernas con React/Next.js, siguiendo un flujo de trabajo disciplinado de IA orientada a especificaciones (SDD), optimizado para Core Web Vitals y búsqueda en motores generativos (GEO).',
    ctaPrimary: 'Chat con Artur AI',
    ctaSecondary: 'Descargar CV',
  },
  about: {
    sectionTitle: 'Sobre mí',
    bio: {
      p1: 'Soy un ingeniero web Fullstack orientado a resultados con más de 5 años de experiencia en el desarrollo, escalado y optimización técnica de plataformas de alta carga, con una profunda especialización arquitectónica en WordPress. Mi experiencia se sitúa en la intersección de los ecosistemas frontend modernos (React, Next.js) y la ingeniería empresarial de WordPress — desde arquitecturas PHP 8+ personalizadas y desarrollo seguro de plugins hasta configuraciones Headless CMS de alto rendimiento y optimización profunda del rendimiento.',
      p2: 'Mi principal ventaja competitiva es una sofisticada filosofía de ingeniería centrada en la IA. En lugar de tratar la IA como un simple asistente de código, integro sistemáticamente sistemas de próxima generación — incluyendo Claude Code, Cursor y Google Antigravity — directamente en el ciclo de vida del desarrollo de software (SDLC), siguiendo una metodología de Desarrollo Orientado a Especificaciones (SDD): primero defino la especificación técnica y luego la IA implementa y verifica contra ella en lugar de improvisar. Utilizo ampliamente la IA para automatizar flujos de trabajo de desarrollo complejos y realizar investigaciones técnicas profundas. Al combinar mi experiencia arquitectónica práctica con el desarrollo potenciado por IA, acelero refactorizaciones complejas, automatizo pruebas de regresión y comprimo drásticamente el tiempo de comercialización — todo ello manteniendo una estricta calidad del código, seguridad e integridad arquitectónica.',
      p3: 'Más allá del desarrollo principal, aplico activamente este marco de trabajo centrado en la IA al aprendizaje continuo y la gestión del conocimiento. Utilizo herramientas avanzadas como Gemini Notebook para sintetizar documentación técnica compleja y acelerar la investigación. Para consolidar este conocimiento, desarrollo mis propias aplicaciones educativas y de utilidad. Este ciclo continuo de investigación automatizada, prototipado rápido y desarrollo de aplicaciones autodidacta me permite dominar nuevas tecnologías a un ritmo sin precedentes y aportar constantemente soluciones de vanguardia a los equipos con los que trabajo.',
    },
    stats: {
      projects: 'Proyectos completados',
      experience: 'Años de experiencia',
    },
    highlights: {
      wpTitle: 'Desarrollo WordPress',
      wpPoints: [
        'Temas y plugins personalizados (PHP 8.x OOP / WPCS)',
        'Configuraciones Headless CMS con React/Next.js',
        'Cero constructores sobrecargados — código nativo puro',
      ],
      appTitle: 'Desarrollo de aplicaciones',
      appPoints: [
        'React 19 y Next.js 15+ listo para producción (TypeScript)',
        'Renderizado rápido mediante patrones Streaming y Suspense',
        'Cumplimiento estricto de accesibilidad WCAG 2.2',
      ],
      seoTitle: 'Optimización SEO y GEO',
      seoPoints: [
        'Estrategias de citación de marca para ChatGPT, Claude y Gemini',
        'Esquemas JSON-LD avanzados y auditoría de Core Web Vitals',
        'Implementaciones de seguimiento del lado del servidor (sGTM)',
      ],
      aiTitle: 'Desarrollo potenciado por IA',
      aiPoints: [
        'Velocidad de desarrollo 3x con Claude Code y Cursor',
        'Ejecución de Spec-Driven Development (SDD)',
        'Análisis automatizado riguroso y pruebas de regresión',
      ],
    },
    photoCaption: {
      role: 'Desarrollador web',
      location: '🌍 España',
      experience: '💼 5+ años de experiencia',
    },
    educationTitle: 'Mi formación',
    education: {
      item0: {
        title: 'Ingeniería web avanzada y tecnologías emergentes',
        institution: 'Enfoque en ecosistemas escalables e integración de IA',
        description: {
          wp: {
            label: 'WordPress Backend:',
            text: 'Investigación de hooks personalizados de plugins, estándares OOP y arquitecturas de núcleo de bajo nivel.',
          },
          react: {
            label: 'React Ecosystem:',
            text: 'Implementación de patrones SSR de alto rendimiento y conexiones headless.',
          },
          ai: {
            label: 'AI SDLC Integration:',
            text: 'Diseño de flujos de trabajo Spec-Driven utilizando Claude Code, Antigravity y MCP.',
          },
        },
      },
      item1: {
        title: 'Cursos profesionales y autoformación',
        institution: 'Plataformas de aprendizaje continuo',
        description: {
          intro: 'Desarrollo profesional continuo en plataformas líderes:',
        },
      },
      item2: {
        title: 'Universidad Técnica Nacional (Ucrania)',
        institution: 'VNTU — Universidad Técnica Nacional de Vinnytsia (Ucrania)',
        description: {
          spec: {
            label: 'Especialización:',
            text: 'Gestión administrativa en seguridad informática y control de acceso.',
          },
          infra: {
            label: 'Infraestructura:',
            text: 'Administración de sistemas, protocolos de seguridad en redes y gestión de infraestructura.',
          },
        },
      },
    },
    workTitle: 'Mi experiencia laboral',
    work: {
      item0: {
        title: 'Desarrollador Front-end (Remoto a tiempo completo/parcial)',
        desc: {
          wpWix: {
            label: 'Desarrollo WordPress y Wix personalizado:',
            text: 'Desarrollé temas y plugins de alto rendimiento desde cero (PHP 8.x, OOP, WPCS) y gestioné plataformas Wix avanzadas.',
          },
          lifecycle: {
            label: 'Lifecycle Management:',
            text: 'Gestioné el ciclo completo de despliegue, migraciones de bases de datos, parches de seguridad y soporte para clientes de EE.UU.',
          },
          uiux: {
            label: 'UI/UX Re-engineering:',
            text: 'Lideré rediseños de sitios heredados, convirtiéndolos en frontends modernos y adaptables.',
          },
          perf: {
            label: 'Performance y SEO:',
            text: 'Optimicé estructuras de maquetación para Core Web Vitals, logrando puntuaciones estables de Lighthouse 90+.',
          },
          agile: {
            label: 'Agile Delivery:',
            text: 'Trabajé en entornos Scrum activos colaborando con equipos internacionales multifuncionales.',
          },
        },
      },
      item1: {
        title: 'Desarrollador Front-end (Remoto a tiempo parcial)',
        desc: {
          bespoke: {
            label: 'Desarrollo de temas a medida:',
            text: 'Creé sitios WordPress personalizados ligeros y rápidos, evitando completamente las plantillas prefabricadas sobrecargadas.',
          },
          fullCycle: {
            label: 'Gestión de ciclo completo:',
            text: 'Gestioné proyectos web desde el diseño arquitectónico hasta el lanzamiento final en servidor y mantenimiento con cPanel.',
          },
          modernization: {
            label: 'Modernización del código:',
            text: 'Refactoricé bases de código heredadas para mejorar la adaptabilidad de la interfaz y su conformidad con los estándares actuales.',
          },
        },
      },
      item2: {
        title: 'Proyectos freelance y personales',
        desc: {
          delivered: {
            label: 'Más de 30 proyectos entregados:',
            text: 'Diseñé y lancé sitios con éxito en plataformas de freelance globales (Upwork, Freelancehunt).',
          },
          ecommerce: {
            label: 'E-commerce e I+D:',
            text: 'Creé y promocioné tiendas Shopify propias utilizando metodologías de dropshipping y Print-on-Demand (POD), y gestioné ventas comerciales en Etsy. Responsable personal de la ejecución completa de SEO, SMM y estrategias de marketing digital.',
          },
        },
      },
    },
  },
  aiWorkflow: {
    sectionTitle: 'AI Workflow',
    description: {
      before: 'No es programación por intuición: cada funcionalidad recorre un camino estricto desde la especificación escrita hasta la compilación y verificación mediante pruebas — una metodología que la industria denomina',
      methodology: 'Spec-Driven Development (SDD)',
      middle: '. Ejecuto tareas rutinarias, arquitectónicas y de optimización de forma más rápida y fiable, potenciando mi experiencia con herramientas de IA especializadas como',
      toolClaude: 'Claude Code',
      between: ' y',
      toolAntigravity: 'Google Antigravity',
      after: '.',
    },
    tabs: {
      nextStep: 'Siguiente paso',
      prevStep: 'Paso anterior',
      step: 'Paso',
      of: 'de',
    },
  },
  skills: {
    sectionTitle: 'Especialista T-Shaped',
    sectionDescription:
      'Habilidades y experiencia — un conjunto de competencias multidisciplinar orientado a la construcción de ecosistemas web de alto rendimiento. Desde la ingeniería Full-stack con WordPress y React/Next.js hasta flujos de trabajo potenciados por IA, combino arquitectura limpia con estrategias orientadas al SEO para ofrecer soluciones digitales escalables y preparadas para el futuro.',
    keySkillsLabel: 'Habilidades clave y experiencia',
    technologiesLabel: 'Tecnologías y conocimientos',
    showMore: '+ {n} más',
    showLess: 'Ver menos',
    categories: {
      wp: {
        description: 'Temas y plugins personalizados. Comercio electrónico.',
        skillDetails: [
          {
            name: 'Desarrollo WordPress',
            description:
              'Desarrollo de temas personalizados, arquitectura de plugins, WordPress REST API, tipos de publicaciones personalizados e implementaciones avanzadas del personalizador.',
          },
          {
            name: 'PHP y MySQL',
            description:
              'Programación PHP orientada a objetos, diseño de bases de datos, optimización de consultas y codificación segura para sistemas backend robustos.',
          },
          {
            name: 'Desarrollo de API',
            description:
              'Diseño de API RESTful, sistemas de autenticación, validación de datos e integración con servicios y bases de datos de terceros.',
          },
          {
            name: 'Gestión de servidores',
            description:
              'Administración de servidores Linux, estrategias de despliegue, monitoreo del rendimiento y mejores prácticas de seguridad para aplicaciones web.',
          },
        ],
      },
      app: {
        description:
          'Desarrollo de aplicaciones web rápidas y escalables con React, Next.js, TypeScript y Tailwind CSS.',
        skillDetails: [
          {
            name: 'React Ecosystem',
            description:
              'Amplia experiencia en hooks de React, Context API, Redux para gestión de estado y patrones modernos de React para construir aplicaciones escalables.',
          },
          {
            name: 'TypeScript',
            description:
              'Tipado estricto, diseño de interfaces, programación genérica y uso de TypeScript para mejorar la calidad del código y la experiencia del desarrollador.',
          },
          {
            name: 'CSS Moderno',
            description:
              'Funciones avanzadas de CSS3, animaciones, maquetaciones Grid/Flexbox, propiedades personalizadas y soluciones CSS-in-JS para estilos dinámicos.',
          },
          {
            name: 'Optimización del rendimiento',
            description:
              'División de código, carga diferida, técnicas de memoización y optimización de paquetes para aplicaciones React de carga rápida.',
          },
        ],
      },
      ai: {
        description: 'Herramientas modernas de IA y automatización para mayor productividad en el desarrollo',
        skillDetails: [
          {
            name: 'Ingeniería potenciada por IA (SDD)',
            description:
              'Integración de sistemas de próxima generación (Claude Code, Cursor, Google Antigravity) directamente en el SDLC. Aplicación de una metodología estricta de Spec-Driven Development (SDD): primero se definen las especificaciones técnicas y luego la IA escribe y verifica el código contra ellas, en lugar de improvisar. Se logra hasta 3x de velocidad de desarrollo en tareas rutinarias y de maquetación.',
          },
          {
            name: 'Context y MCP Engineering',
            description:
              'Definición de reglas estrictas del espacio de trabajo (AGENTS.md) y especificaciones de referencia (DESIGN_SYSTEM.md, SECURITY.md, ARCHITECTURE.md). Uso del Model Context Protocol (MCP) e instrucciones personalizadas para conectar herramientas de IA a entornos locales, utilidades de búsqueda y directorios del sistema de archivos, evitando la deriva de sesión y manteniendo la integridad arquitectónica.',
          },
          {
            name: 'Ejecución agéntica multifichero',
            description:
              'Ejecución de agentes paralelos y aislados para llevar a cabo actualizaciones complejas de funcionalidades en múltiples ficheros simultáneamente. Mantenimiento de una sólida estructura de «humano en el bucle» donde el ingeniero define la arquitectura del sistema, verifica los criterios y revisa las salidas del agente, mientras el agente se encarga de la ejecución sintáctica rápida.',
          },
          {
            name: 'Verificación híbrida y seguridad',
            description:
              'Combinación de análisis estático estricto (npx tsc --noEmit), linting automatizado (npm run lint) y pruebas de caracterización para capturar comportamientos de referencia y garantizar la seguridad de regresión durante las actualizaciones. Todo el código generado supera auditorías rigurosas del compilador antes de pasar a staging.',
          },
        ],
      },
      seo: {
        description: 'Optimización para motores de búsqueda y mejora del rendimiento web',
        skillDetails: [
          {
            name: 'SEO Técnico',
            description:
              'Optimización de la estructura del sitio, mejoras en la rastreabilidad, optimización de metaetiquetas y auditorías técnicas para mayor visibilidad en buscadores.',
          },
          {
            name: 'Optimización del rendimiento',
            description:
              'Mejora de Core Web Vitals, optimización de imágenes, carga diferida, estrategias de caché y optimización de recursos para tiempos de carga más rápidos.',
          },
          {
            name: 'Analítica y seguimiento',
            description:
              'Configuración de Google Analytics, seguimiento de conversiones, análisis del comportamiento de usuarios y estrategias de optimización basadas en datos.',
          },
          {
            name: 'Implementación de Schema',
            description:
              'Marcado de datos estructurados, optimización de fragmentos enriquecidos y HTML semántico para mejorar la comprensión por parte de los motores de búsqueda.',
          },
        ],
      },
      layout: {
        description: 'Sistemas de maquetación modernos y arquitectura de diseño adaptable',
        skillDetails: [
          {
            name: 'CSS Grid y Flexbox',
            description:
              'Técnicas de maquetación avanzadas, sistemas de cuadrícula complejos, maquetaciones flexibles y métodos modernos de CSS para diseño adaptable.',
          },
          {
            name: 'Diseño adaptable',
            description:
              'Enfoque mobile-first, estrategias de puntos de ruptura, tipografía fluida y maquetaciones adaptativas que funcionan en todos los tamaños de dispositivo.',
          },
          {
            name: 'Arquitectura de maquetación',
            description:
              'Arquitectura CSS escalable, estilizado basado en componentes, implementación de sistemas de diseño y organización del código mantenible.',
          },
          {
            name: 'Accesibilidad',
            description:
              'Cumplimiento WCAG, HTML semántico, navegación con teclado, optimización para lectores de pantalla y prácticas de diseño inclusivo.',
          },
        ],
      },
      design: {
        description: 'Principios de diseño visual y optimización de la experiencia de usuario',
        skillDetails: [
          {
            name: 'Principios de diseño visual',
            description:
              'Comprensión del equilibrio, contraste, jerarquía y composición para crear interfaces de usuario visualmente atractivas y eficaces.',
          },
          {
            name: 'Tipografía y color',
            description:
              'Selección de tipografías, estrategias de combinación, aplicación de la teoría del color, consideraciones de accesibilidad y creación de sistemas visuales coherentes.',
          },
          {
            name: 'Patrones UI/UX',
            description:
              'Patrones de interfaz comunes, optimización del flujo de usuario, diseño de interacciones y creación de experiencias de usuario intuitivas.',
          },
          {
            name: 'Sistemas de diseño',
            description:
              'Creación y mantenimiento de sistemas de diseño, bibliotecas de componentes, guías de estilo y garantía de consistencia del diseño entre proyectos.',
          },
        ],
      },
    },
    workTools: {
      sectionLabel: 'Entorno de trabajo',
      sectionTitle: 'Herramientas de organización del trabajo',
    },
    softSkills: {
      sectionLabel: 'Atributos personales',
      sectionTitle: 'Habilidades blandas',
      items: [
        {
          name: 'Resolución de problemas',
          description: 'Pensamiento analítico y soluciones creativas para desafíos técnicos complejos',
        },
        {
          name: 'Comunicación',
          description: 'Comunicación técnica clara con clientes, equipos y partes interesadas',
        },
        {
          name: 'Gestión de proyectos',
          description: 'Metodologías ágiles, gestión de plazos y coordinación de entregables',
        },
        {
          name: 'Adaptabilidad',
          description: 'Aprendizaje rápido de nuevas tecnologías y adaptación a requisitos cambiantes',
        },
        {
          name: 'Relaciones con clientes',
          description: 'Generar confianza, gestionar expectativas y ofrecer un servicio excepcional',
        },
        {
          name: 'Trabajo en equipo',
          description: 'Trabajo en equipo multifuncional, mentoría e intercambio de conocimientos',
        },
      ],
    },
  },
  projects: {
    sectionTitle: 'Proyectos destacados',
    sectionDescription:
      'Desarrollo de productos digitales de alto rendimiento combinando experiencia en ingeniería fundamental con velocidad potenciada por IA, desde arquitecturas WordPress personalizadas hasta aplicaciones Next.js listas para producción.',
    filterAll: 'Todos los proyectos',
    viewDetails: 'Ver detalles',
    liveSite: 'En vivo',
    page: 'Página',
    of: 'de',
    prev: 'Anterior',
    next: 'Siguiente',
    backToProjects: 'Volver a proyectos destacados',
    zoom: 'Ampliar',
    fullPageLayout: 'Diseño de página completa',
    tabs: {
      stack: 'Stack técnico',
      features: 'Características clave',
      architecture: 'Arquitectura',
      caseStudy: 'Caso de estudio',
    },
  },
  b2bServices: {
    badge: 'Servicios B2B y Alianzas',
    title: {
      before: 'Soluciones Digitales y',
      highlight: 'Desarrollo Marca Blanca',
      after: 'en España',
    },
    subtitle: 'Desde la modernización web hasta la integración de Inteligencia Artificial: retorno de inversión tangible para Pymes, Autónomos y Agencias Digitales en España.',
    tabs: {
      pymes: 'Para Pymes y Autónomos',
      agencies: 'Para Agencias Digitales (Marca Blanca)',
    },
    pymesContent: {
      title: 'Soluciones Web de Alto Rendimiento para Tu Negocio',
      subtitle: 'Transformamos tu presencia web (clínicas, talleres, carpinterías, servicios locales) en un canal constante de captación de clientes y reservas.',
      cards: [
        {
          title: 'Rediseño y Modernización Web',
          subtitle: 'Mayor Conversión de Visitas a Clientes Reales',
          body: 'Convertimos sitios web obsoletos en escaparates digitales modernos, adaptados a móviles, que generan confianza inmediata y transforman visitas en llamadas y reservas activas.',
          benefitLabel: 'Beneficio Clave para Tu Negocio',
          benefit: 'Aumento directo de la tasa de conversión y mayor volumen de clientes.',
        },
        {
          title: 'Optimización de Velocidad y Anuncios',
          subtitle: 'Carga en Menos de 1 Segundo (PageSpeed 95+)',
          body: 'Aceleramos tu web para que cargue en menos de 1 segundo. Esto mejora el nivel de calidad en Google Ads, reduciendo el coste por clic y evitando que los usuarios móviles se vayan a la competencia.',
          benefitLabel: 'Beneficio Clave para Tu Negocio',
          benefit: 'Menor coste publicitario y cero fuga de clientes móviles por lentitud.',
        },
        {
          title: 'Integración de IA y Automatización',
          subtitle: 'Asistentes Virtuales 24/7 y Reservas Directas',
          body: 'Implementamos asistentes virtuales de Inteligencia Artificial y widgets de reserva directa (WhatsApp / Doctoralia). Tu web atiende dudas y registra citas las 24 horas del día sin intervención humana.',
          benefitLabel: 'Beneficio Clave para Tu Negocio',
          benefit: 'Captación automática de clientes 24/7 y respuesta inmediata.',
        },
        {
          title: 'SEO Local y Búsqueda con IA',
          subtitle: 'Top en Google Maps y Motores de IA (ChatGPT/Gemini)',
          body: 'Incorporamos microdatos estructurados JSON-LD para posicionar tu negocio en los primeros lugares de Google Maps y respuestas de IA cuando busquen servicios en tu ciudad (ej. "carpintero en Sevilla", "dentista en Valencia").',
          benefitLabel: 'Beneficio Clave para Tu Negocio',
          benefit: 'Máxima visibilidad local cuando los clientes buscan tus servicios en tu zona.',
        },
        {
          title: 'E-Commerce y Tiendas Online',
          subtitle: 'Venta Directa y Pasarelas de Pago Automáticas',
          body: 'Desarrollamos tiendas online ultra-rápidas (Shopify / WordPress) con pasarelas de pago integradas y catálogos optimizados para vender tus productos o servicios de forma ininterrumpida.',
          benefitLabel: 'Beneficio Clave para Tu Negocio',
          benefit: 'Ventas digitales automáticas y proceso de compra sin fricciones.',
        },
        {
          title: 'Seguridad Legal RGPD y LOPDGDD',
          subtitle: 'Protección 100% Adaptada a la Normativa AEPD',
          body: 'Adaptamos tu sitio web al 100% con las exigencias legales españolas de protección de datos (formularios encriptados, avisos de cookies y cláusulas legales), protegiendo tu negocio frente a sanciones.',
          benefitLabel: 'Beneficio Clave para Tu Negocio',
          benefit: 'Tranquilidad total y protección completa frente a multas de privacidad.',
        },
      ],
    },
    agenciesContent: {
      title: 'Partner Técnico Senior en Marca Blanca para Agencias',
      subtitle: 'Amplía la capacidad técnica de tu agencia con ingeniería de alto nivel bajo tu marca — sin costes fijos de nómina.',
      cards: [
        {
          title: 'Desarrollo a Medida bajo NDA (Marca Blanca)',
          subtitle: '100% Confidencialidad y Cero Contacto con el Cliente',
          body: 'Ejecutamos proyectos web completos bajo la identidad corporativa de tu agencia. Garantía estricta de cumplimiento de NDA y cero contacto directo con tu cliente final.',
          benefitLabel: 'Beneficio para Tu Agencia',
          benefit: 'Entrega proyectos complejos bajo tu marca con privacidad total.',
        },
        {
          title: 'Rediseño y Refactorización de Código',
          subtitle: 'Stack Limpio en React 19 y Custom WordPress',
          body: 'Refactorizamos sitios web pesados de tus clientes en arquitecturas modernas y limpias sin maquetadores lentos, entregando código rápido, seguro y fácil de mantener por tu equipo.',
          benefitLabel: 'Beneficio para Tu Agencia',
          benefit: 'Entregables de alto rendimiento que elevan el prestigio de tu agencia.',
        },
        {
          title: 'Soluciones de IA para los Clientes de tu Agencia',
          subtitle: 'Nueva Oferta de Servicios de Alto Margen',
          body: 'Añade la integración de asistentes de IA al catálogo de tu agencia. Creamos chatbots personalizados y herramientas de automatización de leads para tus clientes, aumentando tu ticket medio.',
          benefitLabel: 'Beneficio para Tu Agencia',
          benefit: 'Amplía tu catálogo con servicios innovadores de alta rentabilidad.',
        },
        {
          title: 'Auditoría Técnica y Core Web Vitals',
          subtitle: 'Optimización y Puntuaciones Lighthouse 90+',
          body: 'Resolvemos cuellos de botella de SEO técnico, velocidad de carga y accesibilidad en la cartera de sitios web de tu agencia, garantizando los máximos estándares de rendimiento.',
          benefitLabel: 'Beneficio para Tu Agencia',
          benefit: 'Soluciona problemas de rendimiento de tus clientes sin sobrecargar a tu equipo.',
        },
        {
          title: 'Modelos de Colaboración Flexibles y Presupuestos Rápidos',
          subtitle: 'Protección de Márgenes de Beneficio',
          body: 'Flexibilidad total de trabajo (bolsas de horas, proyectos a precio cerrado o colaboración continuada por sprints) con estimaciones de presupuesto entregadas en 24–48 horas.',
          benefitLabel: 'Beneficio para Tu Agencia',
          benefit: 'Modelos adaptables y costes predecibles diseñados para proteger tus márgenes.',
        },
      ],
    },
  },
  contact: {
    badge: 'Contacto',
    title: {
      before: 'Construyamos algo',
      highlight: 'extraordinario',
    },
    description:
      '¿Listo para dar vida a su proyecto? Elija un canal de comunicación a continuación o pruebe mi asistente virtual para obtener respuestas rápidas.',
    directChannels: 'Canales directos',
    followCredentials: 'Redes sociales y perfiles',
    contactTags: {
      email: 'Para solicitudes oficiales y proyectos',
      phone: 'Ideal para conversaciones rápidas',
      telegram: 'Mensajería asíncrona rápida',
    },
    chatbot: {
      title: 'Consola AI Assistant',
      placeholder: 'Escriba su pregunta...',
      clearButton: 'Limpiar',
      sendButton: 'Enviar',
      welcomeMessage: '¡Hola! Soy el asistente de IA de Artur. 🤖 Pregúnteme sobre su experiencia, habilidades, stack tecnológico o seleccione una de las preguntas sugeridas a continuación.',
      assistantName: 'Asistente de Artur',
      liveConsole: 'Consola en vivo',
      faqHeader: 'Preguntas frecuentes',
      online: 'En línea',
    },
  },
  footer: {
    tagline: 'Ingeniería de productos web de alto rendimiento con velocidad potenciada por IA.',
    copyright: 'Todos los derechos reservados.',
    madeWith: 'Hecho',
  },
}
