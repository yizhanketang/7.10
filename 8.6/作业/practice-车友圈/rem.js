(function () {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var recalc = function (){
        var cWidth = document.documentElement.clientWidth || document.body.clientWidth;
        if (!cWidth) return;
        document.documentElement.style.fontSize = 200 * (cWidth / 750) + 'px';
    };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
})()