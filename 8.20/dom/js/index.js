// var list = document.getElementById('list')

// console.log(list)

// var listClassName = document.getElementsByClassName('list')
// var items = document.getElementsByClassName('item')

// console.log(listClassName)

/*for (var i = 0; i < items.length; i++) {
  // console.log(items[i])
  items[i].onclick = function () {
    console.log(this)
  }
}*/

// var divS = document.getElementsByTagName('div')

// console.log(divS.length)
// console.log(divS.push('h'))

// var itemDiv3 = items[2].getElementsByTagName('div')

/*for (var i = 0; i < itemDiv3.length; i++) {
  console.log(itemDiv3[i])
}*/

// css

// var item = document.querySelector('.list .item')
// var items = document.querySelectorAll('.list .item:nth-child(3) > div')

// console.log(item)
// console.log('=========')
// console.log(items)

// var list = document.querySelector('#list')
// $_asdasd

function $(ele) {
  return document.querySelectorAll(ele)
}

// jquery 选择器，动画，ajax 兼容性
// console.log($('.item'))

// console.log($('.item')[0].innerHTML)
// console.log($('.item')[0].className)
// console.log($('.item')[0].id)
// console.log($('.item')[0].style.backgroundColor)
// console.log($('.item')[0].getAttribute('class'))
// console.log($('.item')[0].getAttribute('style'))

// $('.item')[0].innerHTML = '<h1>bbb</h1>'
// $('.item')[0].innerText = '<h1>bbb</h1>'

// $('.item')[0].className = 'item item1 test'
// $('.item')[0].style = 'color: red'
// $('.item')[0].setAttribute('style', 'color: red')
// $('.item')[0].setAttribute('class', 'color  red')

// $('.item')[0].style.color = 'red'


// var h1 = document.createElement('h1')
// var h1Text = document.createTextNode('新创建的h1标签')
// h1.appendChild(h1Text)
//
// h1.className = 'hahaha'
// h1.setAttribute('style', 'float: left')

// $('.list-wrap')[0].insertBefore(h1, $('.item')[4])
// $('.list-wrap')[0].replaceChild(h1, $('.item')[4])
// $('.list-wrap')[0].replaceChild(h1, $('.item')[4])

// console.log($('.item')[4].cloneNode(true))
// var cloneNode = $('.item')[4].cloneNode(true)
// $('.list-wrap')[0].appendChild(cloneNode)
// document.body.appendChild(h1)
// document.body.innerHTML += '<h1>新创建的h1标签新创建的h1标签新创建的h1标签</h1>'

var list = document.getElementById('list')

// console.log(list.children)
// console.log(list.childNodes.item(1))
// console.log(list.childNodes[1])

var items = list.getElementsByClassName('item')

// console.log(items[2].previousSibling)
// console.log(items[2].previousElementSibling)

// console.log(list.offsetHeight)
// console.log(list.offsetWidth)
// console.log(list.offsetTop)
// console.log(list.offsetLeft)
// console.log(items[0].offsetWidth)
// console.log(items[1].offsetLeft)

// console.log(document.body.scrollTop)
// console.log(document.documentElement.scrollTop)

document.body.onscroll = function () {
  if (document.documentElement.scrollTop > 800) {
    document.querySelector('.back-top').style.display = 'block'
  } else {
    document.querySelector('.back-top').style.display = 'none'
  }
}

/*setInterval(function () {
  document.documentElement.scrollTop -= 10
}, 60)*/


