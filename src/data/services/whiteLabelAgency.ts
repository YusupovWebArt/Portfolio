import type { ServiceItem } from './types'

export const whiteLabelAgencyService: ServiceItem = {
  slug: 'white-label-agency-partner',
  audience: 'agencies',
  iconName: 'LuLock',
  relevantProjectSlugs: ['front-desk-helpers', 'it-magic', 'aws-migration-services', 'adwoods-design'],
  content: {
    es: {
      badge: 'Marca Blanca / B2B Partner',
      title: 'Desarrollo Web Marca Blanca para Agencias Digitales en España',
      shortDesc: 'Refuerzo técnico Senior en React 19, Next.js 16 y WordPress a medida bajo estricto NDA. Sin intermediarios, sin bajas imprevistas y con estimaciones en 24-48 horas.',
      heroLead: 'Ayudo a agencias de marketing, consultoras y estudios de diseño a escalar su capacidad técnica sin asumir costes fijos de contratación. Todo el código se entrega bajo tu marca, listo para producción y con estándares europeos de accesibilidad y rendimiento.',
      metrics: [
        { value: '24-48h', label: 'Valoración y presupuesto técnico' },
        { value: '100%', label: 'Confidencialidad bajo contrato NDA' },
        { value: '0€', label: 'Costes laborales fijos o indemnizaciones' },
        { value: '<0.8s', label: 'Velocidad de carga en producción' },
      ],
      problemsSolved: [
        {
          title: 'Cuellos de botella y proyectos bloqueados por falta de Senior Devs',
          desc: 'Tu equipo interno está saturado o carece de experiencia en arquitecturas modernas (Next.js 16, Headless WP o WCAG 2.2). Asumo la ejecución técnica completa para que no rechaces clientes rentables.',
        },
        {
          title: 'Freelancers poco fiables que desaparecen a mitad del sprint',
          desc: 'Comunicación directa en canales privados (Slack, WhatsApp, ClickUp), entregas puntuales por hitos y código limpio documentado en TypeScript que cualquier desarrollador puede mantener.',
        },
        {
          title: 'Riesgo reputacional ante el cliente final',
          desc: 'Tu agencia mantiene el 100% de la relación con el cliente. Nunca contacto con tu cliente ni publico el trabajo en mi cartera pública si así lo requiere el acuerdo de confidencialidad.',
        },
      ],
      deliverables: [
        {
          title: 'Desarrollo Frontend y Aplicaciones Web',
          items: [
            'Aplicaciones Next.js 16 con App Router, React 19 Server Components y TypeScript estricto.',
            'Maquetación píxel-perfect desde Figma con Tailwind CSS v4, animaciones fluidas y diseño responsive.',
            'Cumplimiento nativo de la Ley Europea de Accesibilidad (EAA 2026 / WCAG 2.2 AA).',
          ],
        },
        {
          title: 'Desarrollo WordPress Avanzado y WooCommerce',
          items: [
            'Temas y plugins a medida en PHP 8+ con campos flexibles ACF Pro sin constructores pesados.',
            'Tiendas online optimizadas para alta conversión y pasarelas de pago seguras (Stripe, Redsys, Bizum).',
            'Migraciones sin pérdida de posicionamiento SEO, enlaces permanentes ni carritos activos.',
          ],
        },
        {
          title: 'Control de Calidad, Despliegue y Soporte',
          items: [
            'Pipelines de integración continua CI/CD con GitHub Actions y despliegues automáticos.',
            'Garantía técnica de 30 días posteriores al lanzamiento para resolver cualquier incidencia sin coste adicional.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Paso 1',
          title: 'Firma de NDA y Recepción del Briefing',
          desc: 'Firmamos un acuerdo de confidencialidad mutuo. Analizo el diseño de Figma o las especificaciones del proyecto en 24-48 horas.',
        },
        {
          step: 'Paso 2',
          title: 'Presupuesto Cerrado y Cronograma de Hitos',
          desc: 'Presento una propuesta técnica transparente con precio cerrado o bolsa de horas, sin sorpresas ni costes ocultos.',
        },
        {
          step: 'Paso 3',
          title: 'Desarrollo Ágil y Control en Entorno Staging',
          desc: 'Construcción con commits limpios. Tu equipo prueba las funcionalidades en tiempo real en un servidor de preproducción.',
        },
        {
          step: 'Paso 4',
          title: 'Puesta en Producción y Traspaso de Propiedad',
          desc: 'Despliegue en el hosting de tu cliente, configuración de DNS/SSL y entrega íntegra del repositorio de código.',
        },
      ],
      faqs: [
        {
          q: '¿Cómo garantizamos que el cliente final no sepa que eres un colaborador externo?',
          a: 'Trabajo con cuentas de correo de tu dominio si lo prefieres, o bien actúo como desarrollador de apoyo interno en tu gestor de tareas (Slack, Jira, Trello). Mi nombre no figura en el código ni en los créditos finales del sitio.',
        },
        {
          q: '¿Cuál es el modelo de facturación para agencias?',
          a: 'Podemos trabajar por proyecto con precio cerrado e hitos de entrega (50% anticipo / 50% al despliegue), o mediante una bolsa mensual de horas reservadas con tarifa preferente para partners recurrentes.',
        },
        {
          q: '¿Qué ocurre si el proyecto requiere soporte urgente tras el lanzamiento?',
          a: 'Todos los desarrollos incluyen un periodo de garantía de 30 días para corrección de bugs. Además, ofrezco planes de mantenimiento mensual SLA para actualizaciones críticas y soporte continuo.',
        },
        {
          q: '¿Qué tecnologías dominas para proyectos de agencia?',
          a: 'Next.js 16, React 19, TypeScript, Tailwind CSS, WordPress a medida (PHP 8+, ACF Pro, WooCommerce), Headless CMS (REST / GraphQL), Shopify Liquid, y optimización Core Web Vitals.',
        },
      ],
      ctaHeadline: '¿Tienes un proyecto atascado o necesitas un partner técnico de confianza?',
      ctaLead: 'Escríbeme directamente por WhatsApp. Revisamos el alcance de tu proyecto y te envío una estimación técnica en menos de 24 horas.',
      whatsappMessage: 'Hola Artur, me pongo en contacto desde una agencia. Tenemos un proyecto web y nos gustaría valorar una colaboración en marca blanca.',
      schemaDescription: 'Servicio de desarrollo web marca blanca para agencias de publicidad, estudios de diseño y consultoras en España. React 19, Next.js 16 y WordPress bajo NDA.',
    },
    en: {
      badge: 'White-Label / B2B Partner',
      title: 'White-Label Web Engineering for Digital Agencies & Tech Startups',
      shortDesc: 'Senior technical capacity in React 19, Next.js 16, and bespoke WordPress under strict NDA. No intermediaries, predictable delivery, and 24-48h scoping turnaround.',
      heroLead: 'I help marketing agencies, consultancies, and design studios expand their technical capacity without overhead hiring costs. All code is delivered under your brand, production-ready, and built to European accessibility and performance standards.',
      metrics: [
        { value: '24-48h', label: 'Technical scope and quote turnaround' },
        { value: '100%', label: 'Confidentiality under signed NDA' },
        { value: '0€', label: 'Fixed employment overhead or severance' },
        { value: '<0.8s', label: 'Production load speed benchmarks' },
      ],
      problemsSolved: [
        {
          title: 'Bottlenecks and postponed client deadlines due to Senior dev shortages',
          desc: 'Your in-house team is overstretched or lacks specialized experience in modern stacks (Next.js 16, Headless WP, or WCAG 2.2). I handle full engineering execution so you never turn down profitable business.',
        },
        {
          title: 'Unreliable freelancers disappearing mid-sprint',
          desc: 'Direct communication in private team channels (Slack, WhatsApp, ClickUp), on-time milestone delivery, and maintainable TypeScript code that any developer can easily build upon.',
        },
        {
          title: 'Reputational risk with end clients',
          desc: 'Your agency retains 100% of the client relationship. I never contact your clients or publish white-label work in public portfolios unless explicitly authorized.',
        },
      ],
      deliverables: [
        {
          title: 'Frontend & Modern Web Application Development',
          items: [
            'Next.js 16 applications with App Router, React 19 Server Components, and strict TypeScript.',
            'Pixel-perfect Figma conversion using Tailwind CSS v4, smooth micro-interactions, and responsive layouts.',
            'Native compliance with the European Accessibility Act (EAA 2026 / WCAG 2.2 AA).',
          ],
        },
        {
          title: 'Advanced WordPress & WooCommerce Architecture',
          items: [
            'Bespoke PHP 8+ themes and plugins with ACF Pro flexible content blocks without bulky page builders.',
            'High-converting online stores with secure checkout gateways (Stripe, PayPal, regional gateways).',
            'Zero-downtime migrations preserving SEO ranking structures, canonical URLs, and active carts.',
          ],
        },
        {
          title: 'QA Engineering, Deployment & Handover',
          items: [
            'Continuous Integration (CI/CD) pipelines with GitHub Actions and automated previews.',
            '30-day post-launch warranty covering bug fixes and technical adjustments at no additional charge.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Step 1',
          title: 'NDA Execution & Briefing Review',
          desc: 'We sign a mutual non-disclosure agreement. I inspect your Figma prototypes or project requirements within 24-48 hours.',
        },
        {
          step: 'Step 2',
          title: 'Fixed Estimate & Milestone Schedule',
          desc: 'I provide a transparent technical proposal with fixed pricing or hourly retainer packages with zero hidden costs.',
        },
        {
          step: 'Step 3',
          title: 'Agile Development & Staging Validation',
          desc: 'Clean git commits and sprint reviews. Your team tests working features in real time on a private staging server.',
        },
        {
          step: 'Step 4',
          title: 'Production Launch & Full Ownership Transfer',
          desc: 'Deployment to client infrastructure, DNS/SSL configuration, and complete repository ownership handover.',
        },
      ],
      faqs: [
        {
          q: 'How do you guarantee the end client will not discover an external collaborator?',
          a: 'I can communicate via your company domain email or work directly within your internal task manager (Slack, Jira, ClickUp). No personal credits appear in code comments or public footers.',
        },
        {
          q: 'What is the billing model for agency partnerships?',
          a: 'We can structure projects around fixed milestone budgets (50% upfront / 50% upon deployment) or dedicated monthly hour retainers with preferential rates for repeat agency partners.',
        },
        {
          q: 'What happens if a critical bug emerges after launch?',
          a: 'All deliverables come with a 30-day warranty for defect remediation. I also offer ongoing maintenance retainers for security monitoring and regular software updates.',
        },
        {
          q: 'Which technologies do you specialize in for agency projects?',
          a: 'Next.js 16, React 19, TypeScript, Tailwind CSS, Custom WordPress (PHP 8+, ACF Pro, WooCommerce), Headless CMS (REST / GraphQL), Shopify Liquid, and Core Web Vitals optimization.',
        },
      ],
      ctaHeadline: 'Have a deadline approaching or need a dependable technical partner?',
      ctaLead: 'Reach out directly on WhatsApp. Let us review your specifications and prepare an estimate within 24 hours.',
      whatsappMessage: 'Hi Artur, reaching out from a digital agency. We have an upcoming web project and would like to discuss white-label collaboration.',
      schemaDescription: 'White-label web engineering services for digital agencies, design studios, and software companies in Spain and the EU. React 19, Next.js 16, and WordPress under NDA.',
    },
    ua: {
      badge: 'Marca Blanca / B2B Партнер',
      title: 'White-Label веб-розробка Marca Blanca для digital-агенцій',
      shortDesc: 'Підсилення команди Senior-інженером у React 19, Next.js 16 та кастомному WordPress під суворим NDA. Без посередників, з оцінкою завдань за 24-48 годин.',
      heroLead: 'Допомагаю маркетинговим агенціям, студіям дизайну та ІТ-інтеграторам масштабувати технічну потужність без витрат на найм та податки. Увесь код передається під брендом вашої агенції з дотриманням європейських стандартів швидкості та доступності.',
      metrics: [
        { value: '24-48г', label: 'Оцінка та технічний кошторис' },
        { value: '100%', label: 'Конфіденційність за договором NDA' },
        { value: '0€', label: 'Витрати на найм чи компенсації' },
        { value: '<0.8с', label: 'Швидкість завантаження у production' },
      ],
      problemsSolved: [
        {
          title: 'Зрив дедлайнів через дефіцит Senior-розробників',
          desc: 'Внутрішня команда завантажена або не має досвіду у сучасних стеках (Next.js 16, Headless WP чи WCAG 2.2). Беру повну технічну реалізацію на себе, щоб ви не втрачали вигідні замовлення.',
        },
        {
          title: 'Ненадійні фрилансери, що зникають посеред спринту',
          desc: 'Пряма комунікація у ваших робочих каналах (Slack, WhatsApp, Jira), чітке дотримання дедлайнів та чистий документований код на TypeScript, який легко підтримувати.',
        },
        {
          title: 'Репутаційні ризики перед кінцевим замовником',
          desc: 'Ваша агенція володіє 100% комунікації з клієнтом. Я не контактую з вашим клієнтом напряму і не публікую кейс у відкритому портфоліо без вашої згоди.',
        },
      ],
      deliverables: [
        {
          title: 'Frontend та веб-додатки нового покоління',
          items: [
            'Додатки Next.js 16 з App Router, React 19 Server Components та суворою типізацією TypeScript.',
            'Піксель-перфект верстка з Figma на Tailwind CSS v4, адаптивні інтерфейси та плавні анімації.',
            'Повна відповідність Європейському акту доступності (EAA 2026 / WCAG 2.2 AA).',
          ],
        },
        {
          title: 'Кастомний WordPress та WooCommerce',
          items: [
            'Індивідуальні теми та плагіни на PHP 8+ з гнучкими блоками ACF Pro без важких конструкторів.',
            'Інтернет-магазини з оптимізацією конверсії та інтеграцією платіжних систем (Stripe, Redsys).',
            'Безпечна міграція зі збереженням посилань, структури каталогу та органічного SEO-трафіку.',
          ],
        },
        {
          title: 'QA, розгортання та гарантійна підтримка',
          items: [
            'Налаштування пайплайнів CI/CD через GitHub Actions для автоматичних деплоїв.',
            'Гарантія 30 днів після релізу для безкоштовного усунення виявлених дефектів.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Крок 1',
          title: 'Підписання NDA та аналіз брифінгу',
          desc: 'Підписуємо договір про нерозголошення. Оцінюю макети Figma або технічне завдання протягом 24-48 годин.',
        },
        {
          step: 'Крок 2',
          title: 'Фіксований кошторис та план спринтів',
          desc: 'Надаю прозору технічну пропозицію з фіксованою ціною або погодинним пулом без прихованих платежів.',
        },
        {
          step: 'Крок 3',
          title: 'Розробка та валідація на Staging-сервері',
          desc: 'Робота чистими комітами. Ваша команда тестує функціонал у реальному часі на закритому сервері тестування.',
        },
        {
          step: 'Крок 4',
          title: 'Реліз та передача прав на репозиторій',
          desc: 'Розгортання на сервері замовника, налаштування DNS/SSL та повна передача коду та прав інтелектуальної власності.',
        },
      ],
      faqs: [
        {
          q: 'Як гарантується, що кінцевий клієнт не дізнається про зовнішнього підрядника?',
          a: 'Працюю під корпоративною поштою вашого домену або у внутрішньому таск-трекері (Slack, ClickUp). Жодних моїх контактів чи підписів у коді не залишається.',
        },
        {
          q: 'Яка модель оплати передбачена для партнерських агенцій?',
          a: 'Можлива робота за проєктною моделлю з фіксованою ціною за етапами (50% передплата / 50% реліз) або щомісячний погодинний пул за спеціальним партнерським тарифом.',
        },
        {
          q: 'Чи надається підтримка після передачі проєкту?',
          a: 'Так, кожен проєкт має 30-денний гарантійний період для виправлення можливих зауважень. Також доступна щомісячна підтримка за договором SLA.',
        },
        {
          q: 'Які технології ви використовуєте в роботі?',
          a: 'Next.js 16, React 19, TypeScript, Tailwind CSS, кастомний WordPress (PHP 8+, ACF Pro, WooCommerce), Headless CMS (REST / GraphQL), Shopify Liquid та оптимізація Core Web Vitals.',
        },
      ],
      ctaHeadline: 'Маєте гарячий дедлайн чи шукаєте постійного технічного партнера?',
      ctaLead: 'Напишіть мені у WhatsApp. Обговоримо технічні вимоги та підготуємо кошторис за 24 години.',
      whatsappMessage: 'Вітаю Артуре! Звертаюся від digital-агенції. Маємо новий веб-проєкт та хочемо обговорити white-label співпрацю.',
      schemaDescription: 'Послуги white-label веб-розробки для digital-агенцій, дизайн-студій та IT-компаній в Іспанії та ЄС. React 19, Next.js 16 та WordPress під NDA.',
    },
    de: {
      badge: 'White-Label / B2B-Partner',
      title: 'White-Label Web-Engineering für Digitalagenturen & Tech-Startups',
      shortDesc: 'Senior-Entwicklungskapazität in React 19, Next.js 16 und maßgeschneidertem WordPress unter strengem NDA. Ohne Zwischenhändler, planbare Lieferung und Angebot innerhalb von 24-48 Stunden.',
      heroLead: 'Ich unterstütze Marketingagenturen, Beratungen und Designstudios dabei, ihre technische Kapazität ohne Fixkosten für Festanstellungen zu erweitern. Der gesamte Code wird unter Ihrer Marke produktionsreif und nach europäischen Barrierefreiheits- und Performance-Standards geliefert.',
      metrics: [
        { value: '24-48h', label: 'Technische Einschätzung und Angebot' },
        { value: '100%', label: 'Vertraulichkeit mit unterzeichnetem NDA' },
        { value: '0€', label: 'Personalfixkosten oder Lohnnebenkosten' },
        { value: '<0.8s', label: 'Ladezeit-Benchmark in Produktion' },
      ],
      problemsSolved: [
        {
          title: 'Engpässe und verschobene Kunden-Deadlines durch Mangel an Senior-Entwicklern',
          desc: 'Ihr internes Team ist ausgelastet oder es fehlt spezialisiertes Know-how in modernen Stacks (Next.js 16, Headless WP oder WCAG 2.2). Ich übernehme die komplette technische Umsetzung, damit Sie keine lukrativen Aufträge ablehnen müssen.',
        },
        {
          title: 'Unzuverlässige Freelancer, die mitten im Sprint abtauchen',
          desc: 'Direkte Kommunikation in Ihren privaten Team-Kanälen (Slack, WhatsApp, ClickUp), pünktliche Meilenstein-Lieferung und sauberer TypeScript-Code, auf dem jedes Team problemlos aufbauen kann.',
        },
        {
          title: 'Reputationsrisiko gegenüber dem Endkunden',
          desc: 'Ihre Agentur behält 100% der Kundenbeziehung. Ich kontaktiere Ihre Kunden niemals direkt und veröffentliche White-Label-Projekte ohne ausdrückliche Genehmigung nicht in öffentlichen Portfolios.',
        },
      ],
      deliverables: [
        {
          title: 'Frontend & Moderne Webanwendungen',
          items: [
            'Next.js 16 Anwendungen mit App Router, React 19 Server Components und striktem TypeScript.',
            'Pixelgenaue Umsetzung von Figma-Designs mit Tailwind CSS v4, flüssigen Mikro-Interaktionen und responsiven Layouts.',
            'Native Konformität mit dem European Accessibility Act (EAA 2026 / WCAG 2.2 AA).',
          ],
        },
        {
          title: 'Erweiterte WordPress- & WooCommerce-Architektur',
          items: [
            'Maßgeschneiderte PHP 8+ Themes und Plugins mit flexiblen ACF Pro Blöcken ohne schwerfällige Page Builder.',
            'Konversionsstarke Online-Shops mit sicheren Payment-Gateways (Stripe, PayPal, lokale Anbieter).',
            'Ausfallfreie Migrationen unter vollständigem Erhalt von SEO-Rankings, kanonischen URLs und aktiven Warenkörben.',
          ],
        },
        {
          title: 'QA-Engineering, Deployment & Übergabe',
          items: [
            'Continuous-Integration-Pipelines (CI/CD) mit GitHub Actions und automatisierten Staging-Previews.',
            '30 Tage Nachlaufgarantie nach dem Launch inklusive kostenloser Fehlerbehebung und technischer Feinanpassungen.',
          ],
        },
      ],
      workflowSteps: [
        {
          step: 'Schritt 1',
          title: 'NDA-Unterzeichnung & Briefing-Analyse',
          desc: 'Wir unterzeichnen eine gegenseitige Vertraulichkeitsvereinbarung. Ich prüfe Ihre Figma-Prototypen oder Projektspezifikationen innerhalb von 24-48 Stunden.',
        },
        {
          step: 'Schritt 2',
          title: 'Festpreisangebot & Meilenstein-Zeitplan',
          desc: 'Sie erhalten ein transparentes technisches Angebot zum Festpreis oder auf Basis eines reservierten Stundenkontingents ohne versteckte Kosten.',
        },
        {
          step: 'Schritt 3',
          title: 'Agile Entwicklung & Staging-Abnahme',
          desc: 'Saubere Git-Commits und Sprint-Reviews. Ihr Team testet laufende Funktionen in Echtzeit auf einer geschützten Staging-Umgebung.',
        },
        {
          step: 'Schritt 4',
          title: 'Produktions-Launch & vollständige Rechteübergabe',
          desc: 'Deployment auf die Infrastruktur des Kunden, DNS/SSL-Konfiguration und lückenlose Übergabe des Code-Repositories.',
        },
      ],
      faqs: [
        {
          q: 'Wie stellen wir sicher, dass der Endkunde keinen externen Partner bemerkt?',
          a: 'Ich kann über eine E-Mail-Adresse Ihrer Domain kommunizieren oder direkt in Ihrem internen Projektmanagement-Tool (Slack, Jira, ClickUp) mitarbeiten. Im Code oder Footer erscheinen keinerlei Hinweise auf mich.',
        },
        {
          q: 'Welches Abrechnungsmodell bieten Sie für Agentur-Partnerschaften?',
          a: 'Wir können Projekte mit festem Meilenstein-Budget (50% Anzahlung / 50% bei Go-Live) oder über ein monatliches Stundenkontingent mit Vorzugskonditionen für wiederkehrende Agentur-Partner abrechnen.',
        },
        {
          q: 'Was passiert, wenn nach dem Launch ein kritischer Fehler auftritt?',
          a: 'Alle Lieferungen beinhalten eine 30-tägige Gewährleistung für Fehlerbehebungen. Zudem biete ich laufende SLA-Wartungspakete für Sicherheitsupdates und technischen Support.',
        },
        {
          q: 'Auf welche Technologien sind Sie für Agenturprojekte spezialisiert?',
          a: 'Next.js 16, React 19, TypeScript, Tailwind CSS, maßgeschneidertes WordPress (PHP 8+, ACF Pro, WooCommerce), Headless CMS (REST / GraphQL), Shopify Liquid sowie Core Web Vitals Optimierung.',
        },
      ],
      ctaHeadline: 'Steht eine Deadline bevor oder suchen Sie einen verlässlichen Tech-Partner?',
      ctaLead: 'Schreiben Sie mir direkt per WhatsApp. Wir besprechen Ihr Briefing und Sie erhalten innerhalb von 24 Stunden eine fundierte Einschätzung.',
      whatsappMessage: 'Hallo Artur, ich melde mich von einer Digitalagentur. Wir haben ein Webprojekt und möchten über eine White-Label-Zusammenarbeit sprechen.',
      schemaDescription: 'White-Label Web-Engineering für Digitalagenturen, Designstudios und Tech-Unternehmen in Spanien und der EU. React 19, Next.js 16 und WordPress unter NDA.',
    },
  },
}
