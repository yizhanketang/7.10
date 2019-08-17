var aa = document.getElementById('aaa');
var bb = document.getElementById('bbb');
var addto= document.getElementById('add');
var adddel = document.getElementById('adddel');
var year = new Date();


var count = 0;

function f() {
    var weight = aa.value;
    var height = bb.value;
    var BMI = weight / (height * height) * 10000;
    var left = document.getElementById('finder-1');
    var finder = document.getElementById('finder');
    var right = document.getElementById('finder-2');
    var remove = document.getElementById('finder-3');
    var sport = document.getElementById('sport');



    if (weight === '' || height === '') {
        sport.style.display = "block";
        sport.innerText = "请输入数字！";
        sport.style.color = "#f00";
        sport.style.textAlign = "center";
        finder.style.display = "none";
        remove.style.display = "none";
    } else if (!/^[0-9]*$/.test(weight * 1) || !/^[0-9]*$/.test(height * 1)) {
        if (!/^[0-9]*$/.test(height * 1)) {
            bb.style.backgroundColor = '#f00';
            bb.value = '请输入正确的数字！';
            finder.style.display = "none";
            remove.style.display = "none";
        } else if (!/^[0-9]*$/.test(weight * 1)) {
            aa.style.backgroundColor = '#f00';
            aa.value = '请输入正确的数字！';
            finder.style.display = "none";
            remove.style.display = "none";
        } else {
        }
    } else if (/^[0-9]*$/.test(weight * 1) && /^[0-9]*$/.test(height * 1)) {
        count += 1;
        sport.style.display = "none";
        aa.style.backgroundColor = '#eff8ff';
        bb.style.backgroundColor = '#eff8ff';
        left.innerText = BMI.toFixed(1);
        finder.style.display = "block";
        remove.style.display = "block";
        addto.innerHTML += '<div >' +
            '<p>'+ count +'</p>' +
            '<p>'+year.getFullYear()+'-'+(year.getMonth()+1)+'-'+year.getDate()  +'</p>' +
            '<p>'+ height +'</p>' +
            '<p>'+ weight +'</p>' +
            '<p>'+BMI.toFixed(1)+'</p>' +
            '<a href="#" onclick="f3(' + count + ')">删除</a></div>';

            adddel.innerHTML = '';
        if (BMI.toFixed(1) <= 18.4) {
            right.innerText = '偏瘦';
            remove.style.top = "60px";
        } else if (BMI.toFixed(1) >= 18.5 && BMI.toFixed(1) < 24) {
            right.innerText = '正常';
            remove.style.top = "85px";
        } else if (BMI.toFixed(1) >= 24 && BMI.toFixed(1) < 28) {
            right.innerText = '过重';
            remove.style.top = "110px";
        } else {
            right.innerText = '肥胖';
            remove.style.top = "140px";
        }
    }else{}
}
function f3(x){
    var x = count;
    console.log(x)
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
