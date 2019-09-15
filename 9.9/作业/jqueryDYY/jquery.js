$(function () {
    function f(womenStar,songName) {
        womenStar.click(function () {
            $(this).css({
                'background' : 'red',
            }).siblings().css({
                'background' : 'black'
            })
            var $index = $(this).index()
            songName.eq($index).css({
                'height':'200px',
                'display':'block'
            }).siblings().css({
                'height':'0',
                'display':'none'
            })
        })
    }
    f($('.box1 .star ul li'),$('.box1 .song'))
    f($('.box2 .star ul li'),$('.box2 .song'))
})


function _(example) {
    return document.querySelectorAll(example)
}

function f(womenStar,songName) {
    for (var i=0;i<womenStar.length;i++){
        womenStar[i].index = i;
        womenStar[i].onclick = function () {
            for (var j=0; j<womenStar.length; j++){
                womenStar[j].classList.remove('red');
                songName[j].style.height = '0';
                songName[j].style.display = 'none'
            }
            womenStar[this.index].classList.add('red');
            songName[this.index].style.height = '200px';
            songName[this.index].style.display = 'block'
        }

    }
}
f(document.querySelectorAll('.box1 .star ul li'),document.querySelectorAll('.box1 .song'))
f(document.querySelectorAll('.box2 .star ul li'),document.querySelectorAll('.box2 .song'))

