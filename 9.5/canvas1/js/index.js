
var tutorial = document.querySelector('#tutorial')

tutorial.height = 500
tutorial.width = 500

var ctx = tutorial.getContext('2d')


// ctx.clip();
ctx.moveTo(100, 250)
ctx.lineTo(300, 200)
ctx.lineTo(200, 300)
ctx.lineTo(200, 200)
ctx.lineTo(300, 300)
ctx.closePath()
ctx.clip();
ctx.fillStyle = '#0000ff'
ctx.fillRect(0, 0, 200, 200)
// ctx.globalCompositeOperation = 'copy'
ctx.fillStyle = '#ff0000'
ctx.fillRect(100, 100, 200, 200)

// ctx.fillStyle = '#ff00ff'

ctx.fill()





/*var imgDom = document.querySelector('.img')

ctx.rotate(Math.PI* 2)
ctx.scale(0.5, 0.5)
var left = 0
ctx.transform(1, 1, .2, 1, 0, 0)*/
/*
a (m11): Horizontal scaling.
b (m12): Horizontal skewing.
c (m21):​ Vertical skewing.
d (m22):​ Vertical scaling.
e (dx):​ Horizontal moving.
f (dy):​ Vertical moving.
*/
/*setInterval(function () {
  ctx.save()
  left += 1
  ctx.translate(100, left)
  // ctx.transform(0.5, 1, 1, .7, left, -100)
  ctx.drawImage(imgDom, 600, 250, 800, 800, 0, 0, 800, 800)
  ctx.restore()
}, 10)*/



/*
setTimeout(function () {
  // ctx.drawImage(imgDom, 0, 0, 450, 200)
  ctx.drawImage(imgDom, 600, 250, 800, 800, 0, 0, 800, 800)
})*/



/*var img = new Image();   // 创建一个<img>元素
img.src = 'images/pic1.jpg'; // 设置图片源地址
console.log(img)
*/

/*imgDom.onload = function() {
  ctx.drawImage(imgDom, 0, 0)
}*/

// new Promise()
// async await

// ctx.drawImage(img, 0, 0);

function draw(){
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext("2d");
  var img = document.querySelector("img");
  ctx.drawImage(img, 0, 0);
}
document.querySelector("img").onclick = function (){
  // draw();
}












// ctx.font = "50px sans-serif"
// start, end, left, right, center
// ctx.textAlign = 'right'
// top, hanging, middle, alphabetic, ideographic, bottom
// ctx.textBaseline = 'middle'
// ltr, rtl, inherit
// ctx.direction = 'rtl'
// ctx.fillText("我的天呐", 10, 100, 200);
// ctx.strokeText("我的 天呐".split('').reverse().join(''), 250, 250)
// ctx.fillRect(250, 250, 10, 5)





