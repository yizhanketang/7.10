var list = document.querySelector('.list');
var button = document.querySelector('.list button');
var ent = document.querySelector('.list input');
var item = document.querySelector('.item');
var table = document.querySelector('.item div');

function play() {
    item.innerHTML = '';
    var Data;
    // localStorage.clear()
    // localStorage.removeItem('todoData');
    if (localStorage.getItem('todoData')) {
        Data = localStorage.getItem('todoData').split('-');
    } else {
        Data = [];
    }
    if (Data.length === 0) {
        var itemHtml = document.createElement('div');
        itemHtml.innerHTML = '暂无数据';
        item.appendChild(itemHtml);
    } else {
        for (var i = 0; i < Data.length; i++) {
            itemHtml = document.createElement('div');
            itemHtml.innerHTML = Data[i];
            item.appendChild(itemHtml);
        }

    }
}
play();
button.addEventListener('click', function () {
    var text = localStorage.getItem('todoData');
    if (text) {
        localStorage.setItem('todoData', text + '-' + ent.value)
    } else {
        localStorage.setItem('todoData', ent.value)
    }
    play();
    ent.value = '';
});