import { Project } from '../project-types'

const simpleJavascriptQuiz: Project = {
  id: 4950,
  title: 'Simple Javascript Quiz App',
  description: 'Pet project for learning and practicing JavaScript.',
  descriptionUa: 'Пет-проєкт для вивчення та практики JavaScript.',
  descriptionEs: 'Proyecto personal para el aprendizaje y la práctica de JavaScript.',
  descriptionDe: 'Lern- und Übungsprojekt zur Vertiefung von JavaScript.',
  fullDescription:
    'A lightweight quiz application built with vanilla JavaScript, HTML5, and CSS3. The app presents multiple-choice questions with immediate feedback on correct and incorrect answers, tracks the user\'s score, and displays a results summary - all implemented in pure JavaScript without any framework.',
  fullDescriptionUa:
    'Легкий застосунок-вікторина (Quiz), створений на чистому JavaScript, HTML5 та CSS3. Застосунок відображає питання з вибором відповідей, миттєво показує правильні та неправильні відповіді, відстежує рахунок користувача та виводить підсумкові результати - все реалізовано на чистому JavaScript без фреймворків.',
  fullDescriptionEs:
    'Una aplicación de quiz ligera construida con JavaScript puro, HTML5 y CSS3. La app presenta preguntas de opción múltiple con retroalimentación inmediata sobre las respuestas correctas e incorrectas, realiza un seguimiento de la puntuación del usuario y muestra un resumen de resultados - todo implementado en JavaScript puro sin ningún framework.',
  fullDescriptionDe:
    'Eine leichtgewichtige Quiz-Anwendung, entwickelt mit reinem JavaScript, HTML5 und CSS3. Die App präsentiert Multiple-Choice-Fragen mit sofortigem Feedback zu richtigen und falschen Antworten, verfolgt den Punktestand des Nutzers und zeigt eine Ergebniszusammenfassung an - vollständig in reinem JavaScript ohne Framework umgesetzt.',
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
      'A zero-dependency quiz app - HTML5 provides the question and answer container elements, vanilla JavaScript manages the question array, answer validation, score tracking, and DOM updates for each quiz step, while CSS3 delivers a clean responsive interface. Deployed on GitHub Pages.',
    descriptionUa:
      'Застосунок-вікторина без залежностей - HTML5 надає контейнери для запитань і відповідей, чистий JavaScript керує масивом запитань, перевіркою відповідей, підрахунком балів та оновленням DOM на кожному кроці, а CSS3 забезпечує чистий адаптивний інтерфейс. Розгорнуто на GitHub Pages.',
    descriptionEs:
      'Una aplicación de quiz sin dependencias: HTML5 proporciona los contenedores de preguntas y respuestas, JavaScript puro gestiona el array de preguntas, la validación de respuestas, el seguimiento de la puntuación y las actualizaciones del DOM en cada paso, mientras que CSS3 ofrece una interfaz limpia y responsiva. Desplegada en GitHub Pages.',
    descriptionDe:
      'Eine Quiz-App ohne externe Abhängigkeiten - HTML5 stellt die Container für Fragen und Antworten bereit, reines JavaScript verwaltet das Fragen-Array, die Antwortvalidierung, die Punkteberechnung sowie die DOM-Aktualisierungen für jeden Quiz-Schritt, während CSS3 eine saubere responsive Oberfläche liefert. Bereitgestellt auf GitHub Pages.',
  },
  image:
    '/Portfolio/images/portfolio/thumbs/javascript/js-simple-quiz-app_thumb.webp',
  fullScreenshot:
    '/Portfolio/images/portfolio/thumbs/javascript/js-simple-quiz-app_thumb.webp',
  images: [
    {
      src: '/Portfolio/images/portfolio/thumbs/javascript/js-simple-quiz-app_thumb.webp',
      caption: 'General view of Quiz App',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/javascript/js-simple-quiz-app/js-simple-quiz-app_slide2.webp',
      caption: 'Active question with multiple-choice answer options highlighted',
    },
    {
      src: '/Portfolio/images/portfolio/sliders/javascript/js-simple-quiz-app/js-simple-quiz-app_slide3.webp',
      caption: 'Results screen displaying the user\'s final score and performance summary',
    },
  ],
  technologies: {
    frontend: [
      { short: 'HTML5', full: 'HTML5 structuring the question display, answer buttons, and results container' },
      { short: 'CSS3', full: 'Custom CSS3 styling the quiz interface with clear visual feedback for correct and incorrect answers' },
      { short: 'Vanilla JavaScript (ES6+)', full: 'ES6+ JavaScript managing question sequencing, answer validation, scoring, and DOM updates' },
    ],
    devopsSecurity: [
      { short: 'GitHub Pages', full: 'GitHub Pages hosting the quiz app as a freely accessible live demo' },
    ],
    technicalOptimization: [
      { short: 'Responsive Design', full: 'CSS media queries ensuring the quiz is fully playable on mobile and desktop devices' },
    ],
  },
  features: [
    {
      title: 'Multiple-Choice Question Flow',
      titleUa: 'Покроковий потік запитань із вибором відповіді',
      titleEs: 'Flujo de preguntas de opción múltiple',
      titleDe: 'Multiple-Choice-Fragenablauf',
      description:
        'The quiz presents questions one at a time with multiple-choice answer buttons, progressing to the next question after each selection.',
      descriptionUa:
        'Вікторина показує запитання по черзі з кнопками варіантів відповідей, переходячи до наступного запитання після кожного вибору.',
      descriptionEs:
        'El quiz presenta las preguntas una a una con botones de opción múltiple, avanzando a la siguiente pregunta tras cada selección.',
      descriptionDe:
        'Das Quiz präsentiert Fragen einzeln nacheinander mit Multiple-Choice-Antwortflächen und wechselt nach jeder Auswahl zur nächsten Frage.',
    },
    {
      title: 'Instant Answer Feedback',
      titleUa: 'Миттєвий зворотний зв\'язок щодо відповіді',
      titleEs: 'Retroalimentación instantánea de respuestas',
      titleDe: 'Sofortiges Antwort-Feedback',
      description:
        'Correct and incorrect answers are highlighted immediately after selection using CSS class toggling, giving users clear visual confirmation.',
      descriptionUa:
        'Правильні та неправильні відповіді підсвічуються одразу після вибору за допомогою перемикання CSS-класів, надаючи чітке візуальне підтвердження.',
      descriptionEs:
        'Las respuestas correctas e incorrectas se resaltan inmediatamente después de la selección mediante el cambio de clases CSS, ofreciendo una confirmación visual clara.',
      descriptionDe:
        'Richtige und falsche Antworten werden unmittelbar nach der Auswahl durch Umschalten von CSS-Klassen hervorgehoben und geben dem Nutzer eine klare visuelle Rückmeldung.',
    },
    {
      title: 'Score Tracking & Results Screen',
      titleUa: 'Підрахунок балів та екран результатів',
      titleEs: 'Seguimiento de puntuación y pantalla de resultados',
      titleDe: 'Punktestand-Tracking & Ergebnisbildschirm',
      description:
        'JavaScript tracks the user\'s running score and displays a final results summary at the end showing how many questions were answered correctly.',
      descriptionUa:
        'JavaScript відстежує поточний рахунок користувача та виводить підсумковий екран результатів із кількістю правильних відповідей.',
      descriptionEs:
        'JavaScript realiza un seguimiento de la puntuación acumulada del usuario y muestra un resumen final con el número de preguntas respondidas correctamente.',
      descriptionDe:
        'JavaScript verfolgt den laufenden Punktestand des Nutzers und zeigt am Ende eine Ergebnisübersicht mit der Anzahl der richtig beantworteten Fragen an.',
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
  liveUrl: 'https://yusupovwebart.github.io/js-simple-quiz-app/',
  githubUrl: 'https://github.com/YusupovWebArt/js-simple-quiz-app',
  category: ['javascript'],
}

export default simpleJavascriptQuiz
