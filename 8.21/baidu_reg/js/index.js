
// 占位符
var nameId = document.getElementById('name')
var phoneId = document.getElementById('phone')

nameId.onfocus = function () {
  if (nameId.value == '请输入用户名') {
    nameId.value = ''
  }
  nameId.classList.add('border-blue')
}

// var remind = document.querySelector('.container .item .remind')

nameId.onblur = function () {
  if (nameId.value == '') {
    nameId.value = '请输入用户名'
  }
  nameId.classList.remove('border-blue')
  var sibling = nameId.nextElementSibling
  if (
    (/^[\u4e00-\u9fa5]{0,}$/.test(nameId.value) &&
      nameId.value.length <= 7) ||
    (/^[A-Za-z0-9]+$/.test(nameId.value) &&
      nameId.value.length <= 14)
  ){
    sibling.style.display = 'none'
  } else {
    // console.log('!ok')
    // 用户名不能超过7个汉字或14个字符 .remind
    sibling.style.display = 'inline-block'
    sibling.innerHTML = '用户名不能超过7个汉字或14个字符'
  }
}

phoneId.onfocus = function () {
  phoneId.classList.add('border-blue')
}

phoneId.onblur = function () {
  phoneId.classList.remove('border-blue')
  var sibling = phoneId.nextElementSibling
  if (phoneId.value == '') {
    sibling.style.display = 'inline-block'
    sibling.innerHTML = '手机号码不能为空'
  } else if(!/^(1[3-9][0-9]{9})$/.test(phoneId.value)) {
    sibling.style.display = 'inline-block'
    sibling.innerHTML = '请输入合法的手机号'
  } else {
    sibling.style.display = 'none'
  }
}



