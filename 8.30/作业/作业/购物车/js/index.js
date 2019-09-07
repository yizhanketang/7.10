(function () {
    play();
    var oneChecked = document.querySelectorAll('.one-choose');
    var allChecked = document.querySelector('.all-checked');
    var num = 0;
    allChecked.onclick = function () {
        for (var i = 0; i < oneChecked.length; i++) {
            if (allChecked.checked === true) {
                oneChecked[i].checked = allChecked.checked ;
                num = oneChecked.length;
            }else{
                oneChecked[i].checked = false;
                num = 0;
            }
        }
        play()
    };
    for (var i = 0; i < oneChecked.length; i++) {
        var plus =document.querySelectorAll('.plus');
        var minus =document.querySelectorAll('.minus');
        oneChecked[i].onclick = function () {
            if (this.checked){
                num += 1;
            }else{
                num -= 1;
            }
            if (num != oneChecked.length){
                allChecked.checked = false;
            }
            else if (num = oneChecked.length) {
                allChecked.checked = true;
            }
            play()
        };
        plus[i].onclick = function () {
            this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1;
            play()
        };
        minus[i].onclick = function () {
            if (this.nextElementSibling.value != 1){
                this.nextElementSibling.value = Number(this.nextElementSibling.value) - 1;
                play()
            }
        };
    }
})();

function play(){
    var oneChecked = document.querySelectorAll('.one-choose');
    var allPrice = 0;
    var o = 0;
    var item = document.querySelectorAll('.text-one');
    var allNumber = document.getElementById('all-num');
    var allMoney = document.getElementById('all-money');
    for (var i = 0; i < item.length; i++){
        var subtotal =item[i].querySelector('.subtotal');
        var numbers =item[i].querySelector('.numbers');
        var price = item[i].querySelector('.price');
        var priceNum = price.getAttribute('data-price');
        var chooseAll = document.getElementById('choose-all');
        var subtotalNum = (numbers.value * priceNum * 100) / 100;

        if (oneChecked[i].checked){
            allPrice += subtotalNum;
            o += Number(numbers.value);
        }
        subtotal.innerHTML = '￥' + subtotalNum;
        allNumber.innerHTML = item.length

    }
    chooseAll.innerHTML = o;

    allMoney.innerHTML = '￥' + allPrice.toFixed(2);
}
window.onscroll = function(){
    var oDiv = document.querySelector(".aggregate");
    if (document.documentElement.scrollTop < 120){
        oDiv.classList.add('move')
    } else if(document.documentElement.scrollTop > 120){
        oDiv.classList.remove('move')
    }
    console.log(document.documentElement.scrollTop)
};


