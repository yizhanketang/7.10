 
 var height = document.getElementById('height');
 var weight = document.getElementById('weight');


 function guess() {
     var a = height.value;
     var b = weight.value;


     if (height.value === '' || weight.value === '') {

         if (height.value === '') {
             height.value = '身高不能为空';
             height.style.color = 'red';
         }
         else if (weight.value === '') {
             weight.value = '体重不能为空';
             weight.style.color = 'red';
         }
     }
     else if (isNaN(height.value * 1) || isNaN(weight.value * 1)) {
         if (isNaN(height.value * 1)) {
             height.value = '请输入正确身高'
         }
         else if (isNaN(weight.value * 1)) {
             weight.value = '请输入正确体重'
         }
     }


     else if (!isNaN(height.value * 1) && !isNaN(weight.value * 1)) {
         var c = (b / (a * a)) * 10000;
         var price = document.getElementById('price');
         var physical = document.getElementById('physical');
         var BMI = document.getElementById('BMI');
         var arrow = document.getElementById('arrow');
         price.innerHTML = c.toFixed(1);
         BMI.style.display = 'block';
         arrow.style.display = 'block';

         if (c.toFixed(1) <= 18.4) {
             physical.innerHTML = '偏瘦';
             arrow.style.top = '68px';
         }
         else if (c.toFixed(1) > 18.4 && c.toFixed(1) <= 23.9) {
             physical.innerHTML = '正常';
             arrow.style.top = '95px';
         }
         else if (c.toFixed(1) > 20.4 && c.toFixed(1) <= 27.9) {
             physical.innerHTML = '过重';
             arrow.style.top = '126px';
         }
         else {
             physical.innerHTML = '肥胖';
             arrow.style.top = '155px';
         }
     }

 }

     
