import Container from '@/components/common/Container'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

const Projects = () => {
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
                        <div className="flex flex-col gap-8 w-full">

                        {[
                            { bg: "bg-blue-900", text: "text-blue-200" },
                            { bg: "bg-red-600", text: "text-red-100" },
                            { bg: "bg-blue-900", text: "text-blue-200" },
                            { bg: "bg-red-600", text: "text-red-100" }
                        ].map((card, i) => (
                            <div
                                key={i}
                                className={`${card.bg} text-white rounded-lg overflow-hidden lg:w-[60%] w-full mx-auto`}
                            >
                                <div className="grid grid-cols-2">

                                    {/* Image Grid */}
                                    <div className="grid grid-cols-2 gap-2 p-4">
                                    {[1, 2, 3, 4].map((x) => (
                                        <div key={x} className="bg-gray-300 rounded aspect-square"></div>
                                    ))}
                                    </div>

                                    {/* Text Section */}
                                    <div className="py-6 px-4 md:py-10 md:px-8 flex flex-col justify-center">
                                    <h3 className="text-lg md:text-2xl font-bold mb-3">
                                        Project Name
                                    </h3>

                                    <p className={`${card.text} text-xs md:text-sm mb-4 md:mb-6`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </p>

                                    <button className="text-white border border-white px-4 py-2 text-xs md:text-sm rounded hover:bg-white hover:text-black transition">
                                        Learn More
                                    </button>
                                    </div>

                                </div>
                            </div>
                        ))}

                        </div>

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

export default Projects