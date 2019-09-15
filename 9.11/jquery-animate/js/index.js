$(function () {
  // var _ = jQuery
  // console.log(_('.box').length)
  // console.log($ === jQuery)
  // jQuery
  // $.fx.off = true

  // $('.box').hide()
  // $('.box').fadeTo(3000, .5)
  $('.btn').on('click', function () {

    $('.box').animate({
      height: '400px',
      width: '300px',
      opacity: .1
    }, 2000, function () {
      console.log('ok')
      // $('.box').hide(4000)
    }).delay(4000)
      .hide(4000)
      .show(4000)
    // 动画队列

    // $('.box').show(4000)
    // $('.box').toggle(4000)
    // $('.box').fadeIn(3000)
    // $('.box').fadeOut(3000)
    // $('.box').fadeToggle(3000)
    // $('.box').fadeTo(3000, 1)
    // $('.box').slideDown()
    // $('.box').slideUp()
    // $('.box').slideToggle()


    // callback
    // complete
    // slow: 600, fast: 200, 默认:400
    /*$('.box').hide('fast', function () {
      console.log('我隐藏了')
    })*/
    // .hide(duration, complete)
    // .hide(duration, easing, complete)
    /*$('.box').hide(3000, 'linear',function () {
      console.log('我隐藏了')
    })*/
    /*$('.box').hide({
      duration: 4000,
      complete: function () {
        console.log('ok')
      }
    })*/
  })

})

