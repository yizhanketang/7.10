
// 面向对象编程
// Object.prototype
// 语法糖
// react ejs => js
/*

function Person(age, username) {
  this.age = age
  this.username = username
}

Person.prototype.printAge = function(age) {
  console.log(this.age)
}
// [].push()
let p = new Person(18, 'jay')
console.log(p)
p.printAge(67)
Array.prototype
*/

// const Per =
class Person {
  constructor(age, username) {
    this.age = age
    this.username = username
    // this.phone = '13288888888'
  }
  // age = age
  // username = username
  // phone = '13288888888'

  printAge() {
    console.log(this.age)
  }

  /*printPhone() {
    console.log(this.phone)
  }*/

  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }

  static getClassName() {
    console.log(Person.name)
    return Person.name;
  }
}

// let p = new Person(18, 'jay')
// p.printAge()

class NowPerson extends Person {
  constructor(age, username, phone) {
    super(age, username)
    this.phone = phone
  }

  printPhone() {
    console.log(this.phone)
  }
}

let g = new NowPerson(18, 'guo', '13288888888')
g.printAge()
g.printPhone()

// Per.getClassName()

// let p = new Per(18, 'jay') //new 实例
// p.printPhone()
// p.getClassName()

// var p = new Per(18, 'jay')
// console.log(p.getClassName())

// new Per(18, 'jay')

// let p = new Person(18, 'jay')
// let p1 = new Person(18, 'lihong')

// console.log(p)

// p1.prop = 'wang'
// console.log(p1.prop)

// console.log(p.__proto__ === p1.__proto__)
// p.printAge()





