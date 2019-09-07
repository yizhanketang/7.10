
var lolita = document.querySelector('.lolita')
var darker = document.querySelector('.darker')
var queen = document.querySelector('.queen')
var button = document.querySelector('button')
var foot = document.querySelector('.foot')
var xiannv = document.getElementById('xiannv')
var ctx = xiannv.getContext('2d')

button.onclick = function(){
    if(Number(lolita.value) + Number(darker.value) + Number(queen.value) !== 100){
        ctx.font = "bold 50px Arial";
        ctx.strokeText('全部数据加起来是100才行噢',100,200);
        ctx.fillStyle = 'rgba(128,42,42,.7)';
        console.log()

    } else {
        ctx.clearRect(0,0,1000,500);

        ctx.font = "bold 20px Arial";    
        ctx.fillRect(126,490,780,2);
        foot.style.display = 'block'

        // ctx.fillText('lolita',50,235);
        // ctx.fillText('darker',170,235);
        // ctx.fillText('queen',290,235);
        //  上面字的位置不需要了

        ctx.beginPath();
        ctx.moveTo(190,490);
        ctx.lineTo(190,490-(Number(lolita.value) * 2));
        ctx.lineTo(270,490-(Number(lolita.value) * 2));
        ctx.lineTo(270,490);
        ctx.strokeStyle = 'rgba(188, 143, 143, 0.7)';
        ctx.fillStyle = 'rgba(188, 143, 143, 0.7)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(460,490);
        ctx.lineTo(460,490-(Number(darker.value) * 2));
        ctx.lineTo(540,490-(Number(darker.value) * 2));
        ctx.lineTo(540,490);
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(730,490);
        ctx.lineTo(730,490-(Number(queen.value) * 2));
        ctx.lineTo(810,490-(Number(queen.value) * 2));
        ctx.lineTo(810,490);
        ctx.strokeStyle = 'rgba(176,23,31,.7)';
        ctx.fillStyle = 'rgba(176,23,31,.7)';
        ctx.fill();
        ctx.stroke();

    //  饼图  
        var l = Math.PI / 50 *Number(lolita.value);
        var d = Math.PI / 50 *Number(darker.value);
        var q = Math.PI / 50 *Number(queen.value);

        ctx.beginPath();
        ctx.moveTo(200,150);
        ctx.arc(200, 150, 100, 0, Math.PI*2, false);
        ctx.lineTo(200,150);
        ctx.fillStyle = 'rgba(176,23,31,.7)';
        // console.log(a);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(200,150);
        ctx.arc(200, 150, 100, 0, l+d, false);
        ctx.lineTo(200,150);
        ctx.fillStyle = '#000'; 
        ctx.fill();

        ctx.beginPath();
    
        ctx.moveTo(200,150);
        ctx.arc(200, 150, 100, 0, l, false);
        ctx.lineTo(200,150);
        ctx.fillStyle = 'rgba(188, 143, 143, 0.7)';
        ctx.fill();

    //  添加文本
        ctx.fillStyle = 'rgba(188, 143, 143, 0.7)';
        ctx.fillText('lolita', 690,110)

        ctx.fillStyle = '#000'; 
        ctx.fillText('darker', 690,140)

        ctx.fillStyle = 'rgba(176,23,31,.7)';
        ctx.fillText('queen', 690,170)
        ctx.font = "bold 18px Arial";
    }
}
























