import React, { useState, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { Project } from "./projects/project-types";
import ProjectDetail from "./ProjectDetail";

interface ProjectsProps {
  onProjectSelect: (projectId: number) => void;
}

const modules = import.meta.glob<{ default: Project }>("./projects/**/*.tsx", {
  eager: true,
});

const projects: Project[] = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => b.id - a.id);

const filters = [
  { id: "all", label: "All Projects" },
  { id: "wordpress", label: "WordPress" },
  { id: "nextjs", label: "Next.js" },
  { id: "react", label: "React" },
  { id: "javascript", label: "Javascript" },
  { id: "static", label: "Static Websites" },
  { id: "shopify", label: "Shopify" },
  { id: "wix", label: "Wix" },
  { id: "other-cms", label: "Other CMSs" },
];

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [screenshotModal, setScreenshotModal] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
  }>({
    isOpen: false,
    image: "",
    title: "",
  });

  // Фильтрация проектов по категории
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  // Пагинация
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const openScreenshotModal = (image: string, title: string) => {
    setScreenshotModal({ isOpen: true, image, title });
    document.body.style.overflow = "hidden";
  };

  const closeScreenshotModal = () => {
    setScreenshotModal({ isOpen: false, image: "", title: "" });
    document.body.style.overflow = "unset";
  };

  if (selectedProjectId !== null) {
    return (
      <ProjectDetail
        projectId={selectedProjectId}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="py-10 px-2 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Engineering high-performance digital products by blending
            foundational development expertise with AI-augmented speed, from
            custom WordPress architectures to production-ready Next.js
            applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeFilter === filter.id
                  ? "bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-900"
                  : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 hover:bg-purple-100 dark:hover:bg-lime-700"
              }`}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <img
                src={project.images[0].src}
                alt={project.images[0].caption || project.title}
                className="rounded-xl mb-4 h-48 object-cover cursor-pointer"
                onClick={() =>
                  openScreenshotModal(project.images[0].src, project.title)
                }
              />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-600 dark:text-lime-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
                <button
                  onClick={() => onProjectSelect(project.id)}
                  className="ml-auto text-purple-600 dark:text-lime-400 hover:underline"
                  type="button"
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  currentPage === i + 1
                    ? "bg-purple-600 text-white dark:bg-lime-500 dark:text-slate-900"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 hover:bg-purple-100 dark:hover:bg-lime-700"
                }`}
                type="button"
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Модальное окно скриншота */}
        {screenshotModal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-3xl w-full p-6">
              <button
                className="absolute top-4 right-4 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-lime-400"
                onClick={closeScreenshotModal}
                title="Закрыть"
                type="button"
              >
                <X size={24} />
              </button>
              <img
                src={screenshotModal.image}
                alt={screenshotModal.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {screenshotModal.title}
                </h3>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10"
              onClick={closeScreenshotModal}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
