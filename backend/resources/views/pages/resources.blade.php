@extends('layouts.app')

@php
    use Illuminate\Support\Facades\Storage;
@endphp

@section('title', 'Resources - MyIT Consult Ltd')

@section('content')
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
    <div class="w-full">
        <!-- Section Header -->
        <div class="mb-4">
            <h2 class="text-2xl font-bold text-[#E4010C]">Resources</h2>
        </div>

        @if($resources->count() > 0)
            @php
                $featuredArticle = $resources->first();
                $otherArticles = $resources->skip(1);
            @endphp
            
            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Left Column - Featured Article -->
                @if($featuredArticle)
                    <div>
                        <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <!-- Featured Image -->
                            <div class="relative h-80 overflow-hidden">
                                @if($featuredArticle->image)
                                    <img src="{{ str_starts_with($featuredArticle->image, 'http') ? $featuredArticle->image : Storage::url($featuredArticle->image) }}" alt="{{ $featuredArticle->title }}" class="w-full h-full object-cover"/>
                                @else
                                    <div class="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                                        {{ $featuredArticle->title }}
                                    </div>
                                @endif
                            </div>

                            <!-- Content -->
                            <div class="p-8">
                                <h3 class="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {{ $featuredArticle->title }}
                                </h3>
                                <p class="text-gray-600 mb-6 leading-relaxed">
                                    {{ $featuredArticle->description ?? '' }}
                                </p>
                                <a href="{{ route('resource.show', $featuredArticle->id) }}" class="border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 font-medium inline-block">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                @endif

                <!-- Right Column - Article List -->
                <div class="space-y-6">
                    @foreach($otherArticles as $article)
                        <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div class="flex flex-col sm:flex-row">
                                <!-- Image -->
                                <div class="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                    @if($article->image)
                                        <img src="{{ str_starts_with($article->image, 'http') ? $article->image : Storage::url($article->image) }}" alt="{{ $article->title }}" class="w-full h-full object-cover"/>
                                    @else
                                        <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-sm font-bold">
                                            {{ $article->title }}
                                        </div>
                                    @endif
                                </div>

                                <!-- Content -->
                                <div class="p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight">
                                            {{ $article->title }}
                                        </h3>
                                        <p class="text-gray-600 text-sm mb-4">
                                            {{ $article->description ?? '' }}
                                        </p>
                                    </div>
                                    <a href="{{ route('resource.show', $article->id) }}" class="border-2 border-red-600 text-red-600 px-5 py-2 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 font-medium text-sm self-start">
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @else
            <div class="text-center text-gray-500 py-8">No resources available</div>
        @endif
    </div>
</div>
@endsection

