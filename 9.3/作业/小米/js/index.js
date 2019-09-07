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
            use();
            innerNum += 1;
            if (innerNum >= picture.length){
                innerNum = 0;
            }
            // console.log(pictures.style.left)

        },5000)
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

(function () {
    var boxA = document.querySelector('.box-a');
    var boxB = document.querySelectorAll('.a11');
    var boxC = document.querySelector('.a12');

    for (var i = 0; i < boxB.length; i++){
        boxA.onclick = function () {
            console.log(boxB[i]);
            for ( var x = 0; x<boxB.length;x++){
                boxB[x].classList.add('remove');
                boxC.classList.add('box-c');
                window.event? window.event.cancelBubble = true : e.stopPropagation();
            }
        };
        document.documentElement.onclick = function () {
            for ( var x = 0; x<boxB.length;x++){
                boxB[x].classList.remove('remove');
                boxC.classList.add('box-c');
            }
            boxC.classList.remove('box-c');
        };
    }

})();

    var select = document.querySelectorAll('.select');
    var product = document.querySelectorAll('.product');
    function showed(top,bottom,name) {
    for (var i = 0; i < top.length; i++) {
        top[i].index = i;
        top[i].onmouseenter = function () {
            for (var j = 0; j < top.length; j++) {
                bottom[j].classList.remove(name);
            }
            bottom[this.index].classList.add(name);
        };
        top[i].onmouseleave = function () {
            for (var j = 0; j < top.length; j++) {
                bottom[j].classList.remove(name);
            }
            bottom[this.index].classList.remove(name);
        };

        bottom[i].onmouseenter = function () {
            this.classList.add(name)
        };
        bottom[i].onmouseleave = function () {
            this.classList.remove(name)
        };
    }
    }
    showed(select,product,'show');
    var bannerLeft = document.querySelectorAll('.left-show');
    var bannerTop = document.querySelectorAll('.left-right');
    showed(bannerLeft,bannerTop,'show-ul');
    console.log();
