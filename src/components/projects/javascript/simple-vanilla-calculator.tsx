import { Project } from '../project-types'

const simpleVanillaCalculator: Project = {
  id: 4800,
  title: 'Vanilla Javascript Simple Calculator',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  descriptionDe: 'Lern- und Übungsprojekt zur Vertiefung von JavaScript.',
  fullDescription:
    'A simple calculator application built with vanilla JavaScript, HTML5, and CSS3. Performs standard arithmetic operations with a straightforward button interface and real-time display - a focused learning project practising event listeners, operator logic, and DOM manipulation in pure JavaScript.',
  fullDescriptionUa:
    'Простий застосунок-калькулятор, створений на чистому JavaScript, HTML5 та CSS3. Виконує стандартні арифметичні операції зі зручним кнопковим інтерфейсом та відображенням у реальному часі - навчальний проєкт для практики слухачів подій, операторної логіки та маніпуляцій з DOM на чистому JavaScript.',
  fullDescriptionEs:
    'Una sencilla aplicación de calculadora construida con JavaScript puro, HTML5 y CSS3. Realiza operaciones aritméticas estándar mediante una interfaz de botones directa y visualización en tiempo real - un proyecto de aprendizaje centrado en la práctica de event listeners, la lógica de operadores y la manipulación del DOM en JavaScript puro.',
  fullDescriptionDe:
    'Eine einfache Taschenrechner-Anwendung, entwickelt mit reinem JavaScript, HTML5 und CSS3. Führt Standard-Rechenoperationen über eine intuitive Tastenoberfläche mit Echtzeit-Anzeige aus - ein fokussiertes Lernprojekt zur Übung von Event-Listenern, Operatorlogik und DOM-Manipulation in reinem JavaScript.',
  detailHeroLine: 'VANILLA JS · HTML5 · DEMO APP',
  detailMetrics: [
    { value: 'Vanilla JS', label: 'No Framework', accent: 'green' },
    { value: 'ES6+', label: 'Modern JS', accent: 'green' },
    { value: 'Responsive', label: 'Mobile Ready', accent: 'darkGreen' },
    { value: 'Open Source', label: 'GitHub', accent: 'neutral' },
  ],
  architecture: {
    rows: [
      {
        rowLabel: 'BUILD',
        steps: [
          { label: 'HTML5' },
          { label: 'Vanilla JS', highlight: true },
          { label: 'CSS3' },
        ],
      },
      {
        rowLabel: 'DEPLOYMENT',
        steps: [
          { label: 'GitHub Repo' },
          { label: 'GitHub Pages', highlight: true },
          { label: 'Browser' },
        ],
      },
    ],
    description:
      'A zero-dependency calculator - HTML5 defines the number pad and display elements, vanilla JavaScript captures button click events and handles all arithmetic evaluation and display updates, while CSS3 styles the responsive calculator layout. Deployed as a static app on GitHub Pages.',
    descriptionUa:
      'Калькулятор без залежностей - HTML5 визначає цифрову панель та елементи дисплея, чистий JavaScript перехоплює події натискання кнопок і виконує всі арифметичні обчислення та оновлення екрана, а CSS3 стилізує адаптивну верстку. Розгорнуто як статичний застосунок на GitHub Pages.',
    descriptionEs:
      'Una calculadora sin dependencias: HTML5 define el teclado numérico y los elementos de la pantalla, JavaScript puro captura los eventos de clic en los botones y gestiona toda la evaluación aritmética y las actualizaciones de pantalla, mientras que CSS3 estiliza el diseño responsivo. Desplegada como aplicación estática en GitHub Pages.',
    descriptionDe:
      'Ein Taschenrechner ohne Abhängigkeiten - HTML5 definiert das Zahlenfeld und die Anzeigeelemente, reines JavaScript erfasst Klick-Events der Tasten und übernimmt die gesamte arithmetische Auswertung sowie Display-Updates, während CSS3 das responsive Layout gestaltet. Bereitgestellt als statische App auf GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/calculator-js_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/calculator-js_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/calculator-js_thumb.webp',
      caption: 'General view of Javascript Simple Calculator',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'HTML5 defining the calculator button grid and display element structure' },
      { short: 'CSS3', full: 'Custom CSS3 providing the calculator interface layout and button styling' },
      { short: 'Vanilla JavaScript (ES6+)', full: 'ES6+ JavaScript handling button events, arithmetic logic, and display updates' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages serving the static calculator app as a public live demo' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS layout ensuring the calculator works correctly on mobile and desktop devices' },
    ],
  },
  features: [
    {
      title: 'Standard Arithmetic Operations',
      titleUa: 'Стандартні арифметичні операції',
      titleEs: 'Operaciones aritméticas estándar',
      titleDe: 'Standard-Rechenoperationen',
      description:
        'Performs addition, subtraction, multiplication, and division through a clickable number pad with a clear display showing inputs and results.',
      descriptionUa:
        'Виконує додавання, віднімання, множення та ділення через інтерактивну цифрову панель із чітким дисплеєм для введених даних і результатів.',
      descriptionEs:
        'Realiza sumas, restas, multiplicaciones y divisiones mediante un teclado numérico clicable con una pantalla clara que muestra entradas y resultados.',
      descriptionDe:
        'Führt Addition, Subtraktion, Multiplikation und Division über ein anklickbares Zahlenfeld mit einer klaren Anzeige für Eingaben und Ergebnisse aus.',
    },
    {
      title: 'Event-Driven Logic',
      titleUa: 'Подійно-орієнтована логіка',
      titleEs: 'Lógica orientada a eventos',
      titleDe: 'Ereignisgesteuerte Logik',
      description:
        'JavaScript addEventListener captures each button click and routes the input through operator and evaluation logic, updating the display in real time.',
      descriptionUa:
        'JavaScript addEventListener перехоплює кожне натискання кнопки та спрямовує введення через логіку операторів і обчислень, оновлюючи дисплей у реальному часі.',
      descriptionEs:
        'addEventListener de JavaScript captura cada clic de botón y dirige la entrada a través de la lógica de operadores y evaluación, actualizando la pantalla en tiempo real.',
      descriptionDe:
        'addEventListener in JavaScript erfasst jeden Tastenklick, leitet die Eingabe durch die Operator- und Auswertungslogik und aktualisiert die Anzeige in Echtzeit.',
    },
    {
      title: 'Responsive Layout',
      titleUa: 'Адаптивна верстка',
      titleEs: 'Diseño responsivo',
      titleDe: 'Responsives Layout',
      description:
        'The calculator\'s CSS grid layout adapts to mobile and desktop screen sizes, keeping the button grid usable at any viewport width.',
      descriptionUa:
        'CSS Grid-верстка калькулятора адаптується до екранів мобільних пристроїв і десктопів, зберігаючи зручність сітки кнопок за будь-якої ширини вікна.',
      descriptionEs:
        'El diseño CSS Grid de la calculadora se adapta a pantallas móviles y de escritorio, manteniendo la cuadrícula de botones funcional en cualquier ancho de ventana.',
      descriptionDe:
        'Das CSS-Grid-Layout des Rechners passt sich an Mobil- und Desktop-Bildschirmgrößen an und hält das Tastenraster bei jeder Viewport-Breite optimal bedienbar.',
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
  liveUrl: 'https://yusupovwebart.github.io/js-calculator/',
  githubUrl: 'https://github.com/YusupovWebArt/js-calculator',
  category: ['javascript'],
}

export default simpleVanillaCalculator
