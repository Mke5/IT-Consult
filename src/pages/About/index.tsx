import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer';
import { FaDumbbell, FaUsers } from 'react-icons/fa';
import { PiHandshakeFill } from 'react-icons/pi';
import { SiLibreofficewriter } from 'react-icons/si';
import Container from '../../components/common/Container';
import Hero1 from '../../assets/images/image20.webp'
import image1 from '../../assets/images/image14.svg'
import image2 from '../../assets/images/AboutUs.png'
import userImage1 from '../../assets/images/userImage.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import CheckProjects from '@/components/common/CheckProjects';

const AboutPage = () => {

  const team = [
    { name: "John Doe", role: "Senior Research Analyst", image: userImage1 },
    { name: "Sarah Ben", role: "Program Evaluation Expert", image: userImage1 },
    { name: "John Doe", role: "Senior Research Analyst", image: userImage1 },
    { name: "Sarah Ben", role: "Program Evaluation Expert", image: userImage1 },
    { name: "Sarah Ben", role: "Program Evaluation Expert", image: userImage1 },
    { name: "John Doe", role: "Senior Research Analyst", image: userImage1 },
    { name: "Michael Red", role: "Communications Lead", image: userImage1 },
    { name: "Michael Red", role: "Communications Lead", image: userImage1 },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className='grow w-full'>
        <Container>

          {/* Hero Section */}
          <section className="w-full p-6 sm:p-10">
            <div className="container mx-auto">

              {/* Stack on mobile, row on desktop */}
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">

                {/* Left Image (Stacked on mobile) */}
                <div className="w-full lg:w-[40%] overflow-hidden">
                  <img src={Hero1} className="w-full h-full object-cover" />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-[60%]">

                  {/* ABOUT US label */}
                  <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal text-[#e4010c] font-['Sora'] leading-3 sm:leading-4 lg:leading-[18px] uppercase mb-3">
                    ABOUT US
                  </p>

                  {/* Small icon image */}
                  <img 
                    src={image1}
                    className="w-14 sm:w-16 lg:w-20 object-contain mb-3"
                  />

                  {/* Heading */}
                  <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0e2a46] font-['Poppins'] leading-[30px] sm:leading-[38px] lg:leading-[49px] capitalize w-full mb-3">
                    <span>Empowering Organisations. Driving </span>
                    <span className="text-[#e4010c]">Impact</span>
                  </h1>

                  {/* Paragraph */}
                  <p className="text-[14px] sm:text-[15px] lg:text-md font-normal text-black font-['Poppins'] leading-6 tracking-[0.5px] text-justify w-full mb-6">
                    MyIT Consult Ltd is a Nigerian-rooted consulting firm with an expanding African footprint. 
                    We co-design evidence-based strategies, capacity-building programmes and digital solutions 
                    to strengthen institutions and empower people. Our multi-disciplinary team of strategists, 
                    data analysts, technologists and trainers works alongside governments, businesses and social 
                    enterprises to translate ideas into actionable interventions that foster inclusive growth.
                    <br /><br />
                    We deliver research, monitoring and evaluation, policy innovation, leadership development and 
                    digital transformation services, with innovation at the core of every engagement.
                    <br /><br />
                    Through platforms like the MYIT Digital Academy and MYIT Insight Series, we equip professionals 
                    and institutions with the tools they need to thrive in a dynamic world.
                  </p>

                </div>
              </div>
            </div>
          </section>


          {/* Mission and Vision Section */}
          <section className="w-full p-6 sm:p-10 font-[Sora]">
            <div className="w-full max-w-[1440px] mx-auto">
              <div className="flex flex-col gap-10 sm:gap-10 lg:gap-[90px] items-center">

                {/* Mission + Vision */}
                <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-12">

                  {/* Mission */}
                  <div className="w-full lg:flex-1 flex flex-col gap-2">
                    <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-[#282829] font-['Space_Grotesk'] leading-[28px] sm:leading-[32px] lg:leading-[36px]">
                      Our Mission
                    </h2>
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-black font-['Poppins'] leading-6 tracking-[0.5px] text-justify mb-6">
                      To partner with public, private and social sector leaders to generate and apply data-driven evidence,
                      strengthen people and institutions, and deploy technology solutions that improve decision-making and
                      advance sustainable development.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="w-full lg:w-[48%] flex flex-col gap-2">
                    <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-[#282829] font-['Space_Grotesk'] leading-[28px] sm:leading-[32px] lg:leading-[36px]">
                      Our Vision
                    </h2>
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-black font-['Poppins'] leading-6 tracking-[0.5px] text-justify mb-6">
                      "A world where decisions are powered by evidence, institutions are resilient, and development is
                      sustainable for all."
                    </p>
                  </div>
                </div>

                {/* Statistics Section */}
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
            </div>
          </section>

          {/* Commitment Section */}
          <section className="w-full py-10">
            <div className="w-full mx-auto">
              <div className="flex flex-col gap-10">

                <div className="flex flex-col gap-1 justify-start items-center px-1">
                  <h2 className="text-[28px] font-medium text-[#282829] font-['Space_Grotesk'] leading-[36px] text-center">
                    Our Commitment
                  </h2>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#4e5664] font-['Inter'] leading-[18px] sm:leading-[19px] lg:leading-[20px] text-center">
                    Driving sustainability development through expert solutions
                  </p>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1"
                  className="w-full container mx-auto space-y-4 px-4 sm:px-6"
                >

                  {/* ITEM 1 */}
                  <AccordionItem value="item-1" className='border border-[#818C96] rounded-md overflow-hidden'>
                    <AccordionTrigger
                      className="
                        px-6 py-5 text-base font-medium w-full text-left
                        transition-colors
                        bg-white

                        data-[state=open]:bg-red-600 data-[state=open]:text-white
                        data-[state=closed]:hover:bg-red-50
                      "
                    >
                      Impact & Rapid Need Assesment
                    </AccordionTrigger>

                    <AccordionContent
                      className="
                        px-4 pb-5 pt-2 
                        text-zinc-700 leading-relaxed 
                        flex flex-col gap-4 text-balance
                        bg-red-50/60 data-[state=open]:bg-red-600/10
                        transition-colors rounded-md border-none
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
                  <AccordionItem value="item-2" className='border border-[#818C96] rounded-md overflow-hidden'>
                    <AccordionTrigger
                      className="
                        px-6 py-5 text-base font-medium w-full text-left
                        transition-colors
                        bg-white

                        data-[state=open]:bg-red-600 data-[state=open]:text-white
                        data-[state=closed]:hover:bg-red-50
                      "
                    >
                      Baseline, Midline, and Endline Evaluations
                    </AccordionTrigger>

                    <AccordionContent
                      className="
                        px-4 pb-5 pt-2 
                        text-zinc-700 leading-relaxed 
                        flex flex-col gap-4 text-balance
                        bg-red-50/60 data-[state=open]:bg-red-600/10
                        transition-colors
                      "
                    >
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore debitis reprehenderit! Quisquam in incidunt quasi atque assumenda deleniti obcaecati nemo, minima est dolore voluptate corporis quos odit commodi! Provident molestias iusto deserunt eaque aperiam tempora amet dolor facere magnam sequi ad, sint praesentium reiciendis delectus blanditiis nam sunt sed.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* ITEM 3 */}
                  <AccordionItem value="item-3" className='border border-[#818C96] rounded-md overflow-hidden'>
                    <AccordionTrigger
                      className="
                        px-6 py-5 text-base font-medium w-full text-left
                        transition-colors
                      bg-white

                      data-[state=open]:bg-red-600 data-[state=open]:text-white
                      data-[state=closed]:hover:bg-red-50
                      "
                    >
                      Third-Party Monitoring
                    </AccordionTrigger>

                    <AccordionContent
                      className="
                        px-4 pb-5 pt-2 
                        text-zinc-700 leading-relaxed 
                        flex flex-col gap-4 text-balance
                        bg-red-50/60 data-[state=open]:bg-red-600/10
                        transition-colors
                      "
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* ITEM 4 */}
                  <AccordionItem value="item-4" className='border border-[#818C96] rounded-md overflow-hidden'>
                      <AccordionTrigger
                          className="
                              px-6 py-5 text-base font-medium w-full text-left
                        transition-colors
                      bg-white

                      data-[state=open]:bg-red-600 data-[state=open]:text-white
                      data-[state=closed]:hover:bg-red-50
                          "
                      >
                          Media Monitoring
                      </AccordionTrigger>

                      <AccordionContent
                          className="
                              px-4 pb-5 pt-2 
                              text-zinc-700 leading-relaxed 
                              flex flex-col gap-4 text-balance
                              bg-red-50/60 data-[state=open]:bg-red-600/10
                              transition-colors
                          "
                      >
                          <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                          </p>
                      </AccordionContent>
                  </AccordionItem>


                  {/* ITEM 5 */}
                  <AccordionItem value="item-5" className='border border-[#818C96] rounded-md overflow-hidden'>
                      <AccordionTrigger
                          className="
                              px-6 py-5 text-base font-medium w-full text-left
                        transition-colors
                      bg-white

                      data-[state=open]:bg-red-600 data-[state=open]:text-white
                      data-[state=closed]:hover:bg-red-50
                          "
                      >
                          Scoping Study
                      </AccordionTrigger>

                      <AccordionContent
                          className="
                              px-4 pb-5 pt-2 
                              text-zinc-700 leading-relaxed 
                              flex flex-col gap-4 text-balance
                              bg-red-50/60 data-[state=open]:bg-red-600/10
                              transition-colors
                          "
                      >
                          <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                          </p>
                      </AccordionContent>
                  </AccordionItem>

                  {/* ITEM 6 */}
                  <AccordionItem value="item-6" className='border border-[#818C96] rounded-md overflow-hidden'>
                    <AccordionTrigger
                      className="
                        px-6 py-5 text-base font-medium w-full text-left
                        transition-colors
                      bg-white

                      data-[state=open]:bg-red-600 data-[state=open]:text-white
                      data-[state=closed]:hover:bg-red-50
                      "
                    >
                      Target Audience Analysis
                    </AccordionTrigger>

                      <AccordionContent
                          className="
                              px-4 pb-5 pt-2 
                              text-zinc-700 leading-relaxed 
                              flex flex-col gap-4 text-balance
                              bg-red-50/60 data-[state=open]:bg-red-600/10
                              transition-colors
                          "
                      >
                          <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eaque? Eligendi, velit. Laborum rerum qui facere corporis deleniti possimus harum facilis adipisci, sint exercitationem iste! Labore modi animi dolorum, corrupti ex neque provident doloribus quibusdam ipsa inventore dolores veniam eos reprehenderit mollitia iusto ut ea corporis nostrum voluptatibus totam! Dolores.
                          </p>
                      </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>


          {/* Gallery Section */}
          <section className="w-full py-10 px-4">
            <div className="w-full mx-auto flex justify-center items-center">
              <img 
                src={image2} 
                alt="Gallery" 
                className="
                  w-full max-w-5xl 
                  object-cover 
                  rounded-lg
                  aspect-video
                "
              />
            </div>
          </section>


          <CheckProjects />


          <section className="py-10 w-full">
            <div className="w-full mx-auto">
              <div className="flex flex-col gap-10">

                {/* Heading + Subtitle */}
                <div className="flex flex-col gap-1 justify-start items-center px-3">
                  <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-[#282829] font-['Space_Grotesk'] leading-[28px] sm:leading-[32px] lg:leading-[36px] text-center">
                    Meet Our Incredible Team
                  </h2>

                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-[#4e5664] font-['Inter'] leading-[18px] sm:leading-[19px] lg:leading-[20px] text-center">
                    Driving sustainability development through expert solutions
                  </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 container mx-auto px-3">
                  {team.map((member, index) => (
                    <div key={index} className="group">
                      <div className="p-2 lg:p-4 bg-[#FFE5E5] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">

                        {/* Responsive image with aspect ratio */}
                        <div className="w-full aspect-[3/4] overflow-hidden rounded-md">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="pt-2 text-center">
                          <h3 className="font-bold text-gray-900 text-[15px] sm:text-[16px] lg:text-lg mb-1">
                            {member.name}
                          </h3>
                          <p className="text-gray-600 text-[12px] sm:text-[13px] lg:text-sm">
                            {member.role}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>



        </Container>
      </div>

      <Footer />
    </main>
  );
};

export default AboutPage