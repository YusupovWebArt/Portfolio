import { Project } from '../project-types'

const serzakMarketak: Project = {
  id: 14000,
  title: 'Serzak Marketak',
  description:
    'Czech-based digital marketing agency founded and run by marketing specialist Serhiy Venhryn.',
  descriptionUa:
    'Чеське агентство цифрового маркетингу, засноване та кероване маркетологом Сергієм Венгрином.',
  descriptionEs:
    'Agencia de marketing digital con sede en la República Checa, fundada y dirigida por el especialista en marketing Serhiy Venhryn.',
  descriptionDe:
    'Tschechische Digital-Marketing-Agentur, gegründet und geleitet vom Marketing-Spezialisten Serhiy Venhryn.',
  fullDescription:
    'Serzak Marketak is a digital marketing agency website based in the Czech Republic, built on a custom WordPress theme from scratch with Elementor page builder enhanced by advanced CSS3 and JavaScript. The site showcases the agency\'s services, portfolio, and expertise, with multilingual-ready SEO and Schema.org markup to support business development across the Czech and Ukrainian markets.',
  fullDescriptionUa:
    'Serzak Marketak - це вебсайт агентства цифрового маркетингу в Чехії, побудований на унікальній темі WordPress з нуля з використанням конструктора сторінок Elementor, доповненого розширеним CSS3 та JavaScript. Сайт демонструє послуги, портфоліо та експертизу агентства, підтримує мультимовне SEO та розмітку Schema.org для розвитку бізнесу на ринках Чехії та України.',
  fullDescriptionEs:
    'Serzak Marketak es el sitio web de una agencia de marketing digital con sede en la República Checa, construido sobre un tema de WordPress personalizado desde cero con el constructor de páginas Elementor, mejorado con CSS3 avanzado y JavaScript. El sitio presenta los servicios, el portafolio y la experiencia de la agencia, con SEO preparado para múltiples idiomas y marcado Schema.org para impulsar el desarrollo de negocio en los mercados checo y ucraniano.',
  fullDescriptionDe:
    'Serzak Marketak ist die Website einer Digital-Marketing-Agentur mit Sitz in der Tschechischen Republik, die von Grund auf mit einem individuellen WordPress-Theme sowie dem Elementor Page Builder und erweitertem CSS3 und JavaScript entwickelt wurde. Die Website präsentiert das Leistungsangebot, das Portfolio und die Expertise der Agentur und verfügt über mehrsprachiges SEO sowie Schema.org-Markup zur Geschäftsentwicklung auf dem tschechischen und ukrainischen Markt.',
  detailHeroLine: 'CUSTOM WORDPRESS · DIGITAL MARKETING AGENCY',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress + Elementor', accent: 'darkGreen' },
    { value: 'CZ Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'Elementor + CSS3/JS', highlight: true },
          { label: 'PHP 8+ Backend' },
        ],
      },
      {
        rowLabel: 'DELIVERY',
        steps: [
          { label: 'MySQL Database' },
          { label: 'Nginx + SSL', highlight: true },
          { label: 'Cloudflare CDN' },
        ],
      },
    ],
    description:
      'A custom WordPress theme built from scratch provides the structural foundation and brand identity. Elementor handles page layouts with the client\'s future editing needs in mind, substantially enhanced with custom CSS3 animations and JavaScript interactions. Nginx caching and Cloudflare CDN ensure fast delivery to clients in the Czech Republic and beyond.',
    descriptionUa:
      'Індивідуальна тема WordPress, створена з нуля, забезпечує структурну основу та айдентику бренду. Elementor відповідає за макети сторінок з урахуванням майбутніх потреб клієнта в редагуванні, будучи суттєво доповненим кастомними CSS3-анімаціями та JavaScript-інтерактивністю. Кешування Nginx та Cloudflare CDN гарантують швидку доставку контенту клієнтам у Чехії та за її межами.',
    descriptionEs:
      'Un tema de WordPress personalizado creado desde cero proporciona la base estructural y la identidad de marca. Elementor gestiona los diseños de página pensando en las futuras necesidades de edición del cliente, mejorado sustancialmente con animaciones CSS3 personalizadas e interacciones JavaScript. El almacenamiento en caché de Nginx y Cloudflare CDN garantizan una entrega rápida a los clientes en la República Checa y otros mercados.',
    descriptionDe:
      'Ein von Grund auf neu entwickeltes WordPress-Theme bildet das strukturelle Fundament und die Markenidentität. Elementor steuert die Seitenlayouts im Hinblick auf künftige Bearbeitungsanforderungen des Kunden und wird durch individuelle CSS3-Animationen sowie JavaScript-Interaktionen deutlich erweitert. Nginx-Caching und Cloudflare CDN gewährleisten schnelle Ladezeiten für Kunden in Tschechien und darüber hinaus.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/serzakmarketak_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/serzakmarketak_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/serzakmarketak_thumb.webp',
      caption: 'Home page with agency hero section and core digital marketing services overview',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide2.webp',
      caption: 'Services section showcasing SEO, PPC, and social media marketing offerings',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide3.webp',
      caption: 'Portfolio and case studies section demonstrating client campaign results',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide4.webp',
      caption: 'About page with agency founder profile and expertise highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/serzakmarketak/serzakmarketak_slide5.webp',
      caption: 'Contact and consultation request section with inquiry form',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and SEO-optimized agency pages' },
      { short: 'CSS3', full: 'Custom CSS3 with animations, Grid, and responsive layouts beyond Elementor defaults' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive UI elements and custom animations' },
      { short: 'Elementor', full: 'Elementor page builder enabling client self-editing of page layouts post-launch' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme functions and contact form handling' },
      { short: 'MySQL', full: 'MySQL database storing all site content, services, and portfolio entries' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the content management and publishing foundation' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for the agency\'s unique brand identity' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast European delivery and DDoS protection' },
      { short: 'SSL/TLS', full: 'HTTPS encryption securing all visitor connections and form data' },
      { short: 'Nginx', full: 'Nginx web server optimized for WordPress performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API showing the agency\'s Czech Republic location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking sessions, traffic sources, and lead conversion events' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Technical SEO with multilingual-ready meta tags for Czech and Ukrainian markets' },
      { short: 'Schema.org Markup', full: 'Organization and LocalBusiness JSON-LD structured data for search visibility' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals across all pages' },
      { short: 'WebP Images', full: 'WebP images ensuring fast loading across portfolio and service sections' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations aligned with the agency\'s own digital campaigns' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Індивідуальна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Individuelles WordPress-Theme von Grund auf',
      description:
        'A fully custom WordPress theme was built to establish a distinctive digital agency brand identity with complete control over design, typography, and layout structure.',
      descriptionUa:
        'Повністю кастомна тема WordPress була розроблена для формування виразної айдентики цифрового агентства з повним контролем над дизайном, типографікою та структурою макета.',
      descriptionEs:
        'Se construyó un tema de WordPress totalmente personalizado para establecer una identidad de marca distintiva para la agencia digital con control total sobre el diseño, la tipografía y la estructura.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes WordPress-Theme wurde entwickelt, um eine unverwechselbare Markenidentität der Digitalagentur mit voller Kontrolle über Design, Typografie und Layoutstruktur zu schaffen.',
    },
    {
      title: 'Elementor with Advanced CSS3 & JavaScript',
      titleUa: 'Elementor із розширеним CSS3 та JavaScript',
      titleEs: 'Elementor con CSS3 y JavaScript avanzados',
      titleDe: 'Elementor mit erweitertem CSS3 und JavaScript',
      description:
        'Elementor was integrated at the client\'s request for self-editing capability, and significantly enhanced with custom CSS3 animations and JavaScript interactions to deliver a polished, high-end agency look.',
      descriptionUa:
        'Elementor було інтегровано за запитом клієнта для можливості самостійного редагування та суттєво розширено кастомними CSS3-анімаціями і JavaScript-інтерактивністю для створення преміального вигляду агентства.',
      descriptionEs:
        'Elementor se integró a petición del cliente para permitir la autoedición y se mejoró significativamente con animaciones CSS3 personalizadas e interacciones JavaScript para lograr una imagen de agencia de alto nivel.',
      descriptionDe:
        'Elementor wurde auf Wunsch des Kunden für die Selbstbearbeitung integriert und durch individuelle CSS3-Animationen sowie JavaScript-Interaktionen erheblich erweitert, um einen hochwertigen Agenturauftritt zu erzielen.',
    },
    {
      title: 'Services & Portfolio Showcase',
      titleUa: 'Вітрина послуг та портфоліо',
      titleEs: 'Escaparate de servicios y portafolio',
      titleDe: 'Leistungs- und Portfolio-Präsentation',
      description:
        'Dedicated sections present the agency\'s digital marketing services including SEO, PPC, and social media, alongside portfolio case studies demonstrating measurable client results.',
      descriptionUa:
        'Спеціалізовані розділи презентують послуги цифрового маркетингу агентства, включаючи SEO, PPC та соціальні мережі, разом із кейсами портфоліо, що демонструють вимірювані результати клієнтів.',
      descriptionEs:
        'Secciones dedicadas presentan los servicios de marketing digital de la agencia, incluyendo SEO, PPC y redes sociales, junto con casos de estudio del portafolio que demuestran resultados medibles.',
      descriptionDe:
        'Dedizierte Bereiche präsentieren die Digital-Marketing-Leistungen der Agentur - darunter SEO, PPC und Social Media - ergänzt durch Portfolio-Fallstudien mit messbaren Kundenergebnissen.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The site is fully responsive across all devices, ensuring prospective clients have a seamless experience whether browsing on desktop, tablet, or mobile.',
      descriptionUa:
        'Сайт повністю адаптивний на всіх пристроях, що гарантує потенційним клієнтам бездоганний досвід перегляду на комп\'ютері, планшеті чи смартфоні.',
      descriptionEs:
        'El sitio es totalmente responsivo en todos los dispositivos, garantizando que los clientes potenciales disfruten de una experiencia fluida tanto en escritorio como en tableta o móvil.',
      descriptionDe:
        'Die Website ist auf allen Endgeräten vollständig responsiv und bietet potenziellen Kunden auf Desktop, Tablet und Smartphone ein nahtloses Nutzungserlebnis.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Technical SEO with Schema.org markup and multilingual meta tags helps the agency rank for digital marketing queries in both the Czech and Ukrainian markets.',
      descriptionUa:
        'Технічне SEO з розміткою Schema.org та мультимовними мета-тегами допомагає агентству ранжуватися за запитами цифрового маркетингу на ринках Чехії та України.',
      descriptionEs:
        'El SEO técnico con marcado Schema.org y metaetiquetas multilingües ayuda a la agencia a posicionarse para consultas de marketing digital tanto en el mercado checo como en el ucraniano.',
      descriptionDe:
        'Technisches SEO mit Schema.org-Markup und mehrsprachigen Meta-Tags unterstützt die Agentur beim Ranking für Digital-Marketing-Suchanfragen im tschechischen und ukrainischen Markt.',
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
  liveUrl: 'https://serzakmarketak.cz/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default serzakMarketak
