
var saoma = document.getElementById('xiazai')
var mazi = document.getElementById('shangjiao')

// 二维码图出来
saoma.onmouseover = function(){
    mazi.style.display = 'block'
}
setTimeout(function(){
    saoma.onmouseout = function(){
        mazi.style.display = 'none'
    }
},2000)


// 购物车出来
var card = document.getElementById('top2card')
var shoppingcard = document.querySelector('.shoppingcard')


card.onmouseover = function(){
    shoppingcard.style.display = 'block'
}

card.onmouseout = function(){
    shoppingcard.style.display = 'none'
}

//   选项卡

// var menu = document.querySelectorAll('.boxmenu')


var xuanze = document.querySelectorAll('.box1 .left a')
var xiangmu = document.querySelectorAll('.boxmenu')
var left = document.querySelector('.box1 .left')

for(var i = 0; i < xuanze.length; i++){
    xuanze[i].index = i
    xuanze[i].onmouseover = function(){
        for (var j = 0; j < xiangmu.length; j++){
            xiangmu[j].classList.remove('active')
        }
        indexNum = this.index
        xiangmu[indexNum].classList.add('active')
    }
    left.onmouseout = function(){
        xiangmu[indexNum].classList.remove('active')
    }
}



// xuanze[i].onmouseout = function(){
//     for (var j = 0; j < xiangmu.length; j++){
//         xiangmu[j].classList.remove('active')
//     }
//     indexNum = this.index
//     xiangmu[indexNum].classList.add('active')
// }




















