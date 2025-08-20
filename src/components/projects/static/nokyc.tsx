import { Project } from "../project-types";

const nokyc: Project = {
  id: 51,
  title: "Nokyc",
  description: "Pure HTML/CSS/JS code.",
  fullDescription:
    "Website developed using HTML5, CSS3, and vanilla JavaScript.",
  image: "/images/portfolio/thumbs/html-css-js/nokyc_thumb.webp",
  fullScreenshot: "/images/portfolio/projects/html-css-js/nokyc_thumb.webp",
  images: [
    {
      src: "/images/portfolio/thumbs/html-css-js/nokyc_thumb.webp",
      caption: "",
    },
    {
      src: "/images/portfolio/sliders/html-css-js/nokyc/nokyc_slide2.webp",
      caption: "",
    },
  ],
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "GitHub",
    "GitHub Pages",
  ],
  features: [
    <p>
      <strong>HTML5: </strong> Provides the structure and layout of the
      application.
    </p>,
    <p>
      <strong>CSS3: </strong> Used for styling, ensuring a responsive and
      visually appealing design.
    </p>,
    <p>
      <strong>JavaScript &#40;ES6+&#41;: </strong> The programming language used
      for writing the application's logic, utilizing modern JavaScript features.
    </p>,
    <p>
      <strong>GitHub: </strong> Version control systems used for managing the
      source code and hosting the project repository.
    </p>,
    <p>
      <strong>GitHub Pages: </strong> A service for hosting the static website,
      making the application accessible online.
    </p>,
  ],
  challenges: [],
  solutions: [],
  liveUrl: "https://yusupovwebart.github.io/nokyc/",
  githubUrl: "https://github.com/YusupovWebArt/nokyc",
  category: ["static"],
};

export default nokyc;
