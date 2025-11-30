import Container from '@/components/common/Container';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import RatingStars from '@/components/ui/Start';
import Image1 from '../../assets/images/firstimage.webp'
import Image2 from '../../assets/images/secondimage.webp'
import { FaClock, FaUser } from 'react-icons/fa';
import { BsFileEarmarkTextFill } from "react-icons/bs";

const ResourceDetails = () => {
  
  const categories = [
    { name: '4:00PM 6:00PM', count: 'Start Date' },
    { name: 'Enrolled', count: '100' },
    { name: 'Lectures', count: '80' },
    { name: 'Skill Level', count: 'Basic' },
    { name: 'Class Day', count: 'Monday - Friday' },
    { name: 'Language', count: 'English' },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className='grow w-full'>
        <Container>
          {/* Main Content */}
          <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Left Column - Main Content */}
              <div className="font-[Inter] lg:col-span-2">
                {/* Featured Image */}
                <div className="mb-6">
                  <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden">
                    <img src={Image1} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Article Meta */}
                <div className="mb-4">
                  <RatingStars rating={4.7} />
                </div>

                {/* Article Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Basic Monitoring & Evaluation, Research And Learning
                </h1>

                {/* Article Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <BsFileEarmarkTextFill className="w-4 h-4 text-[#E4010C]" />
                    <span>Lesson 10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-4 h-4 text-[#E4010C]" />
                    <span>9:00AM - 01:00PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="w-4 h-4 text-[#E4010C]" />
                    <span>Students 20+</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mb-8 flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-red-600 text-white px-4 sm:px-6 py-2 rounded text-sm hover:bg-red-700">
                    Overview
                  </button>

                  <button className="flex items-center gap-2 bg-[#FFE5E5] text-[#0E2A46] px-4 sm:px-6 py-2 rounded text-sm 
                    hover:bg-red-600 hover:text-white">
                    Curriculum
                  </button>

                  <button className="flex items-center gap-2 bg-[#FFE5E5] text-[#0E2A46] px-4 sm:px-6 py-2 rounded text-sm 
                    hover:bg-red-600 hover:text-white">
                    Instructor
                  </button>

                  <button className="flex items-center gap-2 bg-[#FFE5E5] text-[#0E2A46] px-4 sm:px-6 py-2 rounded text-sm 
                    hover:bg-red-600 hover:text-white">
                    Reviews
                  </button>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">What Will I Learn From This Course</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-[#FFE5E5] rounded-lg p-4 mb-6 font-[Inter]">
                  <div>
                    <div className="rounded-full mx-auto mb-4 w-full h-full">
                      <img src={Image2} className='object-contain w-full h-full rounded-md'/>
                    </div>
                    <span className='flex justify-between'>
                      <h3 className="mb-2 text-sm sm:text-base">Course Fee</h3>
                      <h3 className="text-sm sm:text-base">₦250k</h3>
                    </span>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 text-center sm:text-left">
                      29 Days-Money-Back Guarantee
                    </p>
                    <button className="w-full bg-red-600 text-white py-3 font-medium rounded text-sm hover:bg-red-700">
                      Buy Now
                    </button>
                  </div>
                  <div className="mt-6 mb-6">
                    <div className="space-y-4">
                      {categories.map((category, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <p className="text-[#373330] cursor-default">{category.name}</p>
                          <span className="text-[#373330]">{category.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* What People Say About Us */}
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
      </div>
      <Footer />
    </div>
  )
}

export default ResourceDetails