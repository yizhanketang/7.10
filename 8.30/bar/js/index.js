
// var btn = document.getElementById('btn')
var btn = document.querySelector('#btn')
var rightBar = document.querySelector('.right-bar')

/*btn.onclick = function () {
  console.log(this)
}*/

btn.addEventListener('click', function (e) {
  // rightBar.style.display = 'block'
  // rightBar.style.width = '30%'
  // rightBar.className = 'right-bar width'
  rightBar.classList.add('width')
  e.stopPropagation()
})

document.documentElement.onclick = function () {
  rightBar.classList.remove('width')
  // rightBar.className = 'right-bar'
  // rightBar.style.display = 'none'
  // rightBar.style.width = '0'
}


