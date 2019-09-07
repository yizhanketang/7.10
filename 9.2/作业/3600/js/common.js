/*
*
*
*
*
* */

var common = {
  getCookie: getCookie,
}

function getCookie(key) {
  var cookieArr = document.cookie.split('; ')
  for (var i = 0; i < cookieArr.length; i++) {
    var item = cookieArr[i].split('=')
    if (item[0] === key) {
      return item[1]
    }
  }
}

common.createCode = function (len) {
  var code = '';
  var codeStr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  var codeArr = codeStr.split('')
  for (var j = 0; j < len; j++) {
    var item = codeArr[Math.floor(Math.random() * codeArr.length)]
    code += item
  }
  return code
}
