$.play($('.place'),$('.place-show'),'','show');
$.playFun($('.hr3'),$('.hr3-show'),'','show');
$.playFun($('.hr4'),$('.hr4-show'),'','show');
$.playFun($('.hr5'),$('.hr5-show'),'','show');
$.playFun($('.hr6'),$('.hr6-show'),'','show');
$.playFun($('.l-red'),$('.search-left'),'','show');
$.play($('.phone-move'),$('.dif-phone'),'','show');

$.playPhone = function (parentClass,childClass,parentAddClass,childAddClass){
        parentClass.mouseenter(function () {
        childClass.removeClass(childAddClass);
        parentClass.removeClass(parentAddClass);
        childClass.eq($(this).parent().index()).addClass(childAddClass);
        $(this).addClass(parentAddClass);
    });
};
$.playPhone($('.sphone img'),$('.center-picture>img'),'move','show');

$.playFun($('.s-right>div:nth-child(1)'),$('.s-right>div:nth-child(2)'),'show','show');

$(function () {
    var inNum = 1;
   $('.plus') .click(function () {
       inNum += 1;
       $('.add-a span').html(inNum)
   });
    $('.minus') .click(function () {
        if (inNum > 1){
         inNum -= 1
        $('.add-a span').html(inNum)}
    })
});
$(function () {
        $('.recommend span').click(function () {
            $('.parts .show').removeClass('show');
            $('.recommend span').removeClass('focks');
            $('.parts .shows').eq($(this).index()).addClass('show');
            $(this).addClass('focks');
        })
    }
    );

