
var img = document.querySelector('#img')
var target = document.querySelector('#target')

// box.onmousedown
// box.onmousemove
// box.onmouseup

// var imgEle

img.ondragstart = function (e) {
  // console.log(this)
  // imgEle = this
  // console.log(e.target.id)
  e.dataTransfer.setData('content-id', e.target.id)
}

target.ondragover = function (e) {
  e.preventDefault();
}

target.ondrop = function (e) {
  e.preventDefault()
  var id = e.dataTransfer.getData('content-id')
  this.appendChild(document.getElementById(id))
  console.log(id)

  // console.log(imgEle)
  // this.appendChild(imgEle)
}



img.ondrag = function () {
  // console.log('ing')
}

img.ondragend = function () {
  // console.log('over！！！')
}


/*target.ondragenter = function () {
  console.log('enter')
}*/
/*target.ondragover = function (e) {
  e.preventDefault();
  console.log('over')
}
target.ondragleave = function () {
  // console.log('leave')
}
target.ondrop = function (e) {
  e.preventDefault()
  console.log('drop')
}*/

