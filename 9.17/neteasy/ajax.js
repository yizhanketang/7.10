$(function () {
    $('header a').each(function (index, item) {
      if($(item).data('type') === getQuery('type')) {
        $(item).addClass('active').siblings().removeClass('active')
      }
    })

  var pageSize = 10
  var currentPage = 1
  var isLoading = false
  $(document).scroll(function () {
      // console.log($(document).height())
    if ($(document).scrollTop() + window.innerHeight >= $(document).height() && !isLoading) {
      currentPage += 1
      isLoading = true
      $('.loading').show()
      var url = 'https://3g.163.com/touch/reconstruct/article/list/' + getQuery('type') + '/'+ Number((currentPage - 1) * pageSize + 1) + '-' + currentPage * pageSize +'.html'
      console.log(url)
      $.ajax({
        url:url,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'artiList',
        success: function (res) {
          $('.loading').hide()
          isLoading = false
          var data = res[getQuery('type')]
          $.each(data, function (index, item) {
            $('footer').append('<a href="' + item.url + '">' + item.title + '</a>')
          })
        }
      });
    }
    console.log(currentPage)
  })


  $('.more').on('click', function () {
    currentPage += 1
    // console.log(currentPage)
    // console.log((currentPage - 1) * pageSize + 1 + '-' + currentPage * pageSize)
    $('.loading').show()
    var url = 'https://3g.163.com/touch/reconstruct/article/list/' + getQuery('type') + '/'+ Number((currentPage - 1) * pageSize + 1) + '-' + currentPage * pageSize +'.html'
    console.log(url)
    $.ajax({
      url:url,
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback: 'artiList',
      success: function (res) {
        $('.loading').hide()
        var data = res[getQuery('type')]
        $.each(data, function (index, item) {
          $('footer').append('<a href="' + item.url + '">' + item.title + '</a>')
        })
      }
    });
  })

  $.ajax({
    url:'https://3g.163.com/touch/reconstruct/article/list/' + getQuery('type') + '/'+ (currentPage - 1) * pageSize + 1 + '-' + currentPage * pageSize +'.html',
    type: 'GET',
    dataType: 'jsonp',
    jsonpCallback: 'artiList',
    success: function (res) {
      $('.loading').hide()
      var data = res[getQuery('type')]
      $.each(data, function (index, item) {
        $('footer').append('<a href="' + item.url + '">' + item.title + '</a>')

      })
    }
  });
})


/*$.ajax({
  url: '',
  type: 'POST',//method
  data: '',
  success: function () {

  },
  error: function () {

  }
})*/
/*$.get('', function (res) {

})

$.post('', '', function (res) {

})*/
//

// function loadXMLDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200){
//             myFunction(this);
//         }
//     }
//     xhttp.open("GET","https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/1-20.html",true);
//     xhttp.send()
//     console.log(xhttp.send())
// };

// XMLHttpRequest
// get
// post

// CORS



