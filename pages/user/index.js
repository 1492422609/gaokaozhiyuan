function t(t) {
    var e = "";
    switch (t) {
      case 0:
        e = "校园服务";
        break;

      case 1:
        e = "青春伴夕阳";
        break;

      case 2:
        e = "未来梦工程";
        break;

      case 3:
        e = "助残阳光行动";
        break;

      case 4:
        e = "社区公益";
        break;

      case 5:
        e = "文化宣传";
        break;

      case 6:
        e = "医疗保健";
        break;

      case 7:
        e = "应急救护";
        break;

      case 8:
        e = "地球卫士";
        break;

      case 9:
        e = "校院赛会";
        break;

      default:
        e = "志愿活动";
    }
    return e;
}

require("../../zong_js/common");

var e = require("../../zong_js/common"), a = require("../../zong_js/util"), i = getApp(), s = wx.getStorageSync("my_nick"), n = wx.getStorageSync("my_sex"), o = wx.getStorageSync("my_avatar");

Page({
  handleGetUserInfo(e) {
    const {
      userInfo
    } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
  },
  data:{
  userinfo:{}
},
onShow(){
  const userinfo=wx.getStorageSync("userinfo");
  this.setData({userinfo})
  this.onLoad(), console.log("加载头像");
  var e = this;
  wx.getUserInfo(function(t) {
      e.setData({
          userInfo: t
      });
  });
},
onload(){
  this.getMyCount();
}
})