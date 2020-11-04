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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    wx.getStorage({
    key: "collect_key",
    success: (res) => {
      let display_string = res.data;
      let display_arr = JSON.parse(display_string)
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
    }
  })
  },

  slideButtonTap(e) {
    // console.log('slide button tap', e.detail)
    console.log(e);
    let id_to_delete = e.currentTarget.dataset.id;
    console.log(id_to_delete);
    
    wx.getStorage({
      key: "collect_key",
      success: (res) => {
        console.log(res.data)
        let storage_string = res.data;
        let storage_arr = JSON.parse(storage_string);
        console.log(storage_arr);
    
        // console.log(storage_arr[2].id);
        let index_to_delete;
        for (let i = 0; i < storage_arr.length; ++ i) {
          if (storage_arr[i].id === id_to_delete) {
            console.log(storage_arr[i]);
            index_to_delete = i;
          }
        }
        console.log(index_to_delete);
    
        storage_arr.splice(index_to_delete, 1);

        
        let new_storage_string = JSON.stringify(storage_arr);
        wx.setStorage({
          key: "collect_key",
          data: new_storage_string
        })
        
        this.setData({
          jokes_data: storage_arr
        })
      },
    })
    
    wx.showToast({
      title: "已取消收藏",
    })
    
  },

  previewImage: function(e) {
    console.log(e);
    let now_index = e.currentTarget.dataset.index;
    let current = e.currentTarget.dataset.src
    console.log(current)
    wx.previewImage({
      current,
      urls: [this.data.jokes_data[now_index].photo]
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