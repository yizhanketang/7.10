
var content = document.querySelector('.content');
var show = document.querySelectorAll('.show');
var images = document.querySelector('.images');
var prow = document.querySelector('.prow');
var next = document.querySelector('.next');
var dot = document.querySelectorAll('.dot');
//轮播
var play;
var innerNum = 0;
function playFun(){
    play = setInterval(function play() {
        for (var i = 0;i < show.length;i++){
            dot[i].classList.remove('bgc');
            images.style.left = 0;
        }
        innerNum +=1;
        if (innerNum >= show.length){
            innerNum = 0;
        }
        console.log('-'+ innerNum * 1000 + 'px');
        dot[innerNum].classList.add('bgc');
        images.style.left = '-'+ innerNum * 1000 + 'px';
    },2000);
}

//  运行轮播
playFun();
//右箭头
next.onclick = function(){
    innerNum += 1;
    if (innerNum >= show.length){
        innerNum = 0;
    }for (var j = 0;j < dot.length;j++){
        dot[j].classList.remove('bgc');
        images.style.left = 0;
    }
    dot[innerNum].classList.add('bgc');
    images.style.left = '-'+ innerNum * 1000 + 'px';
};

//左箭头

prow.onclick = function(){
    innerNum -= 1;
    if (innerNum < 0){
        innerNum = show.length - 1;
    }for (var j = 0;j < show.length;j++){
        dot[j].classList.remove('bgc');
        images.style.left = 0;
    }
    dot[innerNum].classList.add('bgc');
    images.style.left = '-'+ innerNum * 1000 + 'px';
};

//下标

for (var i = 0;i < show.length;i++){
    dot[i].index = i;
    dot[i].onclick = function () {
        for (var j = 0;j < show.length;j++){
            dot[j].classList.remove('bgc');
            images.style.left = 0;
        }
        innerNum = this.index;
        console.log(this.index);
        dot[innerNum].classList.add('bgc');
        images.style.left = '-'+ innerNum * 1000 + 'px';
    }
}

//移入停止

content.onmouseover = function () {
    clearInterval(play);
};
content.onmouseout = function () {
    playFun()
};