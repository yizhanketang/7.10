
$.fn.banner = $.banner = function (options) {
  var options = options || {}
  var intNum = 0
  var ele = options.ele ? options.ele : $(this)
  var duration = options.duration || 2000
  var transition = options.transition || 'slow'
  var callback = options.callback ? options.callback : function() {}
  setInterval(function () {
    if (intNum >= ele.size()) {
      intNum = 0
    } else {
      intNum += 1
    }
    ele.eq(intNum)
      .fadeIn(transition, 'linear', callback(intNum))
      .siblings()
      .fadeOut(0)
  }, duration)
}
