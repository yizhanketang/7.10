$.playFun = function (parentClass,childClass,parentAddClass,childAddClass){
    parentClass.mouseenter(function () {
        childClass.addClass(childAddClass);
        $(this).addClass(parentAddClass);
    });
    parentClass.mouseleave(function () {
        childClass.removeClass(childAddClass);
        $(this).removeClass(parentAddClass);
    });
    childClass.mouseenter(function () {
        $(this).addClass(childAddClass);
        parentClass.addClass(parentAddClass);
    });
    childClass.mouseleave(function () {
        $(this).removeClass(childAddClass);
        parentClass.removeClass(parentAddClass);
    })
};