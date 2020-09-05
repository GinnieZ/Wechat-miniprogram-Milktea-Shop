// pages/user/user.js
var base = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    pwd:"",
    phone:"",
    level:"",
    gender:"",
    birthday:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  clearInfo:function(){
    wx.clearStorage({
    })
    base.globalData.isIn = 0;
    wx.showToast({
      title: '成功退出',
      icon:"success"
    })
    setTimeout(function(){
      wx.navigateTo({
        url:"/pages/login/login"
      })
    },1000)
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
    console.log("onshow")
    this.setData({
      username:  wx.getStorageSync('username'),
      phone: wx.getStorageSync('phone'),
      level: wx.getStorageSync('level'),
      gender:wx.getStorageSync('gender'),
      birthday: wx.getStorageSync('birthday')
    })
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