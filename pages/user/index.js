Page({
  handleGetUserInfo(e) {
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
    const {
      userInfo
    } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
    wx.switchTab({
      url: '/pages/user/index',
    })
  },
  
  data:{
  userinfo:{}
},
onShow(){
  const userinfo=wx.getStorageSync("userinfo");
  this.setData({userinfo})
}
})