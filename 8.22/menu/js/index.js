
// 点击让同胞出现

var moreAs = document.querySelectorAll('.container .more > a')
var moreUls = document.querySelectorAll('.container .more ul')
for (var i = 0; i < moreAs.length; i++) {
  moreAs[i].onmouseover = function () {
    for (var j = 0; j < moreUls.length; j++) {
      moreUls[j].style.display = 'none'
    }
    this.nextElementSibling.style.display = 'block'
  }

  moreAs[i].onmouseout = function () {
    this.nextElementSibling.style.display = 'none'
  }
}

for (var j = 0; j < moreUls.length; j++) {
  moreUls[j].onmouseenter = function () {
    this.style.display = 'block'
  }

  moreUls[j].onmouseleave = function () {
    this.style.display = 'none'
  }
}



/*
var mores = document.querySelectorAll('.container .more')

for (var i = 0; i < mores.length; i++) {
  mores[i].onclick = function (e) {
    window.event? window.event.cancelBubble = true : e.stopPropagation();
    for (var j = 0; j < moreUls.length; j++) {
      moreUls[j].style.display = 'none'
    }

    // this.children[1].style.display = 'block'
  }
}
//document.body
var moreUls = document.querySelectorAll('.container .more ul')
document.documentElement.onclick = function (e) {
  for (var j = 0; j < moreUls.length; j++) {
    moreUls[j].style.display = 'none'
  }
}
*/
