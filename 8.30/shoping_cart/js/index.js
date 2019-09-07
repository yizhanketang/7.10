
function calcAllPrice() {
  var items = document.querySelectorAll('.item')
  var allB = document.querySelector('.all b')
  var allPrice = 0
  for (var i = 0; i < items.length; i++) {
    var currPrice = items[i].querySelector('.price')
    var currNum = items[i].querySelector('.calc span')
    var sPrice = items[i].querySelector('.s-price')
    var checkbox = items[i].querySelector('input[type=checkbox]')
    var price = currPrice.getAttribute('data-price')
    var sPriceNum = (currPrice.getAttribute('data-price') * 100 * currNum.innerHTML) / 100
    currPrice.innerHTML = '￥' + price
    sPrice.innerHTML = '小计：￥' + sPriceNum
    if (checkbox.checked) {
      allPrice += sPriceNum
    }
  }
  allB.innerHTML = '￥' + allPrice.toFixed(2)
}

(function () {
  calcAllPrice()

  var checkbox = document.querySelectorAll('.item input[type=checkbox]')
  var minus = document.querySelectorAll('.item .calc button:nth-child(1)')
  var plus = document.querySelectorAll('.item .calc button:nth-child(3)')
  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = function () {
      calcAllPrice()
    }

    minus[i].onclick = function () {
      if (Number(this.nextElementSibling.innerHTML) !== 1) {
        this.nextElementSibling.innerHTML -= 1
      }
      calcAllPrice()
    }

    plus[i].onclick = function () {
      this.previousElementSibling.innerHTML = Number(this.previousElementSibling.innerHTML) + 1
      calcAllPrice()
    }
  }
})()
