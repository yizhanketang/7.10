var show = document.querySelectorAll('.remove');
var down = document.querySelectorAll('.content-2');

for (var i = 0;i < show.length;i++){
    show[i].index = i;
    show[i].onclick = function () {
        for (var j = 0;j < show.length;j++){
            show[j].classList.remove('show');
            down[j].classList.remove('down');
        }
        show[this.index].classList.add('show');
        down[this.index].classList.add('down');
    }
}