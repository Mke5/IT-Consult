import { MapPin } from 'lucide-react';
import Container from './Container'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-white">
            {/* Newsletter & Contact Section */}
            <section className="w-full bg-[#2c2b2a] py-8 sm:py-12">
                <Container>
                    <div className="flex flex-col gap-8 sm:gap-[42px] justify-center items-center container mx-auto px-4 sm:px-6 lg:px-0">
                        {/* Newsletter and Office Address */}
                        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8">
                            {/* Office Address */}
                            <div className="w-full lg:w-[60%] flex flex-col gap-5 sm:gap-[26px]">
                                <div>
                                    <span className="bg-[#e4010c] rounded-sm px-3 py-2 text-base sm:text-lg lg:text-xl font-medium text-[#ffffffe5] font-space_grotesk leading-tight sm:leading-[26px] cursor-default">
                                        Office Address
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3 sm:gap-5">
                                    {[
                                        "F4- Pathfield Mall, Plot B4, 4th Avenue, Gwarinpa, Abuja, Nigeria",
                                        "No 2B Hauwa'u Estate, Opp. Unity Avenue, Tinshama, Hotoro, Nassarawa.",
                                        "No 7, Muhammad Chellube Street off Damboa Road, Maiduguri, Borno State.",
                                        "9 Tijjani Kwaji Street, off Boss Mustapha Road, Dougirei, Jimeta-Yola, Adamawa State"
                                    ].map((address, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" />
                                            <span className="text-sm sm:text-base lg:text-md font-normal text-white font-space leading-relaxed sm:leading-[23px]">
                                                {address}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="w-full lg:w-[44%] bg-[#3a3b3c] rounded-[14px] p-6 sm:p-8 lg:p-10 lg:pt-[58px] lg:pb-[58px] flex justify-center items-center">
                                {/* Newsletter form here */}
                                <form className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    {/* Email Input */}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-md text-sm sm:text-base text-white bg-transparent border border-white placeholder:text-white focus:outline-none "
                                        required
                                    />
                                    {/* Subscribe Button */}
                                    <button
                                        type="submit"
                                        className="px-6 py-2.5 sm:py-3 rounded-md bg-[#e4010c] hover:bg-red-700 transition text-white font-medium text-base sm:text-lg cursor-pointer whitespace-nowrap"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="w-full flex flex-col gap-4 sm:gap-5">
                            {/* Divider Line */}
                            <div className="w-full h-px bg-white"></div>

                            {/* Copyright and Privacy Policy */}
                            <div className="w-full lg:w-[50%] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                                <p className="text-sm sm:text-base lg:text-xl font-normal text-white font-space leading-relaxed sm:leading-7 text-center sm:text-left">
                                    © MyIT Consult LTD. All Rights Reserved.
                                </p>
                                <Link
                                    to={'#'}
                                    className="text-sm sm:text-base lg:text-xl font-normal text-white font-space leading-relaxed sm:leading-7 underline hover:text-[#e4010c] transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </footer>
    );
};

export default Footer;