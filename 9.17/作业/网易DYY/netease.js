$(function () {
    $('header a').on('click',function () {
      $('footer').html('');
        var $index = $(this).index();
        var item = ['BA8EE5GMwangning','BA10TA81wangning','BD2A9LEIwangning','BD2AB5L9wangning','BA8E6OEOwangning'];
        console.log(item[$index])
        $(this).toggleClass('active').siblings().removeClass('active');
        $('section i').eq($index).addClass('active').siblings().removeClass('active')

        $(function () {
            $.ajax({
                url:'https://3g.163.com/touch/reconstruct/article/list/'+ item[$index] +'/1-20.html',
                type: 'GET',
                dataType: 'jsonp',
                jsonpCallback: 'artiList',
                success: function (res) {
                    var a = item[$index];
                    var list = res[a];
                    // console.log(list)
                    for (var i=0;i<list.length;i++) {
                        console.log(list[i].imgsrc)
                        // console.log(list[i])
                        $('footer').append('<a href="'+ (list[i]).url +'"><img src="'+list[i].imgsrc+ '">'+ list[i].title +'</a>')
                    }
                }
            });
        });
    })
})