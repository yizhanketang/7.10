<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Todo;

class ApiLandingController extends Controller
{
    public function index(Request $request) {
        $list = Todo::all();

        return $list;
    }

    public function create(Request $request) {
//        $todo = new Todo()
        return $_POST;
    }
}
