
// input 下拉框
$(function () {
    $('.zhankai').hide()
    $('.search').focus(function () {
        $('.search').addClass('border')
        $('.zhankai').slideDown()
    })
    $('.search').blur(function () {
        $('.search').removeClass('border')
        $('.zhankai').slideUp()
    })
})

// 二维码出来
$(function () {
    $('.xiazai').hover(function () {
        $('.shangjiao').slideDown()
    },function () {
        $('.shangjiao').slideUp()
    })
})

// float 出来  ( mi2.js 里原生js写的效果好些)

// $(function(){
//     $('.goods ul li').hover(function () {
//         $('.float-warp').addClass('acts')
//         $('.float').addClass('acts')
//     },function () {
//         $('.float-warp').removeClass('acts')
//         $('.float').removeClass('acts')
//     })
// })













