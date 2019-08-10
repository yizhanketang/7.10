

var time = new Date()

var day = time.getFullYear()

console.log(day)
console.log(time.getDay())
console.log(time.getDate())
console.log(time.getMonth() + 1)
console.log('========')
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getSeconds())

setInterval(function () {
  var time = new Date()
  document.write(time.getHours())
  document.write(' : ')
  document.write(time.getMinutes())
  document.write(' : ')
  document.write(time.getSeconds())
  document.write('<br>')
}, 1000)
