Component({
  //组件的初始数据， 
  // 下面list中的 iconClass根据你自己下载的 iconfont里面的class名称对应修改
  data: {
    selected: 0,
    color: "#2876b8",
    selectedColor: "#d81e06",
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconClass": "icon-home"
      },
      {
        "pagePath": "/pages/logs/logs",
        "text": "日志",
        "iconClass": "icon-time"
      },{
        "pagePath": "/pages/picture/index",
        "text": "相册",
        "iconClass": "icon-picture"
      }
    ]
  },
  /**
   * 组件方法
   */
  methods: {
    /** 切换tab方法 */
    switchTab(e) {
      const data = e.currentTarget.dataset
      const taburl = data.path
      let that = this;
     // 切换tab
      wx.switchTab({
        url:taburl,
        success:()=>{
          that.setData(
            {selected:data.index}
          );
          // console.log(that.data.selected,data.index);
        },
        fail:(ex)=>{
          console.log(ex);
        }
      })
    }
  },
  /**
   * 组件的生命周期
   * https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html
   */
  lifetimes: {
    ready: function() {
      console.log("ready");
    }
  }

})