$(function () {
  function tabs(dtEles, ddEles) {
    dtEles.click(function () {
      $(this).css({
        'background': 'red',
        'color': '#fff'
      }).siblings().css({
        'background': '#fff',
        'color': '#000'
      })
      var $ind = $(this).index()
      ddEles.eq($ind)
        .css('display', 'block')
        .siblings().css('display', 'none')
    })
  }

  tabs($('.container1 .dt a'), $('.container1 .dd .content'))
  tabs($('.container2 .dt a'), $('.container2 .dd .content'))
})



/*
function _(ele) {
  return document.querySelectorAll(ele)
}

function tabs(dtEles, ddEles) {
  for (var i = 0; i < dtEles.length; i++) {
    dtEles[i].ind = i
    dtEles[i].addEventListener('click', function () {
      for (var j = 0; j < dtEles.length; j++) {
        dtEles[j].style = ''
        ddEles[j].style.display = 'none'
      }

      ddEles[this.ind].style.display = 'block'
      this.style.background = 'red'
      this.style.color = '#fff'
    })
  }
}

tabs(document.querySelectorAll('.container1 .dt a'), document.querySelectorAll('.container1 .dd .content'))
tabs(document.querySelectorAll('.container2 .dt a'), document.querySelectorAll('.container2 .dd .content'))
*/


/*(function () {

  var dtAs = _('.dt a')
  for (var i = 0; i < dtAs.length; i++) {
    dtAs[i].ind = i
    dtAs[i].addEventListener('click', function () {
      for (var j = 0; j < dtAs.length; j++) {
        dtAs[j].style = ''
        _('.content')[j].style.display = 'none'
      }

      _('.content')[this.ind].style.display = 'block'
      this.style.background = 'red'
      this.style.color = '#fff'
    })
  }

})()*/

