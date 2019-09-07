var oDiv1 = document.getElementById('div1');
var oDiv2 = document.getElementById('div2');
var oDiv3 = document.getElementById('div3');
oDiv1.onmouseover = function () {
    oDiv2.style.display = 'none';
    oDiv3.style.transform="rotate(180deg)"
};
oDiv1.onmouseout = function () {
    oDiv2.style.display = 'block';
    oDiv3.style.transform="rotate(0deg)"
};