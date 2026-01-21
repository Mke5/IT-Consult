// import Container from '@/components/common/Container';
// import Footer from '@/components/common/Footer';
// import Header from '@/components/common/Header';
// import Image1 from '../../assets/images/Screenshot 2025-11-28 230409.webp'
// import courseImg1 from '../../assets/images/CourseImg1.webp'
// import courseImg2 from '../../assets/images/CourseImg2.webp'
// import sectionImage from '../../assets/images/sectionImage.webp'
// import { Link } from 'react-router-dom';
// import CheckProjects from '@/components/common/CheckProjects';
// import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const SkillUpAcademyPage = () => {
    useEffect(() => {
        window.location.href = 'https://myitacademy.com.ng';
    }, [])
    return null
    // return (
    //     <div className="min-h-screen flex flex-col">
    //         <Header />
    //         {/* Hero Section */}
    //         <section className="bg-linear-to-br from-red-50 to-white mt-1 py-6 sm:py-8 lg:py-0">
    //             <Container>
    //                 <div className="px-4 sm:px-6 lg:px-4">
    //                     <div className="container mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
    //                         {/* LEFT */}
    //                         <div className="w-full lg:w-[60%] h-full pt-4 sm:pt-6 lg:pt-4 pb-6 lg:pb-0 flex flex-col gap-3 sm:gap-4 lg:gap-2 justify-center">
    //                         <div className="inline-block w-max text-[#E4010C] text-xs sm:text-sm lg:text-md px-2.5 font-medium sm:px-3 py-1 rounded-md bg-red-50 border border-red-100">
    //                             WELCOME TO SKILL-UP ACADEMY
    //                         </div>
    //                         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E4010C] leading-tight">
    //                             Achieving Your Dreams Through Education
    //                         </h1>
    //                         <p className="text-sm sm:text-base text-[#263238] leading-relaxed">
    //                             We are experienced in educationl platform and skilled strategies for the success of our online learning.
    //                         </p>
    //                         <div className="flex flex-row gap-3 sm:gap-4 mt-2">
    //                             <Link to={'/resources'}>
    //                                 <button className="bg-[#E4010C] text-white px-4 py-2 sm:py-1.5 rounded-full hover:bg-red-700 transition-all duration-200 text-sm sm:text-base flex items-center gap-3 group">
    //                                     <span>Find Course</span>

    //                                     <span className="h-10 w-10 flex items-center justify-center bg-[#F53838] rounded-full transition-transform duration-200 group-hover:translate-x-1">
    //                                         <ArrowRight />
    //                                     </span>
    //                                 </button>
    //                             </Link>
    //                         </div>
    //                         </div>

    //                         {/* RIGHT – FULL HEIGHT IMAGE */}
    //                         <div className="hidden lg:flex w-full lg:w-[40%] h-full rounded-lg overflow-hidden items-center justify-center">
    //                         <img 
    //                             src={Image1} 
    //                             alt="Skill-Up Academy" 
    //                             className="w-full h-auto lg:h-[500px] object-contain"
    //                         />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </section>
            
    //         <Container>

    //             {/* Programs Section */}
    //             <section className="py-10 sm:py-12 lg:py-16">
    //                 <div className="container mx-auto px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 lg:gap-10">
    //                     <div className="text-center">
    //                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Popular Courses</h2>
    //                         <p className="text-sm sm:text-base text-gray-600">Explore our comprehensive educational programs</p>
    //                     </div>

    //                     {/* Filter Buttons */}
    //                     <div className='flex gap-3 sm:gap-4 lg:gap-5 justify-start sm:justify-center overflow-x-auto pb-2' style={{ scrollbarWidth: "none" }}>
    //                         <style>
    //                             {`
    //                             div::-webkit-scrollbar {
    //                                 display: none;
    //                             }
    //                             `}
    //                         </style>
    //                         <button className='px-4 sm:px-5 py-2 sm:py-2.5 shrink-0 bg-[#E4010C] rounded-sm font-[Rubik] font-medium text-white text-xs sm:text-sm'>
    //                             All Programs
    //                         </button>
    //                         <button className='px-4 sm:px-5 py-2 sm:py-2.5 shrink-0 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm'>
    //                             Data Analysis
    //                         </button>
    //                         <button className='px-4 sm:px-5 py-2 sm:py-2.5 shrink-0 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm'>
    //                             MERL
    //                         </button>
    //                         <button className='px-4 sm:px-5 py-2 sm:py-2.5 shrink-0 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm'>
    //                             Python
    //                         </button>
    //                         <button className='px-4 sm:px-5 py-2 sm:py-2.5 shrink-0 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm'>
    //                             Leveraging AI
    //                         </button>
    //                         <button className='px-4 sm:px-5 py-2 sm:py-2.5 shrink-0 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm'>
    //                             Corporate Capacity Building
    //                         </button>
    //                         <button className='px-4 sm:px-5 py-2 sm:py-2.5 shrink-0 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm'>
    //                             SEO & Digital Visibility
    //                         </button>
    //                     </div>

    //                     {/* Course Cards */}
    //                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
    //                         {[
    //                             { title: 'Corporate Capacity Building Program', image: courseImg1, text: 'Product Management Masterclass: you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia', label: '1 - 28 July 2022' },
    //                             { title: 'SEO & Digital Visibility Training Program', image: courseImg2, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias culpa cumque pariatur nulla velit modi dolor sequi ab veniam nisi.', label: '1 - 28 July 2022' },
    //                             { title: 'Career Strenghtening and Mentorship Program', image: courseImg1, text: 'Lorem ipsum dolor, sit amet consectetur pariatur nulla velit modi dolor sequi ab veniam nisi.', label: '1 - 28 July 2022' },
    //                             { title: 'Basic Monitoring & Evaluation, Research & Learning', image: courseImg2, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit velit modi dolor sequi ab veniam nisi.', label: '1 - 28 July 2022' }
    //                         ].map((program, index) => (
    //                             <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
    //                                 <div className="h-40 sm:h-48 lg:h-40 relative">
    //                                     <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
    //                                     <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full text-gray-700 font-medium">
    //                                     {program.label}
    //                                     </span>
    //                                 </div>
    //                                 <div className="p-4 sm:p-5 lg:p-6">
    //                                     <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#E4010C] mb-2 leading-tight">{program.title}</h3>
    //                                     <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
    //                                     {program.text}
    //                                     </p>
    //                                     <Link to={'/resource/1'} className="text-red-600 text-xs sm:text-sm font-semibold hover:text-red-700 inline-flex items-center gap-1">
    //                                     Read More →
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </section>
            
    //             {/* Image Gallery Section */}
    //             <section className="py-16">
    //                 <div className="container mx-auto px-4">
    //                     <div className="flex flex-col md:flex-row gap-12 items-center">

    //                         {/* Image */}
    //                         <div className="w-full md:w-[40%] h-full rounded-lg overflow-hidden">
    //                             <img src={sectionImage} alt="" className="w-full" />
    //                         </div>

    //                         {/* Text */}
    //                         <div className="w-full md:w-[60%]">
    //                             <h2 className="text-3xl font-medium text-gray-900 mb-4">
    //                                 Learn & Grow Your Skills From Anywhere
    //                             </h2>

    //                             <p className="text-gray-600 mb-6">
    //                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //                             </p>

    //                             <div className="text-gray-600 flex flex-col md:flex-row gap-6">
    //                                 <p className="flex flex-col">
    //                                     <span className="font-medium">FLEXIBLE TIME AND COURSES</span>
    //                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                                 </p>

    //                                 <p className="flex flex-col">
    //                                     <span className="font-medium">FRIENDLY INSTRUCTORS</span>
    //                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>

            
    //             <CheckProjects />
            
    //             {/* What People Say About Us */}
    //             <section className="py-16">
    //                 <div className="container mx-auto px-4">
    //                     <div className="text-center mb-12">
    //                         <h2 className="text-3xl font-bold text-gray-900 mb-2">What people say about us</h2>
    //                         <p className="text-gray-600">Testimonials from our community</p>
    //                     </div>
                
    //                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    //                         {[1, 2, 3, 4].map((item) => (
    //                         <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
    //                             <div className="flex items-center mb-4">
    //                             <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
    //                             <div>
    //                                 <div className="font-semibold text-gray-900 text-sm">Person Name</div>
    //                                 <div className="text-gray-500 text-xs">Position</div>
    //                             </div>
    //                             </div>
    //                             <p className="text-gray-600 text-sm">
    //                             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    //                             </p>
    //                         </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </section>   
    //         </Container>

    //         <Footer />
    //     </div>
    // );
}

export default SkillUpAcademyPage