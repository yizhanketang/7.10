var move  = document.querySelectorAll('.move');
var down = document.getElementById('down');
var del = document.getElementById('del');
var select = document.querySelector('.all-select');
var noSelect = document.querySelector('.no-select');
var choose = document.querySelectorAll('.checked');
var judge = true;
var bgc = document.querySelectorAll('.bgc');
var num = 0;
var rightClick = document.querySelector('.right-click');
var e = event || window.event;
for (var x = 0;x < move.length; x++){
    move[x].onmouseenter = function () {
        this.style.color = '#09aaff';
    };
    move[x].onmouseleave = function () {
        this.style.color = '#333';
    };
}
document.querySelector('.head').oncontextmenu = function (event) {
    rightClick.style.display = 'block';
    rightClick.style.left = event.clientX + 'px';
    rightClick.style.top = event.clientY + 'px';
    return false
};
document.documentElement.onclick = function () {
    rightClick.style.display = 'none'
};

for (var a = 0; a < bgc.length; a++){
    bgc[a].onmouseenter = function () {
        this.style.backgroundColor = '#eaeaea';
    };
    bgc[a].onmouseleave = function () {
        this.style.backgroundColor = '#f7f7f7';
        bgc[0].style.backgroundColor = '#eaeaea';
    };

}

select.onclick = function () {

    for (var i = 0; i < choose.length; i++){
        if (select.checked == true){
            choose[i].checked = select.checked;
            num = choose.length;
    }else{
            choose[i].checked = false;
            num = 0
        }
        judge = true;

    }
    if (num === 0){
        down.style.display = 'block';
        del.style.display = 'none';
    }else{
        down.style.display = 'none';
        del.style.display = 'block';
    }
};
noSelect.onclick = function () {
    for (var i = 0; i < choose.length; i++){
            choose[i].checked = !choose[i].checked
    }
    num = choose.length - num;
};

for ( var i = 0; i < choose.length; i++){
    choose[i].onclick = function (){
        if (this.checked){
        num += 1;
    }else if(!this.checked){
        num -= 1;
    }
        if (num === 0){
            down.style.display = 'block';
            del.style.display = 'none';
        }else{
            down.style.display = 'none';
            del.style.display = 'block';
        }
        console.log(del.style.display)

        if (num != choose.length){
            select.checked = false;
        }
        else if (num = choose.length) {
            select.checked = true;
        }
    };
}

var oneChoose;
var change = document.getElementById('change');
var list = document.getElementById('list');
var more = document.getElementById('more');
var card = document.querySelectorAll('.card');
var flag = true;

more.onclick = function(){
    if (flag === true){
        more.className = 'vv4';
        flag = false;
        list.className = 'card';
        change.className = 'change';
      oneChoose = document.querySelectorAll( '.card .fire');

    }else {
        more.className = 'vv3';
        flag = true;
        list.className = 'list';
        change.className = 'all-choose';
    }
};

for ( var s = 0; s < oneChoose.length; s++ ){
    oneChoose[s].index = s;
        oneChoose[s].onmouseenter = function () {
        choose[this.index].style.display = 'block';
        console.log(choose[this.index].style.display)
    };
    oneChoose[s].onmouseleave = function () {
        if (choose[this.index].checked === true){
            choose[this.index].style.display = 'block';
        }else{
            choose[this.index].style.display = 'none';
        }
        console.log(choose[this.index].style.display)
    }
}
