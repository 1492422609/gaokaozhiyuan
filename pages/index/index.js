
const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    }
  },

  setDisabled() {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain() {
    this.setData({
      plain: !this.data.plain
    })
  },

  setLoading() {
    this.setData({
      loading: !this.data.loading
    })
  },
  
  onTapDayWeather(){
    wx.navigateTo({
      url: '/pages/new_index/index',//gaigai
    })
  },


  handleContact(e) {
    console.log(e.detail)
  },

  handleGetPhoneNumber(e) {
    console.log(e.detail)
  },

  handleGetUserInfo(e) {
    console.log(e.detail)
  },

  handleOpenSetting(e) {
    console.log(e.detail.authSetting)
  },

  handleGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
}





// Page(pageObject)
Page({
  pageObject,
  handleGetUserInfo(e) {
    const {
      userInfo
    } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
  },
  data:{
  userinfo:{},
  Phone:'',
  isShowConfirm:'true',
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
      }
    }
  })

},
phone:function(e){
this.setData({
  Phone:e.detail.value,
})
// wx.setStorageSync('Phone', e.detail.Phonenumber)
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
        isShowConfirm: true,
     })
   }
},
onShow(){
  const userinfo=wx.getStorageSync("userinfo");
  this.setData({userinfo})
  // this.setData({phone})
}

})