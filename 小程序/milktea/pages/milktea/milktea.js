const RIGHT_BAR_HEIGHT = 20; // 右侧每一类的 bar 的高度（固定）
const RIGHT_ITEM_HEIGHT = 60; // 右侧每个子类的高度（固定）
const LEFT_ITEM_HEIGHT = 50 // 左侧每个类的高度（固定）
var base = getApp();
Page({
  data: {
    // constants: [], // 数据
    toView: null, // 左 => 右联动 右scroll-into-view 所需的id
    currentLeftSelect: null, // 当前左侧选择的
    eachRightItemToTop: [], // 右侧每类数据到顶部的距离（用来与 右 => 左 联动时监听右侧滚动到顶部的距离比较）
    leftToTop: 0,
    milktea: []
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
  getMT: function (options) {
    var that = this
    wx.request({
      // 获取每种类型对应的奶茶产品
      url: 'http://localhost:8080/selectAllByType',
      success: (result) => {
        var temp_category = result.data
        var count_type = base.globalData.count_type
        // console.log(count_type)
        for (var i = 0; i < count_type; i++) {
          // console.log(temp_category[i])
          var the_index = (String)((Number)(i))
          var tmp = "milktea[" + the_index + "]"
          var tmp1 = tmp + ".id"
          var tmp2 = tmp + ".name"
          var tmp3 = tmp + ".category"
          that.setData({
            [tmp1]: "id" + i,
            [tmp2]: temp_category[i][0].type_name,
            [tmp3]: temp_category[i],
          })
        }
      }
    })
  },

  onLoad: function (options) {
    for (var i = 0; i < base.globalData.milktea.length; i++) {
      console.log(base.globalData.milktea[i])
      var the_index = (String)((Number)(i))
      var tmp = "milktea[" + the_index + "]"
      var tmp1 = tmp + ".id"
      var tmp2 = tmp + ".name"
      var tmp3 = tmp + ".category"
      this.setData({
        [tmp1]: base.globalData.milktea[i].id,
        [tmp2]: base.globalData.milktea[i].name,
        [tmp3]: base.globalData.milktea[i].category
      })
    }
    this.setData({
      currentLeftSelect: "id1",
      eachRightItemToTop: this.getEachRightItemToTop()
    })
  },
  getEachRightItemToTop: function () { // 获取每个右侧的 bar 到顶部的距离，用来做后面的计算。
    var obj = {};
    var totop = 0;
    obj["id1"] = totop // 右侧第一类肯定是到顶部的距离为 0
    for (let i = 1; i < (base.globalData.milktea.length + 1); i++) { // 循环来计算每个子类到顶部的高度
      totop += (RIGHT_BAR_HEIGHT + base.globalData.milktea[i - 1].category.length * RIGHT_ITEM_HEIGHT)
      obj[base.globalData.milktea[i] ? base.globalData.milktea[i].id : 'last'] = totop // 这个的目的是 例如有两类，最后需要 0-1 1-2 2-3 的数据，所以需要一个不存在的 'last' 项，此项即为第一类加上第二类的高度。
    }
    return obj
  },
  rightScroll: function (e) { // 监听右侧的滚动事件与 eachRightItemToTop 的循环作对比 从而判断当前可视区域为第几类，从而渲染左侧的对应类。
    for (let i = 0; i < base.globalData.count_type; i++) {
      let left = this.data.eachRightItemToTop[base.globalData.milktea[i].id]
      let right = this.data.eachRightItemToTop[base.globalData.milktea[i + 1] ? base.globalData.milktea[i + 1].id : 'last']

      if (e.detail.scrollTop < right && e.detail.scrollTop >= left) {
        this.setData({
          currentLeftSelect: base.globalData.milktea[i].id,
          leftToTop: LEFT_ITEM_HEIGHT * i
        })
      }
    }
  },
  jumpTo: function (e) { // 左侧类的点击事件，点击时，右侧会滚动到对应分类
    this.setData({
      toView: e.target.id || e.target.dataset.id,
      currentLeftSelect: e.target.id || e.target.dataset.id
    })
  }
})