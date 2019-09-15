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
var aCode = document.getElementById('a-code');
var miCode = document.getElementById('mi-code');
aCode.onmouseover = function () {
    // console.log('haha')
    miCode.style.display = 'block'
}
aCode.onmouseout = function () {
    // console.log('haha')
    miCode.style.display = 'none'
}
var centerC = document.getElementById('center');
var personal = document.getElementById('personal');
centerC.onmouseover = function () {
    personal.style.display = 'block'
}
centerC.onmouseout = function () {
    personal.style.display = 'none'
}

var afterSales = document.getElementById('after-sales');
var service = document.getElementById('service');
afterSales.onmouseover = function () {
    service.style.display = 'block'
}
afterSales.onmouseout = function () {
    service.style.display = 'none'
}