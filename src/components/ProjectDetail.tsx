import React, { useState, useEffect } from 'react'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
} from 'lucide-react'
import { Project } from './projects/project-types'

interface ProjectDetailProps {
  projectId: number
  onBack: () => void
}

// Автоматический импорт всех проектов
const projectModules = import.meta.glob<{ default: Project }>(
  './projects/*/*.tsx',
  { eager: true }
)
const projects: Project[] = Object.values(projectModules).map(
  (mod: any) => mod.default
)

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [screenshotModal, setScreenshotModal] = useState<{
    isOpen: boolean
    image: string
    title: string
    caption: string
  }>({
    isOpen: false,
    image: '',
    title: '',
    caption: '',
  })

  //Скролл наверх страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [projectId])

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Project not found
          </h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            type="button"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    )
  }

  const openScreenshotModal = () => {
    setScreenshotModal({
      isOpen: true,
      image: project.images[currentImageIndex].src,
      title: project.title,
      caption: project.images[currentImageIndex].caption,
    })
    document.body.style.overflow = 'hidden'
  }

  const closeScreenshotModal = () => {
    setScreenshotModal({ isOpen: false, image: '', title: '', caption: '' })
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="py-10 px-2 md:px-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex fixed top-10 items-center space-x-2 text-purple-600 dark:text-lime-500 hover:text-purple-700 dark:hover:text-lime-600 font-medium mb-8 transition-colors group"
        type="button"
        style={{ zIndex: 9999, position: 'relative' }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Featured Projects</span>
      </button>

      {/* Title & Description */}
      <div className="mb-10 text-center mt-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Slider */}
        <div className="space-y-6">
          <div className="relative bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={project.images[currentImageIndex].src}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover"
            />

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  type="button"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  type="button"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Full Screenshot Button */}
            {project.images && project.images.length > 0 && (
              <button
                onClick={openScreenshotModal}
                className="absolute bottom-4 right-4 bg-purple-600 dark:bg-lime-500 text-white dark:text-slate-900 px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 dark:hover:bg-lime-400 transition"
                title="View Full Screenshot"
                type="button"
              >
                <Eye className="inline-block mr-1 w-5 h-5" />
                Zoom In
              </button>
            )}
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-2 mt-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'ring-2 ring-purple-500 dark:ring-lime-500 ring-offset-2'
                      : 'hover:opacity-80'
                  }`}
                  type="button"
                >
                  <img
                    src={img.src}
                    alt={img.caption || project.title}
                    className="w-16 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Overview & Actions */}
        <div className="space-y-8">
          {/* Full Description */}
          <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-lime-500 dark:text-slate-900 dark:hover:bg-lime-400 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Секция с технологиями, фичами и сложностями */}
      <section className="mt-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Technologies Used */}
          <div className="md:w-1/2 w-full bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Technologies Used
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500 dark:bg-lime-500"></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="md:w-1/2 w-full bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-lime-500 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges & Solutions на всю ширину */}

        {(project.challenges.length > 0 || project.solutions.length > 0) && (
          <div className="bg-white mt-6 dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Challenges & Solutions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Challenges Faced:
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Solutions Implemented:
                </h4>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-lime-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/*
  Screenshot Modal
*/}
      {screenshotModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-lg w-full max-w-full sm:max-w-5xl p-6 flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-lime-400"
              onClick={closeScreenshotModal}
              title="Закрыть"
              type="button"
            >
              <X size={24} />
            </button>
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setScreenshotModal((prev) => {
                      const newIndex =
                        (project.images.findIndex(
                          (img) => img.src === prev.image
                        ) -
                          1 +
                          project.images.length) %
                        project.images.length
                      return {
                        ...prev,
                        image: project.images[newIndex].src,
                        caption: project.images[newIndex].caption,
                      }
                    })
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  type="button"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={() =>
                    setScreenshotModal((prev) => {
                      const newIndex =
                        (project.images.findIndex(
                          (img) => img.src === prev.image
                        ) +
                          1) %
                        project.images.length
                      return {
                        ...prev,
                        image: project.images[newIndex].src,
                        caption: project.images[newIndex].caption,
                      }
                    })
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  type="button"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            {/* Image */}
            <img
              src={screenshotModal.image}
              alt={screenshotModal.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mx-auto"
            />
            {/* Title & Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold">
                {screenshotModal.title}
              </h3>
              <p className="text-gray-300 text-sm">{screenshotModal.caption}</p>
            </div>
          </div>
          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeScreenshotModal}
          ></div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
