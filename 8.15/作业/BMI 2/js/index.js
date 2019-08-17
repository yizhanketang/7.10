
window.onload = function () {
  var height = document.getElementById('heightOne');

  var weight = document.getElementById('weightOne');

  var compare = document.getElementById('compare');
  var compare1 = document.getElementById('compare1');

  var compare2 = document.getElementById('compare2');
  var compare3 = document.getElementById('compare3');

  var footer1 = document.getElementById('footer1');
  var center1 = document.getElementById('center1');
  var x = 0;

  var t = new Date();
  t.getFullYear();
// console.log(t.getFullYear())
  t.getMonth();
  t.getDay();
  t.getHours();
// console.log(t.getHours())

  function calcBMI(h, w) {
    return (w / (h * h)) * 10000
  }

  function control() {
    var a = weight.value;
    var b = height.value;
    // var c =(a/(b*b))*10000;
    var c = calcBMI(a, b);

    if (weight.value === '' || height.value === ''){
      compare3.style.display = 'none';
      compare.style.display = 'block';
      weight.style.borderColor = '#f00';
      height.style.borderColor = '#f00';
      compare.style.color = '#f00';
      compare.innerHTML = '不可以空着yo~';
      footer1.style.display = 'none';
    } else if (!/^[0-9]*$/.test(b) || !/^[0-9]*$/.test(a)) {
      compare3.style.display = 'none';
      compare.style.display = 'block';
      compare.style.color = '#f00';
      compare.innerHTML = '不能瞎 ** 输yo~';
      footer1.style.display = 'none';

    } else  {
      center1.style.display = 'none';
      compare.innerHTML="";
      compare.style.display = 'block';
      compare1.innerHTML = c.toFixed(1);
      compare3.style.display = 'block';
      if (c.toFixed(1) <= 18.4 ) {
        // compare2.innerHTML = "过轻";
        compare3.style.top = '76px';
        compare.innerHTML='<i></i>你的 BMI 值: <span id="compare1">.</span>,身体状态：<span id="compare2">过轻</span>';

      } else if (18.4 < c.toFixed(1) && c.toFixed(1)<= 23.9 ) {
        // compare2.innerHTML = "";
        compare3.style.top = '104px'
        compare.innerHTML='<i></i>你的 BMI 值: <span id="compare1">.</span>,身体状态：<span id="compare2">正常</span>';

      } else if (23.9 < c.toFixed(1) && c.toFixed(1) <= 27.9 ) {
        // compare2.innerHTML = "";
        compare3.style.top = '130px';
        compare.innerHTML='<i></i>你的 BMI 值: <span id="compare1">.</span>,身体状态：<span id="compare2">过重</span>';

      } else if (  c.toFixed(1) > 27.9 ) {
        // compare2.innerHTML = "肥胖";
        compare3.style.top = '160px';
        compare.innerHTML='<i></i>你的 BMI 值: <span id="compare1">.</span>,身体状态：<span id="compare2">肥胖</span>';
      }

      footer1.style.display = 'block';
      x += 1;

      footer1.innerHTML +='<div>' + '<span>' + x +'</span>'+
        '<span>'+ t.getFullYear() + " "+ "-" + t.getMonth() + "-" + " "+t.getDay()
        +" " + "-"+ " " +t.getHours() + '</span>'+
        '<span>'+ b +'</span>'+
        '<span>'+ a +'</span>'+
        '<span>'+ c.toFixed(1) +'</span>'+
        '<span onclick="control2()"><a href="###">删除</a></span>'+ '</div>';


    }

  }

  function control2() {
    footer1.style.display = 'none';
    center.style.display = 'block';
  }
}











