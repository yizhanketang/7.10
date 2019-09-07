var cellPhone = document.getElementById('cell-phone');
var cryptogram = document.getElementById('cryptogram');
var ent = document.getElementById('ent');
var float = document.querySelector('.float');

var btn = document.getElementById('btn');
var checkCode = document.getElementById('checkCode');

var code;
ent.onclick = function () {
    if (cellPhone.value === '') {
        // float.style.height = '.44rem';
      float.classList.add('remind')
        float.innerHTML = '请输入您的账号';
    } else if (!/^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/.test(cellPhone.value)) {
        float.style.height = '.44rem';
        float.innerHTML = '请输入正确的手机号';
    } else {
        if (cryptogram.value === '') {
            float.style.height = '.44rem';
            float.innerHTML = '请输入您的密码';
        } else if (cryptogram.value.length > 19 || cryptogram.value.length < 8) {
            float.style.height = '.44rem';
            float.innerHTML = '密码错误请您重新输入';
        } else if (checkCode.value === '') {
            float.style.height = '.44rem';
            float.innerHTML = '请输入验证码';
        } else if (checkCode.value.toLowerCase() != num.innerHTML.toLowerCase()) {
            float.style.height = '.44rem';
            float.innerHTML = '请输入正确的验证码';
        }
        else {
          var now = new Date()
          var expires = now.getTime() + (10 * 24 * 60 * 60 * 1000)
          document.cookie = 'phone=' + cellPhone.value + '; expires=' + new Date(expires) + '; path=/';
          console.log(document.cookie)
          window.location.href = 'index1.html'
          // window.location.replace()
          // window.location.assign()
          // window.open()
        }
    }
    setTimeout(function () {
        float.classList.remove('remind')
        // float.style.height = '0';
    }, 3000)
}


function createCode() {
    code = "";
    var codeLength = 4;
    var checkCode = document.getElementById("code");
    /*var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');*/
  var codeStr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  var codeArr = codeStr.split('')
  for (var j = 0; j < codeLength; j++) {
    var item = codeArr[Math.floor(Math.random() * codeArr.length)]
    code += item
  }
    /*for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36);
        code += random[index];
    }*/
    /*console.log(code)
    console.log(code.toLowerCase())
    console.log(code.toUpperCase())*/
    num.innerHTML = code;
}
createCode()

function click() {
    num.onclick = function () {
        createCode()
    }
}

