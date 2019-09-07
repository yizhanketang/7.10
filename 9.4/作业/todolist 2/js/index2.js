var list = document.querySelector('.list')
var input = document.querySelector('.feature input')
var button = document.querySelector('button')



function initList(){
    list.innerHTML = ''
    var listData = commen.getCookie('tudoListData').split('-')
    if (listData.length === 0){
        
        var itemHtml = document.createElement('div')
        itemHtml.innerHTML = '快来留下你想说的吧'
        list.appendChild(itemHtml) 
    }else{
        for(var i = 0; i < listData.length; i++){
            var itemHtml = document.createElement('div')
            itemHtml.className = item
            itemHtml.innerHTML = listData[i]
            list.appendChild(itemHtml) 
        }
    }
}
initList()

button.addEventListener('click',function(){
    var befourCookie = commen.getCookie('todoListData')
    document.cookie = 'todoListData' + befourCookie + '-' + input.value + ';'
    console.log(document.cookie)
    initList()
    input.value = ''
})































