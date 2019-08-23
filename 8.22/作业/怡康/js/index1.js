var list_1 = document.querySelectorAll('.detail');
var list_2 = document.querySelectorAll('.middle');

for (var i = 0;i < list_1.length;i++){
    list_1[i].index = i;
    list_1[i].onmouseenter = function () {
        for (var j = 0;j < list_1.length;j++){
            list_2[j].classList.remove('appear');
        }
        list_2[this.index].classList.add('appear')
    }
}
for (var i = 0;i < list_1.length;i++){
    list_1[i].index = i;
    list_1[i].onmouseleave = function () {
        for (var j = 0;j < list_1.length;j++){
            list_2[this.index].classList.remove('appear');
        }
    }
}
for (var x = 0;x < list_2.length;x++){
    list_2[x].onmouseenter = function () {

        this.classList.add('appear');
    }
}
for (var x = 0;x < list_1.length;x++){
    list_2[x].onmouseleave = function () {
            this.classList.remove('appear');
    }
}
