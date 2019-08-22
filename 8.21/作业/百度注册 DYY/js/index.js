var student = document.getElementById('student');
var telephone = document.getElementById('telephone');
// telephoneId.onclick = function () {
//    alert('电话号码')
// }

student.onblur = function() {
  var sibling = student.nextElementSibling;
  student.classList.remove('border-blue');
  if (
    (/^[\u4e00-\u9fa5]{0,}$/.test(student.value) &&
    student.value.length <= 7) ||
    (/^[A-Za-z0-9]+$/.test(student.value) &&
      student.value.length <= 14)
  ) {
    sibling.style.display = 'none'
  }
  else {
    sibling.style.display = 'inline-block';
    sibling.innerHTML = '用户名不能超过7个汉字或14个字符'
  }
}



