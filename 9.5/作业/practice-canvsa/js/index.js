var tutorial = document.getElementById('tutorial')
var ctx = tutorial.getContext('2d')
tutorial.height = 1000
tutorial.width = 1000
ctx.beginPath();
ctx.lineWidth = 30;
ctx.moveTo(100, 0);
ctx.lineTo(100, 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 30;
ctx.moveTo(300, 100);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 30;
ctx.moveTo(500, 0);
ctx.lineTo(500, 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(800, 100);
ctx.lineTo(800, 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(800, 100);
ctx.lineTo(900, 100);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(800, 100);
ctx.lineTo(800, 0);
ctx.stroke();

ctx.beginPath();
    ctx.arc(800, 100, 100,0, Math.PI / 800000, true);
    ctx.stroke();