
// 递归

/*function f(a) {
  if (a === 10) {
    return
  }
  alert(a)
  f(a + 1)
}*/

// f(1)

// 1 - 100
// (1 + 100) * 50
// 1 + 100, 2 + 99
// 1 + 2 + 3 + ... + 100

/*var plus = 0;

for (var i = 1; i <= 100; i++) {
  plus +=  i
}
console.log(plus)*/
// 100 + null

// 100 600 800

/*
function f1(a) {
  if (a >= 100) return 100
  return a + f1(a + 1)
}
console.log(f1(1))
*/
/*
function f2(a) {
  if (a === 1) return 1
  return a + f2(a - 1)
}
console.log(f2(2000))
*/

var calcBtn = document.getElementById('calcBtn')

var userHeight = document.getElementById('user-height')
var userWeight = document.getElementById('user-weight')

var count = 0

// var tableDiv = document.getElementsByClassName('table')
var tbody = document.getElementsByTagName('tbody')
// console.log()

var list = []

calcBtn.onclick = function () {
  var bmiVal = (userWeight.value / (userHeight.value * userHeight.value) * 10000).toFixed(1)
  // alert(bmiVal)

  var date = new Date()
  count += 1
  var now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()  + ' ' + date.getHours()  + ':' + date.getMinutes() + ':' + date.getSeconds()

  var item = {
    id: count,
    date: now,
    height: userHeight.value,
    weight: userWeight.value,
    bmi: bmiVal,
  }
  list.push(item)
  var divHtml = '';
  for (var i = 0; i < list.length; i++) {
    divHtml += '<tr>' +
      '<td>' + (i+1) + '</td>' +
      '<td>' + list[i].date + '</td>' +
      '<td>' + list[i].height + '</td>' +
      '<td>' + list[i].weight + '</td>' +
      '<td>' + list[i].bmi + '</td>' +
      '<td><a href="javascript:void(0)" onclick="del('+ list[i].id +')">删除</a></td>' +
      '</tr>'
  }
  tbody[0].innerHTML = divHtml

  // console.log(count)
  /*tbody[0].innerHTML += '<tr>' +
    '<td>' + count + '</td>' +
    '<td>' + now + '</td>' +
    '<td>' + userHeight.value + '</td>' +
    '<td>' + userWeight.value + '</td>' +
    '<td>' + bmiVal + '</td>' +
    '<td><span onclick="del('+ count +')">删除</span></td>' +
    '</tr>'*/
}

function del(id) {
  // console.log(id)
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      // console.log(list[i])
      list.splice(i, 1)
    }
  }

  console.log(list)

  var divHtml = '';
  for (var i = 0; i < list.length; i++) {
    divHtml += '<tr>' +
      '<td>' + (i + 1) + '</td>' +
      '<td>' + list[i].date + '</td>' +
      '<td>' + list[i].height + '</td>' +
      '<td>' + list[i].weight + '</td>' +
      '<td>' + list[i].bmi + '</td>' +
      '<td><a href="javascript:void(0)" onclick="del('+ list[i].id +')">删除</a></td>' +
      '</tr>'
  }
  tbody[0].innerHTML = divHtml


  // console.log(index)
  // document.getElementsByTagName()
  // tbody[0].getElementsByTagName('tr')[index - 1].remove()
}



userHeight.onfocus = function () {
  // console.log(this)
  this.style.border = '1px solid red'
}

userHeight.onblur = function () {
  // console.log(this)
  this.style.border = '1px solid #000'
  this.style.color = '#000'
  // class .focus {}
}

// 数据

// onchange
// oninput

userHeight.onchange = function () {
  console.log(this)
  this.style.border = '1px solid green'
}

