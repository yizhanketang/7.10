$(function () {
    $('.head .goods li').mouseenter(function () {
    var $index = $(this).index()
    $('.head .examples .excess').eq($index).addClass('active').sibling().removeClass('active')
});
    $('.head .goods li').mouseleave(function () {
        $('.head .examples .excess').removeClass('active')
    })

    $('.head .examples .excess').mouseenter(function () {
        var $index = $(this).index()
        $('.head .examples .excess').eq($index).addClass('active').sibling().removeClass('active')
    })
    $('.head .examples .excess').mouseleave(function () {
        $('.head .examples .excess').removeClass('active')
    })

});