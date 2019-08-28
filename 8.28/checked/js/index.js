
var checkboxs = document.querySelectorAll('dd input[type=checkbox]')
var allChecked = document.querySelector('.all-checked')
var noChecked = document.querySelector('.no-checked')

allChecked.onclick = function () {
  if (!this.checked) {
    this.classList.remove('checked')
    for (var x = 0; x < checkboxs.length; x++) {
      checkboxs[x].checked = this.checked
      checkboxs[x].classList.remove('checked')
    }
  } else {
    this.classList.add('checked')
    for (var x = 0; x < checkboxs.length; x++) {
      checkboxs[x].checked = this.checked
      checkboxs[x].classList.add('checked')
    }
  }
}

noChecked.onclick = function () {
  console.log(this.checked)
  if (!this.checked) {
    console.log('false----')
    this.classList.remove('checked')
    /*for (var x = 0; x < checkboxs.length; x++) {
      if (!checkboxs[x].checked) {
        checkboxs[x].classList.add('checked')
        checkboxs[x].checked = true
      } else {
        checkboxs[x].classList.remove('checked')
        checkboxs[x].checked = false
      }
    }*/
  } else {
    console.log('true----')
    this.classList.add('checked')
    /*for (var x = 0; x < checkboxs.length; x++) {
      if (checkboxs[x].checked) {
        checkboxs[x].classList.remove('checked')
        checkboxs[x].checked = false
      } else {
        checkboxs[x].classList.add('checked')
        checkboxs[x].checked = true
      }
    }*/
  }
  for (var x = 0; x < checkboxs.length; x++) {
    checkboxs[x].checked = !checkboxs[x].checked
    if (!checkboxs[x].checked) {
      checkboxs[x].classList.remove('checked')
    } else {
      checkboxs[x].classList.add('checked')
    }
  }
}


for (var i = 0; i < checkboxs.length; i++) {
  checkboxs[i].onclick = function () {
    // console.log(this.checked)
    if (!this.checked) {
      this.classList.remove('checked')
    } else {
      this.classList.add('checked')
    }
    var count = 0
    for (var x = 0; x < checkboxs.length; x++) {
      if (checkboxs[x].checked){
        count += 1
      }
    }

    if (count === checkboxs.length) {
      allChecked.classList.add('checked')
    } else {
      allChecked.classList.remove('checked')
    }

    /*if (this.classList.contains('checked')) {
      this.classList.remove('checked')
    } else {
      this.classList.add('checked')
    }*/
  }
}

