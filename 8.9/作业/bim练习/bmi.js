
function f() {
  var aa = document.getElementById('aaa');
  var bb = document.getElementById('bbb');
    var a = aa.value;
    var b = bb.value;
    var c = a/(b*b)*10000;
    alert("您的BIM值为："+c);
}
function f1() {
    var q = document.getElementById('qq');
    var w = document.getElementById('ww');
    q.innerText = "单位: 英寸 in";
    w.innerHTML = "单位: 磅 lb";
}
function f2() {
    var q = document.getElementById('qq');
    var w = document.getElementById('ww');
    q.innerText = "单位: 厘米 cm";
    w.innerHTML = "单位: 千克 kg";
}