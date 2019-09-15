$(function () {

  // $('.box').detach()
  // $('.box').remove()
  // $('.box').empty()
  // $('.s-box').unwrap()

  // $('<div class="red-box">replace</div>').replaceAll('.box')
  // $('.box').replaceWith('<div class="red-box">replace</div>')

  // $('.box').after('<div class="red-box">after</div>')
  // $('.box').before('<div class="red-box">before</div>')

  // $('<div class="red-box">after</div>').insertAfter('.box')
  // $('<div class="red-box">before</div>').insertBefore('.box')



  $('.btn').on('click', function () {

    // $('.box').append('<div class="s-box"></div>')
    // $('.box').append(document.createElement('div'))
    // $('<div class="red-box"></div>').appendTo('.box')

    // $('.box').prepend('<div class="red-box"></div>')
    // $('<div class="red-box"></div>').prependTo('.box')

    // var ht = $('.box').html()
    // var te = $('.box').text()
    // console.log(ht)
    // $('.box').html('<div class="red-box"></div>')
    // $('.box').text('<div class="red-box"></div>')
    // console.log('================')
    // console.log(te)

    // $('.s-box').wrap('<div class="red">')
    // $('.s-box').wrapAll('<div class="red">')
    // $('.s-box').wrapInner('<div class="red">')

    // var box = $('.box').clone(true)
    // $('body').append(box)
  })

  $('.box').on('click', function () {
    console.log(this)
  })

})
