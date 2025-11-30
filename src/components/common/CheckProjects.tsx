import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const CheckProjects = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-6 text-center">
          
          {/* Arrows hidden on mobile */}
          <div className="hidden md:flex w-16 h-16 bg-red-600 rounded-full items-center justify-center">
            <FaArrowLeft size={28} className="text-white" />
          </div>

          <div className="flex flex-col justify-center text-center max-w-lg">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
              Check our Projects
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Take a look at some of our recent projects to see how we've helped
              Organizations, Governments and Agencies.
            </p>
          </div>

          <div className="hidden md:flex w-16 h-16 bg-red-600 rounded-full items-center justify-center">
            <FaArrowRight size={28} className="text-white" />
          </div>

        </div>

        {/* Horizontal Scroll for Mobile */}
        <div className="flex overflow-x-auto gap-6 flex-nowrap pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >

          {/* Card Template */}
          {[ 
            { bg: "bg-blue-900", text: "text-blue-200" },
            { bg: "bg-red-600", text: "text-red-100" },
            { bg: "bg-blue-900", text: "text-blue-200" },
            { bg: "bg-red-600", text: "text-red-100" }
          ].map((card, i) => (
            <div
              key={i}
              className={`${card.bg} text-white rounded-lg overflow-hidden flex-shrink-0 
              w-[85%] md:w-[450px]`}   // <-- FULL responsive width
            >
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="bg-gray-300 rounded h-24 md:h-32"></div>
                  <div className="bg-gray-300 rounded h-24 md:h-32"></div>
                  <div className="bg-gray-300 rounded h-24 md:h-32"></div>
                  <div className="bg-gray-300 rounded h-24 md:h-32"></div>
                </div>

                <div className="py-6 px-4 md:py-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Project Name
                  </h3>
                  <p className={`${card.text} mb-4 md:mb-6 text-sm`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-xs md:text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default CheckProjects
