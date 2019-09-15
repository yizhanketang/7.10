<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Todo;

class LandingController extends Controller
{
    public function index(Request $request) {
        $list = Todo::all();

//        return $list;

        return view('landing', [
            'list' => $list
        ]);
    }

    public function create(Request $request) {
        $todo = new Todo;
        $todo->title = $request->title;
        $todo->save();

        $list = Todo::all();

        return view('landing', [
            'list' => $list
        ]);
    }
}
