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
            'list' => $list,
            'list1' => 'fghjklfghjk',
        ]);
    }

    public function create(Request $request) {
//        return $request;

        $todo = new Todo;
        $todo->title = $request->title;
        $todo->save();

        return redirect('/');

        /*$list = Todo::all();

        return view('landing', [
            'list' => $list
        ]);*/
    }
}
