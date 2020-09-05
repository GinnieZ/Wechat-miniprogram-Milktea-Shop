// pages/user/user/changeSecret/changeSecret.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldSecret:"",
    newSecret:"",
    newSecret2:"",
    phone:""
  },
  changeSecret:function(e){
    this.setData({
      oldSecret:e.detail.value.oldSecret,
      newSecret:e.detail.value.newSecret,
      newSecret2:e.detail.value.newSecret2,
      phone:wx.getStorageSync('phone')
    })
    if(this.data.newSecret != this.data.newSecret2){
      wx.showToast({
        title: '两次输入密码不一致，请检查',
        icon:"none"
      })
    }
    else if(this.data.oldSecret == this.data.newSecret){
      wx.showToast({
        title: '新密码不得与原始密码一致',
        icon:"none"
      })
    }
    else{
      wx.request({
        url: 'http://localhost:8080/findByPhoneAndPwd',
        data: {phone:this.data.phone, pwd:this.data.oldSecret},
        success:(result)=>{
          if(result.data==""){
            // 原始密码正确，已登录。开始修改密码
            wx.request({
              url: 'http://localhost:8080/changePwd',
              data: {phone:this.data.phone,pwd:this.data.newSecret},
              success:(result)=>{
                if(result.data==""){
                  wx.showToast({
                    title: '修改成功',
                    icon:"success"
                  })
                  //退出登录
                  wx.clearStorage({
                  })
                  setTimeout(function(){
                     wx.navigateTo({
                       url:"/pages/login/login"
                    })
                  },1000)
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