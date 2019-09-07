var man = document.querySelector('.text input:nth-child(1)');
var women = document.querySelector('.text input:nth-child(2)');
var not = document.querySelector('.text input:nth-child(3)');
var button = document.querySelector('.text button');
var tutorial = document.querySelector('#para');
var ctx = tutorial.getContext('2d');


button.onclick = function () {
  if (Number(man.value) + Number(women.value) + Number(not.value) !== 100){
      ctx.font = "bold 50px Arial";
      ctx.fillText('请输入正确的数据',50,200);
      console.log()
  }
  else{
      ctx.font = "bold 20px Arial";
      ctx.clearRect(0,0,500,500);
      ctx.fillRect(0,210,400,2);
      ctx.fillText('男性',50,235);
      ctx.fillText('女性',170,235);
      ctx.fillText('未知',290,235);
      ctx.beginPath();
      ctx.moveTo(60,210);
      ctx.lineTo(60,210-(Number(man.value) * 2));
      ctx.lineTo(90,210-(Number(man.value) * 2));
      ctx.lineTo(90,210);
      ctx.strokeStyle = 'rgb(128, 100, 162)';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(180,210);
      ctx.lineTo(180,210-(Number(women.value) * 2));
      ctx.lineTo(210,210-(Number(women.value) * 2));
      ctx.lineTo(210,210);
      ctx.strokeStyle = 'rgb(155, 187, 89)';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(300,210);
      ctx.lineTo(300,210-(Number(not.value) * 2));
      ctx.lineTo(330,210-(Number(not.value) * 2));
      ctx.lineTo(330,210);
      ctx.strokeStyle = 'rgb(192, 80, 77)';
      ctx.stroke();

      var a = Math.PI / 50 *Number(man.value);
      var b = Math.PI / 50 *Number(women.value);
      var c = Math.PI / 50 *Number(not.value);
      ctx.beginPath();
      ctx.fillStyle = 'rgb(192, 80, 77)'; // 红
      ctx.moveTo(250,350);
      ctx.arc(250, 350, 100, 0, Math.PI*2, false);
      ctx.lineTo(250,350);
      console.log(a);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgb(155, 187, 89)'; // 绿
      ctx.moveTo(250,350);
      ctx.arc(250, 350, 100, 0, a+b, false);
      ctx.lineTo(250,350);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgb(128, 100, 162)'; // 紫
      ctx.moveTo(250,350);
      ctx.arc(250, 350, 100, 0, a, false);
      ctx.lineTo(250,350);
      ctx.fill();
  }
};
