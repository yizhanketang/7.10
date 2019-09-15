var downLoad = document.getElementById('download');
var triangle = document.querySelector('.top .top1 a>i');
var app = document.querySelector('.top .top1 a .app');

downLoad.onmouseenter = function () {
    triangle.style.display = 'block';
    app.style.height = '150px'

};
downLoad.onmouseleave = function () {
    triangle.style.display = 'none';
    app.style.height = '0'

};


var pink = document.getElementById('pink');
var examples = document.querySelector('.head .examples');
var purple = document.getElementById('purple');
var second = document.querySelectorAll('.head .example i');
var phone = document.querySelectorAll('.head .example .phone');
var model = document.querySelectorAll('.head .example .model');
var cost = document.querySelectorAll('.head .example .cost');
var tv = document.getElementById('tv');
var notebook = document.getElementById('notebook');
var robot = document.getElementById('robot');

pink.onmouseover = function () {
    examples.style.height = '200px'
    for (var j = 0; j<second.length; j++){
        second[j].classList.add('phone');
        model[j].innerHTML = '小米CC9'
        cost[j].innerHTML = '1799元起'
    }
}
examples.onmouseenter = function () {
    examples.style.height = '200px'
    for (var j = 0; j<second.length; j++){
        second[j].classList.add('phone');
        model[j].innerHTML = '小米CC9'
        cost[j].innerHTML = '1799元起'
    }
}
pink.onmouseout = function () {
    examples.style.height = '0'
    for (var j = 0; j<second.length; j++){
        second[j].classList.remove('phone');
    }
}
examples.onmouseleave = function () {
    for (var j = 0; j<second.length; j++){
        second[j].classList.remove('phone');
    }
    examples.style.height = '0'
}


purple.onmouseover = function () {
    for (var i = 0; i<second.length; i++){
        second[i].classList.add('others');
        model[i].innerHTML = 'Redmi Note8'
        cost[i].innerHTML = '999元起'
    }
    examples.style.height = '200px'
}
examples.onmouseenter = function () {
    for (var i = 0; i<second.length; i++){
        second[i].classList.add('others')
        model[i].innerHTML = 'Redmi Note8'
        cost[i].innerHTML = '999元起'
    }
    examples.style.height = '200px'
}
purple.onmouseout = function () {
    for (var i = 0; i<second.length; i++){
        second[i].classList.remove('others')
    }
    examples.style.height = '0'
}
examples.onmouseleave = function () {
    for (var i = 0; i<second.length; i++){
        second[i].classList.remove('others')
    }
    examples.style.height = '0'
}


tv.onmouseover = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('tv');
        model[x].innerHTML = '小米全面屏电视E55A'
        cost[x].innerHTML = '3799元起'
    }
    examples.style.height = '200px'
}
examples.onmouseenter = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('tv');
        model[x].innerHTML = '小米全面屏电视E55A';
        cost[x].innerHTML = '3799元起'
    }
    examples.style.height = '200px'
}
tv.onmouseout = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('tv')
    }
    examples.style.height = '0'
}
examples.onmouseleave = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('tv')
    }
    examples.style.height = '0'
}


notebook.onmouseover = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('notebook');
        model[x].innerHTML = 'RedmiBook 14 独显版'
        cost[x].innerHTML = '3999元起'
    }
    examples.style.height = '200px'
}
examples.onmouseenter = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('notebook');
        model[x].innerHTML = 'RedmiBook 14 独显版';
        cost[x].innerHTML = '3999元起'
    }
    examples.style.height = '200px'
}
notebook.onmouseout = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('notebook')
    }
    examples.style.height = '0'
}
examples.onmouseleave = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('notebook')
    }
    examples.style.height = '0'
}


tv.onmouseover = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('tv');
        model[x].innerHTML = '小米全面屏电视E55A'
        cost[x].innerHTML = '3799元起'
    }
    examples.style.height = '200px'
}
examples.onmouseenter = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('tv');
        model[x].innerHTML = '小米全面屏电视E55A';
        cost[x].innerHTML = '3799元起'
    }
    examples.style.height = '200px'
}
tv.onmouseout = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('tv')
    }
    examples.style.height = '0'
}
examples.onmouseleave = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('tv')
    }
    examples.style.height = '0'
}



robot.onmouseover = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('robot');
        model[x].innerHTML = '米家扫地机器人'
        cost[x].innerHTML = '1499元起'
    }
    examples.style.height = '200px'
}
examples.onmouseenter = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.add('robot');
        model[x].innerHTML = '米家扫地机器人';
        cost[x].innerHTML = '1499元起'
    }
    examples.style.height = '200px'
}
robot.onmouseout = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('robot')
    }
    examples.style.height = '0'
}
examples.onmouseleave = function () {
    for (var x = 0; x<second.length; x++){
        second[x].classList.remove('robot')
    }
    examples.style.height = '0'
}

var bannerMenu = document.querySelectorAll('.banner-menu a');
var menuItem = document.querySelectorAll('.menu');
var telephone = document.getElementById('telephone');
var tvBox = document.getElementById('tv-box');
var notePid = document.getElementById('note-pid');
var household = document.getElementById('household');

var menuList =document.getElementById('menu-list');
var tvList =document.getElementById('tv-list');
var bookList =document.getElementById('book-list');
var robotList =document.getElementById('robot-list');

for (var i=0; i<bannerMenu.length; i++) {
    bannerMenu[i].onmouseover = function () {
        for (var j=0; j<bannerMenu.length; j++){
            bannerMenu[j].index = j;
        }

        for (var x = 0; x < menuItem.length; x++) {
          menuItem[x].style.display = 'none';
        }
        // bannerMenu[j].index = this.index = j
      // console.log(menuItem[this.index])
      console.log(this.index)
      if (this.index < menuItem.length) {
        menuItem[this.index].style.display = 'block'
      }
    }
}

window.onload = function () {
    var topBtn =document.getElementById('top');
    var timer = null;
    var isTop = true;
    var cHeight = document.documentElement.clientHeight
    window.onscroll = function () {
        var osTop = document.documentElement.scrollTop||document.body.scrollTop
        if(osTop>=cHeight) {
            topBtn.style.display='block';
        }
        else {
            topBtn.style.display='none';
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false
    }
    topBtn.onclick = function () {
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop||document.body.scrollTop;
            var isDeep = Math.floor(-osTop/6)
            document.documentElement.scrollTop = document.body.scrollTop;
            isTop = true
            if (osTop==0){
                clearInterval(timer);
            }
        },30)
    }
}



