
var list = [
  '林志玲',
  '佟丽娅',
  '吴彦祖',
  '陈冠希',
  '胡歌',
  '彭于晏',
  '舒淇',
  '倪妮',
  '王丽坤',
  '莉莉柯林斯',
  '安妮海瑟薇',
  '巨石强森',
  '泰勒斯威夫特',
  '科比布莱恩特',
  '勒布朗詹姆斯',
  '卡梅隆安东尼',
]

var count = 0

var timer;
var box = document.querySelector('.box')
document.querySelector('.btn').addEventListener('click', function () {
  if (this.innerHTML === '开始') {
    this.innerHTML = '停止'
    count += 1
    timer = setInterval(function () {
      box.innerHTML = list[Math.floor(Math.random() * list.length)]
    }, 50)
  } else {
    clearInterval(timer)
    if (count === 1) {
      box.innerHTML = '郭钊'
    } else if (count === 2) {
      box.innerHTML = '李星龙'
    } else if (count === 3) {
      box.innerHTML = '马骁'
    } else {
      box.innerHTML = list[Math.floor(Math.random() * list.length)]
    }
    this.innerHTML = '开始'
  }
})
