var bannerStar = document.querySelectorAll('.banner');
var picturePlay = document.querySelector('.picture');
var dotSpot = document.querySelectorAll('.choice .item');
var leftPlay = document.querySelector('.left');
var rightPlay = document.querySelector('.right');
var playNum = 0;
var autoPlay;
autoPlay = setInterval(function () {
    for (var i = 0;i < bannerStar.length;i++){
        dotSpot[i].classList.remove('big');
        bannerStar[i].classList.remove('active');
    }
   playNum += 1;
    if (playNum >= bannerStar.length){
        playNum = 0
    }
    dotSpot[playNum].classList.add('big');
    bannerStar[playNum].classList.add('active');
},3000);

for (var i = 0; i < dotSpot.length; i++) {
    dotSpot[i].index = i;
    dotSpot[i].onclick = function(){
        playNum = this.index;
        for (var j = 0; j < dotSpot.length; j++) {
            dotSpot[j].classList.remove('big');
            bannerStar[j].classList.remove('active')
        }
        this.classList.add('big');
        bannerStar[playNum].classList.add('active')
    }
}
picturePlay.onmouseover = function () {
    clearInterval(autoPlay)
};
picturePlay.onmouseout = function () {
   autoPlay = setInterval(function () {
        for (var i = 0;i < bannerStar.length;i++){
            dotSpot[i].classList.remove('big');
            bannerStar[i].classList.remove('active');
        }
        playNum += 1;
        if (playNum >= bannerStar.length){
            playNum = 0
        }
        dotSpot[playNum].classList.add('big');
        bannerStar[playNum].classList.add('active');
    },3000);
};

leftPlay.onclick = function () {
    // clearInterval(autoPlay);
    playNum -= 1;
    if (playNum<0){
        playNum = bannerStar.length - 1;
    }
    for (var i = 0;i < bannerStar.length;i++){
        dotSpot[i].classList.remove('big');
        bannerStar[i].classList.remove('active');
    }

    dotSpot[playNum].classList.add('big');
    bannerStar[playNum].classList.add('active');
};

rightPlay.onclick = function () {
    // clearInterval(autoPlay);
    playNum += 1;
    if (playNum > dotSpot.length-1){
        playNum = 0;
    }
    for (var i = 0;i < dotSpot.length;i++){
        dotSpot[i].classList.remove('big');
        bannerStar[i].classList.remove('active');
    }

    dotSpot[playNum].classList.add('big');
    bannerStar[playNum].classList.add('active');
};

