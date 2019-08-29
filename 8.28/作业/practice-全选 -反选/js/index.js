var checkAll = document.getElementById('checkAll');
var checkList = document.getElementsByClassName('check')
var unCheckAll = document.getElementById('unCheckAll')
var reverseCheck = document.getElementById('reverseCheck')
checkAll.onclick = function(){
    for(var i=0;i<checkList.length;i++){
        checkList[i].checked = true;
    } 
}
unCheckAll.onclick = function(){
    for(var i=0; i<checkList.length;i++){
        checkList[i].checked = false;
    }
}
reverseCheck.onclick = function(){
    for(var i=0; i<checkList.length;i++){
        checkList[i].checked = !checkList[i].checked;
    }
}
// var checkAll = document.getElementById('checkAll');//全选
// var unCheckAll = document.getElementById('unCheckAll');//全不选
// var reverseCheck = document.getElementById('reverseCheck');//反选
// var checkList = document.getElementsByClassName('check');//选择框列表
// //2.注册事件
// //2.1 全选
// checkAll.onclick = function(){
//   //3.事件处理：选中所有选择框（设置checked属性为true）
//   for(var i = 0;i<checkList.length;i++){
//     checkList[i].checked = true;
//   }
// }
// //2.2 全不选
// unCheckAll.onclick = function(){
//   //3.事件处理:不选中所有选择框（设置checked属性为false）
//   for(var i = 0;i<checkList.length;i++){
//     checkList[i].checked = false;
//   }
// }
// //2.3 反选
// reverseCheck.onclick = function(){
//   //3.事件处理:让每一个选择框的checked属性与自身相反
//   for(var i = 0;i<checkList.length;i++){
//     checkList[i].checked = !checkList[i].checked;//逻辑非取反
//     // if (checkList[i].checked == true){
//     //   checkList[i].checked = false;
//     // }else{//false
//     //   checkList[i].checked = true;
//     // }
//   }
// }