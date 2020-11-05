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
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604506520395&di=eee54763c860dad2dbcde3a14f978fd6&imgtype=0&src=http%3A%2F%2Ffiles.nowre.com%2Farticles%2F2019%2F10%2FMWP22.jpeg"
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
        remaining_amount: "2",
        product_score: "33000000"
      },
      {
        photo: "https://img.pconline.com.cn/images/product/1193/1193687/29383059a71cb1b6.jpg",
        content: "小米手环4",
        remaining_amount: "17",
        product_score: "2400000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604506322768&di=c87356ea20a5800b6f82ca9ca87f3a3f&imgtype=0&src=http%3A%2F%2Fc1.mifile.cn%2Ff%2Fi%2F2014%2Fcn%2Fmitv40%2Fmitv_summary_header_1.jpg",
        content: "小米电视3s",
        remaining_amount: "9",
        product_score: "7000000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604506520395&di=eee54763c860dad2dbcde3a14f978fd6&imgtype=0&src=http%3A%2F%2Ffiles.nowre.com%2Farticles%2F2019%2F10%2FMWP22.jpeg",
        content: "AirPods Pro",
        remaining_amount: "6",
        product_score: "20000000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604504159569&di=19221e616859a9e45a937d6d5223e294&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fproduct%2F1295%2F1295848%2F2_sn8.jpg",
        content: "iMac",
        remaining_amount: "1",
        product_score: "160000000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604581615965&di=3eb6c0978f4feb981dc8affc12b5d49a&imgtype=0&src=http%3A%2F%2Fso.tedu.cn%2Fupload%2F20150619%2F20150619182349_641.jpg",
        content: "小米充电宝",
        remaining_amount: "27",
        product_score: "500000"
      },
      {
        photo: "https://pic3.zhimg.com/80/v2-eeca724cc0a639fdf0a92b3b74d5a509_qhd.jpg",
        content: "iPad",
        remaining_amount: "0",
        product_score: "25000000"
      },
      {
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604582100355&di=6e1758c7f8eef379ba015dcb335d6235&imgtype=0&src=http%3A%2F%2Fstore.storeimages.cdn-apple.com%2F8756%2Fas-images.apple.com%2Fis%2Fmac-pro-hero-cto%3Fwid%3D554%26amp%3Bhei%3D444%26amp%3Bfmt%3Djpeg%26amp%3Bqlt%3D80%26amp%3B.v%3D1572646185753",
        content: "Mac Pro",
        remaining_amount: "1",
        product_score: "480000000"
      },
      {
        photo: "https://gw.alicdn.com/bao/uploaded/i3/6000000005428/O1CN01SICPnz1py4TW51sTB_!!0-item_pic.jpg_220x10000Q75.jpg_.webp",
        content: "WH-1000XM4",
        remaining_amount: "3",
        product_score: "24000000"
      },
      {
        photo: "https://gw.alicdn.com/bao/upload/O1CN01YyM3Tf1NDzNjsnhTt_!!6000000001537-2-yinhe.png_170x10000.jpg_.webp",
        content: "OPPO watch",
        remaining_amount: "8",
        product_score: "15000000"
      },
      {
        photo: "https://gw.alicdn.com/bao/uploaded/i1/bao/upload/O1CN01PjQ1OP2803GxZ49HX_!!6000000007869-2-yinhe.png_240x10000.jpg_.webp",
        content: "D5600",
        remaining_amount: "2",
        product_score: "35000000"
      },
      {
        photo: "https://gw.alicdn.com/bao/upload/TB1hmmtQET1gK0jSZFrXXcNCXXa.jpg_240x10000Q75.jpg_.webp",
        content: "Galaxy Note20 Ultra",
        remaining_amount: "0",
        product_score: "90000000"
      },
      {
        photo: "https://gw.alicdn.com/bao/upload/TB1dj0LAhD1gK0jSZFsXXbldVXa.jpg_240x10000Q75.jpg_.webp",
        content: "Galaxy S20",
        remaining_amount: "3",
        product_score: "60000000"
      },
      {
        photo: "https://gw.alicdn.com/bao/uploaded/i1/bao/upload/O1CN01QNyvPx1hXUZ2RoWxX_!!6000000004287-2-yinhe.png_240x10000.jpg_.webp",
        content: "ThinkPad X1 Yoga",
        remaining_amount: "8",
        product_score: "110000000"
      },
      {
        photo: "https://gw.alicdn.com/bao/upload/O1CN01zUHZSl28rBDIc4bVQ_!!6000000007985-0-yinhe.jpg_240x10000Q75.jpg_.webp",
        content: "魅族17",
        remaining_amount: "0",
        product_score: "37000000"
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