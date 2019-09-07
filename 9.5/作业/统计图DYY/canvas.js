var Gmooncake = document.getElementById('g-mooncake');
var Smooncake = document.getElementById('s-mooncake');
var Jmooncake = document.getElementById('j-mooncake');
var Cmooncake = document.getElementById('c-mooncake');
var btn = document.getElementById('button');
var tutorial = document.getElementById('canvas');
var ctx = tutorial.getContext('2d');
btn.onclick = function () {
if (Number (Gmooncake.value) + Number(Smooncake.value) + Number(Jmooncake.value) + Number(Cmooncake.value) != 100) {
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 34px/40px 幼圆';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText('请三思',350,200);
    console.log(tutorial)
}
else {
    ctx.font = "bold 18px 幼圆";
    ctx.fillStyle = '#fff';
    ctx.clearRect(0,0,700,500);
    ctx.fillRect(0,210,400,2);
    ctx.fillText('广式月饼',30,235);
    ctx.fillText('苏式月饼',130,235);
    ctx.fillText('京式月饼',230,235);
    ctx.fillText('其他月饼',330,235);
    ctx.beginPath();

    ctx.beginPath();
    ctx.moveTo(50,210);
    ctx.lineTo(50,210-(Number (Gmooncake.value) * 2));
    ctx.lineTo(80,210-(Number (Gmooncake.value) * 2));
    ctx.lineTo(80,210);
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#fff';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150,210);
    ctx.lineTo(150,210-(Number (Smooncake.value) * 2));
    ctx.lineTo(180,210-(Number (Smooncake.value) * 2));
    ctx.lineTo(180,210);
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250,210);
    ctx.lineTo(250,210-(Number (Jmooncake.value) * 2));
    ctx.lineTo(280,210-(Number (Jmooncake.value) * 2));
    ctx.lineTo(280,210);
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(350,210);
    ctx.lineTo(350,210-(Number (Cmooncake.value) * 2));
    ctx.lineTo(380,210-(Number (Cmooncake.value) * 2));
    ctx.lineTo(380,210);
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    var a = Math.PI / 50 *Number(Gmooncake.value);
    var b = Math.PI / 50 *Number(Smooncake.value);
    var c = Math.PI / 50 *Number(Jmooncake.value);
    var d = Math.PI / 50 *Number(Cmooncake.value);

    ctx.beginPath();
    ctx.fillStyle = '#fff'; // 白
    ctx.moveTo(500,380);
    ctx.arc(500, 380, 100, 0, Math.PI*2, false);
    ctx.lineTo(500,380);
    console.log(a);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'yellow'; // 黄
    ctx.moveTo(500,380);
    ctx.arc(500,380, 100, 0, a+b+c, false);
    ctx.lineTo(500,380);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#ff88c2'; // 绿
    ctx.moveTo(500,380);
    ctx.arc(500,380, 100, 0, a+b, false);
    ctx.lineTo(500,380);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#169af3'; // 绿
    ctx.moveTo(500,380);
    ctx.arc(500,380, 100, 0, a, false);
    ctx.lineTo(500,380);
    ctx.fill();

}green
}