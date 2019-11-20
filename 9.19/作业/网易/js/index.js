$.play = function (titles,num,name,url) {
    $.ajax({
        url: url|| 'https://3g.163.com/touch/reconstruct/article/list/'+titles+'/'+num+'.html',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: "artiList",
        success: function (res) {
            for (let i = 0; i < res[titles].length; i++ ){
                // console.log(res.BA8EE5GMwangning);
                $('<a href='+res[titles][i].url
                    +'class="active"><div><span>'+res[titles][i].title
                    +'</span><span>'+res[titles][i].ptime+'</span><span>'+
                    res[titles][i].priority+'跟贴</span></div><div><img src='+
                    res[titles][i].imgsrc+' alt=""></div></a>').appendTo(name);}
        }
    });
};
$.play('BA8EE5GMwangning','1-10',$('.inner').eq(0));
$(function () {
    var list = ['BA8EE5GMwangning','BA10TA81wangning','BD2A9LEIwangning','BD2AB5L9wangning','BA8E6OEOwangning'];
    let pageSize = 10;
    let currentPage = 1;
        $('.header-bottom>ul>li').click(function () {
            currentPage = 1;
            console.log((currentPage-1) * pageSize + 1+'-'
                +currentPage*pageSize);
            $('.inner').html('');
            $('.inner').removeClass('show');
            $('.header-bottom>ul>li').removeClass('border');
            $('.inner').eq($(this).index()).addClass('show');
            $.play(list[$(this).index()],(currentPage-1) * pageSize + 1+'-'
                +currentPage*pageSize,$('.inner').eq($(this).index()));
            $(this).addClass('border');

        })
    $(document).scroll(function () {

        $('.header-bottom>ul>li').each(function (i) {
            // currentPage += 1;\
            if ($('.header-bottom>ul>li').eq(i).hasClass('border')){
                if ($(document).scrollTop() + window.innerHeight >= $(document).height()){
                    currentPage += 1;
                    var num = Number((currentPage - 1) * pageSize + 1) + '-' + currentPage * pageSize;
                    console.log(currentPage);
                    console.log((currentPage-1) * pageSize + 1+'-'
                        +currentPage*pageSize);

                    var url = 'https://3g.163.com/touch/reconstruct/article/list/' + list[i] + '/' +
                            num + '.html';
                    $.play(list[i],num,$('.inner').eq(i),url);
                        }
                    }
                })
            })
    });
