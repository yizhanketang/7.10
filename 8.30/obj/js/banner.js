function menuShowItem() {
  var as = document.querySelectorAll('.banner-menu a')
  var menuContent = document.querySelector('.banner .menu-content')

  for (var i = 0; i < as.length; i++) {
    // as[i].onmouseover
    // as[i].onmouseout
    as[i].addEventListener('mouseover', function () {
      // console.log(this)
      menuContent.style.display = 'block'
      menuContent.innerHTML = '<div></div>'
    })

    as[i].addEventListener('mouseout', function () {
      // console.log(this)
      menuContent.style.display = 'none'
    })
  }
}

/*function banner() {
  alert('I`m banner')
}*/

