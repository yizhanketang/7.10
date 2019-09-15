

$(function () {
    $('.table .tr .tr-more').on('click',function () {
      // $('.table .line1').toggleClass('one')

        if (!$('.table .line1').hasClass('one')){
            // console.log(($('.table .line1'))
            $('.table .line1').addClass('one')
            $('.table .tt2').show()
            $('<i class="more"></i>').html('<i class="morei"></i>')
            $('.table .tr .tr-more span').html('收起')
        }else {
            $('.table .line1').removeClass('one')
            $('.table .tt2').hide()
        }
    })

})












