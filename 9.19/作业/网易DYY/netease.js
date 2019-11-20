$(function () {
    var pageSize = 10;
    var currentPage = 1;
    window.onload = function(){
        $(document).scroll(function () {
            if ($(document).scrollTop() + window.innerHeight >= $(document).height()){
                $('button').css('display','block')
                // currentPage += 1;
            }
            else {
                $('button').css('display','none')
            }
        });
    };
    $('header a').on('click',function () {
        $('.loading').show();
        $('footer').html('');
        var $index = $(this).index();
        var item = ['BA8EE5GMwangning','BA10TA81wangning','BD2A9LEIwangning','BD2AB5L9wangning','BA8E6OEOwangning'];
        console.log(item[$index]);
        $(this).toggleClass('active').siblings().removeClass('active');
        $('section i').eq($index).addClass('active').siblings().removeClass('active');
        jQuery.Ext = function () {
            $(function() {
                $.ajax({
                    url:'https://3g.163.com/touch/reconstruct/article/list/'+ item[$index] +'/'+ (currentPage-1)*pageSize +'-'+ currentPage*pageSize +'.html',
                    type: 'GET',
                    dataType: 'jsonp',
                    jsonpCallback: 'artiList',
                    success: function (res) {
                        // console.log('https://3g.163.com/touch/reconstruct/article/list/'+ item[$index] +'/'+ (currentPage-1)*pageSize +'-'+ currentPage*pageSize +'.html')
                        var a = item[$index];
                        var list = res[a];
                        // console.log(list)
                        for (var i=0;i<list.length;i++) {
                            // console.log(list[i].imgsrc)
                            // console.log(list[i])
                            $('footer').append('<a href="'+ (list[i]).url +'"><img src="'+list[i].imgsrc+ '">'+ list[i].title +'</a>')
                            $('.loading').hide()
                        }
                    }
                });
            });
        }
        $.Ext()

    })
    $('button').on('click',function () {
        currentPage += 1;
        console.log(currentPage)
        $.Ext()
        })


});