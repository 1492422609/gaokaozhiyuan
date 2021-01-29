
Page({
  data: {
    remind: "加载中",
    angle: 0,
    userInfo: {}
},
onLoad: function() {
//   wx.request({
//     url:'http://wechaiapp.shangweishuju.com/Zhike/Users/GetOpenId',//随便拿个网址演示
//     method:'post',
//     success(res){
//       console.log(res);
//     }
// })

var that = this
wx.login({
  success(res) {
    console.log(res.code)
    if (res.code) {
      var _that = that
      //发起网络请求
      wx.request({
        url: 'https://api.weixin.qq.com/sns/jscode2session',
        data: {
          js_code: res.code,
          appid: 'wxe895bb1a185a44d0',
          grant_type: 'authorization_code',
          secret: '262c6a78a2787c00875f66e26a6f8fd3'
        },
        success(res) {
          console.log(res.data.openid)
          //将唯一标识保存在本地
          _that.data.userid = res.data.openid
        }
      })

    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})


// wx.request({
//   url: 'http://wechaiapp.shangweishuju.com/Zhike/Users/GetOpenId', //仅为示例，并非真实的接口地址
//   method:'post',
//   header: {
//     'content-type': 'application/json' // 默认值
//   },
//   success (res) {
//     console.log(res.data)
//   }
// })



},
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