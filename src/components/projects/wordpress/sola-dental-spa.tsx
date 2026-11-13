import { Project } from '../project-types'

const solaDentalSpa: Project = {
  id: 10970,
  title: 'Sola Dental Spa',
  description: 'Cosmetic Dental Clinic in Staten Island, NY',
  descriptionUa: 'Клініка естетичної стоматології в Стейтен-Айленді, Нью-Йорк.',
  descriptionEs: 'Clínica de odontología estética en Staten Island, Nueva York.',
  descriptionDe: 'Klinik für ästhetische Zahnmedizin in Staten Island, New York.',
  fullDescription:
    'Sola Dental Spa is a cosmetic dentistry website for a clinic in Staten Island, New York, built on a custom WordPress theme from scratch using the WPBakery page builder. The project included full content writing, custom CSS3/JS styling, SEO optimization, and Google Maps integration to drive local patient acquisition in the New York metropolitan area.',
  fullDescriptionUa:
    'Sola Dental Spa - це вебсайт естетичної стоматології для клініки в Стейтен-Айленді, Нью-Йорк, створений на унікальній темі WordPress з нуля за допомогою конструктора сторінок WPBakery. Проєкт включав повний написання контенту, кастомні стилі на CSS3/JS, SEO-оптимізацію та інтеграцію з Google Maps API для залучення пацієнтів у нью-йоркському регіоні.',
  fullDescriptionEs:
    'Sola Dental Spa es el sitio web de una clínica de odontología estética en Staten Island, Nueva York, construido sobre un tema de WordPress personalizado desde cero con el constructor de páginas WPBakery. El proyecto incluyó la redacción completa del contenido, estilos personalizados en CSS3/JS, optimización SEO e integración con Google Maps API para atraer pacientes en el área metropolitana de Nueva York.',
  fullDescriptionDe:
    'Sola Dental Spa ist die Website einer Klinik für ästhetische Zahnmedizin in Staten Island, New York, die von Grund auf mit einem individuellen WordPress-Theme und dem WPBakery Page Builder entwickelt wurde. Das Projekt umfasste die vollständige Texterstellung, maßgeschneidertes CSS3/JS-Styling, SEO-Optimierung sowie eine Google Maps-Integration zur gezielten Patientengewinnung im Großraum New York.',
  detailHeroLine: 'CUSTOM WORDPRESS · COSMETIC DENTAL CLINIC',
  detailMetrics: [
    { value: '90+', label: 'PageSpeed Score', accent: 'green' },
    { value: '<2s', label: 'Page Load', accent: 'green' },
    { value: 'Custom Theme', label: 'WordPress + WPBakery', accent: 'darkGreen' },
    { value: 'NY Market', label: 'Target Region', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'THEME LAYER',
        steps: [
          { label: 'Custom WP Theme' },
          { label: 'WPBakery + CSS3/JS', highlight: true },
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
      'A custom WordPress theme built from scratch forms the structural and visual foundation. WPBakery page builder enables the clinic to manage page layouts independently, with custom CSS3 and JavaScript applied for precise responsive styling and unique interactions beyond the builder\'s defaults. Cloudflare CDN and Nginx ensure fast, secure delivery to patients in New York.',
    descriptionUa:
      'Індивідуальна тема WordPress, створена з нуля, формує структурну та візуальну основу. Конструктор сторінок WPBakery дозволяє клініці самостійно керувати макетами сторінок, а кастомний CSS3 та JavaScript забезпечують точну адаптивну стилізацію та унікальні інтерактивні елементи поза стандартними можливостями конструктора. Cloudflare CDN та Nginx гарантують швидку й безпечну доставку пацієнтам у Нью-Йорку.',
    descriptionEs:
      'Un tema de WordPress personalizado creado desde cero forma la base estructural y visual. El constructor de páginas WPBakery permite a la clínica gestionar los diseños de página de forma independiente, con CSS3 y JavaScript personalizados para un estilo responsivo preciso e interacciones únicas más allá de los valores predeterminados del constructor. Cloudflare CDN y Nginx aseguran una entrega rápida y segura a los pacientes en Nueva York.',
    descriptionDe:
      'Ein von Grund auf neu entwickeltes WordPress-Theme bildet das strukturelle und visuelle Fundament. Der WPBakery Page Builder ermöglicht der Klinik eine eigenständige Verwaltung der Seitenlayouts, ergänzt durch individuelles CSS3 und JavaScript für präzises responsives Styling und interaktive Funktionen über den Standard des Builders hinaus. Cloudflare CDN und Nginx sorgen für eine schnelle, sichere Auslieferung an Patienten in New York.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/wordpress/soladentalspa_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/wordpress/soladentalspa_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/wordpress/soladentalspa_thumb.webp',
      caption: 'Home page with cosmetic dental services hero and key treatment highlights',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/soladentalspa/soladentalspa_slide2.webp',
      caption: 'Services page showcasing cosmetic treatments including veneers and whitening',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/wordpress/soladentalspa/soladentalspa_slide3.webp',
      caption: 'Contact and appointment booking section with Google Maps location display',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'Semantic HTML5 markup for accessible and healthcare-SEO-optimized page structure' },
      { short: 'CSS3', full: 'Custom CSS3 with responsive layouts and dental brand-specific visual styling' },
      { short: 'JavaScript (ES6)', full: 'ES6 JavaScript for interactive treatment galleries and UI components' },
      { short: 'WPBakery', full: 'WPBakery page builder integrated for client-managed page layout editing post-launch' },
    ],
    backend: [
      { short: 'PHP 8+', full: 'PHP 8+ powering WordPress custom theme logic and appointment form processing' },
      { short: 'MySQL', full: 'MySQL database for storing all clinic content, pages, and patient inquiry data' },
    ],
    contentManagement: [
      { short: 'WordPress Core', full: 'WordPress CMS as the foundation for content management and publishing' },
      { short: 'Custom WP Theme', full: 'Custom WordPress theme built from scratch to reflect the clinic\'s premium brand' },
    ],
    devopsSecurity: [
      { short: 'Cloudflare', full: 'Cloudflare CDN for fast delivery and DDoS protection for US visitors' },
      { short: 'SSL/TLS', full: 'HTTPS encryption ensuring secure patient data handling across all forms' },
      { short: 'Nginx', full: 'Nginx web server configured for optimized WordPress hosting performance' },
    ],
    api: [
      { short: 'Google Maps API', full: 'Google Maps API displaying the clinic\'s Staten Island, NY location' },
    ],
    analytics: [
      { short: 'Google Analytics', full: 'GA4 tracking appointment inquiry conversions and patient traffic sources' },
    ],
    seo: [
      { short: 'SEO Optimization', full: 'Local dental SEO targeting cosmetic dentistry searches in Staten Island and NYC' },
      { short: 'Schema.org Markup', full: 'MedicalBusiness and Dentist JSON-LD structured data for local search visibility' },
    ],
    technicalOptimization: [
      { short: 'Core Web Vitals', full: 'Performance tuning targeting green Core Web Vitals for medical practice credibility' },
      { short: 'WebP Images', full: 'WebP format for treatment before/after photos and clinic imagery' },
    ],
    digitalMarketing: [
      { short: 'Marketing Tools', full: 'Integrated marketing tools for patient lead generation and appointment tracking' },
    ],
  },
  features: [
    {
      title: 'Custom WordPress Theme from Scratch',
      titleUa: 'Індивідуальна тема WordPress з нуля',
      titleEs: 'Tema de WordPress personalizado desde cero',
      titleDe: 'Individuelles WordPress-Theme von Grund auf',
      description:
        'A bespoke WordPress theme was built from scratch to convey the premium, professional atmosphere of the cosmetic dental spa with complete design control.',
      descriptionUa:
        'Індивідуальна тема WordPress була створена з нуля для передачі преміальної професійної атмосфери клініки естетичної стоматології з повним контролем над дизайном.',
      descriptionEs:
        'Se desarrolló un tema de WordPress a medida desde cero para transmitir la atmósfera premium y profesional de la clínica dental estética con control total sobre el diseño.',
      descriptionDe:
        'Ein maßgeschneidertes WordPress-Theme wurde von Grund auf entwickelt, um die exklusive, professionelle Atmosphäre der Zahnklinik bei voller Gestaltungskontrolle widerzuspiegeln.',
    },
    {
      title: 'WPBakery Page Builder Integration',
      titleUa: 'Інтеграція конструктора сторінок WPBakery',
      titleEs: 'Integración del constructor de páginas WPBakery',
      titleDe: 'WPBakery Page Builder Integration',
      description:
        'WPBakery was fully integrated to provide the clinic with a visual drag-and-drop editing interface for maintaining page layouts and content without developer assistance.',
      descriptionUa:
        'WPBakery було повністю інтегровано для забезпечення клініки візуальним інтерфейсом drag-and-drop для підтримки макетів сторінок і контенту без допомоги розробників.',
      descriptionEs:
        'WPBakery se integró por completo para ofrecer a la clínica una interfaz visual de arrastrar y soltar que permite mantener los diseños y contenidos sin asistencia técnica.',
      descriptionDe:
        'WPBakery wurde vollständig integriert, um der Klinik eine visuelle Drag-and-Drop-Oberfläche zur Pflege von Seitenlayouts und Inhalten ohne Entwicklerunterstützung bereitzustellen.',
    },
    {
      title: 'Custom CSS3/JS & PHP Enhancements',
      titleUa: 'Кастомні допрацювання CSS3/JS та PHP',
      titleEs: 'Mejoras personalizadas en CSS3/JS y PHP',
      titleDe: 'Individuelle CSS3/JS- und PHP-Erweiterungen',
      description:
        'Custom CSS3 and JavaScript deliver unique responsive styling and interactive elements beyond WPBakery\'s defaults, while PHP manages form submissions and server-side logic.',
      descriptionUa:
        'Кастомні CSS3 та JavaScript забезпечують унікальну адаптивну стилізацію та інтерактивні елементи поза стандартними можливостями WPBakery, а PHP керує обробкою форм та серверною логікою.',
      descriptionEs:
        'El CSS3 y JavaScript personalizados aportan un estilo responsivo único y elementos interactivos más allá de los valores predeterminados de WPBakery, mientras que PHP gestiona los formularios y la lógica del servidor.',
      descriptionDe:
        'Individuelles CSS3 und JavaScript liefern ein einzigartiges responsives Design und interaktive Elemente über den Standard von WPBakery hinaus, während PHP Formularübermittlungen und serverseitige Logik verarbeitet.',
    },
    {
      title: 'Local SEO & Appointment Booking',
      titleUa: 'Локальне SEO та запис на прийом',
      titleEs: 'SEO local y reserva de citas',
      titleDe: 'Lokales SEO und Terminbuchung',
      description:
        'Local dental SEO with Schema.org MedicalBusiness markup and Google Maps integration targets patients searching for cosmetic dentistry in Staten Island and the broader NYC area.',
      descriptionUa:
        'Локальне стоматологічне SEO з розміткою Schema.org MedicalBusiness та інтеграцією Google Maps орієнтоване на пацієнтів, які шукають естетичну стоматологію в Стейтен-Айленді та Нью-Йорку.',
      descriptionEs:
        'El SEO dental local con marcado Schema.org MedicalBusiness e integración con Google Maps se dirige a pacientes que buscan odontología estética en Staten Island y el área metropolitana de Nueva York.',
      descriptionDe:
        'Lokales Dental-SEO mit Schema.org-MedicalBusiness-Markup und Google Maps-Integration spricht gezielt Patienten an, die in Staten Island und im Großraum NYC nach ästhetischer Zahnmedizin suchen.',
    },
    {
      title: 'Responsive Design',
      titleUa: 'Адаптивний дизайн',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Design',
      description:
        'The website is fully responsive across desktops, tablets, and smartphones, ensuring patients can easily explore services and book appointments from any device.',
      descriptionUa:
        'Вебсайт повністю адаптивний на комп\'ютерах, планшетах і смартфонах, завдяки чому пацієнти можуть легко вивчати послуги та записуватися на прийом з будь-якого пристрою.',
      descriptionEs:
        'El sitio web es totalmente responsivo en ordenadores, tabletas y teléfonos inteligentes, garantizando que los pacientes puedan explorar servicios y reservar citas desde cualquier dispositivo.',
      descriptionDe:
        'Die Website ist auf Desktops, Tablets und Smartphones vollständig responsiv, sodass Patienten Leistungen mühelos informieren und Termine von jedem Gerät aus buchen können.',
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
  liveUrl: 'https://www.soladentalspa.com/',
  githubUrl: '#',
  category: ['wordpress'],
}

export default solaDentalSpa
