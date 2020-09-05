// pages/milkteaDetail/milkteaDetail.js
var base = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    milktea: "",
    //设置中间变量，把onLoad中的获取到的标题函数传入到onReady中使用
    navigateTitle: "",
    price: 0,
    total: "", //选择内容的描述
    num: 1, //购买数量
    zero_buttons: [{
      id: 1,
      name: "0糖低卡糖￥1"
    }],
    zero: 0,

    straw_buttons: [{
      id: 1,
      name: "常规吸管"
    }, {
      id: 2,
      name: "纸吸管"
    }, {
      id: 3,
      name: "不使用吸管"
    }],
    straw: 1,

    sugar_buttons: [{
      id: 1,
      name: "标准糖"
    }, {
      id: 2,
      name: "半糖"
    }, {
      id: 3,
      name: "微糖"
    }, {
      id: 4,
      name: "无糖"
    }],
    sugar: 1,

    ice_buttons: [{
      id: 1,
      name: "正常"
    }, {
      id: 2,
      name: "少冰"
    }, {
      id: 3,
      name: "少少冰"
    }, {
      id: 4,
      name: "去冰"
    }],
    ice: 1,

    cheese_buttons: [{
      id: 1,
      name: "芝士分装￥1"
    }],
    cheese: 0,

    double_buttons: [{
      id: 1,
      name: "双倍果肉￥9"
    }],
    double: 0,
  },

  generateTotal: function (e) {
    var description = ""
    if (this.data.zero != 0) {
      description += "0糖低卡糖,"
    }
    description += this.data.straw_buttons[this.data.straw - 1].name
    description += ","
    description += this.data.sugar_buttons[this.data.sugar - 1].name
    description += ","
    description += this.data.ice_buttons[this.data.ice - 1].name
    if (this.data.cheese != 0) {
      description += ",芝士分装"
    }
    if (this.data.double != 0) {
      description += ",双倍果肉"
    }
    this.setData({
      total: description
    })
  },

  minusCount: function (e) {
    if (this.data.num > 1) {
      // 当数量为1时不可减少
      // 计算单价
      var singlePrice = this.data.price / this.data.num
      console.log(singlePrice)
      var newPrice = this.data.price - singlePrice
      var newNum = this.data.num - 1
      this.setData({
        num: newNum,
        price: newPrice
      })
    }
  },

  plusCount: function (e) {
    // 计算单价
    var singlePrice = Math.round(this.data.price / this.data.num)
    console.log(singlePrice)
    var newPrice = Number(this.data.price) + Number(singlePrice)
    console.log(newPrice)
    var newNum = this.data.num + 1
    this.setData({
      num: newNum,
      price: newPrice
    })
  },

  zeroButtonTap: function (e) {
    console.log(e)
    var id
    // 当前价格
    var oldPrice = Number(this.data.price)
    if (this.data.zero == 0) {
      id = 1
      oldPrice += 1 * Number(this.data.num)
    } else {
      id = 0
      oldPrice -= 1 * Number(this.data.num)
    }
    console.log(id)
    this.data.zero_buttons[0].checked = !this.data.zero_buttons[0].checked
    this.setData({
      zero_buttons: this.data.zero_buttons,
      zero: id,
      price: oldPrice
    })
    this.generateTotal()
  },

  strawButtonTap: function (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.straw_buttons.length; i++) {
      if (this.data.straw_buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.straw_buttons[i].checked = true
      } else {
        //其他的位置为false
        this.data.straw_buttons[i].checked = false
      }
    }
    this.setData({
      straw_buttons: this.data.straw_buttons,
      straw: id
    })
    this.generateTotal()
  },

  sugarButtonTap: function (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.sugar_buttons.length; i++) {
      if (this.data.sugar_buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.sugar_buttons[i].checked = true
      } else {
        //其他的位置为false
        this.data.sugar_buttons[i].checked = false
      }
    }
    this.setData({
      sugar_buttons: this.data.sugar_buttons,
      sugar: id
    })
    this.generateTotal()
  },

  iceButtonTap: function (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.ice_buttons.length; i++) {
      if (this.data.ice_buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.ice_buttons[i].checked = true
      } else {
        //其他的位置为false
        this.data.ice_buttons[i].checked = false
      }
    }
    this.setData({
      ice_buttons: this.data.ice_buttons,
      ice: id
    })
    this.generateTotal()
  },

  cheeseButtonTap: function (e) {
    console.log(e)
    var id
    // 当前价格
    var oldPrice = Number(this.data.price)
    if (this.data.cheese == 0) {
      id = 1
      oldPrice += 1 * Number(this.data.num)
    } else {
      id = 0
      oldPrice -= 1 * Number(this.data.num)
    }
    console.log(id)
    this.data.cheese_buttons[0].checked = !this.data.cheese_buttons[0].checked
    this.setData({
      cheese_buttons: this.data.cheese_buttons,
      cheese: id,
      price: oldPrice
    })
    this.generateTotal()
  },

  doubleButtonTap: function (e) {
    console.log(e)
    var id
    // 当前价格
    var oldPrice = Number(this.data.price)
    if (this.data.double == 0) {
      id = 1
      oldPrice += 9 * Number(this.data.num)
    } else {
      id = 0
      oldPrice -= 9 * Number(this.data.num)
    }
    console.log(id)
    this.data.double_buttons[0].checked = !this.data.double_buttons[0].checked
    this.setData({
      double_buttons: this.data.double_buttons,
      double: id,
      price: oldPrice
    })
    this.generateTotal()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = JSON.parse(options.milktea).name
    this.setData({
      milktea: JSON.parse(options.milktea)
    })
    this.data.navigateTitle = name
    this.data.straw_buttons[0].checked = true
    this.data.sugar_buttons[0].checked = true
    this.data.ice_buttons[0].checked = true
    this.setData({
      price: this.data.milktea.price,
      straw_buttons: this.data.straw_buttons,
      sugar_buttons: this.data.sugar_buttons,
      ice_buttons: this.data.ice_buttons,
      total: "常规吸管,标准糖,正常冰"
    })
  },

  confirmButtonTap: function (e) {
    var that = this
    var singlePrice = Number(this.data.price / this.data.num)
    base.cart.cartno = Number(base.cart.cartno) + 1
    console.log("supplyno in confirmButtonTap" + base.cart.cartno)
    if (base.cart.add({
        supplyno: base.cart.cartno,
        id: this.data.milktea.id,
        name: this.data.milktea.name,
        size: this.data.total,
        price: singlePrice,
        num: this.data.num
      })) {
      this.setData({
        cartNum: base.cart.getNum()
      })
      base.modal({
        title: '加入成功！',
        content: "跳转到购物车或留在当前页",
        showCancel: true,
        cancelText: "留在此页",
        confirmText: "去购物车",
        success: function (res) {
          if (res.confirm) {
            that.goc();
          }
        }
      })
    }
  },
  goc: function () {
    var _this = this;
    // base.cart.ref = "../cakeDetail/cakeDetail?pname=" + _this.data.name + "&brand=" + _this.data.brand;
    wx.switchTab({
        url: "../cart/cart"
    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
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