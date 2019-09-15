
// 轮播图

var bannerWarp = document.querySelector('.banner-right')
var bannerTu = document.querySelectorAll('.banner-item')
var bannerDian = document.querySelectorAll('.dot-item')
var left = document.querySelector('.left-ear')
var right = document.querySelector('.right-ear')

var aotuPlay

function autoPlayFun() {
    autoPlay = setInterval(function(){
        for(var i = 0; i < bannerTu.length; i++){
            bannerTu[i].classList.remove('active')          
            bannerDian[i].classList.remove('origin')
            
        }
        indexNum += 1
        if(indexNum >= bannerTu.length){
            indexNum = 0
        }
        bannerTu[indexNum].classList.add('active')
        bannerDian[indexNum].classList.add('origin')

    },2000)
}
autoPlayFun()

var indexNum = 0

bannerWarp.onmouseover = function(){
    clearInterval(autoPlay)
}

bannerWarp.onmouseout = function(){
    autoPlayFun()
}

for (var i= 0; i < bannerDian.length; i++){
    bannerDian[i].index = i
    bannerDian[i].onclick = function(){
        for(var j = 0; j < bannerDian.length; j++){
            console.log(bannerDian.length)
            bannerTu[j].classList.remove('active')
            bannerDian[j].classList.remove('origin')
        }
        this.classList.add('origin')
        indexNum = this.index
        bannerTu[indexNum].classList.add('active')
    }
}

left.onclick = function(){
    indexNum -= 1
    if(indexNum < 0){
        indexNum = bannerTu.length - 1
    }
    for(var j = 0; j < bannerDian.length; j++){
        bannerTu[j].classList.remove('active')
        bannerDian[j].classList.remove('origin')
    }
    bannerDian[indexNum].classList.add('origin')
    bannerTu[indexNum].classList.add('active')
}

right.onclick = function(){
    indexNum += 1
    if (indexNum >= bannerTu.length){
        indexNum = 0
    }
    for(var j = 0; j < bannerDian.length; j++){
        bannerTu[j].classList.remove('active')
        bannerDian[j].classList.remove('origin')
    }
    bannerDian[indexNum].classList.add('origin')
    bannerTu[indexNum].classList.add('active')
}


















