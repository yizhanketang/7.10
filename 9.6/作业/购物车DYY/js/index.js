// menuShowItem();
// banner()


var bannerData = [
    'pic/pic1.jpg',
    'pic/pic2.webp',
    'pic/pic3.webp',
    'pic/pic4.webp',
    'pic/pic1.jpg'
];

function f() {

}


var bannerWrap = document.querySelector('.banner-wrap');
var imgHtml = '<div class="imgs-wrap clear">';
var dotHtml = '<div class="dots-wrap">';

for (var i = 0; i < bannerData.length; i++) {
    imgHtml += '<div style="background: url(' + bannerData[i] + ') no-repeat center / cover;" class="item"></div>';
    if (i === 0) {
        dotHtml += '<span class="active"></span>'
    } else {
        dotHtml += '<span></span>'
    }
}

imgHtml += '</div>';
dotHtml += '</div>';

bannerWrap.innerHTML += imgHtml;
bannerWrap.innerHTML += dotHtml;

var prevBtn = document.createElement('a');
prevBtn.href = 'javascript:void(0)';
prevBtn.className = 'prev';
prevBtn.innerHTML = '<';
bannerWrap.appendChild(prevBtn);

var nextBtn = document.createElement('a');
nextBtn.href = 'javascript:void(0)';
nextBtn.className = 'next';
nextBtn.innerHTML = '>';
bannerWrap.appendChild(nextBtn);

var imgsWrap = document.querySelector('.imgs-wrap');
var width = bannerWrap.offsetWidth * bannerData.length;
imgsWrap.style.width = width + 'px';
var dotsWrap = document.querySelectorAll('.dots-wrap span');
var leftPlay = document.querySelector('.prev');
var rightPlay = document.querySelector('.next');
var autoPlay;
var leftVal = 0;
var playNum = 0;

autoPlay = setInterval(function () {
    leftVal -= bannerWrap.offsetWidth;
    for (var i=0; i < dotsWrap.length; i++){
        dotsWrap[i].classList.remove('active')
    }
    playNum -= 1;
    if (playNum < 0){
        playNum = dotsWrap.length-1
    }
    if (leftVal <= (width * -1)) {
        leftVal = 0
    }
    imgsWrap.style.left = leftVal + 'px';
    dotsWrap[playNum].classList.add('active')
}, 3000);

bannerWrap.onmouseover = function() {
    clearInterval(autoPlay)
};
bannerWrap.onmouseout = function() {
    autoPlay = setInterval(function () {
        leftVal -= bannerWrap.offsetWidth;
        for (var i = 0; i < dotsWrap.length; i++) {
            dotsWrap[i].classList.remove('active')
        }
        playNum -= 1;
        if (playNum < 0) {
            playNum = dotsWrap.length - 1
        }
        if (leftVal <= (width * -1)) {
            leftVal = 0
        }
        imgsWrap.style.left = leftVal + 'px';
        dotsWrap[playNum].classList.add('active')
    }, 3000);
};
for (var i = 0; i < dotsWrap.length; i++) {
    dotsWrap[i].index = i;
    dotsWrap[i].onclick = function() {
        playNum = this.index;
        for (var j = 0; j< dotsWrap.length; j++){
            dotsWrap[j].classList.remove('active');
            imgsWrap.style.left = 0
        }
        dotsWrap[playNum].classList.add('active');
        imgsWrap.style.left = bannerWrap.offsetWidth * (playNum) * -1 + 'px';
    }
}

leftPlay.onclick = function() {
    playNum -= 1;
    if(playNum<0){
        playNum = dotsWrap.length - 1;
    }
    for (var i=0; i < dotsWrap.length; i++){
        dotsWrap[i].classList.remove('active');
        imgsWrap.style.left = 0
    }
    dotsWrap[playNum].classList.add('active');
    // console.log(playNum)
    imgsWrap.style.left = bannerWrap.offsetWidth * (playNum) * -1 + 'px';
};
rightPlay.onclick = function() {
    playNum += 1;
    if(playNum > dotsWrap.length-1){
        playNum = 0;
    }
    for (var i=0; i < dotsWrap.length; i++){
        dotsWrap[i].classList.remove('active');
        imgsWrap.style.left = 0
    }
    dotsWrap[playNum].classList.add('active');
    // console.log(playNum)
    imgsWrap.style.left = bannerWrap.offsetWidth * (playNum) * -1 + 'px';
};