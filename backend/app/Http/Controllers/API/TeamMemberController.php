<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TeamMemberResource;
use App\Models\TeamMember;
use Illuminate\Http\Request;

class TeamMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teamMembers = TeamMember::where('is_published', true)
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->get();

        return TeamMemberResource::collection($teamMembers);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $teamMember = TeamMember::where('id', $id)
            ->where('is_published', true)
            ->firstOrFail();

        return new TeamMemberResource($teamMember);
    }
}
