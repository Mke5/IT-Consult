import Container from '@/components/common/Container';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Calendar, Share2, Tag, User } from 'lucide-react';
import React, { useState } from 'react'

const Resources = () => {

  const articles = [
    {
      id: 1,
      title: 'The challenges and opportunities of working in the tech industry as a young person',
      description: 'The role of mentors and support networks in helping young people succeed in the tech industry',
      image: 'bg-gradient-to-br from-gray-300 to-gray-400'
    },
    {
      id: 2,
      title: 'The challenges and opportunities of working in the tech industry as a young person',
      description: 'The role of mentors and support networks in helping young people succeed in the tech industry',
      image: 'bg-gradient-to-br from-gray-300 to-gray-400'
    },
    {
      id: 3,
      title: 'The challenges and opportunities of working in the tech industry as a young person',
      description: 'The role of mentors and support networks in helping young people succeed in the tech industry',
      image: 'bg-gradient-to-br from-gray-300 to-gray-400'
    }
  ];

  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <div className='grow w-full'>
        <Container>
        <section className="py-10">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#E4010C]">Resources</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Featured Article */}
              <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Featured Image */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 overflow-hidden">
                    {/* Tech/AI themed overlay effect */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-20 left-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      Algorithmic Accountability and Legal Frameworks: Assessing Liability and Responsibility in Artificial Intelligence Systems.
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The rapid advancement of artificial intelligence (AI) has led to its integration into various aspects of our lives, from autonomous vehicles and healthcare to financial systems and online content recommendations. While AI promises significant benefits, it also raises...
                    </p>
                    <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 font-medium">
                      View More
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Article List */}
              <div className="space-y-6">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className={`${article.image} w-full sm:w-48 h-48 sm:h-auto flex-shrink-0`}>
                        {/* Placeholder image */}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {article.description}
                          </p>
                        </div>
                        <button className="border-2 border-red-600 text-red-600 px-5 py-2 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 font-medium text-sm self-start">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
    </main>
  )
}

export default Resources