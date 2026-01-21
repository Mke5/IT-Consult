import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Container from '../../components/common/Container';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import CheckProjects from '@/components/common/CheckProjects';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type ServiceItem = {
    id: string;
    title: string;
    description: string;
};


export type ServiceCategory = {
    heading: string;
    services: ServiceItem[];
};


export type ServicesData = {
    [key: string]: ServiceCategory;
};

const SERVICES_DATA: ServicesData  = {
    research: {
        heading: "Research & Evaluation – Driving Evidence-Based Development",
        services: [
            {
                id: "research-1",
                title: "Impact & Rapid Needs Assessment",
                description: `Impact & Rapid Needs Assessment supports organizations and project teams to evaluate the effects of interventions or crises on target populations and to quickly identify their most pressing needs. This assessment ensures resources are allocated effectively and interventions are tailored to address specific challenges. MyIT Consult leverages advanced data analytics, digital tools, and participatory approaches to deliver rapid and accurate assessments. Our innovative methodologies enable clients to make data-driven decisions, respond swiftly to emerging needs, and maximize their impact in dynamic environments.`
            },
            {
                id: "research-2",
                title: "Baseline, Midline, and Endline Evaluations",
                description: `Baseline, Midline, and Endline Evaluations are systematic processes used to measure the progress and impact of programs and projects over time. These evaluations provide a structured framework for tracking changes, understanding effectiveness, and identifying areas for improvement. Under our Research and Evaluation services, MyIT Consult designs and implements robust evaluation frameworks using innovative tools and techniques. Our approach ensures that clients gain actionable insights to refine strategies, enhance program effectiveness, and demonstrate measurable results to stakeholders.`
            },
            {
                id: "research-3",
                title: "Third-party Monitoring",
                description: `Third-party Monitoring provides organizations and projects with independent unbiased assessment of project implementation, progress, and outcomes, offering stakeholders a credible and objective perspective. For organizations in the development sector, third-party monitoring is crucial as it builds trust with donors, beneficiaries, and partners by validating program results and identifying areas for improvement. At MyIT Consult, we specialize in delivering high-quality third-party monitoring services by leveraging advanced data collection tools, rigorous methodologies, and a commitment to impartiality. Our approach ensures that clients receive actionable insights to enhance program performance and demonstrate impact.`
            },
            {
                id: "research-4",
                title: "Scoping Study",
                description: `A Scoping Study aids organizations to identify key issues, stakeholders, and resources required for successful implementation. Scoping studies are essential for designing evidence-based programs that address real needs and avoid resource wastage. MyIT Consult excels in conducting comprehensive scoping studies by combining desk research, stakeholder consultations, and field assessments. Our innovative use of data analytics and participatory methods ensures that clients gain a clear understanding of the context, enabling them to design targeted and impactful interventions.`
            },
            {
                id: "research-5",
                title: "Target Audience Analysis",
                description: `Target Audience Analysis involves identifying and understanding the specific groups a program aims to reach, including their needs, preferences, and behaviors. This analysis is critical for designing interventions that resonate with the intended beneficiaries and achieve desired outcomes. MyIT Consult employs various tools to deliver precise target audience analysis. Our tailored approach helps clients craft strategies that effectively engage their audience, optimize resource allocation, and maximize program impact.`
            },
            {
                id: "research-6",
                title: "Media Monitoring",
                description: `Media Monitoring tracks and analyzes media coverage to assess public perception, identify trends, and measure the reach of communication campaigns. In the development sector, media monitoring is vital for understanding how programs are perceived and for identifying opportunities to amplify messaging. MyIT Consult offers innovative media monitoring solutions and analysis. Our services provide clients with real-time insights, enabling them to refine their communication strategies and enhance their visibility and credibility.`
            },
            {
                id: "research-7",
                title: "Outcome Harvesting",
                description: `Outcome Harvesting is a participatory evaluation method that identifies and documents the outcomes of a program by collecting evidence of change from stakeholders. It is particularly useful for complex interventions where outcomes are not predefined. MyIT Consult specializes in outcome harvesting by combining qualitative data collection with advanced analytical frameworks. Our approach helps clients capture the full spectrum of their program’s impact, providing valuable lessons for future initiatives and demonstrating accountability to stakeholders.`
            }
        ]
    },
    professional: {
        heading: "Professional Development & Career Strengthening – Empowering Future-Ready Professionals",
        services: [
            {
                id: "pro-1",
                title: "Introduction to Monitoring & Evaluation Course",
                description: `Introduction to Monitoring & Evaluation Course provides foundational knowledge and skills in the principles and practices of monitoring and evaluation (M&E) in the development sector. This course is designed for professionals seeking to understand how to measure program effectiveness, track progress, and ensure accountability. MyIT Consult offers an innovative and interactive learning experience, combining theoretical concepts with practical tools andreal-world case studies. Our course equips participants with the expertise to design robust M&E frameworks, collect and analyze data, and use findings to improve program outcomes, making it an essential resource for anyone aiming to enhance their impact in the development field.`
            },
            {
                id: "pro-2",
                title: "Introduction to Project Management",
                description: `Introduction to Project Management is a comprehensive course that covers the core principles, methodologies, and tools for effective project management. It is tailored for individuals or professionals looking to manage development projects efficiently, ensuring they are delivered on time, within budget, and with measurable results. MyIT Consult’s course stands out by integrating cutting-edge project management techniques with sector-specific insights. Through hands-on exercises and real-life scenarios, participants learn to plan, execute, and monitor projects successfully, empowering them to lead initiatives that drive sustainable change.`
            },
            {
                id: "pro-3",
                title: "Introduction to Project Management for Development Professionals",
                description: `At MyIT Consult Ltd, our Introduction to Project Management for Development Professionals course is designed to equip individuals with the foundational skills and knowledge needed to manage development projects effectively. This offering is tailored for professionals seeking to enhance their project management capabilities and ensure the successful implementation of development initiatives. Through interactive workshops, practical tools, and real-world case studies, participants gain a comprehensive understanding of key project management principles. Our training emphasizes the unique challenges of managing projects in the development sector, such as stakeholder engagement, resource optimization, and adaptive management. This course is ideal for individuals new to project management or those looking to refine their skills. MyIT Consult’s commitment to excellence ensures that participants leave with the tools and confidence to manage projects effectively, driving positive change in heir organizations and communities.`
            },
            {
                id: "pro-4",
                title: "Leadership & Strategy",
                description: `Our Leadership & Strategy Course focuses on developing the skills and mindset needed to lead teams and organizations effectively in the dynamic development sector. This training emphasizes strategic thinking, decision-making, and innovation to address complex challenges and achieve long-term goals. MyIT Consult’s approach to this training combines expert guidance with practical tools, enabling participants to inspire teams, foster collaboration, and implement strategies that deliver impactful results. We ensure that leaders are well-equipped to navigate uncertainties and drive transformative change in their organizations.`
            },
            {
                id: "pro-5",
                title: "Business Development",
                description: `Business Development provides professionals with the tools and strategies to identify opportunities, build partnerships, and secure funding for development initiatives. This course is essential for organizations iming to expand their reach and sustainability. MyIT Consult’s business development training offers a unique blend of theoretical knowledge and practical insights, helping participants craft compelling proposals, engage stakeholders, and create value-driven partnerships. Our innovative approach ensures that organizations can grow strategically while maintaining their commitment to impact.`
            },
            {
                id: "pro-6",
                title: "Career Guide Mentorship",
                description: `Career Guide Mentorship is a personalized program designed to support individuals and professionals in navigating their career paths in different sectors. We offer tailored advice, skill-building opportunities, and networking support to help individuals achieve their career goals. MyIT Consult’s mentorship program connects participants with experienced professionals who provide guidance, share insights, and help mentees unlock their potential. We prioritize individual growth and empower participants to build fulfilling and impactful careers.`
            },
        ]
    },
    systems: {
        heading: "Systems Strengthening & Organizational Development – Enhancing Institutional Capacity",
        services: [
            {
                id: "sys-1",
                title: "Organizational Capacity Assessment",
                description: `Organizational Capacity Assessment is a systematic process that evaluates an organization’s strengths, weaknesses, and areas for improvement across key functional areas such as governance, management, and operational efficiency. This assessment is critical for organizations in the development sector to enhance their effectiveness and sustainability. MyIT Consult delivers innovative capacity assessments by combining data-driven tools with participatory approaches. Our tailored frameworks help clients identify gaps, prioritize interventions, and build robust systems, ensuring they are well-equipped to achieve their mission and maximize their impact.`
            },
            {
                id: "sys-2",
                title: "Third-Party Recruitment",
                description: `Third-party recruitment involves engaging external experts to identify and onboard top talent to meet your organizational needs. This is essential for ensuring that organizations have the right skills and expertise to drive their initiatives forward. Through MyIT Consult’s extensive networks, rigorous screening processes, and sector-specific insights, we are able to support organizations to hire right. Our approach ensures that clients attract and retain high-performing professionals who align with their organizational goals and values, enhancing their capacity to deliver impactful programs.`
            },
            {
                id: "sys-3",
                title: "Corporate Team Building",
                description: `Corporate Team Building focuses on fostering collaboration, trust, and productivity within teams to enhance organizational performance. Effective team building is crucial for achieving program goals and maintaining morale in the development sector. MyIT Consult offers innovative team-building solutions, including workshops, retreats, and interactive activities tailored to the unique needs of each organization. Our approach strengthens communication, aligns team objectives, and creates a positive work culture, enabling teams to work cohesively toward shared goals.`
            },
            {
                id: "sys-4",
                title: "Performance Monitoring System",
                description: `Performance Monitoring System is a structured framework for tracking and evaluating the progress and outcomes of organizational activities. It ensures that programs are on track to meet their objectives and provides data for informed decision-making. MyIT Consult designs and implements performance monitoring systems that integrate real-time data collection, analysis, and reporting. Our solutions empower clients to measure success, identify bottlenecks, and optimize their operations, driving continuous improvement and accountability.`
            },
            {
                id: "sys-5",
                title: "Customized Reporting Dashboard",
                description: `Our Customized Reporting Dashboard is a user-friendly, data visualization tool that provides organizations with real-time insights into their performance and impact. It simplifies complex data into actionable information, enabling stakeholders to make informed decisions. MyIT Consult develops tailored dashboards that align with client’s specific needs, incorporating advanced analytics and interactive features. Our dashboards enhance transparency, streamline reporting, and support evidence-based decision-making, ensuring your organization caneffectively communicate its impact to stakeholders.`
            },
            {
                id: "sys-6",
                title: "Policy Planning,Analysis, and Development",
                description: `Policy Planning, Analysis, and Development involves creating, reviewing, and refining policies to ensure they align with organizational goals and sector best practices. This process is vital for organizations seeking to strengthen their institutional frameworks and drive sustainable change. MyIT Consult offers expert guidance in policy development, combining research, stakeholder engagement, and innovative tools. Our approach ensures that policies are evidence-based, inclusive, and adaptable, enabling organizations to navigate complex challenges and achieve their strategic objectives/goals.`
            }

        ]
    }
}

const WhatWeDo = () => {
    const location = useLocation();
    const [openItem, setOpenItem] = useState(() => {
        if (location.state?.serviceId) {
            return location.state.serviceId;
        }
        return "";
    });
    const [activeCategory, setActiveCategory] = useState(() => {
        if(location.state.category && SERVICES_DATA[location.state.category]){
            return location.state.category;
        }else{
            return "research"
        }
    });
    
    const handleAccordionChange = (value: string) => {
        setOpenItem(value);
    };
    
    const sectionRef = useRef<HTMLDivElement>(null);
    
    const getFirstServiceId = (category: string): string => {
        return SERVICES_DATA[category]?.services[0]?.id ?? "";
    };

    useEffect(() => {
        if (location.hash === '#cate') {
            const timer = setTimeout(() => {
                if (sectionRef.current) {
                    sectionRef.current.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
            
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>    

            <div className='grow w-full'>
                <Container>
                    {/* What We Do Section */}
                    <section id='cate' ref={sectionRef}  className="min-h-full py-6 sm:py-8 lg:py-10 flex flex-col gap-6 sm:gap-8 lg:gap-10">
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
                            {Object.keys(SERVICES_DATA).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => {
                                        setActiveCategory(key);
                                        setOpenItem(getFirstServiceId(key));
                                    }}
                                    className={`px-4 py-2 text-sm font-medium rounded-sm flex-shrink-0
                                    ${
                                        activeCategory === key
                                        ? "bg-[#E4010C] text-white"
                                        : "border border-[#818C96] text-[#818C96]"
                                    }
                                    `}
                                >
                                    {SERVICES_DATA[key].heading.split("–")[0]}
                                </button>
                            ))}
                        </div>

                        <Accordion
                            type="single"
                            collapsible
                            value={openItem}
                            onValueChange={handleAccordionChange}
                            className="w-full max-w-6xl mx-auto space-y-3 px-2 sm:px-6"
                        >

                            {/* ITEM 1 */}
                            {/* <AccordionItem value="item-1" className='border border-[#818C96] rounded-3xl overflow-hidden'>
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
                            </AccordionItem> */}

                            {/* ITEM 2 */}
                            {/* <AccordionItem value="item-2" className='border border-[#818C96] rounded-3xl overflow-hidden'>
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
                            </AccordionItem> */}

                            {/* ITEM 3 */}
                            {/* <AccordionItem value="item-3" className='border border-[#818C96] rounded-3xl overflow-hidden'>
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
                            </AccordionItem> */}

                            {/* ITEM 4 */}
                            {/* <AccordionItem value="item-4" className='border border-[#818C96] rounded-3xl overflow-hidden'>
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
                            </AccordionItem> */}


                            {/* ITEM 5 */}
                            {/* <AccordionItem value="item-5" className='border border-[#818C96] rounded-3xl overflow-hidden'>
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
                            </AccordionItem> */}

                            {/* ITEM 6 */}
                            {/* <AccordionItem value="item-6" className='border border-[#818C96] rounded-3xl overflow-hidden'>
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
                            </AccordionItem> */}

                            {SERVICES_DATA[activeCategory].services.map((service, index) => (
                                <AccordionItem
                                    key={service.id}
                                    value={service.id}
                                    className='border border-[#818C96] rounded-3xl overflow-hidden'
                                >
                                    <AccordionTrigger className="
                                        px-4 py-4 sm:px-6 sm:py-5 lg:px-10 w-full text-left flex items-start sm:items-center justify-between gap-4 bg-white data-[state=open]:bg-red-600 data-[state=open]:text-white
                                    ">
                                        <div className="flex gap-4 items-center">
                                        <span className="text-2xl font-semibold">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-lg">{service.title}</span>
                                        </div>

                                        <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl font-bold rounded-full border leading-none shrink-0 ${openItem !== service.id ? 'bg-[#F3F3F3]' : '' }`}>
                                        {openItem === service.id ? "-" : "+"}
                                        </span>
                                    </AccordionTrigger>

                                    <AccordionContent className="px-6 pb-5 pt-3 bg-red-50/60 text-white data-[state=open]:bg-red-600">
                                        <p className="whitespace-pre-line">{service.description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
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