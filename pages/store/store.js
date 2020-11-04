// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    count: '1',
    imgUrls: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604503662603&di=0c71a96d87c1baa1c5ec9f05c3519604&imgtype=0&src=http%3A%2F%2Fupload.ikanchai.com%2F2019%2F1025%2F1571972315870.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604504032053&di=556bf38681351e456cb7ed5ccb5e162c&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F2002%2F06%2F13198186_33_thumb.png",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2778805069,2039960456&fm=26&gp=0.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 8000,
    duration: 1000,
    integral: 0,
    product_data: [
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604503240113&di=ebd298799783c8e6fea92e9fe84f3e65&imgtype=0&src=http%3A%2F%2Fimg2.ctoutiao.com%2Fuploads%2F2019%2F09%2F12%2Ff493038e8d67b63615bd81f218a2f830.jpg",
        content: "iphone11",
        remaining_amount: "0",
        product_score: "60000000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604503978681&di=47e990791fee03e7840da92778bef88c&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fproduct%2F1093607%2F20189%2F14%2F15369099173839054_800.JPG",
        content: "Apple Watch Series 6",
        remaining_amount: "0",
        product_score: "32000000"
      },
      {
        photo: "https://img.pconline.com.cn/images/product/1193/1193687/29383059a71cb1b6.jpg",
        content: "小米手环4",
        remaining_amount: "0",
        product_score: "2300000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604506322768&di=c87356ea20a5800b6f82ca9ca87f3a3f&imgtype=0&src=http%3A%2F%2Fc1.mifile.cn%2Ff%2Fi%2F2014%2Fcn%2Fmitv40%2Fmitv_summary_header_1.jpg",
        content: "小米电视3s",
        remaining_amount: "0",
        product_score: "7000000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604506520395&di=eee54763c860dad2dbcde3a14f978fd6&imgtype=0&src=http%3A%2F%2Ffiles.nowre.com%2Farticles%2F2019%2F10%2FMWP22.jpeg",
        content: "AirPods Pro",
        remaining_amount: "0",
        product_score: "20000000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604504159569&di=19221e616859a9e45a937d6d5223e294&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fproduct%2F1295%2F1295848%2F2_sn8.jpg",
        content: "iMac",
        remaining_amount: "0",
        product_score: "150000000"
      }
    ]
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