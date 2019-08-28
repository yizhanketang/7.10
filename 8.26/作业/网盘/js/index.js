var move  = document.querySelectorAll('.move');
var down = document.querySelector('.down');
var del = document.querySelector('.del');
var select = document.querySelector('.all-select');
var noSelect = document.querySelector('.no-select');
var choose = document.querySelectorAll('.checked');
var judge = true;
var bgc = document.querySelectorAll('.bgc');

for (var x = 0;x < move.length; x++){
    move[x].onmouseenter = function () {
        this.style.color = '#09aaff';
    };
    move[x].onmouseleave = function () {
        this.style.color = '#333';
    };
}

for (var a = 0; a < bgc.length; a++){
    bgc[a].onmouseenter = function () {
        this.style.backgroundColor = '#eaeaea';
    };
    bgc[a].onmouseleave = function () {
        this.style.backgroundColor = '#f7f7f7';
    };
}

select.onclick = function () {
    if (judge == true){
        for (var i = 0; i < choose.length; i++){
            choose[i].checked = true;
            down.style.display = 'none';
            del.style.display = 'block';
        }
        judge = false
    }else if (judge == false) {
        for (var i = 0; i < choose.length; i++){
            choose[i].checked = false;
            down.style.display = 'block';
            del.style.display = 'none';
        }
        judge = true;
    }
};
noSelect.onclick = function () {
    for (var i = 0; i < choose.length; i++){
        if (choose[i].checked == false){
            choose[i].checked = true;

        } else{
            choose[i].checked = false;
        }
    }
};

for (var i = 0; i < choose.length; i++){
choose[i].onclick = function () {
    console.log(this.checked);
    if (this.checked == false){
        down.style.display = 'block';
        del.style.display = 'none';
    }
    else{
        down.style.display = 'none';
        del.style.display = 'block';
    }
    };
}