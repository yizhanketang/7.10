
var iphone = document.querySelector('input[type=text]')
var password = document.querySelector('input[type=password]')
var yanzheng = document.querySelector('.yanzheng')
var enter = document.querySelector('.ent')
var tishi = document.querySelector('.name-tishi')



enter.onclick = function(){

    var iphoneV = iphone.value
    console.log(iphoneV)
    var passwordV = password.value

    if(iphone.value === '' && password.value === ''){
        iphone.style.borderColor = '#f00'   

    }
    if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(iphoneV)){
        iphone.style.borderColor = '#f00'
        iphone.style.color = '#f00'
        iphone.value = ''
        // alert('请输入正确的手机号')
    }
    else if(!/^(\w){8,15}$/.test(passwordV)){
        password.style.borderColor = '#f00'
        password.style.color = '#f00'
        tishi.style.display = 'block'
        tishi.innerHTML = '密码只能输入8-15个字母、数字、下划线'
        password.value = ''
        // alert('请输入正确的密码')
    }
    else {   

        tishi.style.display = 'none'
        password.style.color = '#666'
        password.style.borderColor = '#DBDBDB'
    }
    
}

// console.log(tishi)























