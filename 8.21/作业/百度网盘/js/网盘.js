var manName = document.getElementById('manName');
var phone = document.getElementById('phone');
var password = document.getElementById('password');
var  len = 0;
var click = document.getElementById('click');
var right1 = document.getElementById('right-1');
var right2 = document.getElementById('right-2');
var right3 = document.getElementById('right-3');
var right4 = document.getElementById('right-4');

manName.onblur = function () {
    var c = manName.value;
    for(var i = 0;i <c.length;i++){
        if(/^[\u4e00-\u9fa5]{0,}$/.test(c[i])){
            len+=2;
        }else if (/^[A-Za-z0-9]+$/.test(c[i])) {
            len++;
        }else{}
    }
    if (len === 0){
        right1.innerHTML = '请您输入用户名';
        manName.style.border = '1px solid red';
    }else if (len >0 && len <= 14){
        right1.innerHTML = '';
        manName.style.border = '1px solid rgb(102, 102, 102)';
    } else if (len > 14){
        right1.innerHTML = '用户名不能超过7个汉字或14个字符';
        manName.style.border = '1px solid red';
    }
    len = 0;
};
phone.onblur = function () {
    if (phone.value === '') {
        right2.innerHTML = '请您输入手机号';
        phone.style.border = '1px solid red';
    }
    else if (!/^(1[3-9][0-9]{9})$/.test(phone.value)) {
        right2.innerHTML = '手机号码格式不正确';
        phone.style.border = '1px solid red';
    }else{
        right2.innerHTML = '';
        phone.style.border = '1px solid rgb(102, 102, 102)';
    }
};

password.onblur = function () {
    if (password.value === '') {
        right3.innerHTML = '请输入密码';
        password.style.border = '1px solid red';
    }
    else if (!/^[A-Za-z0-9]+$/.test(password.value) || !/[^%&',;=?$\x22]+/.test(password.value)) {
        right3.innerHTML = '支持数字,大小写字母和标点符号';
        password.style.border = '1px solid red';
    }else if (password.value.length > 14 || password.value.length < 8){
        right3.innerHTML = '长度为8~14个字符';
        password.style.border = '1px solid red';
    } else{
        right3.innerHTML = '';
        password.style.border = '1px solid rgb(102, 102, 102)';
    }
};
