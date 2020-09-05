// pages/user/user/logon/logon.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    pwd: "",
    pwd2:"",
    username:""
  },
  inputphone: function (e) {
    this.setData({
      phone: e.detail.value
    });
  },
  inputpwd: function (e) {
    this.setData({
      pwd: e.detail.value
    });
  },
  inputpwdagain: function (e) {
    this.setData({
      pwd2: e.detail.value
    });
  },

  submit:function(){
    if(this.data.pwd != this.data.pwd2){
      wx.showToast({
        title: '两次输入密码不一致，请检查',
        icon:"none"
      })
    }
    else{
      wx.request({
        url:'http://localhost:8080/logon',
        data: {phone:this.data.phone, pwd:this.data.pwd},
        success:(result)=>{
          if(result.data==""){
            // 清除本地数据
            wx.clearStorage({
            })
            wx.showToast({
              title: '注册成功',
              icon:"success"
            })
            setTimeout(function () {
              // login
              wx.navigateTo({
                url: '../../../login/login',
              })
            }, 1000)
            //  // 跳转到首页
            // setTimeout(function(){
            //   wx.reLaunch({
            //     url: '../../../index/index',
            //   })
            // },1000)
          }
          else{
            wx.showToast({
              title: result.data,
              icon:"none"
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('flash', "1")
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