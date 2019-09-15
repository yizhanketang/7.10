$(function () {

  // 第一种抽屉
  /*var dts = document.querySelectorAll('dt')
  for (var i = 0; i < dts.length; i++) {
    dts[i]['is-show'] = false
  }
  $('dt').click(function () {
    var $show = this['is-show']

    if ($show) {
      $(this).next().css('display', 'none')
      this['is-show'] = false
    } else {
      $(this).next().css('display', 'block')
      this['is-show'] = true
    }
    // this['is-show'] = !this['is-show']
  })*/

  // 第二种抽屉

  /*$('dt').click(function () {
    // $(this).next().css('display', 'block')
    //   .siblings('dd').css('display', 'none')
    var nextEleHasClass = $(this).next().hasClass('block')

    if (nextEleHasClass) {
      $(this).siblings('dd').removeClass('block')
    } else {
      $(this).next().addClass('block')
        .siblings('dd').removeClass('block')
    }
  })*/

  // 第三种抽屉

  $('dt').mouseenter(function () {
    $(this).next().addClass('block')
      .siblings('dd').removeClass('block')
  })

  $('dt').mouseout(function () {
    $('dd').removeClass('block')
  })

  /*$('dd').mouseover(function () {
    $(this).addClass('block')
  })
  $('dd').mouseleave(function () {
    $(this).removeClass('block')
  })*/

  $('dd').hover(function () {
    $(this).addClass('block')
  }, function () {
    $(this).removeClass('block')
  })





  /*var activeIndex = 0
  $('dl dt').each(function (ind, ele) {
    $(ele).click(function () {

      if (activeIndex === ind) {
        $(ele).siblings('dd').removeClass('block')
      } else {
        $('dl dd').eq(ind).addClass('block')
          .siblings('dd').removeClass('block')
      }
      activeIndex = ind
    })
  })*/



  /*$('.box').hover(function (e) {
    $(this).css('background', 'red')
  }, function () {
    $(this).css('background', 'blue')
  })*/

  /*$('.box').toggle(function () {
    console.log(1)
    $(this).css('background', 'red')
  }, function () {
    console.log(2)
    $(this).css('background', 'blue')
  }, function () {
    console.log(3)
    // $(this)
    $(this).css('background', 'yellow')
  })*/

  /*$(document).mousedown(function (e) {
    console.log('down')
  })

  $(document).mouseup(function (e) {
    console.log('up')
  })

  $(document).click(function (e) {
    console.log('click')
  })*/

  /*$(window).scroll(function (e) {
    console.log(e)
  })*/

  /*$('#enter').focus(function () {
    $(this).css('background', 'red')
  })

  $('#enter').blur(function () {
    $(this).css('background', '#fff')
  })*/

  /*$('#enter').keydown(function (e) {
    console.log(e.keyCode === 13)
  })*/

  // $(document).contextmenu();

  /*$('.box').contextmenu(function (e) {
    console.log($('.box'))
  })*/

})


