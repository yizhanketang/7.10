// var stature = document.getElementById('stature')
// // 加''
// var weight = document.getElementById('weight')
// function numeration() {
//     // var stature = a
//     // var weight = b
//     // alert(a)
//     var a = stature.Value
//     var b = weight.Value
//     var c =(a/(b*b))*10000;
//     alert(c)
// }






var stature = document.getElementById('stature');

var weight = document.getElementById('weight');

var consequence = document.getElementById('consequence');
var overcharge = document.getElementById('overcharge');
var resultOne = document.getElementById('resultOne');
var historyThree = document.getElementById('historyThree');
var historyTwo = document.getElementById('historyTwo');
var date = new Date();
date.getFullYear();
date.getMonth();
date.getDay();
date.getHours();
date.getMinutes();
// console.log(date.getFullYear())

function numeration() {
    var resultOne = document.getElementById('resultOne');
    var standardBoult = document.getElementById('standardBoult');
    // standardBoult.style.display = ("block")
    // resultOne.style.display = ("block")
    // consequence.style.color = ('#f40')
    
    // Console.log(resultOne)
    // console.log('resultOne')
    var a = weight.value;
    var b = stature.value;
    var c =(a/(b*b))*10000;
    // consequence.innerHTML = c.toFixed(1)
    if(a ==="" || b=== '')
    {
       alert('请输入数字')
    }
    else if(!/^[0-9]*$/.test(weight.value) || !/^[0-9]*$/.test(stature.value))
    {
        alert('请输入正确的数字')
    }else{
        standardBoult.style.display = ("block")
        resultOne.style.display = ("block")
        historyThree.style.display = ("none")
        consequence.style.color = ('#f40')
        consequence.innerHTML = c.toFixed(1)
        historyTwo.innerHTML=historyTwo.innerHTML +
        '<div class="historyTwo history-2">'+
        '<span>1</span>'+
        '<span>'+ date.getFullYear()+ "." + date.getMonth() + "." + date.getDay() + "." + date.getHours() +  "." + date.getMinutes() + ' </span>'+
        '<span>' + a +'</span>'+
        '<span>'+ b +'</span>'+
        '<span>'+ c.toFixed(1) +'</span>'+
        '<span>删除</span></div>'
        if(c.toFixed(1) <= 18.4)  {
            overcharge.innerHTML = '偏瘦'
        }
        if(23.9>=c.toFixed(1) && c.toFixed(1)  >18.4)  {
            overcharge.innerHTML = '正常'
        }
        if(c.toFixed(1)<= 18.4){
            overcharge.innerHTML = '偏瘦'
        }else if(c.toFixed(1)<=23.9){
            overcharge.innerHTML = '正常'
            standardBoult.style.top="103px"
        } else if(c.toFixed(1)<=27.9){
            overcharge.innerHTML = '过重'
            standardBoult.style.top="129px"
        } else if(c.toFixed(1)>=28){
            overcharge.innerHTML = '肥胖'
            standardBoult.style.top="155px"
        }
    }



















    // alert(c)
 
}

