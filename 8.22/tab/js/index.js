
var tabAs = document.querySelectorAll('.tab-title a')
var tabContents = document.querySelectorAll('.content .tab-content')

for (var i = 0; i < tabAs.length; i++) {
  // tabAs[i].innerHTML = (i)
  tabAs[i].index = i

  // onclick
  tabAs[i].onmouseover = function () {
    // console.log(this.index)
    for (var j = 0; j < tabAs.length; j ++) {
      tabAs[j].classList.remove('active')
      tabContents[j].classList.remove('active')
    }
    this.classList.add('active')
    tabContents[this.index].classList.add('active')
  }
  // tabAs[i].classList.remove('active')
  /*tabAs[i].addEventListener('click', function () {
    // console.log(this.getAttribute('data-index'))
    // console.log(i)
    for (var j = 0; j < tabAs.length; j ++) {
      tabAs[j].classList.remove('active')
      // tabContents[j].classList.remove('active')
      tabContents[j].style.display = 'none'
    }
    this.classList.add('active')
    // tabContents[this.innerHTML].classList.add('active')
    // tabContents[this.getAttribute('data-index')].classList.add('active')
    tabContents[this.getAttribute('data-index')].style.display = 'block'

    // tabAs[0].classList.remove('active')
    // tabAs[1].classList.remove('active')
    // tabAs[3].classList.remove('active')
    // tabAs[4].classList.remove('active')
  })*/
}


