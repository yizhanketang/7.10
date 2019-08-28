var active = document.querySelectorAll('.content-right');
var left = document.querySelectorAll('.left-1 ');
for (var i = 0;i < left.length;i++){
    left[i].index = i;
    left[i].onmousemove = function () {
        for (var j = 0;j < left.length;j++){
            left[j].classList.remove('show');
            active[j].classList.remove('down');
        }
        this.classList.add('show');
        active[this.index].classList.add('down');
    }
}