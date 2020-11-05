const jokes_data = require("../../public_files/jokes");
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
    // console.log(e)
    // let now_index = e.currentTarget.dataset.index;
    // let a = this.data.jokes_data;
    // a[now_index].show_tips = !a[now_index].show_tips;
    // console.log(this.data)
    // this.setData({
    //   jokes_data: a
    // })

    console.log(e)
    let now_index = e.currentTarget.dataset.index;
    // let now_jokes_data_arr = this.data.jokes_data;
    let a = this.data.jokes_data;
    a[now_index].show_tips = !a[now_index].show_tips;
    this.setData({
      jokes_data: a
    })
    wx.getStorage({
      key: "like_key",
      success: (res) => {
        console.log(res.data)
        let storage_string = res.data;
        let storage_arr = JSON.parse(storage_string);
        console.log(storage_arr);
    
        console.log(a[now_index].show_liked)
        
        for (let i = 0; i < storage_arr.length; ++ i) {
          if (storage_arr[i].id === a[now_index].id) {
            a[now_index].show_liked = !a[now_index].show_liked;
            // a[now_index].show_liked = true;
          } 
          // else {
          //   a[now_index].show_liked = false;
          // }
        }
        console.log(a[now_index].show_liked)
        console.log(a)
        console.log(this.data)
        this.setData({
          jokes_data: a
        })
        console.log(this.data.jokes_data)
      }
    })

    wx.getStorage({
      key: "collect_key",
      success: (res) => {
        console.log(res.data)
        let storage_string = res.data;
        let storage_arr = JSON.parse(storage_string);
        console.log(storage_arr);
    
        console.log(a[now_index].show_collected)
        
        for (let i = 0; i < storage_arr.length; ++ i) {
          if (storage_arr[i].id === a[now_index].id) {
            a[now_index].show_collected = !a[now_index].show_collected;
            // a[now_index].show_collected = true;
          } 
          // else {
          //   a[now_index].show_collected = false;
          // }
        }
        console.log(a[now_index].show_collected)
        console.log(a)
        console.log(this.data)
        this.setData({
          jokes_data: a
        })
        console.log(this.data.jokes_data)
      }
    })
  },
  set_collect: function(e) {
    console.log(e);
    let now_index = e.currentTarget.dataset.index;

    wx.getStorage({
      key: "collect_key",
      success: (res) => {
        
        let a = this.data.jokes_data;
        a[now_index].show_collected = true;

        console.log(this.data)
        this.setData({
          jokes_data: a
        })

        
        console.log(res.data)
        let storage_string = res.data;
        
        let storage_arr = JSON.parse(storage_string);
        console.log(storage_arr);

        let now_joke_string = JSON.stringify(this.data.jokes_data[now_index]);
        console.log(now_joke_string)

        for (let i = 0; i < storage_arr.length; ++ i) {
          if (storage_arr[i].id !== a[now_index].id) {
            let storage_arr = JSON.parse(storage_string);
            storage_arr.push(this.data.jokes_data[now_index]);
            let new_storage_string = JSON.stringify(storage_arr);
            console.log(new_storage_string);
            
            wx.setStorage({
              key: "collect_key",
              data: new_storage_string
            })
  
            wx.showToast({
              title: "收藏成功",
            })
          } else {
            wx.showToast({
              title: "已收藏",
            })
          } 
        }
      },
      fail: (res) => {

        let a = this.data.jokes_data;
        a[now_index].show_collected = true;

        console.log(this.data)
        this.setData({
          jokes_data: a
        })


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

        wx.showToast({
          title: "收藏成功",
        })
      },
    })
  },
  set_like: function(e) {
    console.log(e);
    let now_index = e.currentTarget.dataset.index;

    wx.getStorage({
      key: "like_key",
      success: (res) => {
        
        let a = this.data.jokes_data;
        a[now_index].show_liked = true;

        console.log(this.data)
        this.setData({
          jokes_data: a
        })

        
        console.log(res.data)
        let storage_string = res.data;
        
        let storage_arr = JSON.parse(storage_string);
        console.log(storage_arr);

        let now_joke_string = JSON.stringify(this.data.jokes_data[now_index]);
        console.log(now_joke_string)

        for (let i = 0; i < storage_arr.length; ++ i) {
          if (storage_arr[i].id !== a[now_index].id) {
            let storage_arr = JSON.parse(storage_string);
            storage_arr.push(this.data.jokes_data[now_index]);
            let new_storage_string = JSON.stringify(storage_arr);
            console.log(new_storage_string);
            
            wx.setStorage({
              key: "like_key",
              data: new_storage_string
            })
  
            wx.showToast({
              title: "点赞成功",
            })
          } else {
            wx.showToast({
              title: "已点赞",
            })
          } 
        }
      },
      fail: (res) => {

        let a = this.data.jokes_data;
        a[now_index].show_liked = true;

        console.log(this.data)
        this.setData({
          jokes_data: a
        })


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

        wx.showToast({
          title: "点赞成功",
        })
      },
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