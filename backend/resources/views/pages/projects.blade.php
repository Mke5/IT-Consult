@extends('layouts.app')

@php
    use Illuminate\Support\Facades\Storage;
@endphp

@section('title', 'Projects - MyIT Consult Ltd')

@section('content')
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
    <div class="w-full">
        <!-- Header -->
        <div class="flex flex-col items-center justify-center mb-12 gap-4 text-center">
            <h2 class="text-2xl md:text-3xl font-medium text-gray-900">
                Check our Projects
            </h2>
            <p class="text-gray-600 text-sm md:text-base max-w-lg">
                Take a look at some of our recent projects to see how we've helped
                Organizations, Governments and Agencies.
            </p>
        </div>

        <!-- Projects Grid -->
        @if($projects->count() > 0)
            <div class="flex flex-col gap-8 w-full">
                @foreach($projects as $index => $project)
                    <div class="{{ $index % 2 === 0 ? 'bg-blue-900' : 'bg-red-600' }} text-white rounded-lg overflow-hidden lg:w-[60%] w-full mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <!-- Image Grid -->
                            <div class="grid grid-cols-2 gap-2 p-4">
                                @if($project->image)
                                    <img src="{{ str_starts_with($project->image, 'http') ? $project->image : Storage::url($project->image) }}" alt="{{ $project->title }}" class="col-span-2 row-span-2 object-cover w-full h-full rounded"/>
                                @else
                                    <div class="bg-gray-300 rounded aspect-square"></div>
                                    <div class="bg-gray-300 rounded aspect-square"></div>
                                    <div class="bg-gray-300 rounded aspect-square"></div>
                                    <div class="bg-gray-300 rounded aspect-square"></div>
                                @endif
                            </div>

                            <!-- Text Section -->
                            <div class="py-6 px-4 md:py-10 md:px-8 flex flex-col justify-center">
                                <h3 class="text-lg md:text-2xl font-bold mb-3">
                                    {{ $project->title }}
                                </h3>
                                <p class="{{ $index % 2 === 0 ? 'text-blue-200' : 'text-red-100' }} text-xs md:text-sm mb-4 md:mb-6">
                                    {{ $project->description ?? 'No description available.' }}
                                </p>
                                <a href="{{ route('project.show', $project->id) }}" class="text-white border border-white px-4 py-2 text-xs md:text-sm rounded hover:bg-white hover:text-black transition w-fit">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @else
            <div class="text-center text-gray-500 py-8">No projects available</div>
        @endif
    </div>
</div>
@endsection

