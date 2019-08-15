var searchOne = document.getElementById('searchOne');

var searchTwo = document.getElementById('searchTwo');


function lol() {
    var resultValue = document.getElementById('resultValue')
    var resultValueBMI = document.getElementById('resultValueBMI')
  // console.log(resultValue)
  // resultValue.innerText = '4567890'
  // resultValue.style.background = 'blue'
  resultValue.style.display = 'block'

    var a = searchOne.value;
    var b = searchTwo.value;
    var c =(a/(b*b))*10000;

  resultValueBMI.innerHTML = c.toFixed(1)
    // alert(c)
}





