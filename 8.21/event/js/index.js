
/*document.querySelector('.small').onclick = function () {
  alert('我是small')
}*/

var small = document.querySelector('.small')
var box = document.querySelector('.box')
var container = document.querySelector('.container')

// 事件绑定
small.addEventListener('click', remind)
small.addEventListener('click', remind1, true)
small.removeEventListener('click', remind)

box.addEventListener('click', function (event) {
  // stopPropaga(event)
  console.log('我是box')
}, true)

container.addEventListener('click', function () {
  console.log('我是container')
}, true)

function remind() {
  alert('我是small')
}

function remind1(e) {
  // stopPropaga(e)
  console.log('我是small')
}

function stopPropaga(event) {
  if (event.cancelBubble) {
    event.cancelBubble = true;
  } else {
    event.stopPropagation();
  }
}

/*small.removeEventListener('click', function () {
  alert('我是small')
})*/

document.querySelector('a').onclick = function (event) {
  // return false
  if (event.returnValue) {
    event.returnValue = false
  } else {
    event.preventDefault()
  }
}


