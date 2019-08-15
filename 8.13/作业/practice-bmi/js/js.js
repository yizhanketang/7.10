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
// var resultOne = document.getElementById('resultOne');

function numeration() {
    var resultOne = document.getElementById('resultOne');
    var standardBoult = document.getElementById('standardBoult');
    standardBoult.style.display = ("block")
    resultOne.style.display = "block"
    consequence.style.color = '#f40'
    // Console.log(resultOne)
    // console.log('resultOne')
    var a = weight.value;
    var b = stature.value;
    var c =(a/(b*b))*10000;
    consequence.innerHTML = c.toFixed(1)
    // alert(c)
    // if(c.toFixed(1) <= 18.4) ) {
    //     overcharge.innerHTML = '偏瘦'
    // }
    // if(23.9>=c.toFixed(1) && c.toFixed(1)  >18.4) ) {
    //     overcharge.innerHTML = '正常'
    // }
    if(c.toFixed(1)<= 18.4){
        overcharge.innerHTML = '偏瘦'
    }
}

// if(c.toFixed(1)<= 18.4){
//     overcharge.innerHTML = '偏瘦'
// }else(18.5 < c.toFixed(1) && c.toFixed(1)< 23.9) {
//     overcharge.innerHTML = '正常'
// }
// }
