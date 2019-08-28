var list_1 = document.querySelectorAll('.detail');
var list_2 = document.querySelectorAll('.middle');

for (var i = 0;i < list_1.length;i++){
    list_1[i].index = i;
    list_1[i].onmouseenter = function () {
        for (var j = 0;j < list_1.length;j++){
            list_2[j].classList.remove('appear');
        }
        list_2[this.index].classList.add('appear')
    }
}
for (var i = 0;i < list_1.length;i++){
    list_1[i].index = i;
    list_1[i].onmouseleave = function () {
        for (var j = 0;j < list_1.length;j++){
            list_2[this.index].classList.remove('appear');
        }
    }
}
for (var x = 0;x < list_2.length;x++){
    list_2[x].onmouseenter = function () {

        this.classList.add('appear');
    }
}
for (var x = 0;x < list_1.length;x++){
    list_2[x].onmouseleave = function () {
            this.classList.remove('appear');
    }
}


var mid = document.querySelector('.mid');
var picture = document.querySelectorAll('.mid-up');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var play;
var innerNum = 0;
var dots = document.querySelectorAll('.dot');
function playFun() {
     play = setInterval(function () {
         innerNum += 1;
         if (innerNum >= picture.length){
             innerNum = 0;
         }
         for (var i = 0;i < picture.length;i++){
             picture[i].classList.remove('show')
             dots[i].classList.remove('bgc')
         }
         picture[innerNum].classList.add('show');
         dots[innerNum].classList.add('bgc');
     },2000)
}
playFun();

next.onclick = function () {
    innerNum += 1;
    if (innerNum >= picture.length){
        innerNum = 0;
    }
    for (var i = 0;i < picture.length;i++){
        picture[i].classList.remove('show')
        dots[i].classList.remove('bgc')
    }
    picture[innerNum].classList.add('show');
    dots[innerNum].classList.add('bgc');
};
prev.onclick = function () {
    innerNum -= 1;
    if (innerNum < 0 ){
        innerNum = picture.length - 1;
    }
    for (var i = 0;i < picture.length;i++){
        picture[i].classList.remove('show')
        dots[i].classList.remove('bgc')
    }
    picture[innerNum].classList.add('show');
    dots[innerNum].classList.add('bgc');
};
for (var i = 0;i < picture.length;i++){
    dots[i].index = i;
    dots[i].onmouseenter = function(){
        for (var j = 0;j < picture.length;j++) {
            picture[j].classList.remove('show');
            dots[j].classList.remove('bgc');
        }
        innerNum = this.index;
        picture[innerNum].classList.add('show');
        dots[innerNum].classList.add('bgc');
    }
}
mid.onmouseenter = function () {
    clearInterval(play)
};
mid.onmouseleave = function () {
    playFun()
};