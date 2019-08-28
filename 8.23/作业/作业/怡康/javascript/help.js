var active = document.querySelectorAll('.actives');
var left = document.querySelectorAll('.left-2 ');
for (var i = 0;i < left.length;i++){
    left[i].index = i;
left[i].onmousemove = function () {
    for (var j = 0;j < left.length;j++){
        left[j].classList.remove('active');
        active[j].classList.remove('right');
        }
        this.classList.add('active');
        active[this.index].classList.add('right');
    }
}