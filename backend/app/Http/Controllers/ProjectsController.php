<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::where('is_published', true)
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->get();

        return view('pages.projects', compact('projects'));
    }
    
    public function show($id)
    {
        $project = Project::where('id', $id)
            ->where('is_published', true)
            ->firstOrFail();

        return view('pages.project-details', compact('project'));
    }
}
