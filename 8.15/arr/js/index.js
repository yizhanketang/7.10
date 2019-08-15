
// var arr = new Array()

// console.log(new Array())
// console.log(new Array(1))
// console.log(new Array(7))
// console.log(new Array(7)[4])
// console.log(new Array(7.1, 4))
// console.log(new Array(7.1, new Array(1)))

/*var arr = [
  1,
  2,
  [23],
  function () {
    alert('34567890-fghjk')
    // return '34567890'
  },
  { name: 'koo'},
  'ertyuio'
]*/
// console.log(arr[2])
// console.log(arr[3]())

// var a = [[1, 2], [3, [123]]]

// console.log(a[1][1][0])

/*
var arr = [1, 2, 3, 4, 'wertyuiop', ]

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
*/

// es5
// es: forEach map filter some every

// console.log(typeof arr)
// arr.name = 'arr1'
// arr.age = '45678'

// console.log(arr.length)

/*for (var i in arr) {
  // console.log(arr)
  console.log(arr[i])
}*/

// for (var i = 0)
// f()

// var arr = [1, 2, 3, 4, 'cat',]
// delete [2]
// console.log(arr)
// console.log(Array.isArray({}))

// var arr = [1, 2, 3, 4, 'cat',]

// arr.push(1, true, {}, [1, 'ooo'])
// arr.pop()
// arr.pop()
// arr.pop()

// arr.shift()
// arr.unshift('dog')
// arr.unshift('pig')

// var str = 'hello world!!!'

// var newArr = str.split('l')

// console.log(str.split('l'))
// console.log(newArr.join('\n'))


// var arr = [1, 2, 3, 4, 'cat',]

// console.log(arr.concat(['pig', 'dog'], [2, 3,]))
// console.log(arr)
// console.log(arr.push(['pig', 'dog'], [2, 3,]))
// console.log(arr.reverse())

// var str = 'hello world!!!'
// var temp = str.split('')
// console.log(temp.reverse().join(''))

// var arr = [1, 2, 3, 4, 'cat', 'pig', 'dog']

// console.log(arr.splice(3))
// console.log(arr.splice(3, 2))
// console.log(arr.splice(5, 2, 'red'))
// console.log(arr.splice(4, 1,'red'))
// console.log(arr.splice(4, 0,'red'))
// console.log(arr)

// substr


// var str = 'hello world'
// console.log(arr.slice(1, 5))
// console.log(arr.slice(1, -1))
// console.log(arr.slice(-7))
// console.log(str.slice(3))


/*var arr = [59, 71, 185, 100, 21, 47]


console.log(arr.sort(function (a, b) {
  return b -a
}))*/


/*var arr = [
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28 }]

console.log(arr.sort(function (a, b) {
  return a.age - b.age
}))*/

/*
var arr = [1, 2, 3, 4, 'cat', 'pig', 'dog']

// console.log(arr.indexOf('cat', 4))

console.log(arr.lastIndexOf('pig', 4))
*/

var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

var arr = Array.prototype.slice.call(obj)

console.log(arr.push('45678'))
console.log(arr)

// console.log(obj.push('4567'))

