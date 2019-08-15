
var screen = document.getElementById('screen')

// console.log(screen.value)

// 赋值
// screen.value = '4567890-dfghjklvbnm'

// screen.value =




function getVal(val) {
  // alert(val)
  screen.value = screen.value + val
  // alert(val)
}

function calc() {
  screen.value = eval(screen.value)
}

function clearVal() {
  screen.value = ''
}

// console.log(eval('1+2+34567890'))

function tuige() {
  screen.value = screen.value.slice(0, -1)
  // screen.value = screen.value.substr(0, screen.value.length - 1)
}



