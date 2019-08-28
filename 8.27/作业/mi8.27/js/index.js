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

var bannerDot = document.querySelectorAll('.dots-wrap span')
var left = document.querySelector('.prev')
var right = document.querySelector('.next')
var leftVal = 0
var autoPlay
var indexN = 0

function autoPlayFun(){
  autoPlay = setInterval(function () {
    leftVal -= bannerWrap.offsetWidth
   
    indexN += 1
    for(var i = 0; i < bannerDot.length; i++){
      bannerDot[i].classList.remove('active')
    }
    
    if(indexN >= bannerDot.length){
      indexN =  0
    }
    
    if (leftVal <= (width * -1)) {
      leftVal = 0
    }
    imgsWrap.style.left = leftVal + 'px'
    bannerDot[indexN].classList.add('active')
  
  }, 3000)
}
autoPlayFun()

for(var i = 0; i < bannerDot.length; i ++){
  bannerDot[i].index = i
  bannerDot[i].onclick = function(){
     indexN = this.index
     for(var j = 0; j < bannerDot.length;j++){
       bannerDot[j].classList.remove('active')
       imgsWrap.style.left = 0
     }
     bannerDot[indexN].classList.add('active')
     imgsWrap.style.left = bannerWrap.offsetWidth * (indexN) * -1 + 'px';
  }
  
}


bannerWrap.onmouseover = function(){
  clearInterval(autoPlay)
}

bannerWrap.onmouseout = function(){
  autoPlayFun()
}


left.onclick = function(){
  indexN -= 1
  if (indexN < 0){
    indexN = bannerDot.length -1
  }
  for(var j = 0; j < bannerDot.length;j++){
    bannerDot[j].classList.remove('active')
    imgsWrap.style.left = 0
  }
  bannerDot[indexN].classList.add('active')
  imgsWrap.style.left = bannerWrap.offsetWidth * (indexN) * -1 + 'px';
}

right.onclick = function(){
  indexN += 1
  if(indexN >= bannerDot.length){
    indexN = 0
  }
  for(var j = 0; j < bannerDot.length;j++){
    bannerDot[j].classList.remove('active')
    imgsWrap.style.left = 0
  }
  bannerDot[indexN].classList.add('active')
  imgsWrap.style.left = bannerWrap.offsetWidth * (indexN) * -1 + 'px';
}

















