import { Project } from "../project-types";

const mohaveCosmeticSurgery: Project = {
  id: 52,
  title: "Mohave Cosmetic Surgery",
  description:
    "Las Vegas-based practice led by board-certified plastic surgeon Dr. Bryson Richards.",
  fullDescription:
    "Portfolio website developed using HTML5, CSS3, and vanilla JavaScript.",
  image:
    "/images/portfolio/thumbs/html-css-js/mohavecosmeticsurgery_thumb.webp",
  fullScreenshot:
    "/images/portfolio/projects/html-css-js/mohavecosmeticsurgery_thumb.webp",
  images: [
    {
      src: "/images/portfolio/thumbs/html-css-js/mohavecosmeticsurgery_thumb.webp",
      caption: "Home page",
    },
    {
      src: "/images/portfolio/sliders/html-css-js/mohavecosmeticsurgery/mohavecosmeticsurgery_slide2.webp",
      caption: "",
    },
  ],
  technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
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
  ],
  challenges: [],
  solutions: [],
  liveUrl: "https://mohavecosmeticsurgery.com/",
  githubUrl: "#",
  category: ["static"],
};

export default mohaveCosmeticSurgery;
