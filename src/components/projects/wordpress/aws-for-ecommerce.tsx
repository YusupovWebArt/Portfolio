import { Project } from '../project-types'

const awsForEcommerce: Project = {
  id: 13500,
  title: 'AWS for Ecommerce',
  description:
    'Website specialized platform designed to help businesses build, scale, and secure their online retail operations using Amazon Web Services (AWS). The site offers a comprehensive suite of solutions tailored for e-commerce, focusing on performance, security, scalability, and AI-driven personalization.',
  descriptionUa:
    'Спеціалізована вебплатформа, створена для допомоги бізнесу будувати, масштабувати та захищати онлайн-торгівлю за допомогою Amazon Web Services (AWS). Сайт пропонує комплексний набір рішень для e-commerce, зосереджених на продуктивності, безпеці, масштабованості та персоніфікації на основі AI.',
  descriptionEs:
    'Plataforma web especializada diseñada para ayudar a las empresas a construir, escalar y proteger sus operaciones de comercio en línea mediante Amazon Web Services (AWS). El sitio ofrece un conjunto integral de soluciones para e-commerce centradas en el rendimiento, la seguridad, la escalabilidad y la personalización basada en IA.',
  descriptionDe:
    'Spezialisierte Webplattform, die Unternehmen dabei unterstützt, ihren Online-Handel mit Amazon Web Services (AWS) aufzubauen, zu skalieren und abzusichern. Die Website bietet ein umfassendes Lösungspaket für E-Commerce mit Fokus auf Performance, Sicherheit, Skalierbarkeit und KI-gestützte Personalisierung.',
  fullDescription:
    'A custom WordPress site developed using Elementor enhanced with custom CSS3, JavaScript, and PHP to create a visually distinctive platform promoting AWS e-commerce solutions. AI-generated imagery was integrated throughout the design to illustrate cloud infrastructure concepts, and full SEO optimization positions the site for cloud and e-commerce solution search traffic.',
  fullDescriptionUa:
    'Кастомний сайт на WordPress, розроблений за допомогою Elementor і розширений кастомними CSS3, JavaScript та PHP для створення візуально виразної платформи, що просуває e-commerce рішення AWS. Згенеровані AI зображення інтегровані в дизайн для наочної демонстрації концепцій хмарної інфраструктури, а повна SEO-оптимізація позиціонує сайт для пошукового трафіку хмарних та e-commerce рішень.',
  fullDescriptionEs:
    'Sitio WordPress personalizado desarrollado con Elementor y ampliado con CSS3, JavaScript y PHP propios para crear una plataforma visualmente distintiva que promueve soluciones de e-commerce en AWS. Se integraron imágenes generadas por IA para ilustrar conceptos de infraestructura en la nube, y una optimización SEO completa posiciona el sitio para el tráfico de búsqueda relacionado con soluciones cloud y de e-commerce.',
  fullDescriptionDe:
    'Eine maßgeschneiderte WordPress-Website, entwickelt mit Elementor und erweitert durch individuelles CSS3, JavaScript und PHP, um eine visuell markante Plattform zur Präsentation von AWS-E-Commerce-Lösungen zu schaffen. KI-generierte Bilder wurden in das gesamte Design integriert, um Cloud-Infrastrukturkonzepte anschaulich darzustellen, während eine umfassende SEO-Optimierung die Seite gezielt für Suchanfragen rund um Cloud- und E-Commerce-Lösungen positioniert.',
  detailHeroLine: 'CUSTOM WORDPRESS · AWS CLOUD · E-COMMERCE SOLUTIONS',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Elementor + PHP', label: 'Page Engine', accent: 'darkGreen' },
    { value: 'AI Visuals', label: 'Generated Graphics', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core' },
          { label: 'Elementor + Custom PHP', highlight: true },
          { label: 'MySQL Database' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'Nginx Server' },
          { label: 'Cloudflare CDN', highlight: true },
          { label: 'SSL/TLS' },
        ],
      },
    ],
    description:
      'WordPress with Elementor provides the content management and page layout layer, extended with custom PHP and JavaScript for functionality beyond the builder\'s defaults. AI-generated visuals are served through Cloudflare CDN for fast global delivery. MySQL handles all content, settings, and form data.',
    descriptionUa:
      'WordPress із Elementor забезпечує рівень управління контентом і макетами сторінок, розширений кастомними PHP та JavaScript для функціональності за межами стандартних можливостей конструктора. Згенеровані AI візуальні матеріали доставляються через Cloudflare CDN для швидкого глобального завантаження. MySQL обробляє весь контент, налаштування та дані форм.',
    descriptionEs:
      'WordPress con Elementor proporciona la capa de gestión de contenidos y diseño de páginas, ampliada con PHP y JavaScript personalizados para ofrecer funcionalidades más allá de las predeterminadas del constructor. Los recursos visuales generados por IA se sirven mediante Cloudflare CDN para una entrega global rápida. MySQL gestiona todo el contenido, la configuración y los datos de formularios.',
    descriptionDe:
      'WordPress mit Elementor bildet die Schicht für Content-Management und Seitenlayout, erweitert durch maßgeschneidertes PHP und JavaScript für Funktionen über den Standard des Builders hinaus. KI-generierte Visuals werden über das Cloudflare CDN weltweit schnell ausgeliefert. MySQL verwaltet sämtliche Inhalte, Einstellungen und Formulardaten.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-ecommerce_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-ecommerce_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-ecommerce_thumb.webp',
      caption: 'Home page presenting AWS e-commerce cloud solutions with hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-ecommerce/aws-for-ecommerce_slide2.webp',
      caption: 'Custom Elementor layout with CSS3/JS enhancements showcasing AWS services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-ecommerce/aws-for-ecommerce_slide3.webp',
      caption: 'Solution detail section with AI-generated cloud infrastructure visuals',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for clear and accessible solution-focused content' },
      { short: 'CSS3', full: 'Custom CSS3 delivering unique animations and styling beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and dynamic page behaviors' },
      { short: 'Elementor', full: 'Elementor page builder used for rapid custom layout development' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending Elementor with additional dynamic functionality' },
      { short: 'MySQL', full: 'MySQL database for WordPress content, pages, and form submissions' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all solution pages, posts, and media content' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for global delivery of AI-generated visuals and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and contact form submissions' },
      { short: 'Nginx', full: 'Nginx server configured for optimal WordPress and Elementor performance' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for solution page engagement and lead generation conversions' },
      { short: 'Google Maps API', full: 'Google Maps API for office location display on the contact page' },
    ],
    aiTools: [
      { short: 'AI-Generated Graphics', full: 'AI-generated imagery used throughout the site to visualize AWS cloud infrastructure concepts' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting AWS and cloud e-commerce solution search terms' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for rich search result presentation' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP format for AI-generated and photography assets ensuring fast load times' },
    ],
  },
  features: [
    {
      title: 'Custom Elementor Design with PHP Extensions',
      titleUa: 'Кастомний дизайн Elementor із розширеннями PHP',
      titleEs: 'Diseño personalizado en Elementor con extensiones PHP',
      titleDe: 'Individuelles Elementor-Design mit PHP-Erweiterungen',
      description:
        'Elementor provides the page building foundation, extended with custom PHP, CSS3, and JavaScript to achieve a unique, technically polished design that exceeds the builder\'s native capabilities.',
      descriptionUa:
        'Elementor забезпечує основу для побудови сторінок, розширену кастомними PHP, CSS3 та JavaScript для досягнення унікального, технічно досконалого дизайну, що перевершує стандартні можливості конструктора.',
      descriptionEs:
        'Elementor proporciona la base de construcción de páginas, ampliada con PHP, CSS3 y JavaScript personalizados para lograr un diseño único y técnicamente pulido que supera las capacidades nativas del constructor.',
      descriptionDe:
        'Elementor bildet das Fundament für den Seitenaufbau und wurde mit individuellem PHP, CSS3 und JavaScript erweitert, um ein einzigartiges, technisch ausgereiftes Design jenseits der nativen Builder-Grenzen zu realisieren.',
    },
    {
      title: 'AI-Generated Visual Content',
      titleUa: 'Візуальний контент, згенерований AI',
      titleEs: 'Contenido visual generado por IA',
      titleDe: 'KI-generierte visuelle Inhalte',
      description:
        'AI-generated graphics illustrate complex AWS cloud infrastructure concepts in a visually compelling way, making technical content more accessible and engaging for business audiences.',
      descriptionUa:
        'Згенерована AI графіка наочно ілюструє складні концепції хмарної інфраструктури AWS, роблячи технічний контент доступнішим і привабливішим для бізнес-аудиторії.',
      descriptionEs:
        'Los gráficos generados por IA ilustran conceptos complejos de infraestructura cloud de AWS de forma visualmente atractiva, haciendo que el contenido técnico sea más accesible e interesante para el público empresarial.',
      descriptionDe:
        'KI-generierte Grafiken veranschaulichen komplexe AWS-Cloud-Infrastrukturkonzepte auf visuell überzeugende Weise und machen technische Inhalte für Entscheider leichter zugänglich.',
    },
    {
      title: 'AWS Solution Showcase Pages',
      titleUa: 'Сторінки презентації рішень AWS',
      titleEs: 'Páginas de presentación de soluciones AWS',
      titleDe: 'AWS-Lösungsseiten',
      description:
        'Dedicated solution pages explain performance, security, scalability, and AI-driven personalization offerings for e-commerce businesses on AWS, structured for both readability and SEO.',
      descriptionUa:
        'Спеціалізовані сторінки рішень пояснюють можливості продуктивності, безпеки, масштабованості та AI-персоналізації для e-commerce бізнесу на AWS, структуровані для зручного читання та SEO.',
      descriptionEs:
        'Páginas de soluciones específicas explican las ofertas de rendimiento, seguridad, escalabilidad y personalización impulsada por IA para empresas de e-commerce en AWS, estructuradas tanto para la legibilidad como para el SEO.',
      descriptionDe:
        'Dedizierte Lösungsseiten erläutern Angebote rund um Performance, Sicherheit, Skalierbarkeit und KI-gestützte Personalisierung für E-Commerce-Unternehmen auf AWS - optimal strukturiert für Lesbarkeit und SEO.',
    },
    {
      title: 'SEO & Schema Optimization',
      titleUa: 'Оптимізація SEO та Schema',
      titleEs: 'Optimización SEO y Schema',
      titleDe: 'SEO- & Schema-Optimierung',
      description:
        'Full technical SEO with Schema.org structured data targets cloud computing and e-commerce solution keywords, driving qualified organic traffic to the platform.',
      descriptionUa:
        'Повне технічне SEO зі структурованими даними Schema.org націлене на ключові слова хмарних обчислень та e-commerce рішень, залучаючи цільовий органічний трафік на платформу.',
      descriptionEs:
        'El SEO técnico completo con datos estructurados Schema.org apunta a palabras clave de cloud computing y soluciones de e-commerce, atrayendo tráfico orgánico cualificado a la plataforma.',
      descriptionDe:
        'Umfassendes technisches SEO mit strukturierten Schema.org-Daten zielt auf Keywords aus den Bereichen Cloud-Computing und E-Commerce-Lösungen ab und sorgt für qualifizierten organischen Traffic.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      titleUa: 'Адаптивний дизайн та оптимізація продуктивності',
      titleEs: 'Diseño responsive y rendimiento optimizado',
      titleDe: 'Responsives Design & Performance-Optimierung',
      description:
        'Fully responsive design with Cloudflare CDN and WebP images ensures fast load times and excellent user experience across all devices and global locations.',
      descriptionUa:
        'Повністю адаптивний дизайн із Cloudflare CDN та зображеннями WebP забезпечує швидке завантаження та відмінний користувацький досвід на всіх пристроях і в будь-якій точці світу.',
      descriptionEs:
        'El diseño totalmente responsive con Cloudflare CDN e imágenes WebP garantiza tiempos de carga rápidos y una excelente experiencia de usuario en todos los dispositivos y ubicaciones globales.',
      descriptionDe:
        'Ein vollständig responsives Design mit Cloudflare CDN und WebP-Bildern garantiert schnelle Ladezeiten und eine erstklassige Nutzererfahrung auf allen Endgeräten weltweit.',
    },
  ],
  challenges: [],
  challengesUa: [],
  challengesEs: [],
  challengesDe: [],
  solutions: [],
  solutionsUa: [],
  solutionsEs: [],
  solutionsDe: [],
  liveUrl: 'https://awsforecommerce.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsForEcommerce
