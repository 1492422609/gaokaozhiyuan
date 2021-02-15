
// Page(pageObject)
Page({
  handleGetUserInfo(e) {
    const {
      userInfo
    } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
  },
  data:{
  userinfo:{},
  Phone:'',
  //弹窗不显示
  isShowConfirm:'false',
},
cancel:function(){
  that.setData({
    isShowConfirm: false,
  })
  wx.navigateTo({
    url: 'pages/index/index',
  })
},
setphone:function(e){
  var that=this
  var openid=wx.getStorageSync('openid')
  console.log(this.data.Phone)
  wx.request({
    url: 'http://wechaiapp.shangweishuju.com/Users/UpdateUserPhone',
    data: {
      openID: openid,
      phone:this.data.Phone
    },
    header: {
      'content-type': 'application/json' //默认值
    },
    method: 'POST',
    success: function (res) {
      console.log(res)
      if(res.data.code==2000){
        that.setData({
          isShowConfirm: false,
        })
        wx.navigateTo({
          url: 'pages/index/index',
        })
      }else{
        that.setData({
          isShowConfirm: false,
        })
        wx.navigateTo({
          url: 'pages/index/index',
        })
      }
    }
  })

},
phone:function(e){
this.setData({
  Phone:e.detail.value,
})
},
onLoad(){
   const Phone =wx.getStorageSync('Phone')
   if(Phone){
     this.setData({
       isShowConfirm:false,
     })
   }
  else{
     this.setData({
        isShowConfirm: false,
     })
   }
},
onShow(){
  const userinfo=wx.getStorageSync("userinfo");
  this.setData({userinfo})
}

})