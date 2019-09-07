var phone = document.getElementById('phone');
var name = document.getElementById('name');
var text = document.getElementById('text');
var num = document.getElementById('num');
var ent = document.querySelector('.ent');
var float = document.querySelector('.float');
(function () {
    nums();
    click()
    ent.onclick = function () {
        if (phone.value === '') {
            float.style.height = '.44rem';
            float.innerHTML = '手机号不能为空';
        }else if (!/^(1[3-9][0-9]{9})$/.test(phone.value)){
            float.style.height = '.44rem';
            float.innerHTML = '手机号码格式不正确';
        }else{
            if (password.value === ''){
                float.style.height = '.44rem';
                float.innerHTML = '密码不能为空';   
            }else if (!/^[A-Za-z0-9]+$/.test(password.value) || !/[^%&',;=?$\x22]+/.test(password.value)) {
                float.style.height = '.44rem';
                float.innerHTML = '支持数字,大小写字母和标点符号';
            }else if (password.value.length > 19 || password.value.length < 8){
                float.style.height = '.44rem';
                float.innerHTML = '密码长度为8-18位';
            }else{
                if (text.value === ''){
                    float.style.height = '.44rem';
                    float.innerHTML = '请输入验证码';
                } else if (text.value !== num.innerHTML){
                    float.style.height = '.44rem';
                    float.innerHTML = '请输入正确的验证码';

                }else{
                    document.cookie = '手机号:'  + phone.value + '&密码:'+password.value  ;
                    location.href = 'index1.html'
                }
            }
        }

        setTimeout(function () {
            float.style.height = '0';
        },3000)
    }
})();

function nums(){
    var code = '';
    var select = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    for ( var i = 0; i < 4; i++){
        var charIndex = Math.floor(Math.random()*36);
        code += select[charIndex]
    }
    num.innerHTML = code;
}

function click() {
    num.onclick = function () {
        nums()
    }
}


