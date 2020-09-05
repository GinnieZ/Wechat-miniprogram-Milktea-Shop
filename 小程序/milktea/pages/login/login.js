// pages/login/login.js
var base=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    pwd: "",
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
  submit:function(){
    wx.request({
      url:'http://localhost:8080/login',
      data: {phone:this.data.phone, pwd:this.data.pwd},
      success:(result)=>{
        if(result.data!=""){
          base.globalData.isIn=1;
          wx.showToast({
            title: '登录成功',
            icon:"success"
          })
          wx.clearStorage({
          })
          wx.setStorageSync('phone', result.data)
          //发出请求
          this.getAll();
          setTimeout(function () {
            // login
            wx.navigateTo({
              url: '../user/user/changeUserInfo/changeUserInfo',
            })
          }, 1000)
          // // 跳转到显示的页面
          // setTimeout(function(){
          //   wx.switchTab({
          //     url: '../user/user',
          //   })
          // },1000)
        }
        else{
          wx.showToast({
            title: '登录失败',
            icon:"none"
          })
        }
      }
    })
  },

  getAll:function(){
    wx.request({
      url: 'http://localhost:8080/findByPhone',
      data: {phone:this.data.phone},
      success:(result)=>{
        console.log(result)
        var levelNumber = result.data.level;
        var levelInfo = "";
        if(levelNumber == "5"){
          levelInfo="普通会员"
        }
        if(levelNumber == "4"){
          levelInfo="铜牌会员"
        }
        if(levelNumber == "3"){
          levelInfo="银牌会员"
        }
        if(levelNumber == "2"){
          levelInfo="金牌会员"
        }
        if(levelNumber == "1"){
          levelInfo="钻石会员"
        }
        wx.setStorageSync('gender', result.data.gender)
        wx.setStorageSync('username', result.data.username)
        wx.setStorageSync('birthday', result.data.birthday)
        wx.setStorageSync('phone', result.data.phone)
        wx.setStorageSync('level', levelInfo)
      }
    })
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