<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use App\Models\Project;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $teamMembers = TeamMember::where('is_published', true)
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->get();
            
        $projects = Project::where('is_published', true)
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->limit(6)
            ->get();

        return view('pages.about', compact('teamMembers', 'projects'));
    }
}
