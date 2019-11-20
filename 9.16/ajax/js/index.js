$.ajax({
  url: 'https://3g.163.com/touch/reconstruct/article/list/BA8EE5GMwangning/1-20.html',
  type: 'GET',
  dataType: 'jsonp',
  jsonpCallback: 'artiList',
  success: function (res) {
    console.log(res)
  }
})

/*
---
API 格式
https://3g.163.com/touch/reconstruct/article/list/<新闻类型>/<开始ID>-<长度>.html
// jsonp

<新闻类型>: 是一串字符串，如下所示

娱乐类
全部：BA10TA81wangning
电视：BA10TA81wangning
电影：BD2A9LEIwangning
明星：BD2AB5L9wangning
音乐：BD2AC4LMwangning

体育类：BA8E6OEOwangning
财经类：BA8EE5GMwangning
军事类：BAI67OGGwangning

<开始ID>: 从第几条信息开始，0 是第一个
<长度>: 返回多少条信息，2 就是两条消息
样例:
  https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/10-2.html
    返回娱乐类的第 10~11 条消息


默认展示20条数据，
浏览到底部出发无限分页，每页20条数据
*/


/*
$.get('http://192.168.0.6:3000/api/todos', function (res) {
  console.log(res)
})
$('.btn').on('click', function () {
  $.post('http://192.168.0.6:3000/api/todo',
    JSON.stringify('title='+ $('#title').val()),
    function (res) {
    console.log(res)
  })
})
*/

/*$.ajax({
  url: 'http://192.168.0.6:3000/api/todos',
  type: 'GET',
  success: function (res) {
    console.log(res)
  },
})

$('.btn').on('click', function () {
  $.ajax({
    url: 'http://192.168.0.6:3000/api/todo',
    type: 'POST',
    data: JSON.stringify('title='+ $('#title').val()),
    success: function (res) {
      console.log(res)
    },
  })
})*/






// CORS
// JSONP

// ["customername1", "customername2"]
// abc(["customername1","customername2"])
// abc

/*var xhr = new XMLHttpRequest()
var domin = 'https://3g.163.com/touch/reconstruct/article/list/BA8EE5GMwangning/1-20.html'

xhr.open('GET', domin, true)
xhr.send(null)

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText))
      // console.log(JSON.stringify(JSON.parse(xhr.responseText)))
    }
  }
}*/


/*var xhr = new XMLHttpRequest()

var domin = 'http://192.168.0.6:3000/api'

// http://youdao.com/w/Axios/#keyfrom=dict2.top
// method, url, async
xhr.open('GET', 'http://192.168.0.6:3000/api/todos', true)
xhr.send(null)

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText))
      // console.log(JSON.stringify(JSON.parse(xhr.responseText)))
    }
  }
}*/

/*
var btn = document.querySelector('.btn')
var title = document.querySelector('#title')

btn.onclick = function () {
  // console.log(title.value)
  var xhr1 = new XMLHttpRequest()
  xhr1.open('POST', 'http://192.168.0.6:3000/api/todo', true)
  xhr1.send(JSON.stringify('{title: '+ title.value +'}'))
  xhr1.onreadystatechange = function () {
    if (xhr1.readyState === 4) {
      if (xhr1.status === 200) {
        console.log(xhr1.responseText)
      }
    }
  }
}*/


/*
* 服务端渲染：模板语言
* 从 controller 取到数据 blade{{  }}、<%=  %> {}
* name[]
* 刷新页面、重新渲染
*
* http
* 前后端分离项目
* ajax
* 阿贾克斯
* */

// http1.0
// http1.1
// ide
// http://localhost:63342/7.10/9.16/ajax/index.html?_ijt=68rebs8a6ovukfkd2r5hqkppl7
