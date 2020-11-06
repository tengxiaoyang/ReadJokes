const jokes = require("/../../public_files/jokes.js");
console.log(jokes);
let display_quantity = 10;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokes_data: [],
    // jokes_data: [
    //   {
    //     name: "小明", 
    //     content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
    //     photo: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
    //     release_time: "发布于 20/10/28 18:09",
    //     id: 1
    //   },
    //   {
    //     name: "小李", 
    //     content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
    //     photo: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
    //     release_time: "发布于 20/10/28 18:03",
    //     id: 2
    //   },
    //   {
    //     name: "小张", 
    //     content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317151485&di=d72fbce25c21f3533755b25455b9dc0c&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201412%2F27%2F20141227150432_FeS8P.jpeg",
    //     release_time: "发布于 20/10/28 18:09",
    //     id: 3
    //   },
    //   {
    //     name: "小王", 
    //     content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317151483&di=374ba1907262b36f423f443a7d802f13&imgtype=0&src=http%3A%2F%2Fcdn2.image.apk.gfan.com%2Fasdf%2FPImages%2F2014%2F3%2F17%2F773505_27da04af2-c91a-457d-b113-8ab8db22e3a3.jpg",
    //     release_time: "发布于 20/10/28 18:03",
    //     id: 4
    //   },
    //   {
    //     name: "小明", 
    //     content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317151483&di=674fca0cd4bb42087da81985824f531c&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201405%2F05%2F20140505195510_TmdGm.thumb.700_0.jpeg",
    //     release_time: "发布于 20/10/28 18:09",
    //     id: 5
    //   },
      
    //   {
    //     name: "小明", 
    //     content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317151482&di=84136c965ca8af025471a2137dd27850&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F26%2F20151026212004_wxaBz.jpeg",
    //     release_time: "发布于 20/10/28 18:09",
    //     id: 6
    //   },
    //   {
    //     name: "小李", 
    //     content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317151478&di=bfd0b1cd2acb4dd010cede5012892133&imgtype=0&src=http%3A%2F%2Fcdn2.image.apk.gfan.com%2Fasdf%2FPImages%2F2013%2F3%2F16%2F516923_215aeac3a-04fb-4048-bc0a-16a437cd79fb.jpg",
    //     release_time: "发布于 20/10/28 18:03",
    //     id: 7
    //   },
    //   {
    //     name: "小明", 
    //     content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317151475&di=9ae7e461e1bfc0d873141af12a4b9a35&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h964%2F20180212%2Fd51b-fyrpeic9895229.jpg",
    //     release_time: "发布于 20/10/28 18:09",
    //     id: 8
    //   },
    //   {
    //     name: "小李", 
    //     content: "呵呵呵好好好或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317226784&di=b40edaab4c77ba4bfb20be0ff2ccb46a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170901%2Fa8cdd20f3be148fbb4c103bd205c1b57.jpeg",
    //     release_time: "发布于 20/10/28 18:03",
    //     id: 9
    //   },
    //   {
    //     name: "小明", 
    //     content: "哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
    //     icon: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
    //     photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604317226782&di=321e8dde8d1e8c6b16a4b9ae93480f1e&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201805%2F31%2F101122kyla34l99ssivlzl.jpg",
    //     release_time: "发布于 20/10/28 18:09",
    //     id: 10
    //   }
    // ],
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
    // console.log(this.jokes_data)

    
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
          if (storage_string.indexOf(JSON.stringify(a[now_index])) === -1) {
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
          if (storage_string.indexOf(JSON.stringify(a[now_index])) === -1) {
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

  show_liked: function(e) {
    return true
  },
  
  scroll_to_lower: function(e) {
    wx.showLoading({
      title: "加载中",
    })
    
    setTimeout(function () {
      wx.hideLoading()
    }, 500)

    // display_quantity = display_quantity + 5;
    display_quantity += 10;
    console.log(display_quantity)
    this.setData({
      jokes_data: jokes.slice(0, display_quantity)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      jokes_data: jokes.slice(0, display_quantity)
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
    // this.setData({
    //   jokes_data: jokes
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // this.setData({
    //   jokes_data: []
    // })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // this.setData({
    //   jokes_data: []
    // })
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