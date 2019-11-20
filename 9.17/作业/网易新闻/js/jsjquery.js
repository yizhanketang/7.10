
var arr = [];
var downindex =0;
var pageSize = 10;
var currentPage = 1;
function getQuery(key){
    var arr = location.search.substr(1).split('&')
    for (var i = 0; i < arr.length; i ++){
        if (arr[i].split('=')[0] === key){
            return arr[i].split('=')[1]
        }
    }
}
//点击选项卡获取数据
function clickTab(downindex) {
    $.ajax({
        // 跨域请求数据
        url:'https://3g.163.com/touch/reconstruct/article/list/' + arr[downindex]  + '/' + (currentPage-1) * pageSize + 1 + '-' + currentPage * pageSize + '.html',
        type:'GET',
        dataType:'jsonp',
        jsonpCallback:'artiList',
        success: function (res) {
            var data = res[arr[downindex]];
            $('.wenzi').html("");
            for(var i =0; i<data.length; i++){
                var url=data[i].url;
                $('.wenzi').append('<a href="'+url+'">'+ data[i].title +'</a>');
            }
            // $.each(data) {
            //     // console.log(item.title)
            //     $('.wenzi').append('<a href="javascript:void(0)">'+ index.title +'</a>')
            // })
        }
    })
}

//打开页面循环获取.menu .item中data-type的值
$(function () {
    $('.menu .item').each(function (index, item) {
        arr[index] =$(item).data('type');
        if($(item).hasClass('eel')){
            downindex=index;
        }
        // console.log(downindex)
        //
    })

    //   切换选项卡
    $('.menu .item').on('click',function () {
        currentPage=1;
       // var type = $(this).data('type')
       //  location.search = '?type' + type
        $(this).toggleClass('eel').siblings().removeClass('eel');
        $('.imgs').eq($(this).index()).addClass('block').siblings().removeClass('block');
        //根据被选中的选项卡下标获取数据
        clickTab($(this).index());

    })



    // var isLoading = false

    $('.more').on('click',function () {
        currentPage += 1
            // 跨域请求数据
            var url = 'https://3g.163.com/touch/reconstruct/article/list/' + arr[downindex] + '/'+ Number((currentPage - 1) * pageSize + 1) + '-' + currentPage * pageSize +'.html'
            $.ajax({
                // 跨域请求数据
                url:url,
                type:'GET',
                dataType:'jsonp',
                jsonpCallback:'artiList',
                success: function (res) {
                    var data = res[arr[downindex]];
                    for(var i =0; i<data.length; i++){
                        var url=data[i].url;
                        $('.wenzi').append('<a href="'+url+'">'+ data[i].title +'</a>');
                    }
                }
            })
        console.log(currentPage)
        })


    console.log(arr[downindex]);

    $.ajax({
        // 跨域请求数据
        url:'https://3g.163.com/touch/reconstruct/article/list/' + arr[downindex]  + '/' + (currentPage-1) * pageSize + 1 + '-' + currentPage * pageSize + '.html',
        type:'GET',
        dataType:'jsonp',
        jsonpCallback:'artiList',
        success: function (res) {
            var data = res[arr[downindex]];
            for(var i =0; i<data.length; i++){
                var url=data[i].url;
                $('.wenzi').append('<a href="'+url+'">'+ data[i].title +'</a>');
            }
            // $.each(data) {
            //     // console.log(item.title)
            //     $('.wenzi').append('<a href="javascript:void(0)">'+ index.title +'</a>')
            // })
        }
    })
})

























