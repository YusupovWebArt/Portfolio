import { Project } from '../project-types'

const awsMigrationServices: Project = {
  id: 18500,
  title: 'AWS Migration Services',
  description:
    'Specialized platform designed to assist businesses in transitioning their operations to the Amazon Web Services (AWS) cloud. The website offers a comprehensive suite of services aimed at ensuring a smooth, secure, and cost-effective migration process.',
  descriptionUa:
    'Спеціалізована платформа, створена для допомоги бізнесу в перенесенні операцій у хмару Amazon Web Services (AWS). Вебсайт пропонує комплексний спектр послуг, спрямованих на забезпечення плавного, безпечного та економічно ефективного процесу міграції.',
  descriptionEs:
    'Plataforma especializada diseñada para asistir a las empresas en la transición de sus operaciones hacia la nube de Amazon Web Services (AWS). El sitio web ofrece un conjunto integral de servicios orientados a garantizar un proceso de migración fluido, seguro y rentable.',
  descriptionDe:
    'Spezialisierte Plattform, die Unternehmen bei der Migration ihrer Geschäftsprozesse in die Cloud von Amazon Web Services (AWS) unterstützt. Die Website bietet ein umfassendes Leistungsspektrum für einen reibungslosen, sicheren und kosteneffizienten Migrationsprozess.',
  fullDescription:
    'A high-end marketing and service platform designed to assist enterprises in migrating legacy infrastructure to the Amazon Web Services (AWS) cloud. Built with a completely custom-themed WordPress engine, bespoke PHP logic, and Advanced Custom Fields (ACF) Pro. To visually communicate complex cloud migration concepts, the site integrates custom-engineered AI graphics depicting cloud server architectures, migration pipelines, and modern security protocols.',
  fullDescriptionUa:
    'Преміальна маркетингова та сервісна платформа, створена для допомоги підприємствам у міграції застарілої інфраструктури в хмару Amazon Web Services (AWS). Побудована на повністю кастомній темі WordPress, унікальній логіці PHP та Advanced Custom Fields (ACF) Pro. Для наочної демонстрації складних концепцій міграції сайт інтегрує кастомно розроблені AI-графічні елементи, що зображують архітектури хмарних серверів, пайплайни міграції та сучасні протоколи безпеки.',
  fullDescriptionEs:
    'Plataforma de marketing y servicios de alto nivel diseñada para ayudar a las empresas a migrar su infraestructura heredada hacia la nube de Amazon Web Services (AWS). Construida con un tema WordPress completamente personalizado, lógica PHP a medida y Advanced Custom Fields (ACF) Pro. Para comunicar visualmente conceptos complejos de migración, el sitio integra gráficos de IA diseñados a medida que representan arquitecturas de servidores cloud, pipelines de migración y protocolos de seguridad modernos.',
  fullDescriptionDe:
    'Eine hochwertige Marketing- und Serviceplattform, die Unternehmen bei der Migration bestehender Legacy-Infrastrukturen in die Amazon Web Services (AWS) Cloud begleitet. Entwickelt auf Basis eines vollständig maßgeschneiderten WordPress-Themes, individueller PHP-Logik und Advanced Custom Fields (ACF) Pro. Um komplexe Cloud-Migrationskonzepte visuell verständlich zu vermitteln, integriert die Website eigens konzipierte KI-Grafiken, die Cloud-Server-Architekturen, Migrations-Pipelines und moderne Sicherheitsprotokolle darstellen.',
  detailHeroLine: 'CUSTOM WORDPRESS · CLOUD SOLUTION MARKETING',
  detailMetrics: [
    { value: '96+', label: 'PageSpeed', accent: 'green' },
    { value: '<0.8s', label: 'Page load', accent: 'green' },
    { value: 'PHP 8 / ACF', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'SEO Ready', label: 'Indexability', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME ENGINE',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Custom PHP 8 Theme', highlight: true },
          { label: 'ACF Pro' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL DB' },
          { label: 'Apache/Nginx' },
          { label: 'Cloudflare Edge', highlight: true },
        ],
      },
    ],
    description:
      'A customized WordPress theme built from scratch using PHP 8 and Advanced Custom Fields (ACF). Optimized for lightning-fast speeds and high-conversion marketing. Served through Cloudflare for global caching, security, and performance.',
    descriptionUa:
      'Кастомна тема WordPress, створена з нуля з використанням PHP 8 та Advanced Custom Fields (ACF). Оптимізована для блискавичної швидкості та висококонверсійного маркетингу. Обслуговується через Cloudflare для глобального кешування, безпеки та продуктивності.',
    descriptionEs:
      'Un tema de WordPress personalizado creado desde cero con PHP 8 y Advanced Custom Fields (ACF). Optimizado para velocidades ultrarrápidas y marketing de alta conversión. Servido a través de Cloudflare para caché global, seguridad y alto rendimiento.',
    descriptionDe:
      'Ein von Grund auf mit PHP 8 und Advanced Custom Fields (ACF) entwickeltes Custom-WordPress-Theme. Optimiert für blitzschnelle Ladezeiten und konversionsstarkes Marketing sowie über Cloudflare für globales Caching, Sicherheit und höchste Performance ausgeliefert.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-migration-services_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-migration-services_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-migration-services_thumb.webp',
      caption: 'Home page',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide2.webp',
      caption: 'Visual blocks and service grids displaying AWS core advantages',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide3.webp',
      caption: 'Enterprise migration paths and visual cloud diagrams',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide4.webp',
      caption: 'Pricing packages and contact details for business consultation',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-migration-services/aws-migration-services_slide5.webp',
      caption: 'Contact and lead generation forms with secure server handling',
    },
  ],
  technologies: {
    frontend: [
      {
        short: 'HTML5 & CSS3',
        full: 'Semantic HTML5 structure and custom CSS3 stylesheets',
      },
      {
        short: 'JavaScript (ES6)',
        full: 'Bespoke ES6 JavaScript for dynamic transitions and visual micro-animations',
      },
      {
        short: 'Responsive CSS Grid',
        full: 'Fluid layout structures using CSS Grid and Flexbox for seamless multi-device scaling',
      },
    ],
    backend: [
      {
        short: 'PHP 8.2',
        full: 'Highly secure, modern PHP 8.2 scripting for page templates and server-side forms handling',
      },
      {
        short: 'MySQL',
        full: 'MySQL database for structured content management',
      },
    ],
    api: [
      {
        short: 'Google Maps API',
        full: 'Google Maps API integration for interactive location pinpoints',
      },
      {
        short: 'SMTP Mailer',
        full: 'Reliable email delivery integration for client inquiry tracking',
      },
    ],
    contentManagement: [
      {
        short: 'Custom Theme',
        full: 'WP custom theme built entirely from scratch to eliminate database bloat and template weight',
      },
      {
        short: 'ACF Pro',
        full: 'Advanced Custom Fields Pro integration for flexible, administration-friendly content blocks',
      },
    ],
    devopsSecurity: [
      {
        short: 'Cloudflare CDN',
        full: 'Cloudflare proxy for SSL encryption, DDoS mitigation, and global edge routing',
      },
      {
        short: 'Nginx Caching',
        full: 'Optimized server-side caching rules for sub-second database response times',
      },
      {
        short: 'Forms Validation',
        full: 'Robust sanitization and anti-spam protection for all user submissions',
      },
    ],
    analytics: [
      {
        short: 'Google Analytics',
        full: 'Detailed GA4 metrics integration to trace user session flows and CTA button conversions',
      },
    ],
    aiTools: [
      {
        short: 'Midjourney',
        full: 'Advanced prompt engineering with Midjourney for conceptual illustrations representing servers and migrations',
      },
      {
        short: 'Google Gemini',
        full: 'Professional copywriting helper for tech-oriented landing page content',
      },
    ],
    seo: [
      {
        short: 'Schema.org Markup',
        full: 'JSON-LD structured data markup representing corporate services for rich Google search snippets',
      },
      {
        short: 'RankMath SEO',
        full: 'Fine-tuned metadata and XML sitemap indexation rules for enhanced organic ranking',
      },
    ],
    technicalOptimization: [
      {
        short: 'Lighthouse Audits',
        full: 'Rigorous performance checks aiming at 95+ PageSpeed scores',
      },
      {
        short: 'WebP Images',
        full: 'Image optimization pipeline converting graphical assets to next-gen WebP formats',
      },
      {
        short: 'Assets Minification',
        full: 'Automated concatenation and minification of CSS/JS files to reduce render-blocking times',
      },
    ],
    digitalMarketing: [
      {
        short: 'CRO Strategy',
        full: 'Conversion Rate Optimization mapping to funnel visitors towards high-impact call-to-actions',
      },
    ],
  },
  features: [
    {
      title: 'Custom Theme from Scratch',
      titleUa: 'Кастомна тема з нуля',
      titleEs: 'Tema personalizado desde cero',
      titleDe: 'Maßgeschneidertes Theme von Grund auf',
      description:
        'Engineered a unique, lightweight WordPress theme in pure PHP/CSS. Bypassed bulky pre-made page builders (Elementor/Divi), resulting in a clean codebase and rapid load times.',
      descriptionUa:
        'Розроблено унікальну легку тему WordPress на чистому PHP/CSS без громіздких конструкторів сторінок (Elementor/Divi), що забезпечило чисту кодову базу та миттєве завантаження.',
      descriptionEs:
        'Se desarrolló un tema de WordPress único y ligero en PHP/CSS puro, prescindiendo de constructores pesados (Elementor/Divi), lo que dio como resultado un código limpio y tiempos de carga ultrarrápidos.',
      descriptionDe:
        'Entwicklung eines einzigartigen, leichtgewichtigen WordPress-Themes in reinem PHP/CSS. Durch den Verzicht auf schwerfällige Page-Builder (Elementor/Divi) entstanden eine saubere Codebasis und extrem schnelle Ladezeiten.',
    },
    {
      title: 'ACF Pro Content Administration',
      titleUa: 'Управління контентом через ACF Pro',
      titleEs: 'Administración de contenidos con ACF Pro',
      titleDe: 'Content-Verwaltung mit ACF Pro',
      description:
        'Constructed custom page fields and edit blocks using Advanced Custom Fields Pro. Provides the client with a modular, intuitive dashboard where they can manage all texts and visuals.',
      descriptionUa:
        'Створено кастомні поля сторінок і блоки редагування за допомогою Advanced Custom Fields Pro, що надає клієнту модульну й інтуїтивно зрозумілу панель для управління всіма текстами та візуальними матеріалами.',
      descriptionEs:
        'Se construyeron campos de página y bloques de edición personalizados con Advanced Custom Fields Pro, ofreciendo al cliente un panel modular e intuitivo para gestionar todos los textos y elementos visuales.',
      descriptionDe:
        'Aufbau individueller Seitenfelder und Bearbeitungsblöcke mit Advanced Custom Fields Pro. Dies bietet dem Kunden ein modulares, intuitives Dashboard zur einfachen Pflege sämtlicher Texte und Grafiken.',
    },
    {
      title: 'AI-Generated Graphic Identity',
      titleUa: 'Графічна айдентика, згенерована AI',
      titleEs: 'Identidad gráfica generada por IA',
      titleDe: 'KI-generierte grafische Identität',
      description:
        'Conceptualized and rendered high-resolution branding graphics using Midjourney, giving the AWS migration services a futuristic, professional, and visually engaging enterprise look.',
      descriptionUa:
        'Розроблено концепцію та згенеровано брендову графіку високої роздільної здатності за допомогою Midjourney, що надало послугам міграції AWS футуристичного, професійного та привабливого корпоративного вигляду.',
      descriptionEs:
        'Se conceptualizaron y renderizaron gráficos de marca de alta resolución con Midjourney, otorgando a los servicios de migración AWS una estética empresarial futurista, profesional y visualmente atractiva.',
      descriptionDe:
        'Konzeption und Rendering hochauflösender Branding-Grafiken mit Midjourney, die den AWS-Migrationsdiensten einen futuristischen, professionellen und visuell überzeugenden Enterprise-Auftritt verleihen.',
    },
    {
      title: 'SEO & Structured Data',
      titleUa: 'SEO та структуровані дані',
      titleEs: 'SEO y datos estructurados',
      titleDe: 'SEO & strukturierte Daten',
      description:
        'Integrated advanced search engine optimization protocols, including semantic HTML structure, Google-friendly JSON-LD schemas, and customized XML sitemaps.',
      descriptionUa:
        'Інтегровано передові протоколи пошукової оптимізації, включаючи семантичну структуру HTML, дружні до Google схеми JSON-LD та налаштовані XML-карти сайту.',
      descriptionEs:
        'Se integraron protocolos avanzados de optimización para motores de búsqueda, incluyendo estructura HTML semántica, esquemas JSON-LD optimizados para Google y mapas de sitio XML personalizados.',
      descriptionDe:
        'Integration fortschrittlicher SEO-Protokolle einschließlich semantischer HTML-Struktur, Google-konformer JSON-LD-Schemata und individuell konfigurierter XML-Sitemaps.',
    },
    {
      title: 'Security & Caching Hardening',
      titleUa: 'Посилення безпеки та кешування',
      titleEs: 'Refuerzo de seguridad y caché',
      titleDe: 'Sicherheits- & Caching-Härtung',
      description:
        'Protected the website with Nginx-level request limitations, secure server-side form filters, and Cloudflare proxy firewalls to prevent SQL injections and spam.',
      descriptionUa:
        'Захищено вебсайт обмеженнями запитів на рівні Nginx, безпечними серверними фільтрами форм і проксі-фаєрволами Cloudflare для запобігання SQL-ін’єкціям та спаму.',
      descriptionEs:
        'Se protegió el sitio web con limitaciones de solicitudes a nivel de Nginx, filtros seguros de formularios en el servidor y cortafuegos proxy de Cloudflare para prevenir inyecciones SQL y spam.',
      descriptionDe:
        'Absicherung der Website durch Request-Limits auf Nginx-Ebene, sichere serverseitige Formularfilter und Cloudflare-Proxy-Firewalls zum Schutz vor SQL-Injections und Spam.',
    },
  ],
  challenges: [
    'Generating consistent, technically-accurate cloud architecture graphics using creative AI illustration generators.',
    'Achieving top-tier page load metrics on WordPress without sacrificing high-resolution illustrations and dynamic page elements.',
  ],
  challengesUa: [
    'Генерація узгодженої та технічно точної графіки хмарної архітектури за допомогою креативних AI-генераторів ілюстрацій.',
    'Досягнення найвищих показників швидкості завантаження на WordPress без втрати якості ілюстрацій високої роздільної здатності та динамічних елементів сторінки.',
  ],
  challengesEs: [
    'Generar gráficos de arquitectura cloud coherentes y técnicamente precisos utilizando generadores de ilustración con IA creativa.',
    'Lograr métricas de velocidad de carga de primer nivel en WordPress sin sacrificar ilustraciones de alta resolución ni elementos dinámicos en la página.',
  ],
  challengesDe: [
    'Erstellung konsistenter, technisch präziser Cloud-Architekturgrafiken mithilfe kreativer KI-Illustrationsgeneratoren.',
    'Erreichen erstklassiger Ladezeit-Metriken unter WordPress ohne Kompromisse bei hochauflösenden Illustrationen und dynamischen Seitenelementen.',
  ],
  solutions: [
    'Designed structured prompt presets and combined multi-layered visual outputs using editing software to establish a unified corporate visual system.',
    'Configured modern WebP image formats, deferred script loading, and setup Cloudflare CDN caching to deliver pages to cloud prospects in less than a second.',
  ],
  solutionsUa: [
    'Розроблено структуровані пресети промптів і поєднано багатошарові візуальні результати у графічних редакторах для формування єдиної корпоративної візуальної системи.',
    'Налаштовано сучасні формати зображень WebP, відкладене завантаження скриптів та кешування Cloudflare CDN для доставки сторінок потенційним клієнтам менш ніж за секунду.',
  ],
  solutionsEs: [
    'Se diseñaron preajustes de prompts estructurados y se combinaron salidas visuales multicapa mediante software de edición para establecer un sistema visual corporativo unificado.',
    'Se configuraron formatos de imagen modernos WebP, carga diferida de scripts y caché CDN de Cloudflare para entregar páginas a los clientes potenciales en menos de un segundo.',
  ],
  solutionsDe: [
    'Entwurf strukturierter Prompt-Presets und Kombination mehrschichtiger visueller Ergebnisse mittels Bildbearbeitungssoftware zur Etablierung eines einheitlichen Corporate-Design-Systems.',
    'Konfiguration moderner WebP-Bildformate, verzögertes Laden von Skripten sowie Einrichtung von Cloudflare-CDN-Caching, um Seiten für Cloud-Interessenten in unter einer Sekunde auszuliefern.',
  ],
  liveUrl: 'https://awsmigrationservices.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsMigrationServices
