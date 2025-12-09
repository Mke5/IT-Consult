<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PartnerResource;
use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $partners = Partner::where('is_published', true)
            ->orderBy('order')
            ->orderBy('created_at', 'desc')
            ->get();

        return PartnerResource::collection($partners);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $partner = Partner::where('id', $id)
            ->where('is_published', true)
            ->firstOrFail();

        return new PartnerResource($partner);
    }
}
