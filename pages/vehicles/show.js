const app = getApp()

Page({
  data:{
    entity:null
  },
  preview(event){

    const slideName = event.target.dataset.slides
    const index = event.target.dataset.index

    const slides = this.data.entity.meta[slideName]
    const images = []
    console.log(slideName)

    slides.map((item) => {
      images.push(item.image)
    })

    wx.previewImage({
      urls:images,
      current:images[index]
    })
  },
  testDrive(){
    wx.showToast({
      title:"暂不支持"
    })
  },
  onLoad (options){
    const id = options.id
    const entity = app.globalData.vehicles.filter((item)=>{
      return item.id == id
    })
    this.setData({
      entity:entity[0]
    })
    wx.setNavigationBarTitle({
      title: this.data.entity.header,
    })
  }
})