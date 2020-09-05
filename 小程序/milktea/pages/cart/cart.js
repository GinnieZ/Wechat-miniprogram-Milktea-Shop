// pages/cart/cart.js
var base = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plist: [],
    total: 0,
    his: ""  
  },
  // ///////test
  // test:function()
  // {
  //   if (base.cart.add({
  //     supplyno: 1,
  //     id: 1,
  //     name: "奶绿",
  //     size: "不加糖",
  //     price: 8,
  //     num: 2
  //   })) 
  //     this.setData({
  //       cartNum: base.cart.getNum()
  //     })
    
  //},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var l = base.cart.getList();
    for (var i = 0; i < l.length; i++) {
      // l[i].img = '/images/img' + l[i].id + '.png';
      l[i].img = '/images/id' + l[i].id + '.jpg';
      l[i].index = i;
    }
    this.setData({ plist: l });
    this.changeTotal();
    
    
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
    var l = base.cart.getList();
    for (var i = 0; i < l.length; i++) {
      // l[i].img = '/images/img' + l[i].id + '.png';
      l[i].img = '/images/id' + l[i].id + '.jpg';
      l[i].index = i;
    }
    this.setData({ plist: l });
    this.changeTotal();
  },
  // goBack: function () {
  //   var _this = this;
  //   wx.navigateTo({
  //     url: _this.data.his
  //   })
  // },
  // previewImg: function (e) {
  //   preview.show(e.currentTarget.dataset.name, e.currentTarget.dataset.brand, e.currentTarget.dataset.index)
  // },
  changeTotal: function () {
    var l = this.data.plist;
    var t = 0;
    for (var i = 0; i < l.length; i++) {
      if (!l[i].del) {//排除删除选项
        t += l[i].price * l[i].num;
      }
    }
    this.setData({ total: t });
  },
  changeNum: function (e) {
    var t = e.currentTarget.dataset.type;
    var index = e.currentTarget.dataset.index;
    var re = this.data.plist[index].num + parseInt(t);
    if (re < 100 && re > 0) {
      var key = "plist[" + index + "].num";
      var obj = {}; obj[key] = re;
      this.setData(obj);
      this.changeTotal();
      base.cart.num(this.data.plist[index].supplyno, obj[key]);
    }
  },
  del: function (e) {
    var index = e.currentTarget.dataset.index;
    var sno = this.data.plist[index].supplyno;
    var key1 = "plist[" + index + "].del";
    var obj = {};
    obj[key1] = true;

    this.setData(obj);

    this.changeTotal();
    base.cart.remove(sno);
  },

  clearCart: function () {
    var _this = this;
    if (this.data.total > 0) {
      wx.showModal({
        title: "确认清空所有商品？", confirmText: "清空", success: function (res) {
          if (res.confirm) {
            _this.setData({ plist: [], total: 0 });
            base.cart.clear();
          }
        }
      })
    }
  },
  goPay: function () {
    //   this.ing();
    if (this.data.plist.length > 0 && this.data.total > 0) {
      wx.navigateTo({
        url: '../pay/pay?from=cart'
      })
    } else {
      wx.showToast({
        title: '购物车无商品',
        image: "/icon/empty2.png"
      })
    }
  },

  p: {
    currentIndex: -1,
    eventOk: true,
    eventStartOk: true,
    aniOk: true,
    len: 0,//当前位置
    ani: wx.createAnimation(),
    // _ani: wx.createAnimation({
    //     duration: 200,
    //     timingFunction: 'ease-out'//
    // }),
    max: 80,
    size: 40
  },
  moveTo: function (index, x) {
    this.p.eventOk = false;//停止事件
    if (x == 0) {
      this.p.currentIndex = -1;
      if (this.p.len > 0 - this.p.max / 2) {
        if (this.p.len > 0) {
          this.p.ani.translateX(this.p.size).step({
            duration: 100,
            timingFunction: 'ease-out'
          });

        }
        this.p.ani.translateX(0 - this.p.size).step({
          duration: 200,
          timingFunction: 'ease'
        });
      }
    }
    if (x == 0 - this.p.max) {
      this.p.currentIndex = index;
      this.p.ani.translateX(x - this.p.size).step({
        duration: 200,
        timingFunction: 'ease'
      });
    }
    this.p.ani.translateX(x).step({
      duration: 200,
      timingFunction: 'ease-out'
    });
    var obj = {};
    var key = "plist[" + index + "].ani";
    obj[key] = this.p.ani.export();
    this.setData(obj);
  },
  ptouchsatrt: function (e) {

    var index = e.currentTarget.dataset.index;
    if (this.p.currentIndex >= 0) {
      this.moveTo(this.p.currentIndex, 0);
      return;
    }
    if (this.p.eventStartOk) {
      this.p.eventOk = true;
      this.p.len = 0;
      var pt = e.changedTouches[0];
      pt.aaaaaaa = 11111;
      this.p.x = pt.pageX;
      this.p.y = pt.pageY;
      console.log("start")
    }
  },
  ptouchend: function (e) {
    if (this.p.eventOk) {
      var pt = e.changedTouches[0];
      var len = pt.pageX - this.p.x;//预计目标位置
      var ht = pt.pageY - this.p.y;
      if (len != 0 && Math.abs(ht) / Math.abs(len) < 0.3) {//滑动倾斜度限制
        this.p.len = len;
        var index = e.currentTarget.dataset.index;
        if (len > 0 - this.p.max / 2) {
          this.moveTo(index, 0);
        } else {
          this.moveTo(index, 0 - this.p.max);
        }
      }
    }
    this.p.eventOk = false;
    this.p.eventStartOk = false;
    var _this = this;
    if (this.p.tm) {
      clearTimeout(this.p.tm);
    }
    this.p.tm = setTimeout(function () {
      _this.p.eventStartOk = true;
    }, 300);
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