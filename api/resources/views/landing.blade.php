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
            <h1>{{ $list1 }}</h1>
            @foreach($list as $item)
                <h4>{{$item->id}} -- {{$item->title}}</h4>
            @endforeach


            <form method="POST" action="/">
                @csrf
                {{--<input name="avatar" type="file">--}}
                <input name="title1" type="text">
                {{--<input type="checkbox" name="hobby[]" value="basketball">篮球
                <input type="checkbox" name="hobby[]" value="football">足球
                <input type="checkbox" name="hobby[]" value="pinpang">乒乓球
                <input type="checkbox" name="hobby[]" value="dongman">动漫
                <input type="checkbox" name="hobby[]" value="jijian">击剑
                <input type="checkbox" name="hobby[]" value="guzheng">古筝--}}
                <button>提交</button>
            </form>

        </div>
    </body>
</html>
