
Page({
  data: {
    remind: "加载中",
    angle: 0,
    userInfo: {}
},
onLoad: function() {},
onGotUserInfo(e){
    console.log(e)
    const {
        userInfo
      } = e.detail;
      wx.setStorageSync("userinfo", userInfo);
      wx.switchTab({
        url: '/pages/index/index',
      })
},

onReady: function() {
  var e = this;
  setTimeout(function() {
      e.setData({
          remind: ""
      });
  }, 1e3), wx.onAccelerometerChange(function(o) {
      var n = -(30 * o.x).toFixed(1);
      n > 14 ? n = 14 : n < -14 && (n = -14), e.data.angle !== n && e.setData({
          angle: n
      });
  });
},
// onShow(){
//     const userinfo=wx.getStorageSync("userInfo");
//     this.setData({userInfo})
//   }
   
})