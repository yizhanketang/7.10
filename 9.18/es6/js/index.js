/*
function foo(a, b, c) {
  console.log(a, b, c)
}

const foo1 = (a, b, c) => {
  console.log(a, b, c)
}

foo1(1, 2, 3)

const foo2 = a => {
  console.log(a)
}
foo2(2)
*/
// rest

/*
const foo = ({a, ...b}) => {
  console.log(a)
  console.log(b)
}

foo({
  a: 123456,
  x: 'abc',
  z: 'qqqq'
})
const foo = (a, b) => a + b
function foo1(a, b) {
  return a + b
}
console.log(foo(10, 12));
*/

// const foo = () => ({ a: '345', b: 'ertyu' })
// console.log(10, 12)

/*
var lis = document.querySelectorAll('li')
// lis.push('rty')
console.log(lis)
let newLis = [...lis]
newLis.push('ertyu')
console.log(newLis)

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

console.log(arrayLike)
// var arr1 = [].slice.call(arrayLike);
// console.log(arr1)

let arr2 = Array.from(document.querySelectorAll('li'));
console.log(arr2)
*/

// let arr = ['a']
// let arr2 = arr.concat()
// let arr2 = [...arr]
// console.log(arr2)


// let arr = []
// let arr = new Array(10, 1)
// console.log(Array.of())
/*
*
target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。*/
// console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 4))
  // [4, 5, 3, 4, 5]

// console.log([1, 4, -5, 10].findIndex((n) => n < 0))

/*for (let [index, item] of [1, 4, -5, 10].entries()) {
  console.log(index, item)
}*/

/*let sex = 'man'

let obj = {
  age: 16,
  'name': 'jay',
  sex,
  active() {
    console.log('1234')
  }
}
console.log(obj)

let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};

console.log(obj.foo)

let z = { a: 3, b: 4 };
let n = { ...z };
console.log(n)

let foo = { ...['a', 'b', 'c'] };
console.log(foo)

console.log({...'hello'})
*/

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(z)

/*const target = { a: 1 };
const source1 = { b: 2, a: 10 };
const source2 = { c: 3 };

console.log(Object.assign(target, source1, source2));
console.log({
  ...target,
  ...source1,
  ...source2
})

const obj1 = {
  a: {
    b: 1
  },
  b: 2
};
const obj2 = Object.assign({}, obj1);
obj2.a.b = 10

obj2.b = 10
console.log(obj1.b)

let obj = {
  foo: 'bar',
  baz: 42
};

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.fromEntries(Object.entries(obj)))
*/

// for ()
// for (in)
// for (of)

// forEach
// let arr = [1, 5, 3, 10, 3456, 9]

/*
let newArr = arr.map((item, index) => {
  // console.log(item, index)
  return index * 2
})
console.log(newArr)
let newArr = arr.every((item, index) => {
  return item > 2
})
console.log(newArr)

let newArr = arr.some((item, index) => {
  return item > 2
})
console.log(newArr)

let newArr = arr.filter((item, index) => {
  return typeof(item) === 'string'
})
console.log(newArr)
*/

/*const addFun = (initNum, item) => {
  return initNum + item
}

let newArr = arr.reduce((index, item) => {
  return item + index
})
console.log(newArr)*/




/*let newArr1 = arr.forEach((item, index) => {
  if (item === 'abc') {
    // console.log(item, index, '====')
    return false
  }
  return index
  // console.log(item, index)
})

console.log(newArr1)*/



