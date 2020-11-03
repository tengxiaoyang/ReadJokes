// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_icon: "https://hbimg.huabanimg.com/bc4a96cf3ea27046c3f587cc1882943f666d4e7536db-JZTJN6_fw658/format/webp",
    username: "新用户",
    user_rank: "LV1 初出茅庐"
  },
  jump_to_about: function(e) {
    wx.navigateTo({
      url: "/pages/about_us/about_us"
    })
  },
  jump_to_my_jokes: function(e) {
    wx.navigateTo({
      url: "/pages/my_jokes/my_jokes"
    })
  },
  handleContact (e) {
      // console.log(e.detail.path)
      // console.log(e.detail.query)
  },
  jump_to_tell_a_joke: function(e) {
    wx.navigateTo({
      url: "/pages/tell_a_joke/tell_a_joke"
    })
  },
  jump_to_my_collection: function(e) {
    wx.navigateTo({
      url: "/pages/my_collection/my_collection"
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