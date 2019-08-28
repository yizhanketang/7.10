menuShowItem()
// banner()


var bannerData = [
  'images/pic1.jpg',
  'images/pic2.webp',
  'images/pic3.webp',
  'images/pic4.webp',
  'images/pic1.jpg',
]

function f() {
  
}


var bannerWrap = document.querySelector('.banner-wrap')
var imgHtml = '<div class="imgs-wrap clear">'
var dotHtml = '<div class="dots-wrap">'

for (var i = 0; i < bannerData.length; i++) {
  imgHtml += '<div style="background: url(' + bannerData[i] + ') no-repeat center / cover;" class="item"></div>'
  if (i === 0) {
    dotHtml += '<span class="active"></span>'
  } else {
    dotHtml += '<span></span>'
  }
}

imgHtml += '</div>'
dotHtml += '</div>'

bannerWrap.innerHTML += imgHtml
bannerWrap.innerHTML += dotHtml

var prevBtn = document.createElement('a')
prevBtn.href = 'javascript:void(0)'
prevBtn.className = 'prev'
prevBtn.innerHTML = '<'
bannerWrap.appendChild(prevBtn)

var nextBtn = document.createElement('a')
nextBtn.href = 'javascript:void(0)'
nextBtn.className = 'next'
nextBtn.innerHTML = '>'
bannerWrap.appendChild(nextBtn)

var imgsWrap = document.querySelector('.imgs-wrap')
var width = bannerWrap.offsetWidth * bannerData.length
imgsWrap.style.width = width + 'px'

var leftVal = 0

setInterval(function () {
  leftVal -= bannerWrap.offsetWidth
  if (leftVal <= (width * -1)) {
    leftVal = 0
  }
  imgsWrap.style.left = leftVal + 'px'
}, 3000)


