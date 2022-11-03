// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  /** 页面显示时执行 */
  onShow(){

    //调用自定义tab-bar组件中的方法 设置tab页的当前页索引
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1 // 这里的索引值根据你的当前页面在tab中的索引顺序来填写 第一页 0 ，第二页 1 依次类推 
        })
      }
  },
  /**清理日志 */
  clearLogs(){
    let that=this;
      wx.removeStorage({
        key: 'logs',
        success:()=>{
          that.setData({logs:[]})
        }
      })
  },
})
