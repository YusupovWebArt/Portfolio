import { Project } from '../project-types'

const simpleJavascriptQuiz: Project = {
  id: 4950,
  title: 'Simple Javascript Quiz App',
  description: 'Pet project for learning and practicing JavaScript.',
  fullDescription:
    'A lightweight quiz application built with vanilla JavaScript, HTML5, and CSS3. The app presents multiple-choice questions with immediate feedback on correct and incorrect answers, tracks the user\'s score, and displays a results summary — all implemented in pure JavaScript without any framework.',
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
      'A zero-dependency quiz app — HTML5 provides the question and answer container elements, vanilla JavaScript manages the question array, answer validation, score tracking, and DOM updates for each quiz step, while CSS3 delivers a clean responsive interface. Deployed on GitHub Pages.',
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
      description:
        'The quiz presents questions one at a time with multiple-choice answer buttons, progressing to the next question after each selection.',
    },
    {
      title: 'Instant Answer Feedback',
      description:
        'Correct and incorrect answers are highlighted immediately after selection using CSS class toggling, giving users clear visual confirmation.',
    },
    {
      title: 'Score Tracking & Results Screen',
      description:
        'JavaScript tracks the user\'s running score and displays a final results summary at the end showing how many questions were answered correctly.',
    },
  ],
  challenges: [],
  solutions: [],
  liveUrl: 'https://yusupovwebart.github.io/js-simple-quiz-app/',
  githubUrl: 'https://github.com/YusupovWebArt/js-simple-quiz-app',
  category: ['javascript'],
}

export default simpleJavascriptQuiz
