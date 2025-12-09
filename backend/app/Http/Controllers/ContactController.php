<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return view('pages.contact');
    }
    
    public function store(Request $request)
    {
        // Handle contact form submission
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);
        
        // TODO: Send email or save to database
        // For now, just redirect back with success message
        
        return redirect()->route('contact')->with('success', 'Thank you for your message. We will get back to you soon!');
    }
}
