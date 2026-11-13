import { Project } from '../project-types'

const awsForRetail: Project = {
  id: 15000,
  title: 'AWS for Retail',
  description:
    'Website focused on promoting retail-oriented cloud solutions and services built on Amazon Web Services (AWS). It positions AWS not just as infrastructure, but as a strategic backbone for retail businesses to modernize operations, scale dynamically, and provide seamless customer experiences.',
  descriptionUa:
    'Сайт, орієнтований на просування хмарних рішень та послуг для роздрібної торгівлі на базі Amazon Web Services (AWS). Він позиціонує AWS не просто як інфраструктуру, а як стратегічну основу для модернізації операцій, динамічного масштабування та забезпечення бездоганного клієнтського досвіду ритейлерів.',
  descriptionEs:
    'Sitio web orientado a promover soluciones y servicios cloud para el comercio minorista basados en Amazon Web Services (AWS). Posiciona AWS no solo como infraestructura, sino como pilar estratégico para que las empresas del retail modernicen sus operaciones, escalen dinámicamente y ofrezcan experiencias de cliente excepcionales.',
  descriptionDe:
    'Website zur Präsentation von Cloud-Lösungen und Services für den Einzelhandel auf Basis von Amazon Web Services (AWS). Sie positioniert AWS nicht nur als Infrastruktur, sondern als strategisches Rückgrat, mit dem Handelsunternehmen ihre Abläufe modernisieren, dynamisch skalieren und nahtlose Kundenerlebnisse schaffen können.',
  fullDescription:
    'A custom WordPress site built with Elementor and extended with custom CSS3, JavaScript, and PHP to showcase AWS retail cloud solutions. AI-generated imagery communicates complex cloud concepts visually, while a full SEO strategy drives organic traffic from retail businesses evaluating cloud modernization options.',
  fullDescriptionUa:
    'Кастомний сайт на WordPress, побудований за допомогою Elementor та розширений кастомними CSS3, JavaScript і PHP для демонстрації хмарних рішень AWS для ритейлу. Згенеровані AI зображення візуально передають складні хмарні концепції, а комплексна SEO-стратегія залучає органічний трафік від компаній роздрібної торгівлі, які оцінюють варіанти хмарної модернізації.',
  fullDescriptionEs:
    'Sitio WordPress personalizado construido con Elementor y ampliado con CSS3, JavaScript y PHP propios para presentar soluciones cloud de AWS orientadas al retail. Las imágenes generadas por IA comunican visualmente conceptos cloud complejos, mientras que una estrategia SEO completa atrae tráfico orgánico de empresas minoristas que evalúan opciones de modernización en la nube.',
  fullDescriptionDe:
    'Eine maßgeschneiderte WordPress-Website, die mit Elementor erstellt und durch individuelles CSS3, JavaScript und PHP erweitert wurde, um AWS-Cloud-Lösungen für den Einzelhandel vorzustellen. KI-generierte Bilder vermitteln komplexe Cloud-Konzepte visuell ansprechend, während eine ganzheitliche SEO-Strategie organischen Traffic von Handelsunternehmen generiert, die Optionen zur Cloud-Modernisierung prüfen.',
  detailHeroLine: 'CUSTOM WORDPRESS · AWS CLOUD · RETAIL SOLUTIONS',
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
      'WordPress with Elementor handles content management and page layout, with custom PHP and JavaScript extending the builder\'s capabilities for unique interactions. AI-generated visuals represent AWS retail infrastructure concepts and are delivered globally via Cloudflare CDN. MySQL stores all content, settings, and form data.',
    descriptionUa:
      'WordPress із Elementor відповідає за управління контентом і макетом сторінок, а кастомні PHP та JavaScript розширюють можливості конструктора для унікальних інтеракцій. Згенеровані AI візуальні матеріали ілюструють концепції ритейл-інфраструктури AWS і доставляються по всьому світу через Cloudflare CDN. MySQL зберігає весь контент, налаштування та дані форм.',
    descriptionEs:
      'WordPress con Elementor gestiona el contenido y el diseño de páginas, mientras que PHP y JavaScript personalizados amplían las capacidades del constructor para lograr interacciones únicas. Los recursos visuales generados por IA representan conceptos de infraestructura retail de AWS y se entregan globalmente mediante Cloudflare CDN. MySQL almacena todo el contenido, la configuración y los datos de formularios.',
    descriptionDe:
      'WordPress mit Elementor übernimmt das Content-Management und Seitenlayout, während individuelles PHP und JavaScript die Möglichkeiten des Builders um maßgeschneiderte Interaktionen erweitern. KI-generierte Visuals veranschaulichen AWS-Retail-Infrastrukturkonzepte und werden weltweit über das Cloudflare CDN ausgeliefert. MySQL speichert sämtliche Inhalte, Einstellungen und Formulardaten.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-retail_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-retail_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/aws-for-retail_thumb.webp',
      caption: 'Home page presenting AWS retail cloud solutions with strategic messaging',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-retail/aws-for-retail_slide2.webp',
      caption: 'Custom Elementor layout with CSS3/JS showcasing AWS retail services',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-retail/aws-for-retail_slide3.webp',
      caption: 'Solution feature section with AI-generated cloud retail visuals',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/aws-for-retail/aws-for-retail_slide4.webp',
      caption: 'Call-to-action and contact section for retail cloud consultations',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for clear retail solution content structure' },
      { short: 'CSS3', full: 'Custom CSS3 for unique animations and visual styling extending Elementor' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive page components and dynamic behaviors' },
      { short: 'Elementor', full: 'Elementor page builder enabling rapid and structured page layout development' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'Custom PHP 8+ extending WordPress and Elementor with dynamic functionality' },
      { short: 'MySQL', full: 'MySQL database for all site content, solution pages, and lead data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing all pages, posts, and media assets' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for global delivery of AI visuals and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all site traffic and form submissions' },
      { short: 'Nginx', full: 'Nginx web server providing efficient request handling and caching' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking for solution page engagement and conversion funnel analysis' },
      { short: 'Google Maps API', full: 'Google Maps API for business location display on the contact page' },
    ],
    aiTools: [
      { short: 'AI-Generated Graphics', full: 'AI-generated visuals illustrating AWS retail cloud concepts throughout the site' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO targeting AWS retail and cloud modernization keywords' },
      { short: 'Schema.org Markup', full: 'JSON-LD structured data for enhanced search result presentation' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization ensuring green Core Web Vitals across all solution pages' },
      { short: 'WebP Images', full: 'WebP format for AI-generated and photography assets ensuring fast load times' },
    ],
  },
  features: [
    {
      title: 'AWS Retail Solution Showcase',
      titleUa: 'Презентація рішень AWS для ритейлу',
      titleEs: 'Presentación de soluciones AWS para retail',
      titleDe: 'AWS-Lösungsübersicht für den Einzelhandel',
      description:
        'Dedicated solution pages explain how AWS enables retail businesses to modernize operations, scale dynamically, and deliver seamless omnichannel customer experiences.',
      descriptionUa:
        'Спеціалізовані сторінки рішень пояснюють, як AWS допомагає роздрібному бізнесу модернізувати операції, динамічно масштабуватися та забезпечувати бездоганний омніканальний клієнтський досвід.',
      descriptionEs:
        'Páginas de soluciones específicas explican cómo AWS permite a las empresas minoristas modernizar sus operaciones, escalar dinámicamente y ofrecer experiencias omnicanal fluidas.',
      descriptionDe:
        'Dedizierte Lösungsseiten erläutern, wie AWS Einzelhandelsunternehmen dabei unterstützt, Abläufe zu modernisieren, dynamisch zu skalieren und nahtlose Omnichannel-Kundenerlebnisse bereitzustellen.',
    },
    {
      title: 'AI-Generated Visual Storytelling',
      titleUa: 'Візуальний сторітелінг за допомогою AI',
      titleEs: 'Narrativa visual generada por IA',
      titleDe: 'KI-generiertes visuelles Storytelling',
      description:
        'AI-generated graphics translate complex AWS cloud infrastructure concepts into compelling visuals that communicate value to retail decision-makers quickly.',
      descriptionUa:
        'Згенерована AI графіка перетворює складні концепції хмарної інфраструктури AWS на переконливі візуальні образи, які швидко доносять цінність до керівників у сфері ритейлу.',
      descriptionEs:
        'Los gráficos generados por IA traducen conceptos complejos de infraestructura cloud de AWS en imágenes atractivas que comunican valor rápidamente a los responsables de decisiones del sector retail.',
      descriptionDe:
        'KI-generierte Grafiken übersetzen komplexe AWS-Cloud-Infrastrukturkonzepte in überzeugende Bilder, die Entscheidern im Einzelhandel den Mehrwert auf einen Blick vermitteln.',
    },
    {
      title: 'Custom Elementor Design with Code Extensions',
      titleUa: 'Кастомний дизайн Elementor із кодовими розширеннями',
      titleEs: 'Diseño personalizado en Elementor con extensiones de código',
      titleDe: 'Individuelles Elementor-Design mit Code-Erweiterungen',
      description:
        'Elementor is extended with custom CSS3 and JavaScript to produce advanced animations and interactive elements that differentiate the site from standard builder output.',
      descriptionUa:
        'Elementor розширено кастомними CSS3 та JavaScript для створення просунутих анімацій та інтерактивних елементів, які вирізняють сайт серед стандартних шаблонів конструкторів.',
      descriptionEs:
        'Elementor se amplía con CSS3 y JavaScript personalizados para producir animaciones avanzadas y elementos interactivos que diferencian el sitio de los resultados estándar de un constructor.',
      descriptionDe:
        'Elementor wird durch maßgeschneidertes CSS3 und JavaScript ergänzt, um anspruchsvolle Animationen und interaktive Elemente zu schaffen, die die Website deutlich von Standard-Builder-Layouts abheben.',
    },
    {
      title: 'SEO & Structured Data Strategy',
      titleUa: 'Стратегія SEO та структурованих даних',
      titleEs: 'Estrategia de SEO y datos estructurados',
      titleDe: 'SEO- & Structured-Data-Strategie',
      description:
        'Full technical SEO with Schema.org markup targets retail cloud computing search terms, driving qualified organic traffic from businesses evaluating AWS retail solutions.',
      descriptionUa:
        'Повне технічне SEO з розміткою Schema.org орієнтоване на пошукові запити щодо хмарних обчислень у ритейлі, залучаючи цільовий органічний трафік від компаній, які оцінюють рішення AWS.',
      descriptionEs:
        'El SEO técnico completo con marcado Schema.org apunta a términos de búsqueda de cloud computing para retail, atrayendo tráfico orgánico cualificado de empresas que evalúan soluciones de AWS.',
      descriptionDe:
        'Umfassendes technisches SEO mit Schema.org-Markup zielt auf Suchbegriffe rund um Retail-Cloud-Computing ab und gewinnt qualifizierten organischen Traffic von Unternehmen, die AWS-Einzelhandelslösungen evaluieren.',
    },
    {
      title: 'Responsive & Globally Optimized',
      titleUa: 'Адаптивність та глобальна оптимізація',
      titleEs: 'Diseño responsive y optimización global',
      titleDe: 'Responsiv & global optimiert',
      description:
        'Fully responsive layout with Cloudflare CDN and WebP images ensures a fast, professional experience for retail stakeholders across all devices and regions.',
      descriptionUa:
        'Повністю адаптивний макет із Cloudflare CDN та зображеннями WebP забезпечує швидку та професійну роботу сайту для представників ритейлу на всіх пристроях і в усіх регіонах.',
      descriptionEs:
        'El diseño totalmente responsive con Cloudflare CDN e imágenes WebP garantiza una experiencia rápida y profesional para los actores del sector retail en todos los dispositivos y regiones.',
      descriptionDe:
        'Ein vollständig responsives Layout mit Cloudflare CDN und WebP-Bildern gewährleistet ein schnelles, professionelles Nutzungserlebnis für Entscheider im Einzelhandel über alle Endgeräte und Regionen hinweg.',
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
  liveUrl: 'https://awsforretail.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default awsForRetail
