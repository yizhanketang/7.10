$(function () {
    $('header a').on('click',function () {
        var $index = $(this).index()
      // console.log($(this).prop('data-type'))
      var type = $(this).data('type')

      location.search = '?type=' + type

      /*var requestUrl = 'https://3g.163.com/touch/reconstruct/article/list/' + type + '/1-20.html'
      $('.loading').show()
      $.ajax({
        url:requestUrl,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'artiList',
        success: function (res) {
          $('.loading').hide()
          var data = res[type]
          $('footer').html('')
          $.each(data, function (index, item) {
            $('footer').append('<a href="' + item.url + '">' + item.title + '</a>')
          })
        }
      });*/



        $(this).toggleClass('active').siblings().removeClass('active')
        $('section i').eq($index).addClass('active').siblings().removeClass('active')
    })
})