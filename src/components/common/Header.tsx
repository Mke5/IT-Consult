import { useState } from 'react'
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

    return (
        <header className="w-full bg-white shadow-[0px_2px_6px_#00000019]">

            {/* TOP CONTACT BAR */}
            <div className="w-full min-h-10 bg-[#e4010c] flex justify-center items-center py-2">
                <Container>
                    <div className="h-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 container mx-auto">

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
                        <div className="hidden sm:flex flex-row items-center gap-3 lg:gap-5">
                            <img src={Facebook} alt="facebook" className="w-4 h-4" />
                            <img src={X} alt="x" className="w-4 h-4" />
                            <img src={Instagrm} alt="instagram" className="w-4 h-4" />
                            <img src={LinkedIn} alt="linkedin" className="w-4 h-4" />
                        </div>

                    </div>
                </Container>
            </div>

            {/* MAIN NAVIGATION */}
            <div className="w-full px-4 sm:px-6 lg:px-10 pb-2">
                <Container>
                    <div className="flex items-center justify-between py-2 container mx-auto">

                        {/* LOGO */}
                        <img 
                            src={Logo}
                            alt="MyIT Consult"
                            className="w-32 sm:w-40 lg:w-[20%] max-w-[180px] h-auto"
                        />

                        {/* DESKTOP NAV MENU */}
                        <nav className="hidden lg:block">
                            <div className="flex flex-row gap-6 xl:gap-9 items-center">

                                <Link 
                                    to="/" 
                                    className={`nav-item ${isActive('/') ? 'text-[#e4010c] border border-[#e4010c] rounded-md px-2.5' : ''}`}
                                >
                                    Home
                                </Link>

                                <Link 
                                    to="/about-us"
                                    className={`nav-item ${isActive('/about-us') ? 'text-[#e4010c] border border-[#e4010c] rounded-md px-2.5' : ''}`}
                                >
                                    Who We Are
                                </Link>

                                <Link 
                                    to="/what-we-do" 
                                    className={`nav-item ${isActive('/what-we-do') ? 'text-[#e4010c] border border-[#e4010c] rounded-md px-2.5' : ''}`}
                                >
                                    What We Do
                                </Link>

                                <Link 
                                    to="/projects" 
                                    className={`nav-item ${isActive('/projects') ? 'text-[#e4010c] border border-[#e4010c] rounded-md px-2.5' : ''}`}
                                >
                                    Projects
                                </Link>

                                <Link 
                                    to="/skill-up" 
                                    className={`nav-item ${isActive('/skill-up') ? 'text-[#e4010c] border border-[#e4010c] rounded-md px-2.5' : ''}`}
                                >
                                    Skill-Up Academy
                                </Link>

                                <Link 
                                    to="/resources" 
                                    className={`nav-item ${isActive('/resources') ? 'text-[#e4010c] border border-[#e4010c] rounded-md px-2.5' : ''}`}
                                >
                                    Resources
                                </Link>

                                <Link 
                                    to="/contact" 
                                    className={`nav-item ${isActive('/contact') ? 'text-[#e4010c] border border-[#e4010c] rounded-md px-2.5' : 'px-2'}`}
                                >
                                    Contact
                                </Link>

                            </div>
                        </nav>

                        {/* BURGER ICON (Mobile only) */}
                        <button 
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                    </div>

                    {/* MOBILE MENU DROPDOWN */}
                    {isMenuOpen && (
                        <nav className="lg:hidden border-t border-gray-200 py-4">
                            <div className="flex flex-col gap-3">

                                <Link 
                                    to="/" 
                                    className={`nav-item py-2 px-4 rounded-md transition-colors ${
                                        isActive('/') 
                                            ? 'text-[#e4010c] border border-[#e4010c] hover:bg-[#e4010c] hover:text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>

                                <Link 
                                    to="/about-us"
                                    className={`nav-item py-2 px-4 rounded-md transition-colors ${
                                        isActive('/about-us') 
                                            ? 'text-[#e4010c] border border-[#e4010c] hover:bg-[#e4010c] hover:text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Who We Are
                                </Link>

                                <Link 
                                    to="/what-we-do" 
                                    className={`nav-item py-2 px-4 rounded-md transition-colors ${
                                        isActive('/what-we-do') 
                                            ? 'text-[#e4010c] border border-[#e4010c] hover:bg-[#e4010c] hover:text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    What We Do
                                </Link>

                                <Link 
                                    to="/projects" 
                                    className={`nav-item py-2 px-4 rounded-md transition-colors ${
                                        isActive('/projects') 
                                            ? 'text-[#e4010c] border border-[#e4010c] hover:bg-[#e4010c] hover:text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </Link>

                                <Link 
                                    to="/skill-up" 
                                    className={`nav-item py-2 px-4 rounded-md transition-colors ${
                                        isActive('/skill-up') 
                                            ? 'text-[#e4010c] border border-[#e4010c] hover:bg-[#e4010c] hover:text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Skill-Up Academy
                                </Link>

                                <Link 
                                    to="/resources" 
                                    className={`nav-item py-2 px-4 rounded-md transition-colors ${
                                        isActive('/resources') 
                                            ? 'text-[#e4010c] border border-[#e4010c] hover:bg-[#e4010c] hover:text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Resources
                                </Link>

                                <Link 
                                    to="/contact" 
                                    className={`nav-item py-2 px-4 rounded-md transition-colors ${
                                        isActive('/contact') 
                                            ? 'text-[#e4010c] border border-[#e4010c] hover:bg-[#e4010c] hover:text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>

                                {/* Social Icons in Mobile Menu */}
                                <div className="flex flex-row items-center justify-center gap-5 pt-4 mt-4 border-t border-gray-200 sm:hidden">
                                    <img src={Facebook} alt="facebook" className="w-4 h-4" />
                                    <img src={X} alt="x" className="w-4 h-4" />
                                    <img src={Instagrm} alt="instagram" className="w-4 h-4" />
                                    <img src={LinkedIn} alt="linkedin" className="w-4 h-4" />
                                </div>

                            </div>
                        </nav>
                    )}

                </Container>
            </div>

        </header>

    )
}

export default Header