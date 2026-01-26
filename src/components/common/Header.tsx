import { useState, useEffect } from 'react'
import { Clock3, Mail } from 'lucide-react';
import { FiMessageSquare } from 'react-icons/fi';
import Facebook from '../../assets/logos/FacebookLogo.svg'
import LinkedIn from '../../assets/logos/LinkedinLogo.svg'
import X from '../../assets/logos/XLogo.svg'
import Instagrm from '../../assets/logos/InstagramLogo.svg'
import Logo from '../../assets/logos/MyIT Updated Logos 2025 1.svg'
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className="w-full bg-white shadow-[0px_2px_6px_#00000019]">

            {/* TOP CONTACT BAR */}
            <div className="w-full min-h-10 bg-[#e4010c] flex justify-center items-center py-2.5 sm:py-3">
                <Container>
                    <div className="h-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

                        {/* CONTACT INFO */}
                        <div className="flex flex-row items-center gap-2 sm:gap-4 lg:gap-10">

                            {/* Email */}
                            <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
                                <span className="text-[10px] sm:text-[11px] font-medium text-white font-inter leading-tight sm:leading-[15px]">
                                    info@myit-consult.com
                                </span>
                            </div>

                            {/* Time */}
                            <div className="hidden md:flex items-center gap-1">
                                <Clock3 className="h-4 w-4 text-white flex-shrink-0" />
                                <span className="text-[11px] font-medium text-white font-inter leading-[15px] whitespace-nowrap">
                                    Mon–Fri, 8:00am–5:00pm
                                </span>
                            </div>

                            {/* Chat */}
                            <div className="flex items-center gap-1">
                                <FiMessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
                                <span className="text-[10px] sm:text-[11px] font-medium text-white font-inter leading-tight sm:leading-[15px] whitespace-nowrap">
                                    Chat: +234 802 754 1143
                                </span>
                            </div>

                        </div>

                        {/* SOCIAL ICONS */}
                        <div className="hidden sm:flex flex-row items-center gap-3 lg:gap-4">
                            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                                <img src={Facebook} alt="facebook" className="w-4 h-4 lg:w-5 lg:h-5" />
                            </a>
                            <a href="#" aria-label="X (Twitter)" className="hover:opacity-70 transition-opacity">
                                <img src={X} alt="x" className="w-4 h-4 lg:w-5 lg:h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                                <img src={Instagrm} alt="instagram" className="w-4 h-4 lg:w-5 lg:h-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                                <img src={LinkedIn} alt="linkedin" className="w-4 h-4 lg:w-5 lg:h-5" />
                            </a>
                        </div>

                    </div>
                </Container>
            </div>

            {/* MAIN NAVIGATION */}
            <div className="w-full pb-2">
                <Container>
                    <div className="flex items-center justify-between py-3 sm:py-4">

                        {/* LOGO */}
                        <Link to="/" className="flex-shrink-0">
                            <img 
                                src={Logo}
                                alt="MyIT Consult"
                                className="w-32 sm:w-40 lg:w-auto lg:max-w-[180px] h-auto transition-opacity hover:opacity-90"
                            />
                        </Link>

                        {/* DESKTOP NAV MENU */}
                        <nav className="hidden lg:block">
                            <div className="flex flex-row gap-4 xl:gap-6 items-center">

                                <Link 
                                    to="/" 
                                    className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                                        isActive('/') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50'
                                    }`}
                                >
                                    Home
                                </Link>

                                <Link 
                                    to="/about-us"
                                    className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                                        isActive('/about-us') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50'
                                    }`}
                                >
                                    Who We Are
                                </Link>

                                <Link 
                                    to="/what-we-do" 
                                    className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                                        isActive('/what-we-do') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50'
                                    }`}
                                >
                                    What We Do
                                </Link>

                                <Link 
                                    to="/projects" 
                                    className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                                        isActive('/projects') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50'
                                    }`}
                                >
                                    Projects
                                </Link>

                                <a 
                                    href="https://myitacademy.com.ng"
                                    target="_blank"
                                    className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                                        isActive('/skill-up') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50'
                                    }`}
                                >
                                    Skill-Up Academy
                                </a>

                                <Link 
                                    to="/resources" 
                                    className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                                        isActive('/resources') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50'
                                    }`}
                                >
                                    Resources
                                </Link>

                                <Link 
                                    to="/contact" 
                                    className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                                        isActive('/contact') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50'
                                    }`}
                                >
                                    Contact
                                </Link>

                            </div>
                        </nav>

                        {/* BURGER ICON (Mobile only) */}
                        <button 
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-all duration-200 active:scale-95"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                    </div>

                    {/* MOBILE MENU DROPDOWN */}
                    <nav className={`lg:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-[600px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                    }`}>
                        <div className="flex flex-col gap-2 pt-2">

                                <Link 
                                    to="/" 
                                    className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                                        isActive('/') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>

                                <Link 
                                    to="/about-us"
                                    className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                                        isActive('/about-us') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Who We Are
                                </Link>

                                <Link 
                                    to="/what-we-do" 
                                    className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                                        isActive('/what-we-do') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    What We Do
                                </Link>

                                <Link 
                                    to="/projects" 
                                    className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                                        isActive('/projects') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </Link>

                                <a 
                                    href="https://myitacademy.com.ng"
                                    target="_blank"
                                    className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                                        isActive('/skill-up') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Skill-Up Academy
                                </a>

                                <Link 
                                    to="/resources" 
                                    className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                                        isActive('/resources') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Resources
                                </Link>

                                <Link 
                                    to="/contact" 
                                    className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                                        isActive('/contact') 
                                            ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>

                                {/* Social Icons in Mobile Menu */}
                                <div className="flex flex-row items-center justify-center gap-5 pt-4 mt-4 border-t border-gray-200 sm:hidden">
                                    <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                                        <img src={Facebook} alt="facebook" className="w-5 h-5" />
                                    </a>
                                    <a href="#" aria-label="X (Twitter)" className="hover:opacity-70 transition-opacity">
                                        <img src={X} alt="x" className="w-5 h-5" />
                                    </a>
                                    <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                                        <img src={Instagrm} alt="instagram" className="w-5 h-5" />
                                    </a>
                                    <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                                        <img src={LinkedIn} alt="linkedin" className="w-5 h-5" />
                                    </a>
                                </div>

                            </div>
                        </nav>

                </Container>
            </div>

        </header>

    )
}

export default Header