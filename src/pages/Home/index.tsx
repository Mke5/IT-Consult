import { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Container from '../../components/common/Container'
import HeroImage from '../../assets/images/heroimmmmg.svg'
import Her0Inage3 from '../../assets/images/HeroImage3.png'
import Her0Inage4 from '../../assets/images/HeroImage4.png'
import Her0Inage2 from '../../assets/images/HeroImage2.svg'
import oval from '../../assets/images/Oval.svg'
import Map from '../../assets/images/HugeGlobal.svg'
import { PiHandshakeFill } from 'react-icons/pi'
import usersIcon from '../../assets/images/UsersFour.svg'
import dumbelIcon from '../../assets/images/Barbell.svg'
import wordTextIcon from '../../assets/images/ArticleNyTimes.svg'
import Monitor from '../../assets/images/Monitor.svg'
import Star from '../../assets/images/Star.svg'
import { api, type Service, type Testimonial, type Partner } from '../../lib/api'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const HomePage = () => {
  const services:Service[] = [
    {
      id: 1,
      title: "Research and Evaluation",
      description: "Driving Evidence-Based Development",
      icon: Star,
      category: "research",
      serviceId: "research-1",
    },
    {
      id: 2,
      title: "System Strengthening & Organization Development",
      description: "Enhancing Institutional Capacity",
      icon: Star,
      category: "systems",
      serviceId: "sys-1",
    },
    {
      id: 3,
      title: "Professional Development and Career Strengthening",
      description: "Empowering Future-Ready Professionals",
      icon: Monitor,
      category: "professional",
      serviceId: "pro-1",
    },
    {
      id: 4,
      title: "Information Technology Solutions",
      description: "From concept to launch",
      icon: Monitor,
      category: "it",
    },
  ]

  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)

  const images = [Her0Inage2, Her0Inage4, Her0Inage3];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  // const prevSlide = () => {
  //   setCurrent((current - 1 + images.length) % images.length);
  // };
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, testimonialsData, partnersData] = await Promise.all([
          api.getServices(),
          api.getTestimonials(),
          api.getPartners(),
        ])
        console.log('Services fetched:', servicesData)
        console.log('Testimonials fetched:', testimonialsData)
        console.log('Partners fetched:', partnersData)
        // setServices(servicesData)
        setTestimonials(testimonialsData)
        setPartners(partnersData)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Set empty arrays on error so UI shows "No services available" instead of loading forever
        // setServices([])
        setTestimonials([])
        setPartners([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      
      <main className="grow w-full">
        <Container>
          {/* Hero section */}
          <section className=''>
            <div className='w-full'>
              <div className='flex flex-col lg:flex-row items-center lg:items-stretch'>
                {/* Text Block */}
                <div className='w-full lg:w-[60%] space-y-5 sm:space-y-2 lg:space-y-16 flex flex-col justify-center py-10'>
                  <div className='space-y-5 sm:space-y-5'>
                    <h1 className='text-2xl font-medium leading-tight sm:leading-snug lg:leading-tight text-gray-900'>
                      At MyIT CONSULT LTD, We turn data into decisions by partnering with governments, organsations, and enterprises to deliver evidence-driven strategy, institutional strengthening, and digital transformation that improves outcomes through research, MERL, Third-Party Monitoring (TPM), institutional development and support, capacity building and training, policy innovation and information Technology solutions.
                    </h1>
                    <Link to={'/about-us'}>
                      <button className="bg-[#e4010c] text-white px-12  py-2 rounded-2xl hover:bg-red-700 active:scale-95 transition-all duration-200 cursor-pointer text-sm sm:text-sm font-[inter] font-medium shadow-md hover:shadow-lg w-fit">
                        Learn More
                      </button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 lg:flex lg:flex-row sm:mt-0 lg:divide-x lg:divide-gray-200">
  
                    {/* Stat 1 */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:px-4 xl:px-6 py-4 transition-colors duration-200">
                      <img
                        src={dumbelIcon}
                        className="flex-none p-2 lg:p-2 bg-[#FFECEC] h-10 w-10 rounded-full"
                      />
                      <div>
                        <div className="text-xl sm:text-[25px] font-[Rubik] font-bold text-[#e4010c]">
                          90+
                        </div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-sm sm:text-[20px]">
                          Workforce
                        </div>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:px-4 xl:px-6 py-4 transition-colors duration-200">
                      <PiHandshakeFill className="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-11 w-11 rounded-full" />
                      <div>
                        <div className="text-xl sm:text-[25px] font-[Rubik] font-bold text-[#e4010c]">
                          40+
                        </div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-sm sm:text-[20px]">
                          Partnership
                        </div>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:px-4 xl:px-6 py-4 transition-colors duration-200">
                      <img
                        src={usersIcon}
                        className="flex-none p-2 lg:p-3 bg-[#FFECEC] h-11 w-11 rounded-full"
                      />
                      <div>
                        <div className="text-xl sm:text-[25px] font-[Rubik] font-bold text-[#e4010c]">
                          1000+
                        </div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-sm sm:text-[20px]">
                          Trainings
                        </div>
                      </div>
                    </div>

                    {/* Stat 4 (NO BORDER ON LAST) */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:px-4 xl:px-6 py-4 transition-colors duration-200">
                      <img
                        src={wordTextIcon}
                        className="flex-none p-2 lg:p-3 bg-[#FFECEC] h-11 w-11 rounded-full"
                      />
                      <div>
                        <div className="text-xl sm:text-[25px] font-[Rubik] font-bold text-[#e4010c]">
                          60+
                        </div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-sm sm:text-[20px]">
                          Writeups
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className='w-full lg:w-[40%] relative overflow-hidden p-4'>
                  <img src={HeroImage} alt="MyIT Consult Services" className='w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105'/>
                  <img src={oval} alt='decoration' className='absolute w-20 sm:w-28 lg:w-36 bottom-2/6 sm:bottom-10 lg:bottom-1/4 left-1/8 translate-x-1/5 lg:left-auto lg:right-3/5 lg:translate-x-0 pointer-events-none'/>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-12 sm:py-16 lg:py-20 xl:py-20">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full max-w-156 mx-auto">
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={images[current]}
                      alt={`Slide ${current + 1}`}
                      className="w-full h-96 sm:h-112 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <span
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                          index === current ? "bg-red-600" : "bg-white/60"
                        }`}
                        onClick={() => setCurrent(index)}
                      ></span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">About Us</h2>
                  <p className="text-[17px] sm:text-[20px] lg:text-md text-black leading-relaxed font-[inter] text-justify">
                    MyIT Consult Ltd is a dynamic social enterprise and development consultancy firm, Nigerian-rooted with an expanding African footprint, dedicated to fostering sustainable and inclusive development. Established in 2016, we specialize in delivering meticulous data, information management services and evidence driven analysis, particularly within crisis, disaster, and displacement contexts.
                  </p>
                  <p className="text-[17px] sm:text-[20px] lg:text-md text-black leading-relaxed text-justify">
                    We work with a muliti-disciplinary team of strategists, data analysts, technologists, and trainers to co-design practical solutions that translate ideas into actionable interventions. Through tailored insights and applied expertise, we empower clients make informd decisions, deliver precise assistance to vulnerable populations, shape policy, strengthen institutions, and drive societal development by equipping individuals and organisations with essential knowledge, information, and skills. 
                  </p>
                  {/* <p className="text-[17px] sm:text-[20px] lg:text-md text-black leading-relaxed text-justify">
                    We serve a wide array of clients, including individuals, agencies, government ministries, UN bodies, development organizations, NGOs, foundations, and businesses. Our expertise spans-data collection and management, Monitoring, Evaluation, Research and Learning (MERL), Third-Party Monitoring (TPM), institutional development and support, capacity building an training, and Information Technology solutions. We also deliver policy innovation, leadership development, and digital transformation services, with innnovation at the core of every engagement
                  </p> */}
                   {/* <p className="text-[17px] sm:text-[20px] lg:text-md text-black leading-relaxed text-justify">
                    Through platforms like the MYIT Digital Academy and MYIT Insight Series, we equip professionals and institutions with the tools, skills, and frameworks they need to thrive in a dynamic world, strengthening performance, accelerating impact, and enabling sustainable results.
                  </p> */}

                  <Link to={'/about-us'}>
                    <button className="bg-[#e4010c] text-white px-12  py-2 rounded-2xl hover:bg-red-700 active:scale-95 transition-all duration-200 cursor-pointer text-sm sm:text-sm font-[inter] font-medium shadow-md hover:shadow-lg w-fit">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>


          {/* What We Do Section */}
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full">
              <div className="text-center mb-10 sm:mb-12 lg:mb-16 xl:mb-20">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-3">What We Do</h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-[inter]">
                  We help organisations strengthen their systems, build capacity, and deliver better results through research and practical digital solutions
                </p>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white shadow-md rounded-xl p-5 sm:p-6 lg:p-8 animate-pulse">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : services.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-[inter] ">
                  {services.map((service) => (
                    <div key={service.id} onClick={() => {
                      navigate(
                        `/what-we-do#cate`, {
                          state: { 
                            category: service.category, 
                            serviceId: service.serviceId 
                          }
                        }
                      )
                    }} className="bg-white shadow-md p-5 text-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-[#FFE5E5] rounded-lg mb-4 sm:mb-5 flex items-center justify-center transition-colors duration-300">
                        <img src={service.icon} alt="" className='w-6 h-6 text-[#E4010C] group-hover:text-white transition-colors duration-300' />
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{service.description || ''}</p>

                      <div className='w-12 h-12 bg-[#E4010C] mt-3 rounded-full flex items-center justify-center'>
                        <ArrowUpRight size={38} color='white'/>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">No services available</div>
              )}
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 max-w-xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-3">
                  Working With Organizations Around the World
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-[inter]">
                  We help organizations improve systems, build capacity, and drive impact wherever they operate
                </p>
              </div>

              <div className="h-full rounded-lg overflow-hidden mb-8 sm:mb-10 lg:mb-12 flex justify-center">
                <img src={Map} alt="Global Map" className='w-3xl h-full object-center'/>
              </div>

              {/* Partner Logos - Grid Layout */}
              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-12 sm:h-16 lg:h-[78px] xl:h-24 w-24 bg-gray-200 animate-pulse rounded"></div>
                  ))}
                </div>
              ) : partners.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                  {partners.map((partner) => (
                    <div key={partner.id} className="h-12 sm:h-16 lg:h-[78px] xl:h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                      {partner.logo ? (
                        <img src={partner.logo} alt={partner.name} className='h-full w-auto object-contain'/>
                      ) : (
                        <span className="text-gray-400 text-sm">{partner.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">No partners available</div>
              )}
            </div>
          </section>


          {/* Testimonials Section */}
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
            <div className="w-full">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-3">What people say about us</h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-[inter]">
                  With lots of unique blocks, you can easily build a page without coding. Build your next landing page
                </p>
              </div>

              {loading ? (
                <div className="flex gap-4 sm:gap-6 overflow-x-auto w-full pb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] animate-pulse shrink-0">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : testimonials.length > 0 ? (
                <div className="flex gap-4 sm:gap-6 overflow-x-auto w-full pb-4 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                  <style>
                    {`
                      .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                      }
                    `}
                  </style>
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shrink-0">
                      <div className="flex items-center mb-4">
                        {testimonial.image ? (
                          <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"/>
                        ) : (
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                        "{testimonial.testimonial}"
                      </p>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}</p>
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
      </main>

      <Footer />
    </main>
  )
}

export default HomePage