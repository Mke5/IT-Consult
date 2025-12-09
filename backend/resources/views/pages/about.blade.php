@extends('layouts.app')

@php
    use Illuminate\Support\Facades\Storage;
@endphp

@section('title', 'About Us - MyIT Consult Ltd')

@section('content')
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <!-- Hero Section -->
    <section class="w-full p-6 sm:p-10">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
            <!-- Left Image -->
            <div class="w-full lg:w-[40%] overflow-hidden">
                <img src="{{ asset('assets/images/image20.webp') }}" alt="About MyIT Consult" class="w-full h-full object-cover"/>
            </div>

            <!-- Right Content -->
            <div class="w-full lg:w-[60%]">
                <p class="text-[10px] sm:text-[12px] lg:text-[14px] font-normal text-[#e4010c] uppercase mb-3">
                    ABOUT US
                </p>
                <img src="{{ asset('assets/images/image14.svg') }}" alt="" class="w-14 sm:w-16 lg:w-20 object-contain mb-3"/>
                <h1 class="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0e2a46] leading-[30px] sm:leading-[38px] lg:leading-[49px] capitalize w-full mb-3">
                    <span>Empowering Organisations. Driving </span>
                    <span class="text-[#e4010c]">Impact</span>
                </h1>
                <p class="text-[14px] sm:text-[15px] lg:text-md font-normal text-black leading-6 tracking-[0.5px] text-justify w-full mb-6">
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
    </section>

    <!-- Mission and Vision Section -->
    <section class="w-full p-6 sm:p-10">
        <div class="w-full max-w-[1440px] mx-auto">
            <div class="flex flex-col gap-10 sm:gap-10 lg:gap-[90px] items-center">
                <!-- Mission + Vision -->
                <div class="w-full lg:w-[90%] flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-12">
                    <!-- Mission -->
                    <div class="w-full lg:flex-1 flex flex-col gap-2">
                        <h2 class="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-[#282829] leading-[28px] sm:leading-[32px] lg:leading-[36px]">
                            Our Mission
                        </h2>
                        <p class="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-black leading-6 tracking-[0.5px] text-justify mb-6">
                            To partner with public, private and social sector leaders to generate and apply data-driven evidence,
                            strengthen people and institutions, and deploy technology solutions that improve decision-making and
                            advance sustainable development.
                        </p>
                    </div>

                    <!-- Vision -->
                    <div class="w-full lg:w-[48%] flex flex-col gap-2">
                        <h2 class="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-[#282829] leading-[28px] sm:leading-[32px] lg:leading-[36px]">
                            Our Vision
                        </h2>
                        <p class="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-black leading-6 tracking-[0.5px] text-justify mb-6">
                            "A world where decisions are powered by evidence, institutions are resilient, and development is
                            sustainable for all."
                        </p>
                    </div>
                </div>

                <!-- Statistics Section -->
                <div class="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-0 w-full">
                    <div class="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:border-r border-[#EEEFF2] lg:px-4 py-4">
                        <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                            </svg>
                        </div>
                        <div>
                            <div class="text-xl lg:text-[25px] font-rubik font-bold text-red-600">90+</div>
                            <div class="text-gray-600 font-rubik font-normal text-base lg:text-[20px]">Workforce</div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:border-r border-[#EEEFF2] lg:px-4 py-4">
                        <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                            </svg>
                        </div>
                        <div>
                            <div class="text-xl lg:text-[25px] font-rubik font-bold text-red-600">40+</div>
                            <div class="text-gray-600 font-rubik font-normal text-base lg:text-[20px]">Partnership</div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:border-r border-[#EEEFF2] lg:px-4 py-4">
                        <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                            </svg>
                        </div>
                        <div>
                            <div class="text-xl lg:text-[25px] font-rubik font-bold text-red-600">1000+</div>
                            <div class="text-gray-600 font-rubik font-normal text-base lg:text-[20px]">Trainings</div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 lg:flex-1 lg:gap-5 lg:px-4 py-4">
                        <div class="flex-none p-2 lg:p-3 bg-[#FFECEC] text-[#E4010C] h-[45px] w-[45px] lg:h-[55px] lg:w-[55px] rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div>
                            <div class="text-xl lg:text-[25px] font-rubik font-bold text-red-600">60+</div>
                            <div class="text-gray-600 font-rubik font-normal text-base lg:text-[20px]">Writeups</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    @if($projects->count() > 0)
    <section class="py-10 w-full">
        <div class="w-full mx-auto">
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-1 justify-start items-center px-1">
                    <h2 class="text-[28px] font-medium text-[#282829] leading-[36px] text-center">
                        Check out our Projects
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    @foreach($projects->take(6) as $project)
                        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            @if($project->image)
                                <img src="{{ str_starts_with($project->image, 'http') ? $project->image : Storage::url($project->image) }}" alt="{{ $project->title }}" class="w-full h-48 object-cover"/>
                            @endif
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $project->title }}</h3>
                                <p class="text-gray-600 text-sm mb-4">{{ Str::limit($project->description ?? '', 100) }}</p>
                                <a href="{{ route('project.show', $project->id) }}" class="text-[#e4010c] font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
    @endif

    <!-- Team Members Section -->
    <section class="py-10 w-full">
        <div class="w-full mx-auto">
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-1 justify-start items-center px-3">
                    <h2 class="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-[#282829] leading-[28px] sm:leading-[32px] lg:leading-[36px] text-center">
                        Meet Our Incredible Team
                    </h2>
                    <p class="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-[#4e5664] leading-[18px] sm:leading-[19px] lg:leading-[20px] text-center">
                        Driving sustainability development through expert solutions
                    </p>
                </div>

                @if($teamMembers->count() > 0)
                    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        @foreach($teamMembers as $member)
                            <div class="group">
                                <div class="p-2 lg:p-4 bg-[#FFE5E5] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                                    <div class="w-full aspect-[3/4] overflow-hidden rounded-md">
                                        @if($member->image)
                                            <img src="{{ str_starts_with($member->image, 'http') ? $member->image : Storage::url($member->image) }}" alt="{{ $member->name }}" class="w-full h-full object-cover"/>
                                        @else
                                            <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-bold">
                                                {{ substr($member->name, 0, 1) }}
                                            </div>
                                        @endif
                                    </div>
                                    <div class="pt-2 text-center">
                                        <h3 class="font-bold text-gray-900 text-[15px] sm:text-[16px] lg:text-lg mb-1">
                                            {{ $member->name }}
                                        </h3>
                                        <p class="text-gray-600 text-[12px] sm:text-[13px] lg:text-sm">
                                            {{ $member->role }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <div class="text-center text-gray-500 py-8">No team members available</div>
                @endif
            </div>
        </div>
    </section>
</div>
@endsection

