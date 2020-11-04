// pages/search/search.js
const jokes = require("/../../public_files/jokes.js");
console.log(jokes);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    
    jokes_data: [],
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        console.log(this)
        console.log(jokes[2].content)
        let new_jokes_data = [];
        if (value.length === 0) {
          this.setData({
            jokes_data: []
          })
        } else {
          for (let i = 0; i < jokes.length; ++ i) {
            if (jokes[i].content.indexOf(value) !== -1) {            
              new_jokes_data.push(jokes[i]);
              this.setData({
                jokes_data: new_jokes_data
              })
            }
          }
        }
        
        resolve(
          // [{text: '搜索结果1', value: 1}, {text: '搜索结果2', value: 2}],
        );

      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  clear_searchbar: function () {
    console.log('clear_searchbar')    
    this.setData({
      jokes_data: []
    })
  },
  cancel_searchbar: function () {
    console.log('cancel_searchbar')    
    this.setData({
      jokes_data: []
    })
  },
  
  set_tips: function(e) {
    console.log(e)
    let now_index = e.currentTarget.dataset.index;
    let a = this.data.jokes_data;
    a[now_index].show_tips = !a[now_index].show_tips;
    console.log(this.data)
    this.setData({
      jokes_data: a
    })
  },
  set_collect: function(e) {
    console.log(e);
    let now_index = e.currentTarget.dataset.index;

    wx.getStorage({
      key: "collect_key",
      success: (res) => {
        console.log(res.data)
        let storage_string = res.data;
        let now_joke_string = JSON.stringify(this.data.jokes_data[now_index]);
        console.log(now_joke_string)
        if (storage_string.indexOf(now_joke_string) === -1) {
          let storage_arr = JSON.parse(storage_string);
          storage_arr.push(this.data.jokes_data[now_index]);
          let new_storage_string = JSON.stringify(storage_arr);
          console.log(new_storage_string);
          
          wx.setStorage({
            key: "collect_key",
            data: new_storage_string
          })
        }
      },
      fail: (res) => {
        console.log(res.data)
        console.log(res)
        let storage_arr = [];
        
        console.log(this)
        storage_arr.push(this.data.jokes_data[now_index]);
        let new_storage_string = JSON.stringify(storage_arr);
        console.log(new_storage_string);
        
        wx.setStorage({
          key: "collect_key",
          data: new_storage_string
        })
      },
    })
    
    wx.showToast({
      title: "已收藏",
    })
  },
  set_like: function(e) {
    console.log(e);
    let now_index = e.currentTarget.dataset.index;

    wx.getStorage({
      key: "like_key",
      success: (res) => {
        console.log(res.data)
        let storage_string = res.data;
        let now_joke_string = JSON.stringify(this.data.jokes_data[now_index]);
        console.log(now_joke_string)
        if (storage_string.indexOf(now_joke_string) === -1) {
          let storage_arr = JSON.parse(storage_string);
          storage_arr.push(this.data.jokes_data[now_index]);
          let new_storage_string = JSON.stringify(storage_arr);
          console.log(new_storage_string);
          
          wx.setStorage({
            key: "like_key",
            data: new_storage_string
          })
        }
      },
      fail: (res) => {
        console.log(res.data)
        console.log(res)
        let storage_arr = [];
        
        console.log(this)
        storage_arr.push(this.data.jokes_data[now_index]);
        let new_storage_string = JSON.stringify(storage_arr);
        console.log(new_storage_string);
        
        wx.setStorage({
          key: "like_key",
          data: new_storage_string
        })
      },
    })
    
    wx.showToast({
      title: "已点赞",
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