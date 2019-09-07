
var tou = document.getElementById('tou')
var tui = document.getElementById('tui')
var jieguo = document.getElementById('jieguo')
var jisuan = document.getElementById('jisuan')

jisuan.onclick = function () {
  // tou.value
  // tui.value
  var y
  // x + y = tou
  // 2x + 4y = tui
  // tou.value - y === tui / 2 - 2 * y
  y = tui.value / 2 - tou.value
  jieguo.innerText = '兔=' + y + '; 鸡=' + (tou.value - y)
}


