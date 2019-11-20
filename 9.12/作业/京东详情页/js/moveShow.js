/*
* time:2019,9,12;
* writer:xiaoma;
* $.play(父元素类名, 子元素类名, 父元素要添加的类名,子元素要添加的类名);
*
*
*/

$.play = function (parentClass,childClass,parentAddClass,childAddClass){
          var x = 0;
        parentClass.mouseenter(function () {
            console.log($(this).index())
            childClass.eq($(this).index()).addClass(childAddClass);
            $(this).addClass(parentAddClass);
            x = $(this).index();
        });
        parentClass.mouseleave(function () {
            childClass.removeClass(childAddClass);
            $(this).removeClass(parentAddClass);
        });
        childClass.mouseenter(function () {
            $(this).addClass(childAddClass);
            parentClass.eq(x).addClass(parentAddClass);
        });
        childClass.mouseleave(function () {
            $(this).removeClass(childAddClass);
            parentClass.removeClass(parentAddClass);
        })
};