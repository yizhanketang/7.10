

var height = document.getElementById('heightOne');

var weight = document.getElementById('weightOne');

var compare = document.getElementById('compare')
var compare1 = document.getElementById('compare1')

var reg = /^[0-9]*$/

function control() {
    var a = weight.value;
    var b = height.value;
    var c =(a/(b*b))*10000
    // alert(c.toFixed(1))

    if (height.value === '' || weight.value === ''){
      alert('不可以空着yo')
    } else if (
      !reg.test(height.value) ||
      !reg.test(weight.value)
    ) {
      alert('不是数字')
    } else {
      var recordDiv = document.getElementById('record')
      /*console.log(a)
      console.log(b)
      console.log(c.toFixed(1))*/
      recordDiv.innerHTML +=
        '<div class="footer-table footer-top">'+
        '<span>#</span>' +
        '<span>日期</span>' +
        '<span>' + a +'</span>' +
        '<span>' + b + '</span>' +
        '<span>' + c.toFixed(1) + '</span>' +
        '<span>操作</span></div>'

      console.log(recordDiv.innerHTML)

    }

    // } else if (isNaN(b * 1)) {
    //     compare.style.display = 'block';
    //     compare.style.color = '#f00'
    //     compare.innerHTML = '要两项都输入正确数字才行yo~'
    //
    // }
    //   else if (isNaN(a * 1)) {
    //     compare.style.display = 'block';
    //     compare.style.color = '#f00'
    //     compare.innerHTML = '要两项都输入正确数字才行yo~'
    //
    //
     /*else if (isNaN(a * 1) || isNaN(b * 1)) {
        compare.style.display = 'block';
        compare.style.color = '#f00'
        compare.innerHTML = '不能瞎 ** 输yo~'

    } else {
      compare.style.display = 'block';
      // console.log(compare)
      compare1.innerHTML = c.toFixed(1);

      var compare2 = document.getElementById('compare2')
      var compare3 = document.getElementById('compare3')
      compare3.style.display = 'block'
    }*/


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
}











