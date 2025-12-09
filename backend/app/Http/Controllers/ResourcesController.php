<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class ResourcesController extends Controller
{
    public function index()
    {
        $resources = Resource::where('is_published', true)
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->get();

        return view('pages.resources', compact('resources'));
    }
    
    public function show($id)
    {
        $resource = Resource::where('id', $id)
            ->where('is_published', true)
            ->firstOrFail();

        return view('pages.resource-details', compact('resource'));
    }
}
