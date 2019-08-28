
// var leftMenu = document.getElementsByClassName('left-menu')
// var leftMenu = document.getElementById('left-menu')


// console.log(leftMenu)
// var list = leftMenu[0].getElementsByClassName('list')
var middles = document.getElementsByClassName('middle')
var list = document.querySelectorAll('.left-menu .list')

for (var i = 0; i < list.length; i++) {
  list[i].ind = i
  list[i].onclick = function () {
    for (var i = 0; i < list.length; i++) {

    }
    console.log(i)
    // middles[this.ind].style.display = 'block'
    // middles[1].style.display = 'block'
  }
}
