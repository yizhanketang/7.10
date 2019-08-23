
// var tatle = document.querySelectorAll('.xuanxiangtitle a')
//
// var tab = document.querySelectorAll('.xuanxiangtab a')

// for (i = 0; i < tatle.length; i++) {
//     tatle[i].addEventListener('click', function () {
//
//         for (j = 0; j < tatle.length; j++){
//             tatle[j].classList.remove('active')
//             tab[j].style.display = 'none'
//         }
//         this.classList.add('active')
//
//         tab[this.getAttribute('data-index')].style.display = 'block'
//
//     })
// }



// 没有在HTML里加data-index

var tatle = document.querySelectorAll('.xuanxiangtitle a')

var tab = document.querySelectorAll('.xuanxiangtab a')

for (i = 0; i < tatle.length; i++){
    tatle[i].index = i
    console.log('i')
    tatle[i].addEventListener('click',function () {

        for (j = 0; j < tatle.length; j++){
            tatle[j].classList.remove('active')
            tab[j].style.display = 'none'
        }
        this.classList.add('active')
        tab[this.index].style.display = 'block'

    })
}

document.documentElement.onclick = function (){
    // this.nextElementSibling.style.display = 'none'
    tab[j].style.display = 'none'
}




// 第二个呢


var moresa = document.querySelectorAll('.list .more > a')
var moresu = document.querySelectorAll('.container .more ul')

for ( var i = 0; i < moresa.length; i++) {
    moresa[i].onmouseover = function () {

        for (var j = 0; j < moresu.length; j++){
            moresu[j].style.display = 'none'
        }
        this.nextElementSibling.style.display = 'block'
    }

    moresa[i].onmouseleave = function () {
        this.nextElementSibling.style.display = 'none'
    }
}


































