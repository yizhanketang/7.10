

var allCheckd = document.querySelector('.all-checkde')
var checkbox = document.querySelectorAll('.checkde')

allCheckd.onclick = function (){
    for(var i =0; i < checkbox.length; i++){
      // checkbox[i].checked = true
      // checkbox[i].checked = true
      checkbox[i].setAttribute('checked', true)
        /*checkbox[i].onclick = function(){
            console.log(checkbox[i])
               for(var j = 0; j < checkbox.length; j++){
                   var flag = true
                   if(checkbox[j].checked === false){
                       flag = false
                   }
               }
               allCheckd.checkde = flag
           }*/
    }
    // allCheckd.checkde = true
    allCheckd.checked = true
}


for(var i =0; i < checkbox.length; i++){
   checkbox[i].onclick = function(){
       for(var j = 0; j < checkbox.length; j++){
           var flag = true
           if(checkbox[j].checked === false){
               flag = false
           }
       }
       allCheckd.checkde = flag
   }
}



function calcPrice(){
    var shoppings = document.querySelectorAll('.shopping')
    var allPriceS = document.querySelector('.shipoping-under-right strong')
    var allPrice = 0
    var zjian = document.querySelectorAll('.shuliang .zjian')
    var yjia = document.querySelectorAll('.shuliang .yjia')

    for(var i = 0; i < shoppings.length; i++){
        var checkbox = shoppings[i].querySelector('.checkde')
        var danjia = shoppings[i].querySelector('.danjia')
        var shuliang = shoppings[i].querySelector('.shuliang span')
          if(Number(shuliang.innerHTML) == 0){
             zjian.classList.add('disabled')
          }

        var price = danjia.getAttribute('data-price')
        var allPriceNum = (danjia.getAttribute('data-price') * shuliang.innerHTML*100)/100.
        var sPrice = shoppings[i].querySelector('.s-price')

        danjia.innerHTML = '￥' + price
        sPrice.innerHTML ='￥' + allPriceNum

        if (checkbox.checked){
           allPrice += allPriceNum
        }       
    }
    allPriceS.innerHTML = '￥' + allPrice.toFixed(2)
}



(function(){
    calcPrice()

    var checkbox = document.querySelectorAll('.checkde')
    var zjian = document.querySelectorAll('.shuliang .zjian')
    var yjia = document.querySelectorAll('.shuliang .yjia')
    for(var i = 0; i < checkbox.length; i++){
        checkbox[i].onclick = function(){
            calcPrice()
        }  
        zjian[i].onclick = function(){
            if(this.nextElementSibling.innerHTML !==1){
                this. nextElementSibling.innerHTML -= 1  
            }
            calcPrice()
        } 
        
        yjia[i].onclick = function(){
           this.previousElementSibling.innerHTML = Number(this.previousElementSibling.innerHTML) + 1  
           calcPrice()
        }  
        
    }
})()


























