import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Container from '../../components/common/Container'
import HeroImage from '../../assets/images/heroimmmmg.svg'
import Her0Inage2 from '../../assets/images/HeroImage2.svg'
import Map from '../../assets/images/HugeGlobal.svg'
import Image1 from '../../assets/images/image10.svg'
import Image2 from '../../assets/images/image12.svg'
import Image3 from '../../assets/images/image15.svg'
import Image4 from '../../assets/images/image16.svg'
import Image5 from '../../assets/images/image18.svg'
import Image6 from '../../assets/images/image19.svg'
import { PiHandshakeFill } from 'react-icons/pi'
import { FaDumbbell, FaUsers } from 'react-icons/fa'
import { HiOutlineStar } from 'react-icons/hi2'
import { SiLibreofficewriter } from 'react-icons/si'

const HomePage = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      
      <main className="grow w-full">
        <Container>
          {/* Hero section */}
          <section className='lg:py-10 py-6 sm:py-8'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-0'>
              <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-stretch'>
                {/* Text Block */}
                <div className='w-full lg:w-[60%] space-y-4 sm:space-y-6'>
                  <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mt-0 sm:mt-2 lg:mt-3'>
                    At MyIT Consult Ltd, we co-design evidence-based strategies and digital solutions that empower resilient institutions and inclusive growth.
                  </h1>
                  <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                    We bridge data, strategy and technology to help institutions and innovators deliver measureable, sustainable impact.
                  </p>

                  <button className="bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-red-700 transition cursor-pointer text-sm sm:text-base">
                    Learn More
                  </button>

                  <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-0">
                    {/* Stat 1 */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:border-r border-[#EEEFF2] lg:px-4 py-4">
                      <FaDumbbell className="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full"/>
                      <div>
                        <div className="text-xl lg:text-[25px] font-[Rubik] font-bold text-red-600">90+</div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-base lg:text-[20px]">Workforce</div>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:border-r border-[#EEEFF2] lg:px-4 py-4">
                      <PiHandshakeFill className="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full"/>
                      <div>
                        <div className="text-xl lg:text-[25px] font-[Rubik] font-bold text-red-600">40+</div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-base lg:text-[20px]">Partnership</div>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:border-r border-[#EEEFF2] lg:px-4 py-4">
                      <FaUsers className="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full"/>
                      <div>
                        <div className="text-xl lg:text-[25px] font-[Rubik] font-bold text-red-600">1000+</div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-base lg:text-[20px]">Trainings</div>
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:px-4 py-4">
                      <SiLibreofficewriter className="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full"/>
                      <div>
                        <div className="text-xl lg:text-[25px] font-[Rubik] font-bold text-red-600">60+</div>
                        <div className="text-gray-600 font-[Rubik] font-normal text-base lg:text-[20px]">Writeups</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-full lg:w-[30%] overflow-hidden flex justify-center lg:justify-start'>
                  <img src={HeroImage} alt="" className='h-[300px] sm:h-[380px] lg:h-[450px] w-auto object-contain'/>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img src={Her0Inage2} className=''/>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    MyIT Consult Ltd is a Nigerian‑rooted consulting firm with an expanding African footprint. We co‑design evidence‑based strategies, capacity‑building programmes and digital solutions to strengthen institutions and empower people. Our multi‑disciplinary team of strategists, data analysts, technologists and trainers works alongside governments, businesses and social enterprises to translate ideas into actionable interventions that foster inclusive growth.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We deliver research, monitoring and evaluation, policy innovation, leadership development and digital transformation services, with innovation at the core of every engagement. 
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Through platforms like the MYIT Digital Academy and MYIT Insight Series, we equip professionals and institutions with the tools they need to thrive in a dynamic world
                  </p>

                  <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 cursor-pointer transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>


          {/* What We Do Section */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What We Do</h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-full sm:max-w-[596px] mx-auto px-4 sm:px-0">
                  We help organisations strengthen their systems, build capacity, and deliver better results through research and practical digital solutions
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 text-start hover:shadow-lg transition">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 bg-[#FFE5E5] rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                    <HiOutlineStar size={24} className='sm:w-7 sm:h-7 text-[#E4010C]'/>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Research and Evaluations</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Driving Evidence-Based Development</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 text-start hover:shadow-lg transition">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 bg-[#FFE5E5] rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                    <HiOutlineStar size={24} className='sm:w-7 sm:h-7 text-[#E4010C]'/>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">System Strengthening & Organization Development</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Enhancing institutional capacity</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 text-start hover:shadow-lg transition">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 bg-[#FFE5E5] rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                    <HiOutlineStar size={24} className='sm:w-7 sm:h-7 text-[#E4010C]'/>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                    Professional Development and Career Strengthening
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Professional Development & Career Strengthening
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 text-start hover:shadow-lg transition">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 bg-[#FFE5E5] rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                    <HiOutlineStar size={24} className='sm:w-7 sm:h-7 text-[#E4010C]'/>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Information Technology Solutions</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    From concept to launch, we create stunning, user-centric websites.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-[555px] mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
                  Working With Organizations Around the World
                </h2>
                <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">
                  We help organizations improve systems, build capacity, and drive impact wherever they operate
                </p>
              </div>

              <div className="relative h-48 sm:h-64 lg:h-96 rounded-lg overflow-hidden mb-6 sm:mb-8">
                <div className="absolute inset-0">
                  <img src={Map} alt="Global Map" className='w-full h-full object-contain'/>
                </div>
              </div>

              {/* Partner Logos - Grid Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center gap-4 sm:gap-6 lg:gap-8 items-center">
                <div className="h-12 sm:h-16 lg:h-[78px] flex items-center justify-center">
                  <img src={Image3} alt="Partner 1" className='h-full w-auto object-contain'/>
                </div>
                <div className="h-12 sm:h-16 lg:h-[78px] flex items-center justify-center">
                  <img src={Image2} alt="Partner 2" className='h-full w-auto object-contain'/>
                </div>
                <div className="h-12 sm:h-16 lg:h-[78px] flex items-center justify-center">
                  <img src={Image6} alt="Partner 3" className='h-full w-auto object-contain'/>
                </div>
                <div className="h-12 sm:h-16 lg:h-[78px] flex items-center justify-center">
                  <img src={Image5} alt="Partner 4" className='h-full w-auto object-contain'/>
                </div>
                <div className="h-12 sm:h-16 lg:h-[78px] flex items-center justify-center">
                  <img src={Image1} alt="Partner 5" className='h-full w-auto object-contain'/>
                </div>
                <div className="h-12 sm:h-16 lg:h-[78px] flex items-center justify-center">
                  <img src={Image4} alt="Partner 6" className='h-full w-auto object-contain'/>
                </div>
              </div>
            </div>
          </section>


          {/* Testimonials Section */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-[589px] mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">What people say about us</h2>
                <p className="text-gray-600">
                  With lots of unique blocks, you can easily build a page without coding. Build your next landing page
                </p>
              </div>

              <div className="flex gap-6 overflow-x-auto w-full p-5" style={{ scrollbarWidth: "none" }}>
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <div key={item} className="bg-white border border-gray-200 p-6 rounded-lg min-w-[280px]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">Person Name</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </main>
  )
}

export default HomePage