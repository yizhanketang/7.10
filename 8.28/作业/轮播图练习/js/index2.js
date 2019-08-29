//轮播
function allPlay(element, timer,winWidth) {
    var content = element;
    var show = content.querySelectorAll('.images div');
    var images = content.querySelector('.images');
    var prow = content.querySelector('.prow');
    var next = content.querySelector('.next');
    var play;
    var width = winWidth * show.length + 'px';
    var innerNum = 0;
    images.style.width = width;
    content.style.width = winWidth + 'px';
    console.log(content.style.width);
    var innerWidth = content.querySelectorAll('.images div');
    for (var x = 0; x < innerWidth.length; x++){
    innerWidth[x].style.width = winWidth + 'px ';
    }
function playFun(){
    winWidth = winWidth || 1349;
    timer = timer || 300;
    play = setInterval(function play() {
        innerNum += 1;
        if (innerNum >= show.length){
            innerNum = 0;
        }
        use()
    },timer);
}
//  运行轮播
playFun();
//右箭头
next.onclick = function(){
    innerNum += 1;
    if (innerNum >= show.length){
        innerNum = 0;
    }
    use()
};
//左箭头
prow.onclick = function(){
    innerNum -= 1;
    if (innerNum < 0){
        innerNum = show.length - 1;
    }
    use()
};
//添加下标
var bottom = content.querySelector('.bottom');
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
//下标
var dot = content.querySelectorAll('.bottom span');
for (var i = 0;i < show.length;i++){
    dot[i].index = i;
    dot[i].onclick = function () {
        innerNum = this.index;
    };
        use()
}
//移入停止
images.onmouseover = function () {
    clearInterval(play);
};
images.onmouseout = function () {
    playFun()
};
//公用方法
function use() {
    for (var j = 0;j < show.length;j++){
        dot[j].classList.remove('bgc');
    }
    dot[innerNum].classList.add('bgc');
    images.style.left = '-'+ innerNum * winWidth + 'px';
}
}
