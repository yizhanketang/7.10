/*
* banner v0.1.0
* author：JohnKuo
* time: 2019-8-28
* MIT
* */

function banner(arg) {
  var wrap = arg.el
  var delay = arg.config.delay || 3000
  var bannerItems = wrap.getElementsByClassName('banner-item')
  var dotItems = wrap.getElementsByClassName('dot-item')
  var prevBtn = wrap.getElementsByClassName('prev')[0]
  var nextBtn = wrap.getElementsByClassName('next')[0]
  var activeIndex = 0
  var timer;

  function autoPlay() {
    // var delay = delayTime || 2000
    // var delay = delayTime ? delayTime : 2000 // 三目运算
    timer = setInterval(function () {
      activeIndex += 1
      if (activeIndex >= bannerItems.length) {
        activeIndex = 0
      }
      bannerMain()
    }, delay)
  }

  function bannerMain() {
    for (var i = 0; i < bannerItems.length; i++) {
      bannerItems[i].classList.remove('active')
      dotItems[i].classList.remove('red')
    }
    bannerItems[activeIndex].classList.add('active')
    dotItems[activeIndex].classList.add('red')
  }

  autoPlay()

  wrap.onmouseover = function () {
    clearInterval(timer)
  }

  wrap.onmouseout = function () {
    autoPlay()
  }

  for (var j = 0; j < dotItems.length; j++) {
    dotItems[j].ind = j
    dotItems[j].onclick = function () {
      activeIndex = this.ind
      bannerMain()
    }
  }

  prevBtn.onclick = function () {
    activeIndex -= 1
    if (activeIndex < 0) {
      activeIndex = bannerItems.length - 1
    }
    bannerMain()
  }

  nextBtn.onclick = function () {
    activeIndex += 1
    if (activeIndex >= bannerItems.length) {
      activeIndex = 0
    }
    bannerMain()
  }
}
