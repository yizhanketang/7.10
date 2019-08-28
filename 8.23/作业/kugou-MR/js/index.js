var bannerWarp = document.querySelector('.banner-warp')
var bannerTu = document.querySelectorAll('.banner-tu')
var bannerDian = document.querySelectorAll('.dian-item')
var left = document.querySelector('.left-ear')
var right = document.querySelector('.right-ear')

// function animate(obj,targetPlace){
//     clearInterval(obj.timer);
//   obj.timer = setInterval(function(){
//       //判断移动的位置是向左移动还是向右移动
//       var speed = obj.offsetLeft > targetPlace ? -15:15;
//       var result = targetPlace - obj.offsetLeft;
//       //只要移动的差值大于speed，那么就一直让obj.style.left 改变
//       if(Math.abs(result) > Math.abs(speed)){
//           obj.style.left = obj.offsetLeft + speed +'px'
//       }else{
//           //否则如果已经移动的，obj.offsetleft与要移动的位置十分接近了，
//           obj.style.left = targetPlace+'px';
//           clearInterval(obj.timer);
//       }
//   },20)

// }

// 滑动效果失效


var autoPlay;

function autoPlayFun(){
      
    autoPlay = setInterval(function(){
        for(var i = 0; i < bannerTu.length; i++){
            bannerTu[i].classList.remove('active')
            bannerDian[i].classList.remove('wirte')
        }
        indexNum += 1
        if(indexNum >= bannerTu.length){
            indexNum = 0
        }
        bannerTu[indexNum].classList.add('active')
        bannerDian[indexNum].classList.add('wirte')

    },3000)

}
autoPlayFun()
var indexNum = 0

bannerWarp.onmouseover = function(){
    clearInterval(autoPlay)
}
bannerWarp.onmouseout = function(){
    autoPlayFun()
}


for(var i = 0; i < bannerDian.length; i++){
    bannerDian[i].index = i
    bannerDian[i].onclick = function(){
        for(var j = 0; j < bannerDian.length; j++){
            bannerTu[j].classList.remove('active')
            bannerDian[j].classList.remove('wirte')
        }
        this.classList.add('wirte')
        indexNum = this.index
        bannerTu[indexNum].classList.add('active')
    }
}

left.onclick = function(){
    indexNum -= 1

    if(indexNum < 0){
        indexNum = bannerTu.length-1
    }

    for(var j = 0; j < bannerDian.length; j++){
        bannerTu[j].classList.remove('active')
        bannerDian[j].classList.remove('wirte')
    }
    bannerTu[indexNum].classList.add('active')
    bannerDian[indexNum].classList.add('wirte')
}

right.onclick = function(){
    indexNum += 1

    if(indexNum >= bannerTu.length){
        indexNum = 0
    }
    for(var j = 0; j < bannerDian.length; j++){
        bannerTu[j].classList.remove('active')
        bannerDian[j].classList.remove('wirte')
    }
    bannerTu[indexNum].classList.add('active')
    bannerDian[indexNum].classList.add('wirte')
}


var maodian = document.querySelector('.maodian')

// console.log('document.body.scrollTop')


document.body.onscroll = function () {
    if (document.documentElement.scrollTop > 700){
        maodian.style.display = 'block'
    } else {
        maodian.style.display = 'none'
    }

}





