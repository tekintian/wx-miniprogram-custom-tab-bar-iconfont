// pages/demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentImg: "https://i.imgtg.com/2022/10/27/P27dL.th.jpg",
    imgList: ["https://i.imgtg.com/2022/10/27/P27dL.th.jpg", "https://i.imgtg.com/2022/10/27/P2KIx.md.jpg", "https://i.imgtg.com/2022/10/27/P2AEt.md.jpg"]
  },
  /** 相册预览 */
  openImg(data) {
    console.log(data);
    let list = data.currentTarget.dataset.list;
    wx.previewImage({
      current: this.data.currentImg,
      urls: list
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

    //调用自定义tab-bar组件中的方法 设置tab页的当前页索引
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2 // 这里的索引值根据你的当前页面在tab中的索引顺序来填写 第一页 0 ，第二页 1 依次类推 
      })
    }


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})