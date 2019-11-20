$(function () {
    $('.center .center-left .pick i').on('click',function () {
        var $index = $(this).index()-1
        $(this).toggleClass('active').siblings().removeClass('active')
        $('.center .center-logo i').eq($index).addClass('active').siblings().removeClass('active')
        // console.log($('.center .center-logo i').eq($index))
    })
    $('.menu .menu-bar .list').hover(function () {
        var $timer = $(this).index()-7
        $('.menu .menu-bar .mac').eq($timer).addClass('active').siblings('div').removeClass('active')
        // console.log($('.menu .menu-bar .mac').eq(0))
    },
        function () {
            var $timer = $(this).index()-7
            $('.menu .menu-bar .mac').eq($timer).removeClass('active')
        })
})