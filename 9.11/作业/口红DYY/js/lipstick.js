$(document).ready(function(){
    var timer = 0
    $("#more").eq(0).click(function () {
        if (timer===0){
            $('.table .line1').css('height','120px')
            timer = 1
        }
       else {
            $('.table .line1').css('height','60px')
            timer = 0
        }
    })

    var once = 0
    $('.table .tt a').on('click',function () {
        if (once===0){
            $(this).addClass('active')
            // console.log($(this).text())
            // $('.classify .search').append('<span>圣罗兰</span>')
          $('.classify .search').append('<span></span>')
              // .text($(this).text())
            // once = 1
        }
        else {
            $(this).removeClass('active')
            $('.classify .search').empty('<span></span>').text($(this).text())
            // $('.classify .search').empty('<span>圣罗兰</span>')
            once = 0
        }
        })

});
// var tableLine = document.querySelector('.table .line1');
// var more = document.getElementById('more');
// var timer = 0;
// more.onclick = function() {
//     if (timer===0){
//         // console.log(timer==0)
//         tableLine.style.height = '120px';
//         timer = 1
//     }
//     else {
//         tableLine.style.height = '60px';
//         timer = 0
//     }
//
// };