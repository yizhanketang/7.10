 
 var height = document.getElementById('height');
 var weight = document.getElementById('weight');
 function guess() {
     var a = height.value;
     var b = weight.value;
     var c = (b / (a * a))*10000;
     // alert(c);
     var price = document.getElementById('price');
     var physical = document.getElementById('physical');
     var BMI = document.getElementById('BMI');
     var arrow = document.getElementById('arrow');
     price.innerHTML = c.toFixed(1);
     // console.log(c)
   BMI.style.display='block';
   arrow.style.display='block';
     if (c.toFixed(1)<=18.4) {
         physical.innerHTML='偏瘦';
         arrow.style.top = '68px';
     }
     else if (c.toFixed(1)>18.4 && c.toFixed(1)<=23.9) {
         physical.innerHTML='正常';
         arrow.style.top = '95px';
     }
     else if (c.toFixed(1)>20.4 && c.toFixed(1)<=27.9) {
         physical.innerHTML='过重';
        arrow.style.top = '126px';
     }
     else {
         physical.innerHTML='肥胖';
         arrow.style.top = '155px';
     }
 }

     
