
// alert('hello world!!!')
// document.write('<h1>hello world!!!</h1>')
// 日志
// console.log('hello world!!!')

// var xinglong = 'ren'
// console.log(xinglong)
/*

// 驼峰式
var headerLeft = 'xing long asdasd'
headerLeft = "ong asdasd"
console.log(headerLeft)

var num = 123
var num1 = '123'
var floatNum = 1.234
console.log(num)
console.log(num1)
console.log(floatNum)

// Boolean
var flag = true;
var flag1 = false;
console.log('-------------')
console.log(flag)
console.log(flag1)
console.log('-------------')
var dang = null;
// var dang;
// var yuan = undefined;
// console.log(dang)
// console.log(yuan)


var yuan = 123;
yuan = 'ertyuiop['
yuan = true
console.log(yuan)

var obj = {}

obj.name = 'xinglong '
obj.sex = '男'

console.log(obj)

var arr = ['dangyuanyuan', 'xinglong']

console.log(arr)

*/


// var fun = function fun(arg) {
//   console.log(typeof arg)
// }

// fun('abc')

// console.log(typeof '4567890-')
// console.log(typeof 4567890)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof {})
// console.log(typeof fun)
// console.log(typeof [])

// null，object，数组


// var exhibition = document.getElementById('exhibition');
//
// function f(exhibition) {
//     alert(fghjk)
// }

var e = parseInt(Math.random()*100)+1;
var exhibition = document.getElementById('exhibition');

function f() {
    var a =exhibition.value
    if (a > e) {
        alert('大于')
    }
    if (a < e){
        alert('小于')
    }
    if (a*100 === e*100){
        alert('等于')
    }
}




// function f() {
//     var a=exhibition.value
//     // alert(a)
//     if ({
//             a.value>exhibition
//         alert('大于')
//         })
//
// }