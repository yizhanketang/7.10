var down = document.getElementById('down');
var appear = document.getElementById('appear');

down.onmouseenter = function () {
  appear.style.display = 'block'
};
down.onmouseleave = function () {
    appear.style.display = 'none'
};
appear.onmouseenter = function () {
    appear.style.display = 'block'
};

//轮播图

var picture = document.querySelector('.picture');
var bg = document.querySelectorAll('.bg');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var dot = document.querySelectorAll('.dot');
var indexNum = 0;
var play;
function playFun(){
    play = setInterval(function () {
        for (var j = 0;j < bg.length;j++){
            bg[j].classList.remove('look');
            dot[j].classList.remove('bgc');
        }
        indexNum += 1;
        if (indexNum >= bg.length){
            indexNum = 0;
        }
        bg[indexNum].classList.add('look');
        dot[indexNum].classList.add('bgc');

    },2000)
}
playFun();

//按钮

for ( var i = 0;i < bg.length;i++){
    dot[i].index = i;
    dot[i].onmouseenter = function () {
    for (var  j = 0;j < bg.length;j++){
        bg[j].classList.remove('look');
        dot[j].classList.remove('bgc');
    }
    indexNum = this.index;
    bg[indexNum].classList.add('look');
    dot[indexNum].classList.add('bgc');
    }
}
//箭头

next.onclick = function () {
    indexNum += 1;
    if (indexNum >= bg.length){
        indexNum = 0;
    }
  for (var j = 0;j < bg.length;j++)  {
      bg[j].classList.remove('look');
      dot[j].classList.remove('bgc');
  }
    bg[indexNum].classList.add('look');
    dot[indexNum].classList.add('bgc');
};
prev.onclick = function () {
    indexNum -= 1;
    if (indexNum < 0){
        indexNum = bg.length - 1;
    }
    for (var j = 0;j < bg.length;j++)  {
        bg[j].classList.remove('look');
        dot[j].classList.remove('bgc');
    }
    bg[indexNum].classList.add('look');
    dot[indexNum].classList.add('bgc');
};