Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendedMilktea:"",
    // 单击后需要跳转至详情页面的奶茶id
    selectedMilkteaId:""
  },

  // 为你推荐
  recommend: function () {
    wx.request({
      url: 'http://localhost:8080/recommend',
      success: (result) => {
        console.log(result)
        this.setData({
          recommendedMilktea: result.data
        })
      }
    })
  },

  showDetail: function (e) {
    var selectedMilkteaId = e.currentTarget.dataset.id
    wx.request({
      url: 'http://localhost:8080/selectOneMilktea',
      data: {
        id: selectedMilkteaId
      },
      success: (result) => {
        // 跳转到奶茶详情页面
        wx.navigateTo({
          url: '../milkteaDetail/milkteaDetail?milktea=' + JSON.stringify(result.data),
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.recommend()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})