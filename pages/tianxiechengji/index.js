
Page({

  
  data: {
    gaokaozongfen:'',
    paiming:'',
    kemuyi:'',
    kemuer:'',
    kemusan:'',
    diyike:"",dierke:"",disanke:"",
    array: ['科目一','物理', '化学','生物','政治','历史','地理'],
    array0: ['科目二','物理', '化学','生物','政治','历史','地理'],
    array1: ['科目三','物理', '化学','生物','政治','历史','地理'],
    index:0,
    index0:0,
    index1:0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange0: function (e) {
    console.log('picker0发送选择改变，携带值为', e.detail.value)
    this.setData({
      index0: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker1发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindMultiPickerChange:function(e){
    console.log('picker发送选择改变，携带值为',e.detail.value)
    this.setData({
      multiIndex:e.detail.value
    })
  },
  bindMultiPickerColumnChange:function(e){
    console.log('修改的列为',e.detail.column,',值为',e.detail.value);
    var data={
      multiArray:this.data.multiArray,
      multiIndex:this.data.multiIndex
    };
    data.multiIndex[e.detail.column]=e.detail.value;
    switch(e.detail.column){
      case 0:
        switch(data.multiIndex[0]){
          case 0:
            data.multiArray[1]=['化学','历史'];
            data.multiArray[2]=['生物','地理'];
            break;
          case 1:
            data.multiArray[1]=['化学','历史'];
            data.multiArray[2]=['生物','地理'];
            break;
        }
        data.multiIndex[1]=0;
        data.multiIndex[2]=0;
        break;
      case 1:
        switch(data.multiIndex[0]){
          case 0:
            switch(data.multiIndex[1]){
              case 0:
                data.multiArray[2]=['化学','历史'];
                break;
              case 1:  
                data.multiArray[2]=['生物','地理'];
                break;
            }
            break;
          case 1:
            switch(data.multiIndex[1]){
              case 0:
                data.multiArray[2]=['化学','历史']
                break;
              case 1:
                data.multiArray[2]=['生物','地理']
                break;
            }
            break;
        }
        data.multiIndex[2]=0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },

 queding(){
   var that=this
   const Phone=wx.getStorageSync('Phone')
   console.log(Phone)
   console.log(that.data.gaokaozongfen)
   console.log(that.data.paiming)
   console.log(that.data.diyike)
   console.log(that.data)
   console.log(that.data.index)
   const  keyi=that.data.index
   const  keer=that.data.index0
   const  kesan=that.data.index1
   console.log(that.data.array[keyi])
   wx.setStorageSync('kemuyi', that.data.array[keyi])
   wx.setStorageSync('kemuer', that.data.array[keer])
   wx.setStorageSync('kemusan', that.data.array[kesan])
  //  wx.switchTab({
  //   url: '/pages/index/index',
  // })
 if(!that.data.diyike||!that.data.dierke||!that.data.disanke){
  wx.showModal({
    title: '提示',
    content: '请输入单科成绩',
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
 }
else{
  if((!that.data.index||!that.data.index0||!that.data.index1)){
    wx.showModal({
      title: '提示',
      content: '请选择科目类别',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }else{
     wx.switchTab({
    url: '/pages/index/index',
  })
  }
}

 },
 diyike:function(e){
this.setData({
  diyike:e.detail.value
})
// console.log(this.data.kemuyi)
 },
 dierke:function(e){
  this.setData({
    dierke:e.detail.value
  })
   },
   disanke:function(e){
    this.setData({
      disanke:e.detail.value
    })
     },
zongfen:function(e){
  this.setData({
    gaokaozongfen:e.detail.value
  })
  console.log(this.data.gaokaozongfen)
},
paiming:function(e){
this.setData({
  paiming:e.detail.value
})
console.log(this.data.paiming)
},
onLoad(){
}
})