<footer class="w-full bg-white">
    <!-- Newsletter & Contact Section -->
    <section class="w-full bg-[#2c2b2a] py-8 sm:py-12 lg:py-16">
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div class="flex flex-col gap-8 sm:gap-10 lg:gap-[42px] justify-center items-center">
                <!-- Newsletter and Office Address -->
                <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8">
                    <!-- Office Address -->
                    <div class="w-full lg:w-[60%] flex flex-col gap-5 sm:gap-[26px]">
                        <div>
                            <span class="bg-[#e4010c] rounded-sm px-3 py-2 text-base sm:text-lg lg:text-xl font-medium text-[#ffffffe5] leading-tight sm:leading-[26px] cursor-default">
                                Office Address
                            </span>
                        </div>
                        <div class="flex flex-col gap-3 sm:gap-5">
                            @foreach([
                                "F4- Pathfield Mall, Plot B4, 4th Avenue, Gwarinpa, Abuja, Nigeria",
                                "No 2B Hauwa'u Estate, Opp. Unity Avenue, Tinshama, Hotoro, Nassarawa.",
                                "No 7, Muhammad Chellube Street off Damboa Road, Maiduguri, Borno State.",
                                "9 Tijjani Kwaji Street, off Boss Mustapha Road, Dougirei, Jimeta-Yola, Adamawa State"
                            ] as $address)
                                <div class="flex items-start gap-2">
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span class="text-sm sm:text-base lg:text-md font-normal text-white leading-relaxed sm:leading-[23px]">
                                        {{ $address }}
                                    </span>
                                </div>
                            @endforeach
                        </div>
                    </div>

                    <!-- Newsletter Signup -->
                    <div class="w-full lg:w-[44%] bg-[#3a3b3c] rounded-[14px] p-6 sm:p-8 lg:p-10 lg:pt-[58px] lg:pb-[58px] flex justify-center items-center transition-transform hover:scale-[1.02] duration-300">
                        <form action="#" method="POST" class="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
                            @csrf
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                class="flex-1 px-4 py-2.5 sm:py-3 lg:py-4 rounded-md text-sm sm:text-base text-white bg-transparent border border-white/50 placeholder:text-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                                required
                            />
                            <button
                                type="submit"
                                class="px-6 sm:px-8 py-2.5 sm:py-3 lg:py-4 rounded-md bg-[#e4010c] hover:bg-red-700 active:scale-95 transition-all duration-200 text-white font-medium text-sm sm:text-base lg:text-lg cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Footer Bottom -->
                <div class="w-full flex flex-col gap-4 sm:gap-5">
                    <!-- Divider Line -->
                    <div class="w-full h-px bg-white"></div>

                    <!-- Copyright and Privacy Policy -->
                    <div class="w-full lg:w-[50%] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p class="text-sm sm:text-base lg:text-xl font-normal text-white leading-relaxed sm:leading-7 text-center sm:text-left">
                            © MyIT Consult LTD. All Rights Reserved.
                        </p>
                        <a
                            href="#"
                            class="text-sm sm:text-base lg:text-xl font-normal text-white leading-relaxed sm:leading-7 underline hover:text-[#e4010c] transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</footer>

