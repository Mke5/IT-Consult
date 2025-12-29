import { MapPin } from 'lucide-react';
import Container from './Container'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-white">
            {/* Newsletter & Contact Section */}
            <section className="w-full bg-[#2c2b2a] py-8">
                <Container>
                    <div className="flex flex-col gap-5 lg:gap-3 justify-center items-center">
                        
                        {/* Newsletter and Office Address */}
                        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-4">
                        
                        {/* Office Address */}
                        <div className="w-full lg:w-[60%] flex flex-col gap-5 lg:gap-3">
                            <div>
                            <span className="bg-[#e4010c] rounded-lg px-3 py-2 text-base sm:text-lg lg:text-lg font-medium text-[#ffffffe5] font-space_grotesk leading-tight cursor-default">
                                Office Address
                            </span>
                            </div>

                            <div className="flex flex-col gap-3 lg:gap-2 justify-center">
                            {[
                                "F4- Pathfield Mall, Plot B4, 4th Avenue, Gwarinpa, Abuja, Nigeria",
                                "No 2B Hauwa'u Estate, Opp. Unity Avenue, Tinshama, Hotoro, Nassarawa.",
                                "No 7, Muhammad Chellube Street off Damboa Road, Maiduguri, Borno State.",
                                "9 Tijjani Kwaji Street, off Boss Mustapha Road, Dougirei, Jimeta-Yola, Adamawa State"
                            ].map((address, index) => (
                                <div key={index} className="flex gap-2 items-start">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-1" />
                                <span className="text-sm sm:text-base lg:text-sm font-normal text-white font-space leading-relaxed">
                                    {address}
                                </span>
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="w-full lg:w-[44%] bg-[#3a3b3c] rounded-[14px]
                            p-6 sm:p-8 lg:p-6
                            lg:pt-6 lg:pb-6
                            flex justify-center items-center transition-transform hover:scale-[1.02] duration-300">
                            
                            <form
                                className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4"
                                onSubmit={(e) => e.preventDefault()}
                            >
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 px-4 py-2.5 sm:py-3 lg:py-2 rounded-lg text-sm sm:text-base text-white bg-transparent border border-white/50 placeholder:text-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                                required
                            />

                            <button
                                type="submit"
                                className="px-6 sm:px-8 py-2.5 sm:py-3 lg:py-2 rounded-lg bg-[#e4010c] hover:bg-red-700 active:scale-95 transition-all duration-200 text-white font-medium text-sm sm:text-base cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg"
                            >
                                Subscribe to news
                            </button>
                            </form>
                        </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="w-full flex flex-col gap-4 lg:gap-2">
                        <div className="w-full h-px bg-white" />

                        <div className="w-full lg:w-[35%] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                            <p className="text-sm sm:text-base lg:text-sm font-normal text-white font-space leading-relaxed text-center sm:text-left">
                            © MyIT Consult LTD. All Rights Reserved.
                            </p>

                            <Link
                            to="#"
                            className="text-sm sm:text-base lg:text-sm font-normal text-white font-space underline hover:text-[#e4010c] transition-colors"
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