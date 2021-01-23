//app.js
App({
  onLaunch: function() {
    wx.getSystemInfo({
        success: function(e) {
            var t = e.windowWidth / 375, n = e.windowHeight / 603;
            wx.setStorageSync("kScreenW", t), wx.setStorageSync("kScreenH", n);
        }
    }), wx.checkSession({
        success: function() {},
        fail: function() {
            wx.login();
        }
    });
},
onShow: function() {},
getUserInfo: function(e) {
  var t = this;
  this.globalData.userInfo ? "function" == typeof e && e(this.globalData.userInfo) : wx.login({
      success: function() {
          wx.getUserInfo({
              success: function(n) {
                  t.globalData.userInfo = n.userInfo, "function" == typeof e && e(t.globalData.userInfo);
              }
          });
      }
  });
},
globalData: {
  userInfo: null,
  count: 0
},

})
