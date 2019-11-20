const initRequestData = ({type = 'BA8EE5GMwangning', currentPage = 1, pageSize = 10}) => {
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

function getQuery(key) {
    var arr = location.search.substr(1).split('&')
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].split('=')[0] === key) {
            return arr[i].split('=')[1]
        }
    }
}

initRequestData({
    type: getQuery('type')
}).then((res) => {
    const data = res[getQuery('type') ? getQuery('type') : 'BA8EE5GMwangning']
    console.log(res)
    $.each(data, function (index, item) {
        $('.inner').append('<a href='+item.url
            +'class="active"><div><span>'+item.title
            +'</span><span>'+item.ptime+'</span><span>'+
            item.priority+'跟贴</span></div><div><img src= '+
            item.imgsrc+ ' alt=""></div></a>');
    })
}).catch((error) => {
    alert('error')
    console.log(error)
}).finally(() => {

})

$(function () {
    // var list = ['BA8EE5GMwangning','BA10TA81wangning','BD2A9LEIwangning','BD2AB5L9wangning','BA8E6OEOwangning'];
    let pageSize = 10;
    let currentPage = 1;
    $('.header-bottom>ul>li').click(function () {
        // $('.inner').html('');
        var type = $(this).data('type');
        location.search = '?type=' + type;
        $.ajax({
            url: `https://3g.163.com/touch/reconstruct/article/list/${getQuery('type')}/${(currentPage - 1) * pageSize + 1}-${ currentPage * pageSize }.html`,
            type: 'GET',
            dataType: 'jsonp',
            jsonpCallback: 'artiList',
            success(res) {
                const data = res[getQuery('type')];
                $.each(data, function (index, item) {
                    $('.inner').append('<a href=' + item.url
                        + 'class="active"><div><span>' + item.title
                        + '</span><span>' + item.ptime + '</span><span>' +
                        item.priority + '跟贴</span></div><div><img src= ' +
                        item.imgsrc + ' alt=""></div></a>');
                })
            }
        })
    });

    $('.header-bottom>ul>li').each(function (index, item) {
        if ($(item).data('type') === getQuery('type')) {
            $(item).addClass('border').siblings().removeClass('border')
        }
    })

    $(document).scroll(function () {
                if ($(document).scrollTop() + window.innerHeight >= $(document).height()){
                    currentPage += 1;
                    $.ajax({
                        url: `https://3g.163.com/touch/reconstruct/article/list/${getQuery('type')}/${(currentPage - 1) * pageSize + 1}-${ currentPage * pageSize }.html`,
                        type: 'GET',
                        dataType: 'jsonp',
                        jsonpCallback: 'artiList',
                        success(res) {
                            const data = res[getQuery('type')];
                            $.each(data, function (index, item) {
                                $('.inner').append('<a href=' + item.url
                                    + 'class="active"><div><span>' + item.title
                                    + '</span><span>' + item.ptime + '</span><span>' +
                                    item.priority + '跟贴</span></div><div><img src= ' +
                                    item.imgsrc + ' alt=""></div></a>');
                            })
                        }
                    })
                }
    })
})