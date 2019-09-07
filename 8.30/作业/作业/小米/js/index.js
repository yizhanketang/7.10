(function () {
    var dots = document.querySelectorAll('.dots-wrap span');
    var next = document.querySelector('.right-ear');
    var prev = document.querySelector('.left-ear');
    var pictures = document.querySelector('.pictures');
    var picture = pictures.querySelectorAll('.picture');
    var innerNum = 0;
    var winWidth = 0;
    var active;
    var play = function () {
        active   = setInterval( function () {
           innerNum += 1;
            if (innerNum >= picture.length){
                innerNum = 0;
            }
            console.log(pictures.style.left)
            use();
        },4000)
    };
    play();
function use() {
    for (var j = 0;j < picture.length;j++){
        dots[j].classList.remove('active');
        winWidth = picture[j].offsetWidth
    }
    dots[innerNum].classList.add('active');
    pictures.style.left = '-'+ innerNum * winWidth + 'px';
}
    for (var i = 0;i < picture.length; i++){
        dots[i].index = i;
        dots[i].onclick = function () {
            innerNum = this.index;
            use()
        };
    }
    next.onclick = function () {
        innerNum += 1;
        if (innerNum >= picture.length){
            innerNum = 0;
        }
        use()
    };
    prev.onclick = function () {
        innerNum -= 1;
        if (innerNum < 0){
            innerNum = picture.length - 1;
        }
        use()
    };

    pictures.onmouseover = function () {
        clearInterval(active);
    };
    pictures.onmouseout = function () {
        play()
    };
})();


