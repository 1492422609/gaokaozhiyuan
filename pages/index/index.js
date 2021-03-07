
// Page(pageObject)
Page({
  data:{
    kemuyi:"",
    kemuer:"",
    kemusan:"",
  chengji:false,
  userinfo:{},
  Phone:'',
  //弹窗不显示
  isShowConfirm:true,
},
  cancel:function(){
  this.setData({
    isShowConfirm: false,
  })
  // wx.navigateTo({
  //   url: 'pages/index/index',
  // })
},
setphone:function(e){
  var that=this
  var openid=wx.getStorageSync('openid')
  console.log(this.data.Phone)
  wx.request({
    url: 'http://wechaiapp.shangweishuju.com/Users/UpdateUserPhone',
    data: {
      openID: openid,
      phone:that.data.Phone
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
       wx.setStorageSync('Phone', this.data.Phone)
      }else{
        that.setData({
          isShowConfirm: false,
        })
      }
    }
  })
  that.setData({
    isShowConfirm: false,
  })
},
phone:function(e){
this.setData({
  Phone:e.detail.value,
})
},
onLoad(){

},
onShow(){
  const userinfo=wx.getStorageSync("userinfo");
  this.setData({userinfo})
  const kemuyi=wx.getStorageSync('kemuyi')
  if(kemuyi){
  this.setData({
   chengji:true
  })
  this.setData({kemuyi})
    }
   var kemuer = wx.getStorageSync("kemuer")
  this.setData({kemuer})
  var kemusan = wx.getStorageSync("kemusan")
  this.setData({kemusan})
  var gaokaozongfen = wx.getStorageSync("gaokaozongfen")
  this.setData({gaokaozongfen})
  var paiming = wx.getStorageSync("paiming")
  this.setData({paiming})
  
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
}


})