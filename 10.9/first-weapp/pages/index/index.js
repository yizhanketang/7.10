const app = getApp()

Page({
  data: {
    text: 'Hello world!!!',
    score: 60
  },
  onLoad() {
    // console.log(app.globalData)
    console.log(getCurrentPages())
  },
  clickMe(e) {
    console.log(e)
  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh')
    // Do something when pull down.
  },
  onReachBottom: function() {
    console.log('onReachBottom')
    // Do something when page reach bottom.
  },
  onShareAppMessage() {

  }
})
