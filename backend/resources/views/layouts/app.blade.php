<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <meta name="description" content="MyIT Consult Ltd - Co-designing evidence-based strategies and digital solutions that empower resilient institutions and inclusive growth.">
    <title>@yield('title', 'MyIT Consult Ltd - Empowering Organizations. Driving Impact.')</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&family=Sora:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
    <style>
        html {
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        body {
            font-family: 'Space Grotesk', 'Inter', 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow-x: hidden;
            line-height: 1.6;
        }
        
        *, *::before, *::after {
            box-sizing: inherit;
        }
        
        *:focus-visible {
            outline: 2px solid #e4010c;
            outline-offset: 2px;
            border-radius: 4px;
        }
        
        a, button {
            transition: all 0.3s ease;
        }
        
        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
    </style>
</head>
<body class="bg-white">
    <div class="flex flex-col min-h-screen">
        @include('components.header')
        
        <main class="grow w-full">
            @yield('content')
        </main>
        
        @include('components.footer')
    </div>
    
    @stack('scripts')
</body>
</html>

