import { Project } from '../project-types'

const svkus: Project = {
  id: 10850,
  title: 'Svkus',
  description:
    'Syndicate of Taste is the online portal for a dynamic and creative group of restaurants in Ukraine.',
  descriptionUa:
    '«Синдикат Смаку» - це онлайн-портал динамічної та креативної мережі ресторанів в Україні.',
  descriptionEs:
    'Syndicate of Taste es el portal en línea de un dinámico y creativo grupo de restaurantes en Ucrania.',
  descriptionDe:
    'Syndicate of Taste ist das Online-Portal einer dynamischen und kreativen Restaurantgruppe in der Ukraine.',
  fullDescription:
    'Svkus is the online portal for a Ukrainian restaurant group, built on a custom WordPress theme from scratch with e-commerce functionality for table reservations and merchandise. The project included a full content setup with menus, event listings, and restaurant profiles, styled with custom CSS3 and JavaScript to capture the brand\'s creative culinary identity.',
  fullDescriptionUa:
    'Svkus - це онлайн-портал для української ресторанної групи, побудований на унікальній темі WordPress з нуля з e-commerce функціоналом для бронювання столиків та купівлі фірмової продукції. Проєкт увійшов повне наповнення контентом із меню, анонсами подій та профілями ресторанів, із кастомними стилями CSS3 та JavaScript для передачі унікальної кулінарної айдентики бренду.',
  fullDescriptionEs:
    'Svkus es el portal en línea de un grupo de restaurantes ucraniano, construido sobre un tema de WordPress personalizado desde cero con funcionalidad de comercio electrónico para reservas de mesa y venta de productos de marca. El proyecto incluyó la configuración completa del contenido con menús, anuncios de eventos y perfiles de restaurantes, estilizado con CSS3 personalizado y JavaScript para transmitir la identidad culinaria única del grupo.',
  fullDescriptionDe:
    'Svkus ist das Online-Portal einer ukrainischen Restaurantgruppe, das von Grund auf mit einem individuellen WordPress-Theme und E-Commerce-Funktionen für Tischreservierungen sowie Markenartikel entwickelt wurde. Das Projekt umfasste die vollständige Inhaltseinrichtung mit Speisekarten, Veranstaltungshinweisen und Restaurantprofilen, gestaltet mit maßgeschneidertem CSS3 und JavaScript, um die kreative kulinarische Identität der Marke widerzuspiegeln.',
  detailHeroLine: 'CUSTOM WORDPRESS · RESTAURANT GROUP PORTAL',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress Engine', accent: 'darkGreen' },
    { value: 'UA Market', label: 'Target Audience', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'E-Commerce + CSS3/JS', highlight: true },
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
      'A custom WordPress theme was built from scratch to serve as the central portal for the Syndicate of Taste restaurant group. E-commerce functionality supports online ordering and reservations, while custom CSS3 and JavaScript deliver an engaging, brand-consistent visual experience across the full menu and event content.',
    descriptionUa:
      'Індивідуальна тема WordPress була розроблена з нуля як центральний портал для ресторанної групи «Синдикат Смаку». Функціонал електронної комерції підтримує онлайн-замовлення та бронювання, а кастомний CSS3 і JavaScript забезпечують привабливий, цілісний візуальний досвід у всіх розділах меню та подій.',
    descriptionEs:
      'Se construyó desde cero un tema de WordPress personalizado para servir como portal central del grupo de restaurantes Syndicate of Taste. La funcionalidad de comercio electrónico permite pedidos y reservas en línea, mientras que el CSS3 y JavaScript personalizados ofrecen una experiencia visual atractiva y coherente con la marca en todo el contenido de menús y eventos.',
    descriptionDe:
      'Ein von Grund auf neu entwickeltes WordPress-Theme dient als zentrales Portal für die Restaurantgruppe Syndicate of Taste. Integrierte E-Commerce-Funktionen unterstützen Online-Bestellungen und Tischreservierungen, während individuelles CSS3 und JavaScript ein ansprechendes, markenkonsistentes visuelles Erlebnis über sämtliche Menü- und Veranstaltungsseiten hinweg bieten.',
  },
  image: '/Portfolio/images/portfolio/thumbs/wordpress/svkus_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/svkus_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/svkus_thumb.webp',
      caption: 'Home page portal for the Syndicate of Taste restaurant group with featured venues',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/svkus/svkus_slide2.webp',
      caption: 'Restaurant listings, menus, and event section with e-commerce reservation links',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible restaurant portal page structure' },
      { short: 'CSS3', full: 'Custom CSS3 with creative layouts and brand-consistent visual styling' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive menu displays and UI enhancements' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress theme functions and e-commerce logic' },
      { short: 'MySQL', full: 'MySQL database storing restaurant content, menus, events, and product data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS managing the multi-venue restaurant portal content' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch for the restaurant group\'s creative brand' },
      { short: 'E-Commerce Setup', full: 'E-commerce functionality integrated for online reservations and product purchases' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast content delivery and security across Ukraine' },
      { short: 'SSL/TLS', full: 'HTTPS encryption protecting customer session and payment data' },
      { short: 'Nginx', full: 'Nginx web server configured for optimal WordPress and e-commerce performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API embedding interactive location maps for each restaurant venue' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking reservation conversions, menu page views, and user engagement' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Restaurant SEO with optimized meta tags for Ukrainian food and dining searches' },
      { short: 'Schema.org Markup', full: 'Restaurant and FoodEstablishment JSON-LD structured data for rich search results' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance optimization targeting green Core Web Vitals across all portal pages' },
      { short: 'WebP Images', full: 'WebP format for restaurant photography ensuring fast, high-quality image loading' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Marketing integrations for restaurant promotions and event campaign tracking' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Restaurant Portal',
      titleUa: 'Індивідуальний ресторанний портал на WordPress',
      titleEs: 'Portal de restaurantes personalizado en WordPress',
      titleDe: 'Individuelles WordPress-Restaurantportal',
      description:
        'A fully custom WordPress theme was built from scratch to serve as the central digital hub for the Syndicate of Taste restaurant group, featuring multi-venue presentation and event listings.',
      descriptionUa:
        'Повністю кастомна тема WordPress була створена з нуля як центральний цифровий хаб для мережі ресторанів «Синдикат Смаку» з презентацією кількох закладів та анонсами подій.',
      descriptionEs:
        'Se desarrolló un tema de WordPress totalmente personalizado desde cero como centro digital para el grupo de restaurantes Syndicate of Taste, con presentación de múltiples locales y anuncios de eventos.',
      descriptionDe:
        'Ein vollständig maßgeschneidertes WordPress-Theme wurde von Grund auf als zentraler digitaler Hub für die Restaurantgruppe Syndicate of Taste entwickelt, inklusive Mehrstandort-Präsentation und Veranstaltungskalender.',
    },
    {
      title: 'E-Commerce Functionality',
      titleUa: 'Функціонал електронної комерції',
      titleEs: 'Funcionalidad de comercio electrónico',
      titleDe: 'E-Commerce-Funktionalität',
      description:
        'Integrated e-commerce features support online table reservations and product purchases, with secure checkout and product management capabilities.',
      descriptionUa:
        'Інтегровані функції електронної комерції підтримують онлайн-бронювання столиків та купівлю продукції з безпечним оформленням замовлення та керуванням товарами.',
      descriptionEs:
        'Las funciones integradas de comercio electrónico permiten reservas de mesa en línea y compra de productos, con pago seguro y gestión de catálogo.',
      descriptionDe:
        'Integrierte E-Commerce-Funktionen unterstützen Online-Tischreservierungen und Produktkäufe mit sicherem Checkout sowie umfassender Artikelverwaltung.',
    },
    {
      title: 'Full Content Setup',
      titleUa: 'Повне налаштування контенту',
      titleEs: 'Configuración completa de contenidos',
      titleDe: 'Vollständige Inhaltseinrichtung',
      description:
        'All restaurant menus, venue profiles, event announcements, and supporting content were entered and structured for maximum readability and conversion.',
      descriptionUa:
        'Усі меню ресторанів, профілі закладів, анонси подій та супутній контент були внесені та структуровані для максимальної зручності читання та конверсії.',
      descriptionEs:
        'Todos los menús de los restaurantes, perfiles de locales, anuncios de eventos y contenidos complementarios se introdujeron y estructuraron para lograr la máxima legibilidad y conversión.',
      descriptionDe:
        'Sämtliche Speisekarten, Standortprofile, Veranstaltungsankündigungen und Begleitinhalte wurden eingepflegt und für optimale Lesbarkeit sowie Konversionsraten strukturiert.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The portal is fully responsive across desktops, tablets, and smartphones, ensuring diners can browse venues and reserve tables from any device.',
      descriptionUa:
        'Портал повністю адаптивний на комп\'ютерах, планшетах і смартфонах, що дозволяє гостям переглядати заклади та бронювати столики з будь-якого пристрою.',
      descriptionEs:
        'El portal es totalmente responsivo en ordenadores, tabletas y teléfonos inteligentes, permitiendo a los comensales explorar locales y reservar mesas desde cualquier dispositivo.',
      descriptionDe:
        'Das Portal ist auf Desktops, Tablets und Smartphones vollständig responsiv, sodass Gäste von jedem Gerät aus Restaurants entdecken und Tische reservieren können.',
    },
    {
      title: 'SEO Optimization',
      titleUa: 'SEO-оптимізація',
      titleEs: 'Optimización SEO',
      titleDe: 'SEO-Optimierung',
      description:
        'Restaurant-specific SEO with Schema.org FoodEstablishment markup and Google Maps integration maximizes local search visibility across Ukrainian dining searches.',
      descriptionUa:
        'Спеціалізоване ресторанне SEO з розміткою Schema.org FoodEstablishment та інтеграцією Google Maps максимізує локальну видимість у пошукових запитах закладів харчування в Україні.',
      descriptionEs:
        'El SEO específico para restaurantes con marcado Schema.org FoodEstablishment e integración con Google Maps maximiza la visibilidad en búsquedas gastronómicas locales en Ucrania.',
      descriptionDe:
        'Gastronomiespezifisches SEO mit Schema.org-FoodEstablishment-Markup und Google Maps-Integration maximiert die lokale Sichtbarkeit bei ukrainischen Restaurantsuchanfragen.',
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
  liveUrl: 'https://svkus.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default svkus
