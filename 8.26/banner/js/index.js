
var bannerItems = document.getElementsByClassName('banner-item')
var dotItems = document.getElementsByClassName('dot-item')
var prev = document.getElementsByClassName('prev')
var activeIndex = 0
// 自动轮播
setInterval(function () {
  // 遍历移除 class
  for (var i = 0; i < bannerItems.length; i++) {
    bannerItems[i].classList.remove('active')
  }
  // activeIndex = activeIndex + 1
  activeIndex += 1
  if (activeIndex >= bannerItems.length) {
    activeIndex = 0
  }
  // console.log(activeIndex)
  // 添加class
  bannerItems[activeIndex].classList.add('active')

  // 下标红点对应
  for (var x = 0; x < dotItems.length; x++) {
    dotItems[x].classList.remove('red')
  }
  dotItems[activeIndex].classList.add('red')
}, 3000)

// bannerItems[0]
// index
// bannerItems[0].classList.add('active')
// bannerItems[1].classList.add('active')
// bannerItems[2].classList.add('active')
// bannerItems[3].classList.add('active')
// bannerItems[0].classList.add('active')
// bannerItems[1].classList.add('active')
// bannerItems[2].classList.add('active')
// bannerItems[3].classList.add('active')
// bannerItems[0].classList.add('active')

// dotItems
for (var j = 0; j < dotItems.length; j++) {
  // 添加下标
  dotItems[j].ind = j
  dotItems[j].onclick = function () {
    for (var x = 0; x < dotItems.length; x++) {
      dotItems[x].classList.remove('red')
    }
    this.classList.add('red')

    // 下标图片对应
    activeIndex = this.ind
    for (var i = 0; i < bannerItems.length; i++) {
      bannerItems[i].classList.remove('active')
    }
    bannerItems[activeIndex].classList.add('active')
  }
}

prev[0].onclick = function () {
  activeIndex -= 1
  if (activeIndex < 0) {
    activeIndex = bannerItems.length - 1
  }
  for (var i = 0; i < bannerItems.length; i++) {
    bannerItems[i].classList.remove('active')
  }
  bannerItems[activeIndex].classList.add('active')

  for (var x = 0; x < dotItems.length; x++) {
    dotItems[x].classList.remove('red')
  }
  dotItems[activeIndex].classList.add('red')
}










