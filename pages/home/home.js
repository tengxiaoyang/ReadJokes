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
        release_time: "发布于 20/10/28 18:09",
        show_tips: false,
        show_collect: false
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
      }
    ],
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
        // console.log(storage_string)
        var storage_arr = JSON.parse(storage_string);
      } else {
        // console.log(storage_string)
        var storage_arr = [];
      }
      storage_arr.push(this.data.jokes_data[now_index]);
      let new_storage_string = JSON.stringify(storage_arr);
      console.log(new_storage_string);
      wx.setStorageSync("collect_key", new_storage_string);
    } else {
      
    }

    // console.log(wx.getStorageSync("collect_key"))
    
    wx.showToast({
      title: "已收藏",
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