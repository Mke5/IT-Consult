@extends('layouts.app')

@section('title', 'MyIT Consult Ltd - Empowering Organizations. Driving Impact.')

@php
    use Illuminate\Support\Facades\Storage;
@endphp

@section('content')
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <!-- Hero section -->
    <section class="py-8 sm:py-12 lg:py-16 xl:py-20">
        <div class="w-full">
            <div class="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center lg:items-stretch">
                <!-- Text Block -->
                <div class="w-full lg:w-[60%] space-y-5 sm:space-y-6 lg:space-y-8 flex flex-col justify-center">
                    <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-snug lg:leading-tight text-gray-900">
                        At MyIT Consult Ltd, we co-design evidence-based strategies and digital solutions that empower resilient institutions and inclusive growth.
                    </h1>
                    <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
                        We bridge data, strategy and technology to help institutions and innovators deliver measureable, sustainable impact.
                    </p>

                    <a href="{{ route('about') }}" class="bg-[#e4010c] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-md hover:bg-red-700 active:scale-95 transition-all duration-200 cursor-pointer text-sm sm:text-base lg:text-lg font-medium shadow-md hover:shadow-lg w-fit">
                        Learn More
                    </a>

                    <div class="grid grid-cols-2 lg:flex lg:flex-row gap-4 sm:gap-6 lg:gap-0 mt-6 sm:mt-8">
                        <!-- Stat 1 -->
                        <div class="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:border-r border-[#EEEFF2] lg:px-4 xl:px-6 py-4 hover:bg-gray-50 rounded-lg lg:rounded-none transition-colors duration-200">
                            <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] lg:h-[55px] lg:w-[55px] rounded-full transition-transform hover:scale-110 flex items-center justify-center">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xl sm:text-2xl lg:text-[25px] xl:text-3xl font-rubik font-bold text-[#e4010c]">90+</div>
                                <div class="text-gray-600 font-rubik font-normal text-sm sm:text-base lg:text-lg xl:text-[20px]">Workforce</div>
                            </div>
                        </div>

                        <!-- Stat 2 -->
                        <div class="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:border-r border-[#EEEFF2] lg:px-4 xl:px-6 py-4 hover:bg-gray-50 rounded-lg lg:rounded-none transition-colors duration-200">
                            <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] lg:h-[55px] lg:w-[55px] rounded-full transition-transform hover:scale-110 flex items-center justify-center">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xl sm:text-2xl lg:text-[25px] xl:text-3xl font-rubik font-bold text-[#e4010c]">40+</div>
                                <div class="text-gray-600 font-rubik font-normal text-sm sm:text-base lg:text-lg xl:text-[20px]">Partnership</div>
                            </div>
                        </div>

                        <!-- Stat 3 -->
                        <div class="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:border-r border-[#EEEFF2] lg:px-4 xl:px-6 py-4 hover:bg-gray-50 rounded-lg lg:rounded-none transition-colors duration-200">
                            <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] lg:h-[55px] lg:w-[55px] rounded-full transition-transform hover:scale-110 flex items-center justify-center">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xl sm:text-2xl lg:text-[25px] xl:text-3xl font-rubik font-bold text-[#e4010c]">1000+</div>
                                <div class="text-gray-600 font-rubik font-normal text-sm sm:text-base lg:text-lg xl:text-[20px]">Trainings</div>
                            </div>
                        </div>

                        <!-- Stat 4 -->
                        <div class="flex items-center gap-3 lg:flex-1 lg:gap-4 lg:px-4 xl:px-6 py-4 hover:bg-gray-50 rounded-lg lg:rounded-none transition-colors duration-200">
                            <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] lg:h-[55px] lg:w-[55px] rounded-full transition-transform hover:scale-110 flex items-center justify-center">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xl sm:text-2xl lg:text-[25px] xl:text-3xl font-rubik font-bold text-[#e4010c]">60+</div>
                                <div class="text-gray-600 font-rubik font-normal text-sm sm:text-base lg:text-lg xl:text-[20px]">Writeups</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-[40%] overflow-hidden flex justify-center lg:justify-end">
                    <img src="{{ asset('assets/images/heroimmmmg.svg') }}" alt="MyIT Consult Services" class="h-[280px] sm:h-[350px] lg:h-[450px] xl:h-[500px] w-auto object-contain transition-transform hover:scale-105 duration-500"/>
                </div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section class="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div class="w-full">
            <div class="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
                <div class="relative overflow-hidden rounded-lg">
                    <img src="{{ asset('assets/images/HeroImage2.svg') }}" alt="About MyIT Consult" class="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"/>
                </div>
                <div class="space-y-4 sm:space-y-5 lg:space-y-6">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">About Us</h2>
                    <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                        MyIT Consult Ltd is a Nigerian‑rooted consulting firm with an expanding African footprint. We co‑design evidence‑based strategies, capacity‑building programmes and digital solutions to strengthen institutions and empower people. Our multi‑disciplinary team of strategists, data analysts, technologists and trainers works alongside governments, businesses and social enterprises to translate ideas into actionable interventions that foster inclusive growth.
                    </p>
                    <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                        We deliver research, monitoring and evaluation, policy innovation, leadership development and digital transformation services, with innovation at the core of every engagement. 
                    </p>
                    <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Through platforms like the MYIT Digital Academy and MYIT Insight Series, we equip professionals and institutions with the tools they need to thrive in a dynamic world
                    </p>

                    <a href="{{ route('about') }}" class="bg-[#e4010c] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-red-700 active:scale-95 transition-all duration-200 cursor-pointer text-sm sm:text-base font-medium shadow-md hover:shadow-lg mt-4 inline-block">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- What We Do Section -->
    <section class="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div class="w-full">
            <div class="text-center mb-10 sm:mb-12 lg:mb-16 xl:mb-20">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">What We Do</h2>
                <p class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                    We help organisations strengthen their systems, build capacity, and deliver better results through research and practical digital solutions
                </p>
            </div>

            @if($services->count() > 0)
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    @foreach($services as $service)
                        <div class="bg-white shadow-md rounded-xl p-5 sm:p-6 lg:p-8 text-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFE5E5] rounded-lg mb-4 sm:mb-5 flex items-center justify-center group-hover:bg-[#e4010c] transition-colors duration-300">
                                <svg class="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#E4010C] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                            <h3 class="font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-2 lg:mb-3">{{ $service->title }}</h3>
                            <p class="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{{ $service->description ?? '' }}</p>
                        </div>
                    @endforeach
                </div>
            @else
                <div class="text-center text-gray-500 py-8">No services available</div>
            @endif
        </div>
    </section>

    <!-- Global Partners Section -->
    <section class="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div class="w-full">
            <div class="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 max-w-3xl mx-auto">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                    Working With Organizations Around the World
                </h2>
                <p class="text-sm sm:text-base lg:text-lg text-gray-600">
                    We help organizations improve systems, build capacity, and drive impact wherever they operate
                </p>
            </div>

            <div class="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-lg overflow-hidden mb-8 sm:mb-10 lg:mb-12 shadow-lg">
                <div class="absolute inset-0">
                    <img src="{{ asset('assets/images/HugeGlobal.svg') }}" alt="Global Map" class="w-full h-full object-contain"/>
                </div>
            </div>

            <!-- Partner Logos -->
            @if($partners->count() > 0)
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                    @foreach($partners as $partner)
                        <div class="h-12 sm:h-16 lg:h-[78px] xl:h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                            @if($partner->logo)
                                <img src="{{ str_starts_with($partner->logo, 'http') ? $partner->logo : Storage::url($partner->logo) }}" alt="{{ $partner->name }}" class="h-full w-auto object-contain"/>
                            @else
                                <div class="h-full w-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm rounded-lg px-2">{{ $partner->name }}</div>
                            @endif
                        </div>
                    @endforeach
                </div>
            @else
                <div class="text-center text-gray-500 py-8">No partners available</div>
            @endif
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div class="w-full">
            <div class="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 max-w-3xl mx-auto">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">What people say about us</h2>
                <p class="text-sm sm:text-base lg:text-lg text-gray-600">
                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page
                </p>
            </div>

            @if($testimonials->count() > 0)
                <div class="flex gap-4 sm:gap-6 overflow-x-auto w-full pb-4 scrollbar-hide" style="scrollbar-width: none; -ms-overflow-style: none;">
                    @foreach($testimonials as $testimonial)
                        <div class="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0">
                            <div class="flex items-center mb-4">
                                @if($testimonial->image)
                                    <img src="{{ str_starts_with($testimonial->image, 'http') ? $testimonial->image : Storage::url($testimonial->image) }}" alt="{{ $testimonial->name }}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"/>
                                @else
                                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full mr-4 flex items-center justify-center text-gray-600 text-xs">{{ substr($testimonial->name, 0, 1) }}</div>
                                @endif
                            </div>
                            <p class="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                "{{ $testimonial->testimonial ?? $testimonial->content ?? '' }}"
                            </p>
                            <p class="font-semibold text-gray-900 text-sm sm:text-base">{{ $testimonial->name }}</p>
                            @if($testimonial->role)
                                <p class="text-gray-500 text-xs sm:text-sm">{{ $testimonial->role }}{{ $testimonial->company ? ' at ' . $testimonial->company : '' }}</p>
                            @endif
                        </div>
                    @endforeach
                </div>
            @else
                <div class="text-center text-gray-500 py-8">No testimonials available</div>
            @endif
        </div>
    </section>
</div>
@endsection

