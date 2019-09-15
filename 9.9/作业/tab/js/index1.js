
$(function () {
    function tabs(dtAct,ddAct) {
        dtAct.click(function () {
            $(this).css({
                'background': '#ffcc00',
                'color': '#999'
            }).siblings().css({
                'background': '#fafafa',
                'color': '#333'
            })
            var $index = $(this).index()
            ddAct.eq($index)
                .css('display','block')
                .siblings().css('display','none')
        })
    }
    tabs($('.container1 .dt a'),$('.container1 .dd .content'))
    tabs($('.container2 .dt a'),$('.container2 .dd .content'))
})



























