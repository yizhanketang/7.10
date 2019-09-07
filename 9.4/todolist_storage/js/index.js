
var button = document.querySelector('.feature button')
var enter = document.querySelector('.feature input')
var list = document.querySelector('.list')

function initList() {
  list.innerHTML = ''
  var listData
  if (localStorage.getItem('todoListData')) {
    listData = localStorage.getItem('todoListData').split('-')
  } else {
    listData = []
  }
  // var listData = common.getCookie('todoListData').split('-')

  if (listData.length === 0) {
    var itemHtml = document.createElement('div')
    itemHtml.innerHTML = '暂无数据'
    list.appendChild(itemHtml)
  } else {
    for (var i = 0; i < listData.length; i++) {
      var itemHtml = document.createElement('div')
      itemHtml.className = 'item'
      itemHtml.innerHTML = listData[i]
      list.appendChild(itemHtml)
    }
  }
}
initList()
button.addEventListener('click', function () {
  var beforeCookie = localStorage.getItem('todoListData')
  if (beforeCookie) {
    localStorage.setItem('todoListData', beforeCookie + '-' + enter.value)
  } else {
    localStorage.setItem('todoListData', enter.value)
  }
  // console.log(localStorage.getItem('todoListData'))
  // localStorage.setItem('todoListData'),
  // document.cookie = 'todoListData='+ beforeCookie + '-' + enter.value + ';'
  initList()
  enter.value = ''
})
