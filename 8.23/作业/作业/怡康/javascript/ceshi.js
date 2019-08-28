var active = document.querySelectorAll('.actives');
var left = document.querySelectorAll('.left-2 ');

for (var i = 0;i < left.length;i++){
    var x = i;
    left[i].onclick = function () {

        for (var j = 0;j < left.length;j++){
            left[j].classList.remove('active');
            active[j].classList.remove('right')
        }
        console.log(x);
        this.classList.add('active');
        active[x].classList.add('right');
    }
}