// pages/stories/stories.js

const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    entities:null,
    currentVideo:null,
    currentVid:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play(event){
      if( this.data.currentVid != null){
        this.data.currentVideo.pause()
      }

      const currentVideo = wx.createVideoContext(`${ event.target.dataset.vid}`)
      currentVideo.play()

      this.setData({
        currentVideo,
        currentVid:event.target.dataset.vid
      })
    },
    onLoad (){
      this.setData({
        entities:app.globalData.stories
      })
    }
  }
})
