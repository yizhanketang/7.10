/*
document.documentElement.onclick = function (event) {
  // console.log(e)
  // console.log(e.screenX, e.screenY)
  // console.log('click')
  document.getElementsByClassName('menu')[0].style.display = 'none'
}

document.documentElement.ondblclick = function () {
  // console.log('dblclick')
}

document.documentElement.oncontextmenu = function (e) {
  // console.log('-----')
  var x = e.clientX
  var y = e.clientY
  console.log(x)
  console.log(y)
  console.log(e)
  document.getElementsByClassName('menu')[0].style.display = 'block'
  document.getElementsByClassName('menu')[0].style.top = y + 'px'
  document.getElementsByClassName('menu')[0].style.left = x + 'px'
  return false
}

document.documentElement.onclick = function (event) {
  console.log('click')
}

document.documentElement.onmousedown = function () {
  console.log('down')
}
document.documentElement.onmouseup = function () {
  console.log('up')
}

document.documentElement.onmousemove = function (e) {
  // console.log(e.clientX, e.clientY)
  document.getElementsByClassName('menu')[0].style.top = e.clientY + 'px'
  document.getElementsByClassName('menu')[0].style.left = e.clientX + 'px'
}

document.querySelector('.input').onmouseenter = function () {
  document.getElementsByClassName('menu')[0].style.display = 'block'
}

document.querySelector('.input').onmouseleave = function () {
  document.getElementsByClassName('menu')[0].style.display = 'none'
}

document.querySelector('.input').onmouseover = document.getElementsByClassName('menu')[0].onmouseover = function () {
  document.getElementsByClassName('menu')[0].style.display = 'block'
}

document.querySelector('.input').onmouseout = document.getElementsByClassName('menu')[0].onmouseout = function () {
  document.getElementsByClassName('menu')[0].style.display = 'none'
}

document.getElementsByClassName('menu')[0].onmouseover = function () {
  document.getElementsByClassName('menu')[0].style.display = 'block'
}

document.getElementsByClassName('menu')[0].onmouseout = function () {
  document.getElementsByClassName('menu')[0].style.display = 'none'
}

document.documentElement.onkeyup = function () {
  console.log('up')
}

document.documentElement.onkeypress = function () {
  console.log('press')
}

document.documentElement.onkeydown = function (e) {
  // console.log(e)
  if (e.keyCode === 66 && e.shiftKey && e.altKey) {
    console.log(e)
  }

  if (e.keyCode === 66) {
    console.log(e)
  }
}

var menu = document.querySelector('.menu')

document.documentElement.onkeydown = function (event) {
  var e = window.event || event

  switch (e.keyCode) {
    case 38:
      var top = parseInt(menu.style.top) - 10
      menu.style.top = top + 'px'
      break
    case 40:
      var top = parseInt(menu.style.top) + 10
      menu.style.top = top + 'px'
      break
    case 37:
      var top = parseInt(menu.style.left) - 10
      menu.style.left = top + 'px'
      break
    case 39:
      var top = parseInt(menu.style.left) + 10
      menu.style.left = top + 'px'
      break
  }
}

document.getElementById('form').onreset = function (e) {
  alert('reset form')
  return false
}
*/

/*document.getElementById('form').onsearch = function (e) {
  return false
}

document.querySelector('form input').onkeydown = function (e) {
  if (e.keyCode === 13) {
    alert('是否提交')
    return false
  }
}

document.querySelector('form input').onselect = function (e) {
  alert('选中文字')
}

document.getElementById('form').onsubmit = function (e) {
  // alert('确认提交？')
  // return false
}
*/





