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
            use();
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
    var pull = document.querySelector('.box .inputs');

    for (var i = 0; i < boxB.length; i++){
        boxA.onclick = function () {
            for ( var x = 0; x<boxB.length;x++){
                boxC.classList.add('box-c');
                pull.classList.add('show');
                boxB[x].classList.add('remove');
                window.event? window.event.cancelBubble = true : e.stopPropagation();
            }
        };
        document.documentElement.onclick = function () {
            for ( var x = 0; x<boxB.length;x++){
                boxB[x].classList.remove('remove');
                boxC.classList.add('box-c');
                pull.classList.remove('show');
                if (boxA.value !== ''){
                    boxB[x].classList.add('remove')
                } else{
                    boxB[x].classList.remove('remove');
                }
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
(function () {
    var bannerLeft = document.querySelectorAll('.left-show');
    var bannerTop = document.querySelectorAll('.left-right');
    showed(bannerLeft,bannerTop,'show-ul');
})();
(function () {
    var floatP = document.querySelectorAll('.float>p');
    var floatR = document.querySelectorAll('.float-right');
    showed(floatP,floatR,'show');
})();



(function () {
    function played(parent,child,name) {
        parent.mouseenter(function () {
            child.addClass(name)
        });
        parent.mouseout(function () {
            child.removeClass(name)
        });
        child.mouseenter(function () {
            child.addClass(name)
        });
        child.mouseleave(function () {
            child.removeClass(name)
        });
        return false;
    }
    played($('.down'),$('.top .down-lode'),'shows');
    played($('.buy-top'),$('.buy'),'show');
})();


//下轮播图
(function () {
    var pictures = document.querySelector('.banner-right ul');
    var picture = document.querySelectorAll('.banner-right>div>ul>li');
    var innerNum = 0;
    var winWidth = (picture[0].offsetWidth + 14) * 4;
    var number;
    var play = function () {
         setInterval( function () {
             pictures.style.width = 248 *  picture.length + 'px';
             innerNum += 1;
        use()
        },5000)
    };
    play();
    $('.white-left').hover(function () {
        $(this).addClass('ff6700')
    },function () {
        $(this).removeClass('ff6700');
    });
    $('.white-left').click(function () {
        innerNum += 1;
        number = (248 * picture.length)-(innerNum * winWidth);
        if (innerNum < Math.ceil(picture.length/4)){
            if (innerNum < Math.ceil(picture.length/4 )- 1){
                pictures.style.left = '-'  + innerNum * winWidth + 'px';
            }else if (innerNum === Math.ceil(picture.length/4 )-1){
                pictures.style.left = '-'  + ((innerNum-1) * winWidth + number) + 'px';
            }
        }else{
            innerNum = Math.ceil(picture.length/4);
        }
    });
    $('.white-right').click(function () {
            innerNum -= 1;
            if (innerNum < 0){
                innerNum = 0;
        }
        use()
    });
    $('.white-right').hover(function () {
        $(this).addClass('ff6700')
    },function () {
        $(this).removeClass('ff6700')
    });
    function use() {
        number = (248 * picture.length)-(innerNum * winWidth);
        if (innerNum < Math.ceil(picture.length/4 )- 1){
            pictures.style.left = '-'  + innerNum * winWidth + 'px';
        }else if (innerNum === Math.ceil(picture.length/4 )-1){
            pictures.style.left = '-'  + ((innerNum-1) * winWidth + number) + 'px';
        }else if (innerNum > Math.ceil(picture.length/4)-1) {
            innerNum = 0;
            pictures.style.left = 0;
        }
    }
})();

//倒计时
$(setInterval(function () {
    var second;
    var oDate = new Date();
    var nowTime = oDate.getTime();
    var enddate = new Date(2019,8,11,14);
    var targetTime = enddate.getTime();
    var n;
    second = Math.floor((targetTime - nowTime) / 1000);
    function getDate() {
        console.log(Math.ceil(Math.abs(second/86400))*86400);
        if (second >= 0){
            var hour = Math.floor(second /3600);
            second %= 3600;
            var minute = Math.floor(second / 60);
            second %= 60;
            $('.times span')[0].innerHTML = tow(hour);
            $('.times span')[1].innerHTML = tow(minute);
            $('.times span')[2].innerHTML = tow(second);
        } else if(second < 0){
            second = second + Math.ceil(Math.abs(second/86400))*86400;
            var hour = Math.floor(second /3600);
            second %= 3600;
            var minute = Math.floor(second / 60);
            second %= 60;
            $('.times span')[0].innerHTML = tow(hour);
            $('.times span')[1].innerHTML = tow(minute);
            $('.times span')[2].innerHTML = tow(second);
        }
}
    function tow(n) {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
    }
    getDate()
},1000));