var miLogo = document.getElementById('mi');
var homeLogo = document.getElementById('home');
var logo = document.getElementById('logo');
var pitchUp = document.getElementById('pitch-up');
var pitchOn = document.getElementById('pitch-on');
var optionUp = document.querySelectorAll('.page-main .item-list i');
var optionOn = document.querySelectorAll('.page-main .item-list b');
var upPitch = document.querySelectorAll('pitch-up');
logo.onmouseover = function () {
    homeLogo.style.left = '0'
};
logo.onmouseout = function () {
    homeLogo.style.left = -48 + 'px'
};
pitchUp.onmouseenter = function () {
    pitchOn.style.display = 'block'
};
pitchUp.onmouseleave = function () {
    pitchOn.style.display = 'none'
};
for (var i=0;i<optionUp.length;i++) {
    optionUp[i].index=i;
    optionUp[i].onmouseenter = function () {
        optionOn[this.index].style.display = 'block'
    };
    optionUp[i].onmouseleave = function () {
        optionOn[this.index].style.display = 'none'
    }
}
pitchUp.onclick = function () {
    if (pitchUp.classList.contains('pitch-up')) {
        pitchUp.classList.remove('pitch-up');
        for (var j=0;j<optionUp.length;j++){
            optionUp[j].classList.remove('pitch-up')
        }
    }
    else {
        pitchUp.classList.add('pitch-up');
        for (var j=0;j<optionUp.length;j++){
            optionUp[j].classList.add('pitch-up')
        }
    }
};
var times = 0;
for (var i=0; i<optionUp.length; i++){
    optionUp[i].index=i;
    optionUp[i].onclick = function () {
      if (optionUp[this.index].classList.contains('pitch-up')) {
        optionUp[this.index].classList.remove('pitch-up');
      }
      else {
        optionUp[this.index].classList.add('pitch-up')
        times += 1
      }
        console.log(times)
      if (times===optionUp.length){
        pitchUp.classList.add('pitch-up')
      }
      else {
        pitchUp.classList.remove('pitch-up')
      }
    }
}




function f() {
    var itemList = document.querySelectorAll('.page-main .item-list');
    // console.log(itemList)
    var allPrice = 0;
    for (var i=0;i<itemList.length;i++) {
        var itemPrice = itemList[i].querySelector('.page-main .item-list .price');
        var itemNum = itemList[i].querySelector('.page-main .item-list .number .b');
        var itemTotal = itemList[i].querySelector('.page-main .item-list .total');
        var priceAll = document.querySelector('footer .all span')
        // console.log(itemPrice.getAttribute('data-price'),itemNum.innerHTML);
        itemPrice.innerHTML = itemPrice.getAttribute('data-price') + '元';
        itemTotal.innerHTML = (itemPrice.getAttribute('data-price')*itemNum.innerHTML) + '元'
        allPrice += (itemPrice.getAttribute('data-price')*itemNum.innerHTML);
        priceAll.innerHTML = allPrice;
        // console.log(priceAll.innerHTML)
    }
}
f()
var minus = document.querySelectorAll('.page-main .item-list .number .a');
var quantity = document.querySelectorAll('.page-main .item-list .number .b')
var plus = document.querySelectorAll('.page-main .item-list .number .c')

for (var i=0;i<minus.length;i++) {
    minus[i].index=i;
    minus[i].onclick = function () {
        if (quantity[this.index].innerHTML>1){
            quantity[this.index].innerHTML -= 1
        }
else {
            quantity[this.index].innerHTML===1
        }
        f()
    }
}

for (var i=0;i<plus.length;i++) {
    plus[i].index=i;
    plus[i].onclick = function () {
       var money =  Number( quantity[this.index].innerHTML) ;
            money+=1;
        quantity[this.index].innerHTML = money
        f()
    }
}
var deleteList = document.querySelectorAll('.page-main .item-list .delete ');
var itemList = document.querySelectorAll('.page-main .item-list');
for (var i=0;i<deleteList.length;i++) {
    deleteList[i].index=i;
    deleteList[i].onclick = function () {

        itemList[this.index].style.display = 'none';
        console.log(itemList[this.index]);
        f()
    }
}
for (var i=0; i < itemList.length; i++) {
    if(optionUp[i].classList.contains('pitch-up')) {
        f()
    }
    // else {
    //     itemList[this.index].style.display = 'none'
    // }
}