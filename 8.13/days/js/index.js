
// 不及格 <60
// 及格  <= 60 < 70
// 良好  <= 70 < 85
// 优秀 <= 85 <= 100

function guess() {
  var enter = document.getElementById('enter')
  var score = enter.value

  enter.style.color = 'red'

  // debugger

  // console.log(60 <= score && score < 70)
  // console.log(60 <= score || score < 70)

  /*if (score < 60) {
    alert('好好加油哦!')
  } else if ( 60 <= score && score < 70) {
    alert('及格')
  } else if ( 70 <= score && score < 85) {
    alert('良好')
  } else {
    alert('优秀')
  }*/
  score = score * 1
  switch (score) {
    case 60:
      alert('好好加油哦!')
      break
    case 60 <= score && score < 70:
      alert('及格')
      break
    case 70 <= score && score < 85:
      alert('良好')
      break
    case 85 <= score && score < 100:
      alert('优秀')
      break
    default:
      alert('请输入正确的分数')
  }
}




// var day = new Date().getDay()

/*switch (day) {
  case 1:
    document.write('星期一')
    break
  case 2:
    document.write('星期二')
    break
  default:
    document.write('星期几我也不知道')
}*/


// 1 2 3 4 5 6 0
// 星期一
/*if (day === 1) {
  document.write('星期一')
} else if (day === 2) {
  document.write('星期二')
}*/

