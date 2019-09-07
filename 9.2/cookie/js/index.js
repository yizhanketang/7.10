
// session 服务器端
// cookie 浏览器
// name; value; expires; path

var now = new Date()
var expires = now.getTime() - (100 * 24 * 60 * 60 * 1000)

document.cookie = 'username=guozhao123; expires=' + new Date(expires) + '; path=/'

console.log(document.cookie)
