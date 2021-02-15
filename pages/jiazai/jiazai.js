Page({
  data: {
    remind: "加载中",
    angle: 0,
    userInfo: {},
    openid: ""
  },
  onLoad: function () {
    var that = this
    wx.login({
      success(res) {
        console.log(res.code)
        if (res.code) {
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
              that.setData({
                openid: res.data.openid
              })
              wx.setStorageSync('openid', res.data.openid)
            }
          })

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    
  },
  onGotUserInfo(e) {
    var that = this
    console.log(that.data.openid)

    const {
      userInfo
    } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
    that.setData({
      userInfo: e.detail.userInfo
    })
    wx.request({
      url: 'http://wechaiapp.shangweishuju.com/Zhike/Users/GetEntity',
      data: {
        OpenID: that.data.openid,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      method: 'POST',
      success: function (res) {
        if (res.data.Code == 2000) {
          console.log(res)
          console.log(res.data.Data.Phone)
          wx.setStorageSync("Phone", res.data.Data.Phone);
          wx.switchTab({
            url: '/pages/index/index',
          })
        } else {
          wx.switchTab({
            url: '/pages/index/index',
          })
        }

      }
    })


  },

  onReady: function () {
    var e = this;
    setTimeout(function () {
      e.setData({
        remind: ""
      });
    }, 1e3), wx.onAccelerometerChange(function (o) {
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