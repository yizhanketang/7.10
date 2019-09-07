var telephoneNum = document.getElementById('telephone');
var phoneNum = document.querySelector('input[type=text]');
var password = document.querySelector('input[type=password]');
var passwordNum = document.getElementById('password');
// var phoneNum = document.getElementById('phone');

telephoneNum.onblur = function () {
    // console.log(telephoneNum.value);
    if(telephoneNum.value===''){
        this.style.color = 'red';
        phoneNum.value = '手机号不能为空'
    }
    else if(!/^(1[3-9][0-9]{9})$/.test(telephoneNum.value)) {
        this.style.color = 'red';
        phoneNum.value = '手机号格式不正确'
    }
    else {
        phoneNum.value = ''
    }
};
passwordNum.onblur = function () {
    if(passwordNum.value===''){
        this.type = 'text';
        this.style.color = 'red';
        password.value = '密码不能为空'
    }
    else if(passwordNum.value.length<8||passwordNum.value.length>18) {
        this.type = 'text';
        this.style.color = 'red';
        password.value = '密码格式不正确'
    }
};