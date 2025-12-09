@extends('layouts.app')

@section('title', 'Contact Us - MyIT Consult Ltd')

@section('content')
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
    <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
        
        @if(session('success'))
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {{ session('success') }}
            </div>
        @endif
        
        <form action="{{ route('contact.store') }}" method="POST" class="space-y-6">
            @csrf
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" name="name" id="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e4010c] focus:border-transparent">
            </div>
            
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" name="email" id="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e4010c] focus:border-transparent">
            </div>
            
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" id="message" rows="6" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e4010c] focus:border-transparent"></textarea>
            </div>
            
            <button type="submit" class="bg-[#e4010c] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium">
                Send Message
            </button>
        </form>
    </div>
</div>
@endsection

