import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Container from '../../components/common/Container';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import CheckProjects from '@/components/common/CheckProjects';
import { useState } from 'react';

const WhatWeDo = () => {
    const [openItem, setOpenItem] = useState<string>("item-1");
    
    const handleChange = (value: string) => {
    setOpenItem((prev) => (prev === value ? '' : value));
    };
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>    

            <div className='grow w-full'>
                <Container>
                    {/* What We Do Section */}
                    <section className="py-6 sm:py-8 lg:py-10 flex flex-col gap-6 sm:gap-8 lg:gap-10">
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="text-center mb-2 sm:mb-3">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">What We DO</h2>
                            </div>
                            
                            <div className="max-w-4xl mx-auto">
                            <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed font-[Poppins] px-4 sm:px-0">
                                At MyIT Consult Ltd, we offer a dynamic suite of services designed institutional capacity, drive evidence-based decision-making, and empower professionals with skills and insights needed for success.
                            </p>
                            </div>
                        </div>
                        
                        <div className='flex gap-3 sm:gap-4 lg:gap-5 px-4 py-2 mx-auto overflow-x-scroll whitespace-nowrap max-w-[95%] sm:max-w-full' style={{ scrollbarWidth: "none" }}>
                            <style>
                            {`
                                div::-webkit-scrollbar {
                                display: none;
                                }
                            `}
                            </style>
                            <button className='px-4 sm:px-5 py-2 sm:py-2.5 bg-[#E4010C] rounded-sm font-[Rubik] font-medium text-white text-xs sm:text-sm flex-shrink-0'>
                                Research & Evaluation
                            </button>
                            <button className='px-4 sm:px-5 py-2 sm:py-2.5 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm flex-shrink-0'>
                                Systems Strengthening & Organization Control Development
                            </button>
                            <button className='px-4 sm:px-5 py-2 sm:py-2.5 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm flex-shrink-0'>
                                Professional Development & Career Strengthening
                            </button>
                            <button className='px-4 sm:px-5 py-2 sm:py-2.5 border border-[#818C96] rounded-sm font-[Rubik] font-medium text-[#818C96] text-xs sm:text-sm flex-shrink-0'>
                                Information Technology Solutions
                            </button>
                        </div>

                        <Accordion
                            type="single"
                            collapsible
                            value={openItem}
                            onValueChange={handleChange}
                            className="w-full max-w-6xl mx-auto space-y-3 px-2 sm:px-6"
                        >

                            {/* ITEM 1 */}
                            <AccordionItem value="item-1" className='border border-[#818C96] rounded-3xl overflow-hidden'>
                                <AccordionTrigger
                                className="
                                    px-4 py-4 sm:px-6 sm:py-5 lg:px-10 w-full text-left flex items-start sm:items-center justify-between gap-4 bg-white data-[state=open]:bg-red-600 data-[state=open]:text-white
                                "
                                >
                                    <div className="flex items-center gap-3 justify-center">
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                                            01
                                        </span>
                                        <span className="text-xl sm:text-xl leading-snug">
                                           Impact & Rapid Need Assessment
                                        </span>
                                    </div>

                                <span className={` flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl font-bold rounded-full border leading-none shrink-0 ${openItem !== 'item-1' ? 'bg-[#F3F3F3]' : '' }`}>
                                    {openItem === "item-1" ? "-" : "+"}
                                </span>
                                </AccordionTrigger>

                                <AccordionContent
                                className="
                                    px-4 pb-5 pt-2
                                    sm:px-6
                                    lg:px-10
                                    text-base sm:text-md
                                    leading-relaxed
                                    flex flex-col gap-4
                                    bg-red-50/60 data-[state=open]:bg-red-600
                                    text-white
                                    transition-colors
                                "
                                >
                                <p>
                                    We Provide comprehensive research, monitoring, and evaluation services to ensure programs are strategically designed, effectively implemented, and impactful. Our exprtise include:
                                    <ul className="list-disc pl-6 space-y-2">
                                    <li>Impact Assessment & Programs Evaluations: Maeasuring, ensuring accountability, and optimizing program strategies.</li>
                                    <li>Theory of Change & Result-Based Management: Designing frameworks that drive sustainable outcomes</li>
                                    <li>Humanitarian Response & Rapid Needs Assessments: Supporting organizations in crisis settings to enhance resillience and emergency response</li>
                                    </ul>
                                </p>
                                <p>
                                    Through advanced analytics, participatory, and real-time insights, we empower clients to make informed decisions, optimize resources, and maximize their impact.
                                </p>
                                </AccordionContent>
                            </AccordionItem>

                            {/* ITEM 2 */}
                            <AccordionItem value="item-2" className='border border-[#818C96] rounded-3xl overflow-hidden'>
                                <AccordionTrigger
                                className="
                                    px-4 py-4 sm:px-6 sm:py-5 lg:px-10 w-full text-left flex items-start sm:items-center justify-between gap-4 bg-white data-[state=open]:bg-red-600 data-[state=open]:text-white
                                "
                                >
                                    <div className="flex items-center gap-3 justify-center">
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                                            02
                                        </span>
                                        <span className="text-xl sm:text-xl leading-snug">
                                           Baseline, Midline, and Endline Evaluations
                                        </span>
                                    </div>
                                    <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl font-bold rounded-full border leading-none shrink-0 ${openItem !== 'item-2' ? 'bg-[#F3F3F3]' : '' }`}>
                                        {openItem === "item-2" ? "-" : "+"}
                                    </span>
                                </AccordionTrigger>

                                <AccordionContent
                                    className="
                                        px-4 pb-5 pt-2
                                        sm:px-6
                                        lg:px-10
                                        text-base sm:text-md
                                        leading-relaxed
                                        flex flex-col gap-4
                                        bg-red-50/60 data-[state=open]:bg-red-600
                                        text-white
                                        transition-colors
                                    "
                                >
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore debitis reprehenderit! Quisquam in incidunt quasi atque assumenda deleniti obcaecati nemo, minima est dolore voluptate corporis quos odit commodi! Provident molestias iusto deserunt eaque aperiam tempora amet dolor facere magnam sequi ad, sint praesentium reiciendis delectus blanditiis nam sunt sed.
                                </p>
                                </AccordionContent>
                            </AccordionItem>

                            {/* ITEM 3 */}
                            <AccordionItem value="item-3" className='border border-[#818C96] rounded-3xl overflow-hidden'>
                                <AccordionTrigger
                                className="
                                    px-4 py-4 sm:px-6 sm:py-5 lg:px-10 w-full text-left flex items-start sm:items-center justify-between gap-4 bg-white data-[state=open]:bg-red-600 data-[state=open]:text-white
                                "
                                >

                                    <div className="flex items-center gap-3 justify-center">
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                                            03
                                        </span>
                                        <span className="text-xl sm:text-xl leading-snug">
                                           Third-Party Monitoring
                                        </span>
                                    </div>

                                <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl font-bold rounded-full border leading-none shrink-0 ${openItem !== 'item-3' ? 'bg-[#F3F3F3]' : '' }`}>
                                    {openItem === "item-3" ? "-" : "+"}
                                </span>
                                
                                </AccordionTrigger>

                                <AccordionContent
                                    className="
                                        px-4 pb-5 pt-2
                                        sm:px-6
                                        lg:px-10
                                        text-base sm:text-md
                                        leading-relaxed
                                        flex flex-col gap-4
                                        bg-red-50/60 data-[state=open]:bg-red-600
                                        text-white
                                        transition-colors
                                    "
                                >
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                                </p>
                                </AccordionContent>
                            </AccordionItem>

                            {/* ITEM 4 */}
                            <AccordionItem value="item-4" className='border border-[#818C96] rounded-3xl overflow-hidden'>
                                <AccordionTrigger
                                    className="
                                        px-4 py-4 sm:px-6 sm:py-5 lg:px-10 w-full text-left flex items-start sm:items-center justify-between gap-4 bg-white data-[state=open]:bg-red-600 data-[state=open]:text-white
                                    "
                                >
                                    <div className="flex items-center gap-3 justify-center">
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                                            04
                                        </span>
                                        <span className="text-xl sm:text-xl leading-snug">
                                           Media Monitoring
                                        </span>
                                    </div>

                                    <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl font-bold rounded-full border leading-none shrink-0 ${openItem !== 'item-4' ? 'bg-[#F3F3F3]' : '' }`}>
                                    {openItem === "item-4" ? "-" : "+"}
                                    </span>
                                    
                                </AccordionTrigger>

                                <AccordionContent
                                    className="
                                        px-4 pb-5 pt-2
                                        sm:px-6
                                        lg:px-10
                                        text-base sm:text-md
                                        leading-relaxed
                                        flex flex-col gap-4
                                        bg-red-50/60 data-[state=open]:bg-red-600
                                        text-white
                                        transition-colors
                                    "
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>


                            {/* ITEM 5 */}
                            <AccordionItem value="item-5" className='border border-[#818C96] rounded-3xl overflow-hidden'>
                                <AccordionTrigger
                                    className="
                                        px-4 py-4 sm:px-6 sm:py-5 lg:px-10 w-full text-left flex items-start sm:items-center justify-between gap-4 bg-white data-[state=open]:bg-red-600 data-[state=open]:text-white
                                    "
                                >
                                    <div className="flex items-center gap-3 justify-center">
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                                            05
                                        </span>
                                        <span className="text-xl sm:text-xl leading-snug">
                                           Scoping Study
                                        </span>
                                    </div>

                                    <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl font-bold rounded-full border leading-none shrink-0 ${openItem !== 'item-5' ? 'bg-[#F3F3F3]' : '' }`}>
                                    {openItem === "item-5" ? "-" : "+"}
                                    </span>
                                    
                                </AccordionTrigger>

                                <AccordionContent
                                    className="
                                        px-4 pb-5 pt-2
                                        sm:px-6
                                        lg:px-10
                                        text-base sm:text-md
                                        leading-relaxed
                                        flex flex-col gap-4
                                        bg-red-50/60 data-[state=open]:bg-red-600
                                        text-white
                                        transition-colors
                                    "
                                >
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            {/* ITEM 6 */}
                            <AccordionItem value="item-6" className='border border-[#818C96] rounded-3xl overflow-hidden'>
                                <AccordionTrigger
                                    className="
                                        px-4 py-4 sm:px-6 sm:py-5 lg:px-10 w-full text-left flex items-start sm:items-center justify-between gap-4 bg-white data-[state=open]:bg-red-600 data-[state=open]:text-white
                                    "
                                >
                                    <div className="flex items-center gap-3 justify-center">
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                                            06
                                        </span>
                                        <span className="text-xl sm:text-xl leading-snug">
                                           Target Audience Analysis
                                        </span>
                                    </div>

                                <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl font-bold rounded-full border leading-none shrink-0 ${openItem !== 'item-6' ? 'bg-[#F3F3F3]' : '' }`}>
                                    {openItem === "item-6" ? "-" : "+"}
                                </span>
                                
                                </AccordionTrigger>

                                <AccordionContent
                                    className="
                                        px-4 pb-5 pt-2
                                        sm:px-6
                                        lg:px-10
                                        text-base sm:text-md
                                        leading-relaxed
                                        flex flex-col gap-4
                                        bg-red-50/60 data-[state=open]:bg-red-600
                                        text-white
                                        transition-colors
                                    "
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </section>
                
                    <CheckProjects />
                </Container>
            </div>
            
            <Footer />
        </div>
    );

}
export default WhatWeDo