
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

    $('.loading').show()
    $.ajax({
        url:'https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/'+ (currentPage-1)*pageSize +'-'+ currentPage*pageSize +'.html',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'artiList',
        success: function (res) {
            var list = res.BA10TA81wangning;
        for (var i=0;i<list.length;i++) {
            $('footer').append('<a href="'+ (list[i]).url +'"><img src="'+list[i].imgsrc+ '">'+ list[i].title +'</a>')
             $('.loading').hide()
        }
        }
        });


});





