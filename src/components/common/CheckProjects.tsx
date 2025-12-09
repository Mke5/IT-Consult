import { useEffect, useState, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { api, type Project } from '../../lib/api'
import ProjectDetailModal from './ProjectDetailModal'

const CheckProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects()
        setProjects(data.slice(0, 6)) // Limit to 6 projects
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const colors = [
    { bg: "bg-blue-900", text: "text-blue-200" },
    { bg: "bg-red-600", text: "text-red-100" },
    { bg: "bg-blue-900", text: "text-blue-200" },
    { bg: "bg-red-600", text: "text-red-100" },
    { bg: "bg-blue-900", text: "text-blue-200" },
    { bg: "bg-red-600", text: "text-red-100" }
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-6 text-center">
          
          {/* Arrows hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex w-16 h-16 bg-[#e4010c] rounded-full items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <FaArrowLeft size={28} className="text-white" />
          </button>

          <div className="flex flex-col justify-center text-center max-w-lg">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
              Check our Projects
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Take a look at some of our recent projects to see how we've helped
              Organizations, Governments and Agencies.
            </p>
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex w-16 h-16 bg-[#e4010c] rounded-full items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <FaArrowRight size={28} className="text-white" />
          </button>

        </div>

        {/* Horizontal Scroll for Mobile */}
        {loading ? (
          <div className="flex overflow-x-auto gap-6 flex-nowrap pb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 w-[85%] md:w-[450px] h-64 animate-pulse"
              />
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 flex-nowrap pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>
              {`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {projects.map((project, i) => {
              const colorScheme = colors[i % colors.length]
              
              return (
                <div
                  key={project.id}
                  className={`${colorScheme.bg} text-white rounded-lg overflow-hidden flex-shrink-0 w-[85%] md:w-[450px] cursor-pointer hover:shadow-xl transition-shadow duration-300`}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="grid grid-cols-2">
                    {/* Image Grid or Project Image */}
                    {project.image ? (
                      <div className="h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 p-4">
                        <div className="bg-white/20 rounded h-24 md:h-32"></div>
                        <div className="bg-white/20 rounded h-24 md:h-32"></div>
                        <div className="bg-white/20 rounded h-24 md:h-32"></div>
                        <div className="bg-white/20 rounded h-24 md:h-32"></div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="py-6 px-4 md:py-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                          {project.title}
                        </h3>
                        <p className={`${colorScheme.text} mb-4 md:mb-6 text-sm line-clamp-3`}>
                          {project.description || project.content?.substring(0, 100) + '...' || 'No description available.'}
                        </p>
                      </div>
                      <button
                        className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-xs md:text-sm w-fit"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleProjectClick(project)
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            No projects available
          </div>
        )}

      </div>
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default CheckProjects
