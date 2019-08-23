
var bannerItems = document.querySelectorAll('.banner-item')
var bannerWrap = document.querySelector('.banner-wrap')
var dotItems = document.querySelectorAll('.dot-item')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var autoPlay;
function autoPlayFun() {
  autoPlay = setInterval(function () {
    for (var i = 0; i < bannerItems.length; i++) {
      bannerItems[i].classList.remove('active')
      dotItems[i].classList.remove('red')
    }
    indexNum += 1
    if (indexNum >= bannerItems.length) {
      indexNum = 0
    }
    bannerItems[indexNum].classList.add('active')
    dotItems[indexNum].classList.add('red')
    // bannerItems[2].classList.add('active')
    // bannerItems[3].classList.add('active')
    // bannerItems[0].classList.add('active')
  }, 3000)
}

autoPlayFun()

var indexNum = 0

bannerWrap.onmouseover = function () {
  clearInterval(autoPlay)
}

bannerWrap.onmouseout = function () {
  autoPlayFun()
}

for (var i = 0; i < dotItems.length; i++) {
  dotItems[i].index = i
  dotItems[i].onclick = function () {
    // this.index
    for (var j = 0; j < dotItems.length; j++) {
      dotItems[j].classList.remove('red')
      bannerItems[j].classList.remove('active')
    }
    this.classList.add('red')
    indexNum = this.index
    bannerItems[indexNum].classList.add('active')
  }
}

prev.onclick = function () {
  indexNum -= 1
  if (indexNum < 0) {
    indexNum = bannerItems.length -1
  }
  for (var j = 0; j < dotItems.length; j++) {
    dotItems[j].classList.remove('red')
    bannerItems[j].classList.remove('active')
  }
  dotItems[indexNum].classList.add('red')
  bannerItems[indexNum].classList.add('active')
}

next.onclick = function () {
  indexNum += 1
  if (indexNum >= bannerItems.length) {
    indexNum = 0
  }
  for (var j = 0; j < dotItems.length; j++) {
    dotItems[j].classList.remove('red')
    bannerItems[j].classList.remove('active')
  }
  dotItems[indexNum].classList.add('red')
  bannerItems[indexNum].classList.add('active')
}

