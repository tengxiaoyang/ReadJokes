Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokes_data: [],
  },
  set_tips: function(e) {
    let now_index = e.currentTarget.dataset.index;
    let a = this.data.jokes_data;
    a[now_index].show_tips = !a[now_index].show_tips;
    this.setData({
      jokes_data: a
    })
  },
  set_collect: function(e) {
    let now_index = e.currentTarget.dataset.index;
    // let a = this.data.jokes_data;
    // a[now_index].show_collect = !a[now_index].show_collect;
    // this.setData({
    //   jokes_data: a
    // });
    
    let storage_string = wx.getStorageSync("collect_key");
    var now_joke_string = JSON.stringify(this.data.jokes_data[now_index]);
    if (storage_string.indexOf(now_joke_string) === -1) {
      if (storage_string) {
        console.log(storage_string)
        var storage_arr = JSON.parse(storage_string);
      } else {
        console.log(storage_string)
        var storage_arr = [];
      }
      storage_arr.push(this.data.jokes_data[now_index]);
      let new_storage_string = JSON.stringify(storage_arr);
      wx.setStorageSync("collect_key", new_storage_string);
    } else {
      
    }
    
    wx.showToast({
      title: "已收藏",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync("collect_key"));
    var display_string = wx.getStorageSync("collect_key")
    var display_arr = JSON.parse(display_string)
    this.setData({
      jokes_data: display_arr,

      icon: "/images/collected.png",
      slideButtons: [{
        type: 'warn',
        text: '取消收藏',
        extClass: 'test',
          src: '/page/weui/cell/icon_del.svg', // icon的路径
      }],
    })
  },

  slideButtonTap(e) {
    // console.log('slide button tap', e.detail)
      
    var now_index = e.currentTarget.dataset.index;
    console.log(now_index)
    
    let storage_string = wx.getStorageSync("collect_key");
    var now_joke_string = JSON.stringify(this.data.jokes_data[now_index]);
    if (storage_string.indexOf(now_joke_string) !== -1) {
      if (storage_string) {
        // console.log(storage_string)
        var storage_arr = JSON.parse(storage_string);
      } else {
        // console.log(storage_string)
      }
      storage_arr.splice(now_index, 1);
      // storage_arr.push(this.data.jokes_data[now_index]);
      let new_storage_string = JSON.stringify(storage_arr);
      // console.log(new_storage_string);
      wx.setStorageSync("collect_key", new_storage_string);
    }

    // console.log(wx.getStorageSync("collect_key"))

    console.log(wx.getStorageSync("collect_key"));
    var display_string = wx.getStorageSync("collect_key")
    var display_arr = JSON.parse(display_string)
    this.setData({
      jokes_data: display_arr,

      icon: "/images/collected.png",
      slideButtons: [{
        type: 'warn',
        text: '取消收藏',
        extClass: 'test',
          src: '/page/weui/cell/icon_del.svg', // icon的路径
      }],
    })
    
    wx.showToast({
      title: "已取消收藏",
    })
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