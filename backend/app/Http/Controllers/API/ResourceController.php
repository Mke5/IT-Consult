<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ResourceResource;
use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resources = Resource::where('is_published', true)
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->get();

        return ResourceResource::collection($resources);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $resource = Resource::where('id', $id)
            ->where('is_published', true)
            ->firstOrFail();

        return new ResourceResource($resource);
    }

    /**
     * Display the specified resource by slug.
     */
    public function showBySlug(string $slug)
    {
        $resource = Resource::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return new ResourceResource($resource);
    }
}
