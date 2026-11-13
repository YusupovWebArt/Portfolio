import { Project } from '../project-types'

const awsSecurityService: Project = {
  id: 16500,
  title: 'AWS Security Services',
  description:
    'Specialized platform focused on securing cloud infrastructures built on Amazon Web Services (AWS). The site provides end-to-end solutions for compliance, threat detection, monitoring, and proactive defense to help businesses safeguard their data and operations.',
  descriptionUa:
    'Спеціалізована платформа, зосереджена на захисті хмарних інфраструктур на базі Amazon Web Services (AWS). Сайт надає комплексні рішення для відповідності стандартам (compliance), виявлення загроз, моніторингу та проактивного захисту, допомагаючи бізнесу убезпечити свої дані й операції.',
  descriptionEs:
    'Plataforma especializada centrada en la protección de infraestructuras cloud construidas sobre Amazon Web Services (AWS). El sitio ofrece soluciones integrales para el cumplimiento normativo, la detección de amenazas, la monitorización y la defensa proactiva, ayudando a las empresas a proteger sus datos y operaciones.',
  descriptionDe:
    'Spezialisierte Plattform für die Absicherung von Cloud-Infrastrukturen auf Basis von Amazon Web Services (AWS). Die Website bietet End-to-End-Lösungen für Compliance, Bedrohungserkennung, Monitoring und proaktive Verteidigung, damit Unternehmen ihre Daten und ihren Betrieb zuverlässig schützen können.',
  fullDescription:
    'A fully custom-coded WordPress theme developed without a page builder, using Advanced Custom Fields (ACF) for structured content management, custom CSS3 and JavaScript for a technical, trustworthy aesthetic, and AI-generated imagery to visualize cybersecurity concepts. The platform positions AWS security services with clear solution pages, compliance guidance, and proactive threat monitoring offerings.',
  fullDescriptionUa:
    'Повністю кастомна тема WordPress, розроблена без пейдж-білдерів, із використанням Advanced Custom Fields (ACF) для структурованого управління контентом, кастомними CSS3 та JavaScript для технічної та надійної естетики, а також AI-згенерованими зображеннями для візуалізації концепцій кібербезпеки. Платформа позиціонує послуги безпеки AWS завдяки зрозумілим сторінкам рішень, рекомендаціям із відповідності стандартам та пропозиціям проактивного моніторингу загроз.',
  fullDescriptionEs:
    'Tema WordPress completamente personalizada desarrollada sin constructor de páginas, utilizando Advanced Custom Fields (ACF) para la gestión estructurada del contenido, CSS3 y JavaScript propios para una estética técnica y confiable, e imágenes generadas por IA para visualizar conceptos de ciberseguridad. La plataforma posiciona los servicios de seguridad de AWS mediante páginas de soluciones claras, orientación sobre cumplimiento normativo y ofertas de monitorización proactiva de amenazas.',
  fullDescriptionDe:
    'Ein vollständig handcodiertes WordPress-Theme ohne Page-Builder, entwickelt mit Advanced Custom Fields (ACF) für strukturiertes Content-Management, individuellem CSS3 und JavaScript für eine technisch-vertrauenswürdige Ästhetik sowie KI-generierten Bildern zur Visualisierung komplexer Cybersecurity-Konzepte. Die Plattform präsentiert AWS-Sicherheitsdienste über klar strukturierte Lösungsseiten, Compliance-Leitfäden und Angebote zur proaktiven Bedrohungsüberwachung.',
  detailHeroLine: 'CUSTOM WORDPRESS · AWS CLOUD · SECURITY SERVICES',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load Time', accent: 'green' },
    { value: 'Custom Code + ACF', label: 'Theme Engine', accent: 'darkGreen' },
    { value: 'AI Visuals', label: 'Generated Graphics', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'CMS LAYER',
        steps: [
          { label: 'WordPress Core + ACF' },
          { label: 'Custom PHP Theme', highlight: true },
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
      'A fully custom PHP WordPress theme without a page builder manages all solution pages through ACF field groups, enabling structured and consistent content editing. AI-generated imagery visualizes security concepts and is delivered via Cloudflare CDN. MySQL stores all content and ACF data, while Nginx handles server-level caching.',
    descriptionUa:
      'Повністю кастомна PHP-тема WordPress без конструктора сторінок управляє всіма сторінками рішень через групи полів ACF, забезпечуючи структуроване та послідовне редагування контенту. Згенеровані AI зображення візуалізують концепції безпеки та доставляються через Cloudflare CDN. MySQL зберігає весь контент і дані ACF, а Nginx відповідає за серверне кешування.',
    descriptionEs:
      'Un tema PHP de WordPress totalmente personalizado sin constructor de páginas gestiona todas las páginas de soluciones mediante grupos de campos ACF, permitiendo una edición de contenido estructurada y coherente. Las imágenes generadas por IA visualizan conceptos de seguridad y se entregan a través de Cloudflare CDN. MySQL almacena todo el contenido y los datos de ACF, mientras que Nginx gestiona la caché a nivel de servidor.',
    descriptionDe:
      'Ein vollständig maßgeschneidertes PHP-WordPress-Theme ohne Page-Builder verwaltet sämtliche Lösungsseiten über ACF-Feldgruppen und ermöglicht so eine strukturierte und konsistente Inhaltspflege. KI-generierte Bilder veranschaulichen Sicherheitskonzepte und werden über das Cloudflare CDN ausgeliefert. MySQL speichert alle Inhalte und ACF-Daten, während Nginx das serverseitige Caching übernimmt.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-security-service_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-security-service_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-security-service_thumb.webp',
      caption: 'Home page presenting AWS security solutions with a technical hero section',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide2.webp',
      caption: 'Threat detection and monitoring solutions section with AI-generated visuals',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide3.webp',
      caption: 'Compliance and regulatory solution pages powered by ACF content fields',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide4.webp',
      caption: 'Proactive defense services overview with structured content layout',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide5.webp',
      caption: 'Security monitoring dashboard concept section with custom CSS3 styling',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-security-service/aws-security-service_slide6.webp',
      caption: 'Contact and consultation CTA section for AWS security engagements',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 structure for accessible and well-organized security content' },
      { short: 'CSS3', full: 'Custom CSS3 delivering a technical, professional aesthetic aligned with cybersecurity branding' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive solution demonstrations and UI behaviors' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ theme without a page builder for full control over markup and performance' },
      { short: 'MySQL', full: 'MySQL database storing all content, ACF fields, and solution page data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management foundation for all security solution pages' },
      { short: 'Advanced Custom Fields (ACF)', full: 'ACF plugin structuring security solution content for consistent and efficient editing' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery of AI-generated visuals and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption across the entire platform reinforcing the security brand message' },
      { short: 'Nginx', full: 'Nginx server with caching ensuring fast response times under load' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for solution page engagement and lead generation analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for business location and contact page integration' },
    ],
    aiTools: [
      { short: 'AI-Generated Graphics', full: 'AI-generated cybersecurity visuals illustrating threat detection and cloud defense concepts' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting AWS security, cloud compliance, and threat detection keywords' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for professional service rich results in search engines' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance-optimized for green Core Web Vitals scores across all pages' },
      { short: 'WebP Images', full: 'WebP format for AI-generated and all visual assets ensuring fast page loads' },
    ],
  },
  features: [
    {
      title: 'Custom PHP Theme with ACF Content Management',
      titleUa: 'Кастомна PHP-тема з управлінням контентом через ACF',
      titleEs: 'Tema PHP personalizado con gestión de contenidos ACF',
      titleDe: 'Maßgeschneidertes PHP-Theme mit ACF-Content-Management',
      description:
        'The theme was built entirely in PHP without a page builder, using ACF field groups to structure security solution content - enabling consistent, efficient content updates without developer involvement.',
      descriptionUa:
        'Тему створено повністю на PHP без конструктора сторінок із використанням груп полів ACF для структурування контенту рішень безпеки - що дозволяє послідовно й ефективно оновлювати контент без залучення розробника.',
      descriptionEs:
        'El tema se construyó íntegramente en PHP sin constructor de páginas, utilizando grupos de campos ACF para estructurar el contenido de las soluciones de seguridad, lo que permite actualizaciones coherentes y eficientes sin intervención de desarrolladores.',
      descriptionDe:
        'Das Theme wurde vollständig in PHP ohne Page-Builder entwickelt und nutzt ACF-Feldgruppen zur Strukturierung der Sicherheitslösungen - für konsistente, effiziente Inhaltsaktualisierungen ohne Entwicklereinsatz.',
    },
    {
      title: 'AI-Generated Cybersecurity Visuals',
      titleUa: 'Візуальні матеріали з кібербезпеки, згенеровані AI',
      titleEs: 'Recursos visuales de ciberseguridad generados por IA',
      titleDe: 'KI-generierte Cybersecurity-Visualisierungen',
      description:
        'AI-generated imagery throughout the site visualizes complex AWS security concepts including threat detection, compliance monitoring, and cloud defense architecture.',
      descriptionUa:
        'Згенеровані AI зображення по всьому сайту візуалізують складні концепції безпеки AWS, включаючи виявлення загроз, моніторинг відповідності стандартам та архітектуру хмарного захисту.',
      descriptionEs:
        'Las imágenes generadas por IA en todo el sitio visualizan conceptos complejos de seguridad en AWS, incluyendo detección de amenazas, monitorización de cumplimiento y arquitectura de defensa cloud.',
      descriptionDe:
        'KI-generierte Bildwelten auf der gesamten Website veranschaulichen komplexe AWS-Sicherheitskonzepte wie Bedrohungserkennung, Compliance-Monitoring und Cloud-Verteidigungsarchitekturen.',
    },
    {
      title: 'Security Solution Pages',
      titleUa: 'Сторінки рішень із безпеки',
      titleEs: 'Páginas de soluciones de seguridad',
      titleDe: 'Lösungsseiten für Cloud-Sicherheit',
      description:
        'Dedicated pages cover compliance, threat detection, monitoring, and proactive defense services, structured for clarity and conversion of enterprise security buyers.',
      descriptionUa:
        'Спеціалізовані сторінки охоплюють послуги з відповідності стандартам, виявлення загроз, моніторингу та проактивного захисту, структуровані для зрозумілості та конверсії корпоративних клієнтів.',
      descriptionEs:
        'Páginas específicas cubren servicios de cumplimiento normativo, detección de amenazas, monitorización y defensa proactiva, estructuradas para ofrecer claridad y conversión ante compradores corporativos de seguridad.',
      descriptionDe:
        'Dedizierte Seiten behandeln Compliance, Bedrohungserkennung, Monitoring und proaktive Verteidigungsdienste - klar strukturiert und auf die Konversion von Enterprise-Sicherheitsentscheidern ausgerichtet.',
    },
    {
      title: 'SEO & Schema for Security Services',
      titleUa: 'SEO та Schema для послуг безпеки',
      titleEs: 'SEO y Schema para servicios de seguridad',
      titleDe: 'SEO & Schema für Sicherheitsdienste',
      description:
        'Technical SEO with professional service Schema.org markup positions the platform for cloud security and AWS compliance search queries, driving qualified business leads.',
      descriptionUa:
        'Технічне SEO з розміткою Schema.org для професійних послуг позиціонує платформу за пошуковими запитами щодо хмарної безпеки та відповідності AWS, залучаючи кваліфіковані бізнес-ліди.',
      descriptionEs:
        'El SEO técnico con marcado Schema.org de servicios profesionales posiciona la plataforma para consultas de búsqueda sobre seguridad cloud y cumplimiento en AWS, generando leads empresariales cualificados.',
      descriptionDe:
        'Technisches SEO mit Schema.org-Markup für professionelle Dienstleistungen positioniert die Plattform gezielt für Suchanfragen zu Cloud-Sicherheit und AWS-Compliance und generiert qualifizierte B2B-Leads.',
    },
    {
      title: 'Responsive & Performance-Optimized',
      titleUa: 'Адаптивний дизайн та оптимізація продуктивності',
      titleEs: 'Diseño responsive y rendimiento optimizado',
      titleDe: 'Responsives Design & Performance-Optimierung',
      description:
        'Fully responsive layout with WebP images and Cloudflare CDN ensures a fast, credible experience for enterprise security decision-makers on any device.',
      descriptionUa:
        'Повністю адаптивний макет із зображеннями WebP та Cloudflare CDN забезпечує швидку та надійну роботу сайту для корпоративних керівників із безпеки на будь-якому пристрої.',
      descriptionEs:
        'El diseño totalmente responsive con imágenes WebP y Cloudflare CDN garantiza una experiencia rápida y confiable para los responsables de seguridad empresarial en cualquier dispositivo.',
      descriptionDe:
        'Ein vollständig responsives Layout mit WebP-Bildern und Cloudflare CDN sorgt auf jedem Endgerät für ein schnelles, vertrauenswürdiges Nutzererlebnis für Sicherheitsentscheider in Unternehmen.',
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
  liveUrl: 'https://awssecurityservice.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsSecurityService
