// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderDetail:"",
    imgList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.orderDetail))
    this.setData({
      orderDetail: JSON.parse(options.orderDetail)
    })
    var tmp = this.data.orderDetail;
    //console.log(tmp[i].orderTime);  //2019-01-21T06:25:50.000Z
    var d = new Date(tmp.orderTime);
    //console.log(d);   //Sun Jan 20 2019 16:43:42 GMT+0800
    //console.log(d.getTime());  //这个全输入时间戳
    var y = d.getFullYear();
    var mon = d.getMonth() + 1;

    var day = d.getDate();
    var h = d.getHours();//12
    var m = d.getMinutes(); //12
    var s = d.getMinutes();
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    tmp.orderTime = y + '/' + mon + '/' + day + ' ' + h + ':' + m + ':' + s
    //for (var i = 0; i < tmp.length; i++) {
      var img=[];
      for (var j = 0; j < tmp.drinkList.length; j++) {
        tmp.drinkList[j].img = '/images/id' + tmp.drinkList[j].drinkId + '.jpg';
      }
      
      //tmp[i].drinkList = img;
    //} 
    this.setData({
      orderDetail: tmp
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