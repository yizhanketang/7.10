<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body>
        <div>

            <h1>Todo List</h1>
            @foreach($list as $item)
                <h4>{{$item->id}} {{$item->title}}</h4>
            @endforeach


            <form method="POST" action="/">
                @csrf
                <input name="title" type="text">
                <button>提交</button>
            </form>

        </div>
    </body>
</html>
