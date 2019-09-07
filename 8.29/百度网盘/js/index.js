var oDiv1 = document.getElementById('div1');
var oDiv2 = document.getElementById('div2');
var oDiv3 = document.getElementById('div3');
oDiv1.onmouseover = function () {
    oDiv2.style.display = 'none';
    oDiv3.style.transform="rotate(180deg)"
};
oDiv1.onmouseout = function () {
    oDiv2.style.display = 'block';
    oDiv3.style.transform="rotate(0deg)"
};

var head = document.querySelector('.head')
var contentMenu = document.querySelector('.content-menu')

head.oncontextmenu = function (e) {
  var left = e.clientX
  var top = e.clientY
  console.log(left, top)
  contentMenu.style.left = left + 'px'
  contentMenu.style.top = top + 'px'
  contentMenu.style.display = 'block'
  // e.preventDefault()
  // return false
  e.returnValue = false
}

document.documentElement.onclick = function () {
  contentMenu.style.display = 'none'
}

var switchover = document.getElementById('switchover')
var list = document.getElementById('list')

// var flag = false
switchover.onclick = function () {
  // !flag
  if (!this.classList.contains('switchover')) {
    this.classList.add('switchover')
    list.className = 'card'
    // flag = true
  } else {
    this.classList.remove('switchover')
    list.className = 'list'
    // flag = false
  }
}

