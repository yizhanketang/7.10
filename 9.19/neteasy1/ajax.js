$(function () {
    $('header a').each(function (index, item) {
      if($(item).data('type') === getQuery('type')) {
        $(item).addClass('active').siblings().removeClass('active')
      }
    })

  // var pageSize = 10
  // var currentPage = 1
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




  const initRequestData = ({type = 'BA10TA81wangning', currentPage = 1, pageSize = 10}) => {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `https://3g.163.com/touch/reconstruct/article/list/${type}/${(currentPage - 1) * pageSize + 1}-${ currentPage * pageSize }.html`,
          type: 'GET',
          dataType: 'jsonp',
          jsonpCallback: 'artiList',
          success(res) {
            resolve(res)
          },
          error(error) {
            reject(error)
          }
        });
      })
  }

  async function init() {
      try {
        const res = await initRequestData({
          type: getQuery('type')
        })
        await initRequestData({
          type: 'BD2A9LEIwangning'
        })
        await initRequestData({
          type: 'BD2AC4LMwangning'
        })
        await initRequestData({
          type: 'BD2AB5L9wangning'
        })

        const data = res[getQuery('type') ? getQuery('type') : 'BA10TA81wangning']
        $.each(data, function (index, item) {
          $('footer').append('<a href="' + item.url + '">' + item.title + '</a>')
        })
      } catch (e) {
        alert(e)
      } finally {
        $('.loading').hide()
      }

  }
  init()

  /*
  initRequestData({
    type: getQuery('type')
  }).then((res) => {
    console.log(res)
    const data = res[getQuery('type') ? getQuery('type') : 'BA10TA81wangning']
    $.each(data, function (index, item) {
      $('footer').append('<a href="' + item.url + '">' + item.title + '</a>')
    })
  }).catch((error) => {
    alert('error')
    console.log(error)
  }).finally(() => {
    $('.loading').hide()
  })
  */
})



