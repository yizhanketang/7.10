

var box1 = document.querySelector('.box1')

var strArr = box1.innerHTML.split('')
console.log(strArr)
box1.innerHTML = ''
for (var i = 0; i < strArr.length; i++) {
  box1.innerHTML += '<span>' + strArr[i] + '</span>'
}

var activeIndex = 0
var spans = document.querySelectorAll('.box1 > span')
spans[0].classList.add('red')
setInterval(function () {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var a = Math.random().toFixed(1)

  // spans
  activeIndex += 1
  // spans[activeIndex].classList.add('red')
  spans[activeIndex].style.color = 'rgba(' + r + ',' + g + ',' + b + ',' + a +')'

}, 500)










/*var left = 0
var timer = setInterval(function () {
  left += 1
  if (left > 600) {
    clearInterval(timer)
  }
  document.querySelector('.box').style.marginTop = left + 'px'
  document.querySelector('.box').style.marginLeft = left + 'px'
}, 1)*/
