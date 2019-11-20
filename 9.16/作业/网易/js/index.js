$.play = function (titles,num,name) {
    $.ajax({
        url: 'https://3g.163.com/touch/reconstruct/article/list/'+titles+'/'+num+'.html',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: "artiList",
        success: function (res) {
            for (var i = 0; i < res[titles].length; i++ ){
                $('<a href='+res[titles][i].url
                    +'class="active"><div><p>'+res[titles][i].title
                    +'</p><span>'+res[titles][i].ptime+'</span><span>'+
                    res[titles][i].priority+'跟贴</span></div><div><img src='+
                    res[titles][i].imgsrc+' alt=""></div></a>').appendTo(name);
            }
        }
    });
};

$.play('BA8EE5GMwangning','1-20',$('.inner').eq(0));

$(function () {
    var list = ['BA8EE5GMwangning','BA10TA81wangning','BD2A9LEIwangning','BD2AB5L9wangning','BA8E6OEOwangning'];
        $('.header-bottom>ul>li').click(function () {
            $('.inner').html('');
            $('.inner').removeClass('show');
            $('.header-bottom>ul>li').removeClass('border');
            $('.inner').eq($(this).index()).addClass('show');
            $.play(list[$(this).index()],'1-20',$('.inner').eq($(this).index()));
            $(this).addClass('border');
        })
    }
);
