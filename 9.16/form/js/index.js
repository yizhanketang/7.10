$(function () {
  $('.btn').on('click', function () {
    // console.log($('#avatar').val())
    // console.log($('input[name=sex]:checked').val())
    var checkedHobby = $('input[name=hobby]:checked')
    // console.log(checkedHobby)
    var hobbyArr = []
    checkedHobby.each(function (index, ele) {
      // console.log($(ele).val())
      hobbyArr.push($(ele).val())
    })
    console.log(hobbyArr)
    // console.log($('input[name=hobby]:checked').val())
    return false
  })

  $('#avatar').change(function () {
    // console.log(this.value)
    // $('#avatar').parent().append('<img width="100" height="100" src="'+ $('#avatar').val() +'">')
    // console.log($('#avatar').val())
  })
})

//  云存储：七牛云，阿里云

