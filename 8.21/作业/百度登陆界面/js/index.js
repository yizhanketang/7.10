
var user = document.getElementById('user')
var phone = document.getElementById('phone')
var password = document.getElementById('password')
var validation = document.getElementById('validation')
var remind = document.querySelector('.remind')
// console.log(remind)

 // 用户名

user.onfocus = function () {
    user.classList.add('border-blue')
}

user.onblur = function () {
    user.classList.remove('border-blue')
  if(user.value == '') {
        alert('不为空')
  } else if (
      ((/^[\u4e00-\u9fa5]{0,}$/.test(user.value))
        && user.value.length <= 7) ||
      (/^[A-Za-z0-9]+$/.test(user.value)
        && user.value.length <= 14)) {
        // alert('aaa')
        remind.style.display = 'none'
        user.classList.remove('border-red')

    } else {
        user.classList.add('border-red')
        remind.style.display = 'inline-block'
        remind.innerHTML = '用户名不能超过7个汉字或14个字符'
    }

}

 // 手机号码

phone.onfocus = function () {
    phone.classList.add('border-blue')
}
phone.onblur = function () {
    var remind = phone.nextElementSibling
    // console.log('remind')
    phone.classList.remove('border-blue')

    if (!/^(1[3-9][0-9]{9})$/.test(phone.value)) {
        phone.classList.add('border-red')
        remind.style.display = 'inline-block'
        remind.innerHTML = '手机号码格式不正确'
    }else {
        phone.classList.remove('border-red')
        remind.style.display = 'none'
        remind.innerHTML = ''
    }
}

// 密码啦

password.onfocus = function () {
    password.classList.add('border-blue')

}

password.onblur = function () {
    password.classList.remove('border-blue')
    var remind = password.nextElementSibling


    if (14 >= password.value.length && password.value.length >= 8) {
        remind.style.display = 'none'
        remind.innerHTML = ''
    } else if(password.value.length > 14 || password.value.length < 8){
        password.classList.add('border-red')
        remind.style.display = 'inline-block'
        remind.innerHTML = '长度必须为8~14个字符'
    } else {
        password.classList.remove('border-red')
        remind.style.display = 'none'
        remind.innerHTML = ''
    }



}








//验证码

validation.onclick = function () {
    validation.classList.add('border-red')

}












