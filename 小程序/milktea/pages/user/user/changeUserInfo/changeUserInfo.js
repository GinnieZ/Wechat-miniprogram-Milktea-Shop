// pages/user/user/changeUserInfo/changeUserInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      changeusername:"",
      changegender:"",
      changebirthday:"",
      gender:"",
      username:"",
      phone:"",
      birthday:" ",
      manchecked:0,
      womanchecked:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAll();
    // if(this.data.gender=="男"){
    //   this.setData({
    //     manchecked:1,
    //     womanchecked:0
    //   })
    // }
    // if(this.data.gender=="女"){
    //   this.setData({
    //     womanchecked:1,
    //     manchecked:0
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  updateRadio:function(e){
   if(e.detail.value=="man"){
     this.setData({
       changegender:"男"
      })
    }
    else{
      this.setData({
        changegender:"女"
       }) 
    }
 },
 changeInfo:function(e){
    this.setData({
      changeusername: e.detail.value.changeusername,
      changebirthday:e.detail.value.changebirthday
    })
    wx.request({
      url: 'http://localhost:8080/changeUser',
      data: {username:this.data.changeusername,gender:this.data.changegender,birthday:this.data.changebirthday,phone:this.data.phone},
      success:(result)=>{
        if(result.data=="修改成功"){
          //重新获取信息
          this.getAll();
          wx.showToast({
            title: '修改成功',
            icon:"success"
          })
          setTimeout(function () {
            // login
            wx.switchTab({
              url: '../../../user/user',
            })
          }, 1000)
        }
        else{
          wx.showToast({
          title: result.data,
          icon:"none"
         })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  //重新获取信息
    // this.getAll();
    // if(this.data.gender=="男"){
    //   this.setData({
    //     manchecked:1,
    //     womanchecked:0
    //   })
    // }
    // if(this.data.gender=="女"){
    //   this.setData({
    //     womanchecked:1,
    //     manchecked:0
    //   })
    // }
  },

  getAll:function(){
    this.setData({
      phone:wx.getStorageSync('phone')
    })
    console.log("修改信息中的getAll()")
    wx.request({
      url: 'http://localhost:8080/findByPhone',
      data: {phone:this.data.phone},
      success:(result)=>{
        console.log(result)
        wx.setStorageSync('gender', result.data.gender)
        wx.setStorageSync('username', result.data.username)
        wx.setStorageSync('birthday', result.data.birthday)

        this.setData({
          username:wx.getStorageSync('username'),
          gender:wx.getStorageSync('gender'),
          birthday:wx.getStorageSync('birthday'),
        })
        console.log("222222222222")
        console.log(this.data.gender)
        if(this.data.gender=="男"){
          this.setData({
            manchecked:1
          })
        }
        if(this.data.gender=="女"){
          this.setData({
            womanchecked:1
          })
        }
      }
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