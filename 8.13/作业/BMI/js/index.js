

var height = document.getElementById('heightOne');

var weight = document.getElementById('weightOne');


function control() {

    // true && true
    // false || true

  //alert(typeof height.value )//isNaN
  // alert(isNaN(height.value * 1))

    if (height.value === '' || weight.value === '') {
        alert('身高&体重不能为空')
    } else if (!isNaN(height.value * 1) && !isNaN(weight.value * 1)) {
      var a = weight.value;
      var b = height.value;
      var c =(a/(b*b))*10000
      // alert(c.toFixed(1))

      var compare = document.getElementById('compare')
      var compare1 = document.getElementById('compare1')

      compare.style.display = 'block';
      console.log(compare)

      compare1.innerHTML = c.toFixed(1);

      var compare2 = document.getElementById('compare2')
      var compare3 = document.getElementById('compare3')
      compare3.style.display = 'block'


      if (c.toFixed(1) <= 18.4 ) {
        compare2.innerHTML = "过轻"
        compare3.style.top = '76px'

      } else if (18.5 < c.toFixed(1) && c.toFixed(1)< 23.9 ) {
        compare2.innerHTML = "正常"
        compare3.style.top = '104px'

      } else if (24.0 < c.toFixed(1) && c.toFixed(1) < 27.9 ) {
        compare2.innerHTML = "过重"
        compare3.style.top = '130px'

      } else if (  c.toFixed(1) >= 28.0 ) {
        compare2.innerHTML = "肥胖"
        compare3.style.top = '160px'
      }
    } else {
      alert('不是数字')
    }
}











