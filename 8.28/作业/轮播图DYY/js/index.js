function plugIn(arg) {
	// console.log(one);

  // console.log(arg.el)
  // console.log(arg.config.delay)
  // return false
  var delayTime = arg.config.delay
  var one = arg.el

    var playNum = 0;
    var autoPlay;
    var picturePlay = one.querySelector('.picture');
    var bannerStar = one.querySelectorAll('.banner');
    var dotSpot = one.querySelectorAll('.choice .item');
    var leftPlay = one.querySelector('.left');
    var rightPlay = one.querySelector('.right');

	function extract() {
        for (var i = 0;i < dotSpot.length;i++){
            dotSpot[i].classList.remove('big');
            bannerStar[i].classList.remove('active');
        }
        dotSpot[playNum].classList.add('big');
        bannerStar[playNum].classList.add('active');
    }
    function timer() {
        var delay = delayTime || 3000;
        autoPlay = setInterval(function () {
            playNum += 1;
            if (playNum >= bannerStar.length){
                playNum = 0
            }
            extract()
        },delay);
    }
    timer();
    for (var x = 0; x < dotSpot.length; x++) {
        dotSpot[x].index = x;
        dotSpot[x].onclick = function(){
            playNum = this.index;
            extract()
        }
    }
    picturePlay.onmouseover = function () {
        clearInterval(autoPlay)
    };
    picturePlay.onmouseout = function () {
        timer()
    };
    leftPlay.onclick = function () {
        playNum -= 1;
        if (playNum<0){
            playNum = bannerStar.length - 1;
        }
        extract()
    };
    rightPlay.onclick = function () {
        playNum += 1;
        if (playNum > dotSpot.length-1){
            playNum = 0;
        }
        extract()
    };
}


