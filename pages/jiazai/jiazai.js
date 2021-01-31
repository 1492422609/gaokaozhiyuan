
Page({
  data: {
    remind: "加载中",
    angle: 0,
    userInfo: {},
    openid:""
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
          appid: 'wxbd43ad6494d5522c',
          grant_type: 'authorization_code',
          secret: 'c8d1e3302befd17c8c214a7bc8a6e86c'
        },
        success(res) {
          console.log(res.data.openid)
          //将唯一标识保存在本地
          // this.setData({
          //   openid:res.data.openid
          // })
          // _that.data.userid = res.data.openid

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

 //   wx.request({
    //     url: 'http://wechaiapp.shangweishuju.com/Zhike/Users/GetEntity',
    //     data:{
    //       openid:res.openid,
    //     },
    //     header: {
    //      'content-type': 'application/json' //默认值
    //    },
    //     method:'POST',
    //     success: function (res) {
    //      console.log(res)
    //    }
    //   })
    //  }

},
onGotUserInfo(e){
  // var a=data.openid;
    // console.log()
    const {
        userInfo
      } = e.detail;
      wx.setStorageSync("userinfo", userInfo);
      wx.switchTab({
        url: '/pages/index/index',
      })
      wx.request({
        url: 'http://wechaiapp.shangweishuju.com/Zhike/Users/GetEntity',
        data:{
          OpenID:'111',
        },
        header: {
         'content-type': 'application/json' //默认值
       },
        method:'POST',
        success: function (res) {
          if(res.statusCode==200)
          {
           //操作成功
           console.log('操作成功了')
          }else{
            //操作失败
          }
         console.log(res)
       }
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