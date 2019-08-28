
var content = document.querySelector('.content');
var show = document.querySelectorAll('.show');
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
            show[i].classList.remove('active');
    }
    innerNum +=1;
    if (innerNum >= show.length){
        innerNum = 0;
    }
        dot[innerNum].classList.add('bgc');
        show[innerNum].classList.add('active');
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
          show[j].classList.remove('active');
      }
      dot[innerNum].classList.add('bgc');
      show[innerNum].classList.add('active');
  };

  //左箭头

prow.onclick = function(){
    innerNum -= 1;
    if (innerNum < 0){
        innerNum = show.length - 1;
    }for (var j = 0;j < show.length;j++){
        dot[j].classList.remove('bgc');
        show[j].classList.remove('active');
    }
    dot[innerNum].classList.add('bgc');
    show[innerNum].classList.add('active');
};

  //下标

for (var i = 0;i < show.length;i++){
    dot[i].index = i;
    dot[i].onclick = function () {
        for (var j = 0;j < show.length;j++){
        dot[j].classList.remove('bgc');
        show[j].classList.remove('active');
    }
    innerNum = this.index;
        console.log(this.index);
    dot[innerNum].classList.add('bgc');
    show[innerNum].classList.add('active');
    }
}

//移入停止

content.onmouseover = function () {
    clearInterval(play);
    console.log(1)
};
content.onmouseout = function () {
    playFun()
};