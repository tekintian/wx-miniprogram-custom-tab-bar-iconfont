// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Custom Tab Bar with Iconfont Demo',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    // 自定义了tab-bar,如果是要跳转到tab页这个就不能跳转了，要用SwitchTab
    // wx.navigateTo({
    //   url: '../logs/logs',
    //   fail:(ex)=>{
    //     console.log(ex);
    //   }
    // })
    wx.switchTab({
      url: '../logs/logs',
      fail:(ex)=>{
        console.log(ex);
      }
    })

  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShow(){

    //调用自定义tab-bar组件中的方法 设置tab页的当前页索引
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0 // 这里的索引值根据你的当前页面在tab中的索引顺序来填写 第一页 0 ，第二页 1 依次类推 
        })
      }



  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  openImg(data){
    console.log(data);
    let arrs = data.currentTarget.dataset.srcs.split(",");
    let src = arrs[0];

      wx.previewImage({
        current: src,
        urls: arrs
      });
  },

})
