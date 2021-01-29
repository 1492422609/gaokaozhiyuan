
Page({

  
  data: {
    array: ['科目一','物理', '化学','生物','政治','历史','地理'],
    array0: ['科目二','物理', '化学','生物','政治','历史','地理'],
    array1: ['科目三','物理', '化学','生物','政治','历史','地理'],
    objectArray: [
      {
        id: 0,
        name: '物理'
      },
      {
        id: 1,
        name: '化学'
      },
      {
        id: 2,
        name: '生物'
      },
      {
        id: 3,
        name: '政治'
      },
      {
        id: 4,
        name: '历史'
      },
      {
        id: 5,
        name: '地理'
      },
    ],
    index:0,
    index0:0,
    index1:0,
    // multiArray:[['物理','政治'],['化学','历史'],['生物','地理']],
    // objectMultiArray:[
    //   [
    //     {
    //       id:0,
    //       name:'物理'
    //     },
    //     {
    //       id:1,
    //       name:'政治'
    //     }
    //   ],[
    //     {
    //       id:0,
    //       name:'化学'
    //     },
    //     {
    //       id:1,
    //       name:'历史'
    //     }
    //   ],[
    //     {
    //       id:0,
    //       name:'生物'
    //     },
    //     {
    //       id:1,
    //       name:'地理'
    //     }
    //   ]
    // ],
    // multiIndex: [0, 0, 0],

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
  // bindMultiPickerColumnChange:function(e){
  //   console.log('修改的列为',e.detail.column,',值为',e.detail.value);
  //   var data={
  //     multiArray:this.data.multiArray,
  //     multiIndex:this.data.multiIndex
  //   };
  //   data.multiIndex[e.detail.column]=e.detail.value;
  //   switch(e.detail.column){
  //     case 0:
  //       switch(data.multiIndex[0]){
  //         case 0:
  //           data.multiArray[1]=['化学','历史'];
  //           data.multiArray[2]=['生物','地理'];
  //           break;
  //         case 1:
  //           data.multiArray[1]=['化学','历史'];
  //           data.multiArray[2]=['生物','地理'];
  //           break;
  //       }
  //       data.multiIndex[1]=0;
  //       data.multiIndex[2]=0;
  //       break;
  //     case 1:
  //       switch(data.multiIndex[0]){
  //         case 0:
  //           switch(data.multiIndex[1]){
  //             case 0:
  //               data.multiArray[2]=['化学','历史'];
  //               break;
  //             case 1:  
  //               data.multiArray[2]=['生物','地理'];
  //               break;
  //           }
  //           break;
  //         case 1:
  //           switch(data.multiIndex[1]){
  //             case 0:
  //               data.multiArray[2]=['化学','历史']
  //               break;
  //             case 1:
  //               data.multiArray[2]=['生物','地理']
  //               break;
  //           }
  //           break;
  //       }
  //       data.multiIndex[2]=0;
  //       console.log(data.multiIndex);
  //       break;
  //   }
  //   this.setData(data);
  // },

 queding(){
   wx.navigateBack({
     delta: 0,
   })
 },
// getPhoneNumber:function(e){
// var that = this ;
// console.log(e.detail.errMsg=="getPhoneNumber");
// }
})