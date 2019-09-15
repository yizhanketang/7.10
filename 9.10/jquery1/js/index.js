$(function () {

  /*console.log('width', $('.box').width())
  console.log('height', $('.box').height())
  console.log('innerWidth', $('.box').innerWidth())
  console.log('innerHeight', $('.box').innerHeight())
  console.log('outerWidth', $('.box').outerWidth())
  console.log('outerHeight', $('.box').outerHeight())*/
  // console.log('offset', $('.box1').offset())
  // console.log('offsetParent', $('.box1').offsetParent())
  // console.log('position', $('.box1').position())


  $(document).on('scroll', function (e) {
    console.log($(this).scrollTop())
    // console.log($(this).scrollLeft())
  })


  function printThis() {
    console.log('ele')
    // return ele
  }

  $('#enter').on('input', function () {
    // console.log($(this).val())
    // this.value
  })

  /*$(document).keydown(function (e) {
    // console.log(e.keyCode)
    // console.log(e.which)
    console.log(e.type)
  })*/

  console.log($(document).height())
  $('.box').click(function () {
    // $(document).scrollTop($(document).height())
    console.log($('.box').prop('index'))
    $('.box').removeProp('index')
    console.log('========')
    console.log($('.box').prop('index'))
    // $('.box').removeAttr('index')
  })

  $('dl dt').on('click', function (e) {
    // $('.box').attr('index', '1')
    $('.box').prop('index', '1')
    // $(this).next().toggleClass('block dfghjk')
    // console.log(e)
    // console.log(e.which)
    // console.log(e.currentTarget)
    // console.log(e.pageX, e.pageY)

    // $('.box').trigger('click')
    // $('.box').triggerHandler('click')
    // $(this).next().addClass('block')
  })

  /*$('dl').on('mouseenter', 'dt', function () {
    // console.log()
    $('dl dt').eq($(this).index() / 2).trigger('click')
  })*/

  /*$('.box').on('click', function () {
    console.log(this)
  })*/



  /*$('dl dt').one('click', function () {
    console.log(this)
  })*/

  // .addEventListener()
  // $('dl dt').on('click', printThis)
  // $('dl').on('click', 'dt', printThis)
  // $('dl dt').off('click', printThis)

  // $('dl dt').bind('click', printThis)
  // $('dl dt').unbind('click', printThis)

  // $('dl dt').live('click', printThis)
  // $('dl dt').die('click', printThis)

  /*$('dl').delegate('dt', 'click', function () {
    printThis()
  })*/
  // $('dl dt').undelegate('click', printThis)

})
