
var box =  document.querySelector('.box')
var border =  document.querySelector('.border')
var flag = 0
var insideY
var insideX

box.style.top = parseInt(window.innerHeight * Math.random()) + 'px'
box.style.left = parseInt(window.innerWidth * Math.random()) + 'px'

box.onmousedown = function(e) {
  // console.log('down', e.clientY, e.clientX)
  /*box.style.left = e.clientX - 50 + 'px'
  box.style.top = e.clientY - 50 + 'px'*/
  // console.log(box.offsetTop, e.clientY)
  // console.log(box.offsetLeft, e.clientX)
  insideY = e.clientY - box.offsetTop
  insideX = e.clientX - box.offsetLeft
  box.style.left = e.clientX - insideX + 'px'
  box.style.top = e.clientY - insideY + 'px'
  flag = 1
  /*border.style.border = '1px dashed #000'
  border.style.height = box.offsetHeight + 'px'
  border.style.width = box.offsetWidth + 'px'
  border.style.display = 'block'
  border.style.position = 'absolute'
  border.style.left = e.clientX - insideX + 'px'
  border.style.top = e.clientY - insideY + 'px'*/
}

document.documentElement.onmousemove = function (e) {
  if (flag === 1) {
    box.style.left = e.clientX - insideX + 'px'
    box.style.top = e.clientY - insideY + 'px'
    box.classList.add('move')
  }
  // console.log(e.clientX, e.clientY)
  // console.log(e.clientY)
  // box.style.left = e.clientX - 50 + 'px'
  // box.style.top = e.clientY - 50 + 'px'
}

document.documentElement.onmouseup = function(e) {
  flag = 0
  box.classList.remove('move')
  border.style.display = 'none'
}


