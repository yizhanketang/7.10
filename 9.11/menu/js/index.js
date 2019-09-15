$(function () {

  $('.container .more').hover(function () {
    // $(this).find('ul').show()
    // .stop(clearQueue jumpToEnd)
    $(this).find('ul').stop().slideDown()
  }, function () {
    // $(this).find('ul').hide()
    $(this).find('ul').stop().slideUp()
  })

})

// html css
// js == es5 ECMAscript5、6、7、8
// es6 jquery vue weapp react .vue .js .ejs
// angular ts === typeScript | java
