
$(function () {
    $.ajax({
        url:'https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/1-20.html',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'artiList',
        success: function (res) {
            // $('.loading').hide()
            // console.log(res)
            var list = res.BA10TA81wangning;
            for (var i=0;i<list.length;i++) {
                // console.log(list[i].url)
                $('footer').append('<a href="'+ (list[i]).url +'"><img src="'+list[i].imgsrc+ '">'+ list[i].title +'</a>')
            }
        }
    });
});



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

