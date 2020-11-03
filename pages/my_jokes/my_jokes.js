// pages/my_jokes/my_jokes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603974089565&di=aa4390823043f595d57d0505f5e2b7ca&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F34%2F09%2F06%2Fpic_lib%2Fs960x639%2Fjmfj061s960x639.jpg",
    username: "李明",
    user_rank: "LV1",
    I_liked: "0" + "/100",
    have_been_collected: "0/20",
    jokes_have_told: "0/5",

    jokes_data: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    wx.getStorage({
      key: "like_key",
      success: (res) => {
        let display_string = res.data;
        let display_arr = JSON.parse(display_string)

        let number_of_my_likes = display_arr.length;
        
        this.setData({
          jokes_data: display_arr,
          I_liked: number_of_my_likes + "/100",

          icon: "/images/liked.png",
          slideButtons: [{
            type: 'warn',
            text: '取消点赞',
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
    let ID_to_delete = e.currentTarget.dataset.id;
    console.log(ID_to_delete);
    
    wx.getStorage({
      key: "like_key",
      success: (res) => {
        console.log(res.data)
        let storage_string = res.data;
        let storage_arr = JSON.parse(storage_string);
        console.log(storage_arr);
    
        // console.log(storage_arr[2].ID);
        let index_to_delete;
        for (let i = 0; i < storage_arr.length; ++ i) {
          if (storage_arr[i].ID === ID_to_delete) {
            console.log(storage_arr[i]);
            index_to_delete = i;
          }
        }
        console.log(index_to_delete);
    
        storage_arr.splice(index_to_delete, 1);
        
        let new_storage_string = JSON.stringify(storage_arr);
        wx.setStorage({
          key: "like_key",
          data: new_storage_string
        })

        let number_of_my_likes = storage_arr.length;  
        
        this.setData({
          jokes_data: storage_arr,
          I_liked: number_of_my_likes + "/100"
        })
      },
    })
    
    wx.showToast({
      title: "已取消点赞",
    })
    
  },
  set_number_of_my_likes() {
    wx.getStorage({
      key: "like_key",
      success: (res) => {
        console.log(res.data)
        let storage_string = res.data;
        let storage_arr = JSON.parse(storage_string);
        console.log(storage_arr);

        let number_of_my_likes = storage_arr.length;        
        this.setData({
          I_liked: number_of_my_likes + "/100"
        })
      }
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