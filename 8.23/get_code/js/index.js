
var a = document.querySelector('a')
a.addEventListener('click', interval)

function interval() {
  a.removeEventListener('click', interval)
  var s = 6
  a.innerHTML = s + 's再次获取'
  var timer = setInterval(function () {
    s -= 1
    if (s < 1) {
      clearInterval(timer)
      a.innerHTML = '获取短信验证码'
      a.addEventListener('click', interval)
      return false
    }
    a.innerHTML = s + 's再次获取'
  }, 1000)
}

/*a.onclick = function () {
  if (a.innerHTML === '获取短信验证码') {
    var s = 6
    a.innerHTML = s + 's再次获取'
    var timer = setInterval(function () {
      s -= 1
      if (s < 1) {
        clearInterval(timer)
        a.innerHTML = '获取短信验证码'
        return false
      }
      a.innerHTML = s + 's再次获取'
    }, 1000)
  }
}*/



