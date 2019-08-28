var content = document.querySelector('.content');
var show = document.querySelectorAll('.images div');
var images = document.querySelector('.images');
var prow = document.querySelector('.prow');
var next = document.querySelector('.next');
//轮播
var play;
var imgWidth = images.offsetWidth;
var width = images.offsetWidth * show.length + 'px';

var innerNum = 0;

images.style.width = width;


function playFun(){
    play = setInterval(function play() {
        for (var i = 0;i < show.length;i++){
            dot[i].classList.remove('bgc');
        }
        innerNum +=1;
        if (innerNum >= show.length){
            innerNum = 0;
        }
        console.log(imgWidth);
        dot[innerNum].classList.add('bgc');
        images.style.left = '-'+ innerNum * imgWidth + 'px';
    },4000);
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
    }
    dot[innerNum].classList.add('bgc');
    images.style.left = '-'+ innerNum * imgWidth + 'px';
};

//左箭头

prow.onclick = function(){
    innerNum -= 1;
    if (innerNum < 0){
        innerNum = show.length - 1;
    }for (var j = 0;j < show.length;j++){
        dot[j].classList.remove('bgc');
    }
    dot[innerNum].classList.add('bgc');
    images.style.left = '-'+ innerNum * imgWidth + 'px';
};

//添加下标
var bottom = document.querySelector('.bottom');
var dotsHtml = '<div>';
for (var a = 0; a < show.length; a++){
    if (a === 0){
        dotsHtml += '<span class="bgc"></span>'
    }else{
        dotsHtml += '<span></span>'
    }
}
dotsHtml += '</div>';
bottom.innerHTML += dotsHtml;
console.log(bottom.innerHTML);


//下标
var dot = document.querySelectorAll('.bottom span');

for (var i = 0;i < show.length;i++){
    dot[i].index = i;
    dot[i].onclick = function () {
        for (var j = 0;j < show.length;j++){
            dot[j].classList.remove('bgc');
        }
        innerNum = this.index;
        dot[innerNum].classList.add('bgc');
        images.style.left = '-'+ innerNum * imgWidth + 'px';
    }
}

//移入停止

images.onmouseover = function () {
    clearInterval(play);
};
images.onmouseout = function () {
    playFun()
};