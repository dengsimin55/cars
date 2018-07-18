// pages/index/index.js
const app = getApp()
Component({
  /**
   * 组件的初始数据
   */
  data: {
    slides:null,
    entieies:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    testDrive(){
      wx.showToast({
        title:"暂不支持"
      })
    },
    readMore(event){
      wx.navigateTo({
        url:`/pages/vehicles/show?id=${ event.target.dataset.id}`
      })
    },
    onLoad() {
      this.setData({
        slides : app.globalData.slides,
        entities : app.globalData.vehicles
      })
      console.log(app.globalData.slides)
      console.log(app.globalData.vehicles)
    }
  }
})
