// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    PageCur: 'basics'
  },
  onLoad() {
    
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})
