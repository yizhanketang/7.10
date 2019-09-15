
var saoma = document.getElementById('xiazai')
var mazi = document.getElementById('shangjiao')

// 二维码图出来
saoma.onmouseover = function(){
    mazi.style.display = 'block'
}
saoma.onmouseout = function(){
    mazi.style.display = 'none'
}

mazi.onmouseover = function(){
    mazi.style.display = 'block'
}
mazi.onmouseleave = function () {
    mazi.style.display = 'none'
}

// 购物车出来
var card = document.getElementById('top2card')
var shoppingcard = document.querySelector('.shoppingcard')


card.onmouseover = function(){
    shoppingcard.style.display = 'block'
}

card.onmouseout = function(){
    shoppingcard.style.display = 'none'
}

// menu 划出来 

$(function(){
    /*$('.goods ul li').each(function(index,ele){
        $(ele).hover(function(){
            $('.float-warp .float').each(function(inddex,els){
                var indexNum = inddex
            })
        })
    })*/

  /*$('.goods ul li').hover(function () {
    // $(this)
  }, function () {
    console.log(this)
  })*/
})


var show = document.querySelectorAll('.goods ul li')
var actw = document.querySelector('.float-warp')
var act = document.querySelectorAll('.float-warp .float')
console.log(actw)

function showTime(){

    for(var i = 0; i < show.length; i++){
        show[i].index = i
        show[i].onmouseenter = function(){
            for(var j = 0; j < act.length; j++){
                act[j].classList.remove('acts')
                actw.classList.remove('acts')
            }
            indexNum = this.index
            actw.classList.add('acts')
            act[indexNum].classList.add('acts')
        }
        show[i].onmouseout = function(){
            for(var j = 0; j < act.length; j++){
                act[j].classList.remove('acts')
                actw.classList.remove('acts')
            }
        }

        
    }
}
showTime()

act[i].onmouseenter = function(){
    actw.classList.add('acts')
    this.classList.add('acts')
}

act[i].onmouseout = function(){
    actw.classList.remove('acts')
    this.classList.remove('acts')
}



//   选项卡

var xuanze = document.querySelectorAll('.box1 .left a')
var xiangmu = document.querySelectorAll('.boxmenu')
var left = document.querySelector('.box1 .left')


for(var i = 0; i < xuanze.length; i++){
    xuanze[i].index = i
    xuanze[i].onmouseenter = function(){
        for (var j = 0; j < xiangmu.length; j++){
            xiangmu[j].classList.remove('active')
        }
        indexNum = this.index
        xiangmu[indexNum].classList.add('active')
    }
    xuanze[i].onmouseleave = function(){
        for (var j = 0; j < xiangmu.length; j++){
            xiangmu[j].classList.remove('active')
        }
    }

    //项目的添加
    xiangmu[i].onmouseenter = function () {
        this.classList.add('active')
    };
    xiangmu[i].onmouseleave = function () {
        this.classList.remove('active')
    }
}


// 倒计时 

setInterval(
    function () {
        var countdown1 = document.getElementById('countdown1')
        console.log(countdown1)
        var countdown2 = document.getElementById('countdown2')
        
        var countdown3 = document.getElementById('countdown3')

        var night = new Date(2019,8,11,16,30)
        var now = new Date()
        var nowTime = now.getTime()
        // 现在时间的毫秒
        var nightTime = night.getTime()

        // 想到时间的毫秒

        var difference = nightTime - nowTime
           // 时间差

        var alls = parseInt(difference/1000)
          // 取毫秒差的秒


        var hours =  parseInt( alls / 3600)

        var mins = parseInt((alls  % 3600)/ 60)

        var s = parseInt(((alls  % 3600)% 60)%60)

        countdown1.innerHTML = hours
        countdown2.innerHTML = mins
        countdown3.innerHTML = s
        if (hours < 10 ) {
            hours ="0"+hour;

        }else if(hours==0){
            hours= '00';

        }  if(mins<10){
            mins="0"+mins;
       
        }if(s<10){
            s="0"+s;
        
        } else{
        countdown1.innerHTML = hours
        countdown2.innerHTML = mins
        countdown3.innerHTML = s
        }

        var desc = document.getElementById('desc')
        if(hours === 00, mins ===00, s === 00){
            desc.innerHTML = '本场已结束'
        }
        

    },100000000000

)



















