
var intNum = parseInt(Math.random() * 100) + 1

// Math.random() 0~1的随机数

function guess() {
  var enterNum = document.getElementById('enterNum')
  if (enterNum.value > intNum) {
    alert('数字太大了!')
  }

  if (enterNum.value < intNum) {
    alert('数字太小了!')
  }

  if (enterNum.value * 1 === intNum * 1) {
    alert('恭喜你猜对了!')
  }
}

