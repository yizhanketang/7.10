
// var obj = {}
// var obj1 = new Object()
//
var arr = ['1', '34567', 'fghjkl', function () {
  alert('rtyui')
}]

// delete arr[3]

// console.log(arr)

// obj.name = ''

var person = {
  id: '1234567890',
  name: 'xiaoming',
  age: 18,
  height: 178,
  arr: ['cat', 'dog'],
  foo: function () {
    alert('hello !!!')
  }
}

// console.log('height' in person)
// console.log(person.height )
// Boolean(person.koo)
/*if (person.koo) {
  console.log(person.koo)
} else {
  alert('no')
}*/

// console.log(Object.keys(person))
delete person.arr

// console.log(Object.keys(person))

var keys = Object.keys(person)

for (var j = 0; j < keys.length; j++) {
  // console.log(person[keys[j]])
}

// [] .

person.color = 'yellow'
person.height = 180

// dom.value =

for (var i in person) {
  // console.log(i, ':', person[i])
}

// console.log(person)


// console.log(person['id'])
// console.log(person.height)
// console.log(person.foo())

var list = [
  {id: 1, name: 'maxiao', age: 18},
  {
    id: 2,
    name: 'miaorong',
    age: 16
  },
  {
    id: 3,
    name: 'xinglong',
    age: 17
  },
  {
    id: 4,
    name: 'zongxin',
    age: 17
  },
  {
    id: 5,
    name: 'dangyuan',
    age: 17
  },
]

// for (var i = 0; i < list.length; i++) {
//   console.log(list[i].id, list[i].name, list[i].age)
// }

/*
var x1 = {
  name: 'xiaoming'
}

var x2 = x1

console.log(x2.name)

x2.name = 'huangxiaoming'

console.log(x2.name)

x1 = 12 // {}

console.log(x1.name)*/













