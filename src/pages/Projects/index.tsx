import { useEffect, useState } from 'react'
import Container from '@/components/common/Container'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ProjectDetailModal from '@/components/common/ProjectDetailModal'
import { api, type Project, type Testimonial } from '@/lib/api'
import { FaStar } from 'react-icons/fa'

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [testimonialsLoading, setTestimonialsLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await api.getTestimonials()
        setTestimonials(data)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      } finally {
        setTestimonialsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='grow w-full'>
            <Container>
                <section className='py-10'>
                    <div className='container mx-auto px-4'>

                        {/* Header */}
                        <div className='flex flex-col items-center justify-center mb-12 gap-4 text-center'>
                            <h2 className='text-2xl md:text-3xl font-medium text-gray-900'>
                                Check our Projects
                            </h2>
                            <p className='text-gray-600 text-sm md:text-base max-w-lg'>
                                Take a look at some of our recent projects to see how we've helped
                                Organizations, Governments and Agencies.
                            </p>
                        </div>

                        {/* FLEX COLUMN CARDS */}
                        {loading ? (
                          <div className="flex flex-col gap-8 w-full">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="bg-gray-200 rounded-lg overflow-hidden lg:w-[60%] w-full mx-auto animate-pulse h-64"></div>
                            ))}
                          </div>
                        ) : projects.length > 0 ? (
                          <div className="flex flex-col gap-8 w-full">
                            {projects.map((project, i) => {
                              const colors = [
                                { bg: "bg-blue-900", text: "text-blue-200" },
                                { bg: "bg-red-600", text: "text-red-100" },
                                { bg: "bg-blue-900", text: "text-blue-200" },
                                { bg: "bg-red-600", text: "text-red-100" }
                              ];
                              const card = colors[i % colors.length];
                              
                              return (
                                <div
                                  key={project.id}
                                  className={`${card.bg} text-white rounded-lg overflow-hidden lg:w-[60%] w-full mx-auto cursor-pointer hover:shadow-xl transition-shadow duration-300`}
                                  onClick={() => handleProjectClick(project)}
                                >
                                  <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Image Section */}
                                    {project.image ? (
                                      <div className="h-64 md:h-auto">
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
                                        {[1, 2, 3, 4].map((x) => (
                                          <div key={x} className="bg-white/20 rounded aspect-square"></div>
                                        ))}
                                      </div>
                                    )}

                                    {/* Text Section */}
                                    <div className="py-6 px-4 md:py-10 md:px-8 flex flex-col justify-center">
                                      <h3 className="text-lg md:text-2xl font-bold mb-3">
                                        {project.title}
                                      </h3>

                                      <p className={`${card.text} text-xs md:text-sm mb-4 md:mb-6`}>
                                        {project.description || 'No description available.'}
                                      </p>

                                      <button 
                                        className="text-white border border-white px-4 py-2 text-xs md:text-sm rounded hover:bg-white hover:text-black transition"
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
                              );
                            })}
                          </div>
                        ) : (
                          <div className="text-center text-gray-500 py-12">
                            No projects available
                          </div>
                        )}

                    </div>
                </section>

                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-[589px] mx-auto">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">What people say about us</h2>
                            <p className="text-gray-600">
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page
                            </p>
                        </div>

                        {testimonialsLoading ? (
                          <div className="flex gap-6 overflow-x-auto w-full p-5">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg min-w-[280px] animate-pulse flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                              </div>
                            ))}
                          </div>
                        ) : testimonials.length > 0 ? (
                          <div className="flex gap-6 overflow-x-auto w-full p-5 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                            <style>
                              {`
                                .scrollbar-hide::-webkit-scrollbar {
                                  display: none;
                                }
                              `}
                            </style>
                            {testimonials.map((testimonial) => (
                              <div key={testimonial.id} className="bg-white border border-gray-200 p-6 rounded-lg min-w-[280px] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0">
                                <div className="flex items-center mb-4">
                                  {testimonial.image ? (
                                    <img 
                                      src={testimonial.image} 
                                      alt={testimonial.name} 
                                      className="w-12 h-12 rounded-full object-cover"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = 'none'
                                        const parent = target.parentElement
                                        if (parent) {
                                          const fallback = document.createElement('div')
                                          fallback.className = 'w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-semibold'
                                          fallback.textContent = testimonial.name.charAt(0).toUpperCase()
                                          parent.appendChild(fallback)
                                        }
                                      }}
                                    />
                                  ) : (
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-semibold">
                                      {testimonial.name.charAt(0).toUpperCase()}
                                    </div>
                                  )}
                                </div>
                                {testimonial.rating > 0 && (
                                  <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                      <FaStar
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < testimonial.rating
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                )}
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                  "{testimonial.testimonial}"
                                </p>
                                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                {testimonial.role && (
                                  <p className="text-gray-500 text-xs">
                                    {testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center text-gray-500 py-8">No testimonials available</div>
                        )}
                    </div>
                </section>
            </Container>
        </div>
        <Footer />
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
    </div>
  )
}

export default Projects