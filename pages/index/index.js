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
