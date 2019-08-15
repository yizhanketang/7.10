
var intNum = Math.ceil(Math.random() * 100)

// console.log(intNum)

function guess() {
  var enter = document.getElementById('enter')

  if (enter.value > intNum) {
    alert('太大了')
  } else if (enter.value < intNum) {
    alert('太小了')
  } else {
    alert('恭喜你猜对了:' + intNum)
  }

  /*if () {

  } else {

  }*/

}
