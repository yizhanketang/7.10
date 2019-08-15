/*
setInterval()
function f() {}
*/

setInterval(function () {
  var screen = document.getElementById('screen')
  var now = new Date().getTime()
  var zhongqiu = new Date(2019, 8, 13).getTime()
  var allTimes = parseInt((zhongqiu - now) / 1000)

  var days = parseInt(allTimes / (24 * 3600))
  var hours = parseInt((allTimes - (days * 24 * 3600)) / 3600)
  // console.log(days, hours)
  var mins = parseInt((allTimes - (days * 24 * 3600) - (hours * 3600)) / 60)

  var s = (allTimes - (days * 24 * 3600) - (hours * 3600)) - (mins * 60)

  // console.log(days, hours, mins, s)
  // screen.innerHTML = ('<span style="color:#fe0e8b">' + days + '</span>天<span style="color:#fe0e8b">' + hours + '</span>小时<span style="color:#fe0e8b">' + mins + '</span>分钟<span style="color:#fe0e8b">' + s + '</span>秒')
  var txt = days + '天' + hours + '小时' + mins + '分钟' + s + '秒'

  // txt[0] =

  screen.innerHTML = txt

  // screen.innerHTML.slice(1) + screen.innerHTML[0]

  // screen.innerHTML = screen.innerHTML.slice(1) + screen.innerHTML[0]


}, 1000)






/*
// console.log(screen.innerText)

setInterval(function () {
  var screen = document.getElementById('screen')
  // console.log(new Date())
  // var MidAutumn = new Date(2019, 9, 13)
  var MidAutumn = new Date(2019, 8, 13)
  var MidAutumnTime = MidAutumn.getTime()

  var now = new Date().getTime()
  var allTime = MidAutumnTime - now

  var allS = parseInt(allTime / 1000)

  // 1min === 60s 1h === 60min === 60 * 60s
  var days = parseInt(allS / (24 * 3600))
  var hours = parseInt((allS % (24 * 3600)) / 3600)
  var mins = parseInt((allS % (24 * 3600)) % 3600 / 60)
  var s = (allS % (24 * 3600)) % 3600 % 60
  // console.log((allS % (24 * 3600)) % 3600 % 60)

  screen.innerHTML = ('<span style="color:#fe0e8b">' + days + '</span>天<span style="color:#fe0e8b">' + hours + '</span>小时<span style="color:#fe0e8b">' + mins + '</span>分钟<span style="color:#fe0e8b">' + s + '</span>秒')

}, 1000)*/





