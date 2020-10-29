// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokes_data: [
      {
        name: "小明", 
        content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
        photo: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:09"
      },
      {
        name: "小李", 
        content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
        photo: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:03"
      },
      {
        name: "小明", 
        content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603994765106&di=67a3d92e88b42ba13023f742f20d427d&imgtype=0&src=http%3A%2F%2Fcdn2.image.apk.gfan.com%2Fasdf%2FPImages%2F2012%2F2%2F5%2F224702_219ba9e6b-4425-428f-b5e8-816d7aafd8cd.jpg",
        release_time: "发布于 20/10/28 18:09"
      },
      {
        name: "小李", 
        content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
        photo: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:03"
      },
      {
        name: "小明", 
        content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
        photo: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:09"
      },
      
      {
        name: "小明", 
        content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
        photo: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:09"
      },
      {
        name: "小李", 
        content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
        photo: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:03"
      },
      {
        name: "小明", 
        content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603908876188&di=9d2a1ac90789b2ebf9c880d069a09bd9&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130319%2F607278_164821087363_2.jpg",
        release_time: "发布于 20/10/28 18:09"
      },
      {
        name: "小李", 
        content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
        photo: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:03"
      },
      {
        name: "小明", 
        content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
        icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
        photo: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
        release_time: "发布于 20/10/28 18:09"
      }
    ],
    show_tips: false
  },
  set_tips: function(e) {
    this.setData({
      show_tips: !this.data.show_tips
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})