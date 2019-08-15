var aa = document.getElementById('aaa');
var bb = document.getElementById('bbb');
function f() {
    var a = aa.value;
    var b = bb.value;
    var c = a/(b*b)*10000;
    var d = document.getElementById('finder-1');
    var f = document.getElementById('finder');
    var e = document.getElementById('finder-2');
    var g = document.getElementById('finder-3');

    f.style.display = "block";
    d.innerText = c.toFixed(1);

    if (c.toFixed(1) <= 18.4) {
        e.innerText = '偏瘦';
        g.style.display = "block";
        g.style.top = "60px";
    }else if (c.toFixed(1) >= 18.5 && c.toFixed(1) < 24) {
        e.innerText = '正常';
        g.style.display = "block";
        g.style.top = "85px";
    }else if (c.toFixed(1) >= 24 && c.toFixed(1) < 28) {
        e.innerText = '过重';
        g.style.display = "block";
        g.style.top = "110px";
    }else{
        e.innerText = '肥胖';
        g.style.display = "block";
        g.style.top = "140px";
    }
}
function f1() {
    var q = document.getElementById('qq');
    var w = document.getElementById('ww');
    q.innerHTML = "单位: 英寸 in";
    w.innerHTML = "单位: 磅 lb";
}
function f2() {
    var q = document.getElementById('qq');
    var w = document.getElementById('ww');
    q.innerText = "单位: 厘米 cm";
    w.innerHTML = "单位: 千克 kg";
}
