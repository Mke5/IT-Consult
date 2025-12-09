@php
    $currentPath = request()->path();
    $isActive = fn($path) => $currentPath === $path || ($path !== '/' && str_starts_with($currentPath, $path));
@endphp

<header class="w-full bg-white shadow-[0px_2px_6px_#00000019]">
    <!-- TOP CONTACT BAR -->
    <div class="w-full min-h-10 bg-[#e4010c] flex justify-center items-center py-2.5 sm:py-3">
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div class="h-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <!-- CONTACT INFO -->
                <div class="flex flex-row items-center gap-2 sm:gap-4 lg:gap-10">
                    <!-- Email -->
                    <div class="flex items-center gap-1">
                        <svg class="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="text-[10px] sm:text-[11px] font-medium text-white leading-tight sm:leading-[15px]">
                            info@myit-consult.com
                        </span>
                    </div>

                    <!-- Time -->
                    <div class="hidden md:flex items-center gap-1">
                        <svg class="h-4 w-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-[11px] font-medium text-white leading-[15px] whitespace-nowrap">
                            Mon–Fri, 8:00am–5:00pm
                        </span>
                    </div>

                    <!-- Chat -->
                    <div class="flex items-center gap-1">
                        <svg class="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span class="text-[10px] sm:text-[11px] font-medium text-white leading-tight sm:leading-[15px] whitespace-nowrap">
                            Chat: +234 802 754 1143
                        </span>
                    </div>
                </div>

                <!-- SOCIAL ICONS -->
                <div class="hidden sm:flex flex-row items-center gap-3 lg:gap-4">
                    <a href="#" aria-label="Facebook" class="hover:opacity-70 transition-opacity">
                        <img src="{{ asset('assets/logos/FacebookLogo.svg') }}" alt="facebook" class="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                    <a href="#" aria-label="X (Twitter)" class="hover:opacity-70 transition-opacity">
                        <img src="{{ asset('assets/logos/XLogo.svg') }}" alt="x" class="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                    <a href="#" aria-label="Instagram" class="hover:opacity-70 transition-opacity">
                        <img src="{{ asset('assets/logos/InstagramLogo.svg') }}" alt="instagram" class="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                    <a href="#" aria-label="LinkedIn" class="hover:opacity-70 transition-opacity">
                        <img src="{{ asset('assets/logos/LinkedinLogo.svg') }}" alt="linkedin" class="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- MAIN NAVIGATION -->
    <div class="w-full pb-2">
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div class="flex items-center justify-between py-3 sm:py-4">
                <!-- LOGO -->
                <a href="{{ route('home') }}" class="flex-shrink-0">
                    <img src="{{ asset('assets/logos/MyIT Updated Logos 2025 1.svg') }}" alt="MyIT Consult" class="w-32 sm:w-40 lg:w-auto lg:max-w-[180px] h-auto transition-opacity hover:opacity-90" />
                </a>

                <!-- DESKTOP NAV MENU -->
                <nav class="hidden lg:block">
                    <div class="flex flex-row gap-4 xl:gap-6 items-center">
                        <a href="{{ route('home') }}" class="text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 {{ $isActive('/') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50' }}">
                            Home
                        </a>
                        <a href="{{ route('about') }}" class="text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 {{ $isActive('about-us') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50' }}">
                            Who We Are
                        </a>
                        <a href="{{ route('what-we-do') }}" class="text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 {{ $isActive('what-we-do') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50' }}">
                            What We Do
                        </a>
                        <a href="{{ route('projects') }}" class="text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 {{ $isActive('projects') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50' }}">
                            Projects
                        </a>
                        <a href="{{ route('skill-up') }}" class="text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 {{ $isActive('skill-up') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50' }}">
                            Skill-Up Academy
                        </a>
                        <a href="{{ route('resources') }}" class="text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 {{ $isActive('resources') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50' }}">
                            Resources
                        </a>
                        <a href="{{ route('contact') }}" class="text-sm xl:text-base font-medium px-3 py-2 rounded-md transition-all duration-200 {{ $isActive('contact') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:text-[#e4010c] hover:bg-gray-50' }}">
                            Contact
                        </a>
                    </div>
                </nav>

                <!-- BURGER ICON (Mobile only) -->
                <button id="mobile-menu-toggle" class="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-all duration-200 active:scale-95" aria-label="Toggle Menu" aria-expanded="false">
                    <svg id="menu-icon" class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg id="close-icon" class="w-6 h-6 text-gray-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- MOBILE MENU DROPDOWN -->
            <nav id="mobile-menu" class="lg:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 py-0">
                <div class="flex flex-col gap-2 pt-2">
                    <a href="{{ route('home') }}" class="text-base font-medium py-3 px-4 rounded-md transition-all duration-200 {{ $isActive('/') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]' }}">
                        Home
                    </a>
                    <a href="{{ route('about') }}" class="text-base font-medium py-3 px-4 rounded-md transition-all duration-200 {{ $isActive('about-us') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]' }}">
                        Who We Are
                    </a>
                    <a href="{{ route('what-we-do') }}" class="text-base font-medium py-3 px-4 rounded-md transition-all duration-200 {{ $isActive('what-we-do') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]' }}">
                        What We Do
                    </a>
                    <a href="{{ route('projects') }}" class="text-base font-medium py-3 px-4 rounded-md transition-all duration-200 {{ $isActive('projects') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]' }}">
                        Projects
                    </a>
                    <a href="{{ route('skill-up') }}" class="text-base font-medium py-3 px-4 rounded-md transition-all duration-200 {{ $isActive('skill-up') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]' }}">
                        Skill-Up Academy
                    </a>
                    <a href="{{ route('resources') }}" class="text-base font-medium py-3 px-4 rounded-md transition-all duration-200 {{ $isActive('resources') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]' }}">
                        Resources
                    </a>
                    <a href="{{ route('contact') }}" class="text-base font-medium py-3 px-4 rounded-md transition-all duration-200 {{ $isActive('contact') ? 'text-[#e4010c] bg-red-50 border border-[#e4010c]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#e4010c]' }}">
                        Contact
                    </a>

                    <!-- Social Icons in Mobile Menu -->
                    <div class="flex flex-row items-center justify-center gap-5 pt-4 mt-4 border-t border-gray-200 sm:hidden">
                        <a href="#" aria-label="Facebook" class="hover:opacity-70 transition-opacity">
                            <img src="{{ asset('assets/logos/FacebookLogo.svg') }}" alt="facebook" class="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="X (Twitter)" class="hover:opacity-70 transition-opacity">
                            <img src="{{ asset('assets/logos/XLogo.svg') }}" alt="x" class="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Instagram" class="hover:opacity-70 transition-opacity">
                            <img src="{{ asset('assets/logos/InstagramLogo.svg') }}" alt="instagram" class="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="LinkedIn" class="hover:opacity-70 transition-opacity">
                            <img src="{{ asset('assets/logos/LinkedinLogo.svg') }}" alt="linkedin" class="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</header>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        if (toggle && menu) {
            toggle.addEventListener('click', function() {
                const isOpen = menu.classList.contains('max-h-0');
                if (isOpen) {
                    menu.classList.remove('max-h-0', 'opacity-0', 'py-0');
                    menu.classList.add('max-h-[600px]', 'opacity-100', 'py-4');
                    menuIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                    toggle.setAttribute('aria-expanded', 'true');
                } else {
                    menu.classList.add('max-h-0', 'opacity-0', 'py-0');
                    menu.classList.remove('max-h-[600px]', 'opacity-100', 'py-4');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Close menu when clicking on a link
            const menuLinks = menu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    menu.classList.add('max-h-0', 'opacity-0', 'py-0');
                    menu.classList.remove('max-h-[600px]', 'opacity-100', 'py-4');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    });
</script>

