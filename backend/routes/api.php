<?php

use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\ResourceController;
use App\Http\Controllers\API\ServiceController;
use App\Http\Controllers\API\TeamMemberController;
use App\Http\Controllers\API\TestimonialController;
use App\Http\Controllers\API\PartnerController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Public API routes
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{id}', [ProjectController::class, 'show']);
    Route::get('/projects/slug/{slug}', [ProjectController::class, 'showBySlug']);
    
    Route::get('/resources', [ResourceController::class, 'index']);
    Route::get('/resources/{id}', [ResourceController::class, 'show']);
    Route::get('/resources/slug/{slug}', [ResourceController::class, 'showBySlug']);
    
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/{id}', [ServiceController::class, 'show']);
    
    Route::get('/team-members', [TeamMemberController::class, 'index']);
    Route::get('/team-members/{id}', [TeamMemberController::class, 'show']);
    
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::get('/testimonials/{id}', [TestimonialController::class, 'show']);
    
    Route::get('/partners', [PartnerController::class, 'index']);
    Route::get('/partners/{id}', [PartnerController::class, 'show']);
});

