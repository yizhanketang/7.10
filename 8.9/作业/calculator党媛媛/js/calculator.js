 
 var screen=document.getElementById('BMI')
 var BMI={};
 BMI.getBMI=function(a,b){
    var bmi=b/((a/100)*(a/100));
    return bmi;
  };
  BMI.idealweight=function(a){
    var x=(a-100)*0.9;
    return x;
  };
  function Cal(form){
    var a=eval(form.hei.value);
    var b=eval(form.wei.value);
    var bmi=eval(form.BMI.value);
    var bmiValue =BMI.getBMI(a,b);
    BMI.disp_alert(bmiValue );
    form.IW.value=BMI.idealweight(a);
    form.BMI.value= bmiValue ;
  }
  BMI.disp_alert = function(bmi){
    if (bmi < 18.5)
    {
      alert("你的体重太轻,要多吃点哟!");
    }
    else if (bmi >= 18.5 && bmi < 25)
    {
      alert("亲,你的体重正常,要继续保持哟!");
    }
    else if (bmi >= 25 && bmi< 30)
    {
      alert("亲,您的体重过重,要减肥了!");
    }
    else
    {
      alert("亲,你确实要减肥了!");
    }
  }