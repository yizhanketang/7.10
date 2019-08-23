var number = document.querySelectorAll('.box_1 .item');
for (var i=0; i<number.length; i++) {
    number[i].onclick = function (e) {
        window.event? window.event.cancelBubble = true : e.stopPropagation();
        for (var j=0; j<music.length; j++){
            music[j].style.display = 'none'
        }
        this.children[1].style.display = 'block';

    }
}
var music = document.querySelectorAll('.box_1 .item .none');
document.documentElement.onclick = function () {
    for (var j=0; j<music.length; j++){
        music[j].style.display = 'none'
    }
};