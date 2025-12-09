<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about-us', [AboutController::class, 'index'])->name('about');
Route::get('/what-we-do', function () {
    return view('pages.what-we-do');
})->name('what-we-do');
Route::get('/projects', [ProjectsController::class, 'index'])->name('projects');
Route::get('/projects/{id}', [ProjectsController::class, 'show'])->name('project.show');
Route::get('/resources', [ResourcesController::class, 'index'])->name('resources');
Route::get('/resources/{id}', [ResourcesController::class, 'show'])->name('resource.show');
Route::get('/skill-up', function () {
    return view('pages.skill-up');
})->name('skill-up');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
