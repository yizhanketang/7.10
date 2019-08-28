var bannerPlay = document.querySelectorAll('.banner');
var picturePlay = document.querySelector('.picture');
var dotSpot = document.querySelectorAll('.choice>a');
var leftPlay = document.querySelector('.left');
var rightPlay = document.querySelector('.right')
var playNum = 0;

var autoPlay = setInterval(function (){
	for (var i = 0 ; i <bannerPlay.length; i++){
		bannerPlay[i].classList.remove('active');
		dotSpot[i].classList.remove('big');
		}
	playNum += 1
	if (playNum >= bannerPlay.length) {
		playNum = 0;
	}
	bannerPlay[playNum].classList.add('active')
	dotSpot[playNum].classList.add('big');
},3000)

picturePlay.onmouseover = function() {
	clearInterval(autoPlay)
}
picturePlay.onmouseout = function() {
	autoPlay = setInterval(function (){
	for (var i = 0 ; i <bannerPlay.length; i++){
		bannerPlay[i].classList.remove('active');
		dotSpot[i].classList.remove('big');

		}
	playNum += 1
	if (playNum >= bannerPlay.length) {
		playNum = 0;
	}
	bannerPlay[playNum].classList.add('active')
	dotSpot[playNum].classList.add('big');

},3000)
}
for (var i = 0; i < dotSpot.length; i++) {
	dotSpot[i].index = i
	dotSpot[i].onclick = function(){
		for (var j = 0; j < dotSpot.length; j++) {
			dotSpot[j].classList.remove('big')
			playNum = this.index
			bannerPlay[playNum].classList.remove('active')
		}
	this.classList.add('big');
	bannerPlay[playNum].classList.add('active')
	}
}

leftPlay.onclick = function() {
	playNum -= 1
	if (playNum < 0) { 
		playNum = bannerPlay.length - 1;

	}
	for (var j = 0; j < dotSpot.length; j++) {
			dotSpot[j].classList.remove('big')
			bannerPlay[playNum].classList.remove('active')
		}
	dotSpot[playNum].classList.add('big');
	bannerPlay[playNum].classList.add('active')
}

rightPlay.onclick = function() {
	playNum += 1
	if (playNum > bannerPlay.length) { 
		playNum = 0;

	}
	for (var j = 0; j < dotSpot.length; j++) {
			dotSpot[j].classList.remove('big')
			bannerPlay[playNum].classList.remove('active')
		}
	dotSpot[playNum].classList.add('big');
	bannerPlay[playNum].classList.add('active')
}
