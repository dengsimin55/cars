App({
  globalData:{

  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response) => {
        Object.assign( this.globalData, response.data)
        console.log(this.globalData)
        // 返回当前页面，包含上级页面
        const currentPages = getCurrentPages()
        if(currentPages.length != 0){
          currentPages[currentPages.length - 1].onLoad()
        }
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
