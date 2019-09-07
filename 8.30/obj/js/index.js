/*
var fn = function () {
  alert(100);
};

fn.a = 10;
fn.b = function () {
  alert(123);
};

fn.c = {
  name: 'tanya',
  year: 1975
}

console.log(fn.a)
console.log(fn.b())

var arr = [1, 2, 3];
// console.log(arr.length); // 3

arr.a = 'tanya';
arr.b = function () {
  alert(123);
}
arr.c = {
  name: 'tanya',
  year: 1975
}

// for (var item in arr) {
//   console.log(item) // 0 1 a b c
// }
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

function Fn () {
  this.name = 'tanya';
  this.age = 1975;
}

var fn = new Fn();
console.log(fn.name)
console.log(fn.age)
console.log(typeof fn)

function Fn() {

}

Fn.prototype.name = 'tanya'
Fn.prototype.getYear = function () {
  return 1975;
};

Object.prototype.name = 'tanya'
Object.prototype.getYear = function () {
  return 1975;
};

// var obj = new Object()
// console.log(obj)

prototype
__proto__

function Foo() {

}
var f1 = new Foo();
f1.a = 10;

Foo.prototype.a = 100;
Foo.prototype.b = 200;

for (var item1 in f1) {
  if (f1.hasOwnProperty(item1)) { // 只打印自身属性
    console.log(item1);  // a
  }
}
for (var item2 in f1) {
  console.log(item2); // a b
}

function Foo(x, y) {
  console.log(arguments.length)
}
Foo(1, 2);
console.log(f1)
// console.log(f1.arguments)

// var i
// var y

// i = 0

function fn(x, y) {
  console.log(arguments);  // [10]
  console.log(x);  // 10
}
fn(10, 2);
function Foo() {
  this.name = 'tanya';
  this.year = 1975;
  console.log(this);  // Foo { name: 'tanya', year: 1975 }
}
var f1 = new Foo();

console.log(f1.year);  // 1975
console.log(f1.name);  // tanya

var obj = {
  x: 10,
  fn: function() {
    console.log(this);    //  Object { x: 10, fn: function }
    console.log(this.x);  // 10
  }
}
// 如果 fn 函数不是作为 obj 的一个属性被调用，会是什么结果？
obj.fn();

console.log(this)
// window.alert()
setInterval(function () {
  console.log(this)
}, 1000)

var obj = {
  x: 10,
  fn: function() {
    console.log(this);    //  Window {top: Window, ...}
    console.log(this.x);  // undefined
  }
}

var fn1 = obj.fn;
fn1();

var obj = {
  x: 10
};

var fn = function() {
  console.log(this);  // Object {x: 10}
  console.log(this.x);
}
fn.call(obj);

// this === window
var obj = {};
function test() {
  // console.log(this)
  console.log(this === obj);
}

var testObj = test.bind(obj);
// console.log('=========')

test(); // false
testObj(); // true

var obj = {
  test: function () {
    var arrow = function() {
      console.log(this)
      console.log(this === obj);
    }
    var arrow = () => {
      console.log(this)
    }
    arrow();
    console.log(this)
  }
}
obj.test(); // true

var
  a = 10,
  fn,
  bar = function(x) {
    var b = 5;
    fn(x+b);
  }

fn = function(y) {
  var c = 5;
  console.log(y + c);
}

bar(10);


function fn () {
  var max = 10;
  function bar () {
    return max++;
  }
  return bar;
}
var bar = fn();
// console.log(bar())
console.log(bar());
// console.log(bar());
// console.log(bar());
// console.log(bar());
// console.log(bar());
*/

/*for(var i=0; i<10; i++){
  console.info(i)
}
alert(i)  // 变量提升，弹出10

for(; i<20; i++){
  console.info(i)
}
alert(i)  // 变量提升，弹出10*/
// banner
(function () {
  // banner()
})()
// tab
(function () {
  // tab
})()
// tab1
(function () {
  // tab
})()
// fu()
(function () {

})()

window.onload = function () {
  alert('fghjkl')
}

