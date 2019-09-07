
var musicWrap = document.querySelector('.music-wrap')
var audio = document.querySelector('.audio')
var video = document.querySelector('.video')
var videoPlay = document.querySelector('.play')
// var videoPause = document.querySelector('.pause')

videoPlay.addEventListener('click', function () {
  if (videoPlay.classList.contains('pause')) {
    videoPlay.classList.remove('pause')
    video.pause()
  } else {
    videoPlay.classList.add('pause')
    video.play()
  }
})


/*
videoPlay.onclick = function () {
  video.play()
}

videoPause.onclick = function () {
  video.pause()
}*/


if (musicWrap) {
  musicWrap.onclick = function () {
    if (this.classList.contains('rota')) {
      this.classList.remove('rota')
      audio.pause()
    } else {
      this.classList.add('rota')
      audio.play()
    }
  }
}


