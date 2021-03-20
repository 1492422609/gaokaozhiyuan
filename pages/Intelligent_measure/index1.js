// pages/Intelligent_measure/index1.js
Page({

  data: {
    region:'',
    index:0,
    regiontype: ['请选择', '济南',
    '滨州', 
    '兖州', 
    '德州', 
    '东营', 
    '菏泽', 
    '济宁', 
    '莱芜', 
    '聊城', 
    '临沂', 
    '蓬莱', 
    '青岛', 
    '曲阜', 
    '日照', 
    '泰安', 
    '潍坊', 
    '威海', 
    '烟台', 
    '枣庄', 
    '淄博'] ,
    daochu: false,
    xingcheng: true,
    fukuan:false,
    tableHeader: [{
        prop: 'school',
        width: 190,
        label: '学校',
        color: 'rgb(170, 30, 30)'
      },
      {
        prop: 'class',
        width: 192,
        label: '专业'
      },
      {
        prop: 'rank',
        width: 130,
        label: '2020录取位次'
      },
      {
        prop: 'fengxian',
        width: 90,
        label: '风险等级'
      },
      {
        prop: 'status',
        width: 90,
        label: '状态',
        color: 'rgb(170, 40, 50)'
      }
    ],
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    stripe: true,
    border: true,
    bindtap1: false,
    bindtap2: false,
    bindtap3: false,
    bindtap4: false,
    bindtap5: false,
    outBorder: true,
    row: [
      // {
    //   "id": 1,
    //   "school": '青岛理工大学',
    //   "class": "软件工程",
    //   "rank": '49999',
    //   "fengxian": '稳',
    //   "status": '选中'
    // }, 

    // {
    //   "id": 4,
    //   "school": '山东理工大学',
    //   "class": "软件工程",
    //   "rank": '49999',
    //   "fengxian": '稳',
    //   "status": '选中'
    // },
     {
      "id": 2,
      "school": '山东理工大学',
      "class": "软件工程",
      "rank1": '49999',
      "rank2":'2222',
      "rank3":'2222',
      "fengxian": '稳',
      "status": '选中'
    }, 
    {
      "id": 3,
      "school": '山东理工大学',
      "class": "软件工程",
      "rank": '49999',
      "fengxian": '稳',
      "status": '选中'
    },
    {
      "id": 3,
      "school": '山东理工大学',
      "class": "软件工程",
      "rank": '49999',
      "fengxian": '稳',
      "status": '选中'
    }, {
      "id": 3,
      "school": '山东理工大学',
      "class": "软件工程",
      "rank": '49999',
      "fengxian": '稳',
      "status": '选中'
    }, {
      "id": 3,
      "school": '山东理工大学',
      "class": "软件工程",
      "rank": '49999',
      "fengxian": '稳',
      "status": '选中'
    }, {
      "id": 3,
      "school": '山东理工大学',
      "class": "软件工程",
      "rank": '49999',
      "fengxian": '稳',
      "status": '选中'
    }
  ],
    msg: '暂无数据',
    clickrow: true,
    list: [{
        id: 0,
        name: "全部",
        value: "全部 "
      },
      {
        id: 1,
        name: "211高校  ",
        value: "211高校"
      },
      {
        id: 2,
        name: "985高校  ",
        value: "985高校"
      },
      {
        id: 3,
        name: " 双一流专业",
        value: "双一流专业"
      },
      {
        id: 4,
        name: "国家特色专业 ",
        value: "国家特色专业"
      }
    ],
    checkedList: [],
    xuankeyaoqiu:[{
      id:1,
      value:"物化生"
    }],
    zhuanyejiancheng:[{
      id:1,
      value:"软件工程",
      name:"软件工程"
    },{
      id:2,
      value:"软件",
      name:"软件"
    }]

  },
  xingcheng() {
this.setData({
  xingcheng:true
})
  },
  hefaxing:false,
  daochu() {
    this.setData({
      daochu: true
    })
    console.log(this.data.daochu)
  },
  fukuan(){
this.setData({
  fukuan:true
})
  },
  quxiao() {
    this.setData({
      daochu: false
    })
    this.setData({
      xingcheng: false
    })
    this.setData({
      fukuan:false
    })
  },
  queren() {
    this.setData({
      daochu: false
    })
    this.setData({
      xingcheng: false
    })
    this.setData({
      fukuan:false
    })
  },
  HandelItemChange(e) {
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 2 进行赋值
    let c = true;
    if (checkedList.length >= 1) {
      this.setData({
        text3: "已选择",
        hefaxing:true
      })
    } else if (checkedList.length < 1) {
      this.setData({
        text3: "请选择",
        hefaxing:false
      })
    }

  },
  HandelItemChange1(e) {
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 2 进行赋值
    let c = true;
    if (checkedList.length >= 1) {
      this.setData({
        text4: "已选择",
        hefaxing:true
      })
    } else if (checkedList.length < 1) {
      this.setData({
        text4: "请选择",
        hefaxing:false
      })
    }

  },
  HandelItemChange2(e) {
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 2 进行赋值
    let c = true;
    if (checkedList.length >= 1&&checkedList.length<=5) {
      this.setData({
        text5: "已选择",
        hefaxing:true
      })
    } else if (checkedList.length < 1) {
      this.setData({
        text5: "请选择",
        hefaxing:false
      })
    }else{
      this.setData({
        text5: "选择不可以多于五个",
        hefaxing:false
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

 
  // formSubmit: function (e) { 
  //   var that = this;  
  //     console.log('form发生了submit事件，携带数据为：', e.detail.value)         console.log(that.data.img_arr)  
  //       var that = this;  
  //         var formData = e.detail.value;
  //  if (e.detail.value.input == '' || e.detail.value.inp2 == '') {          wx.showToast({   
  //       title: '请填写完整···',    
  //         }) 
  //            } else {    
  //           wx.request({   
  //             url: 'https:***/submit',//这里的接口请填实际接口     
  //                data: formData,    
  //                header: {         
  //                'Content-Type': 'application/json'   
  //                        },      
  //                       success: function (res) {  
  //                       console.log(res.data)     
  //                        wx.showtoast({       
  //                       title: '提交成功'      
  //                           })        
  //                             that.setData({        
  //                                 form_info: ''     
  //                               })  
  //                            }
  //                           })
  //                          } 
  //                         },
                     

  tap1: function (e) {
    var that = this;
    that.setData({
      bindtap1: !that.data.bindtap1,
    });
  },
  tap2: function (e) {
    var that = this;
    that.setData({
      bindtap2: !that.data.bindtap2,
    });
  },
  tap3: function (e) {
    var that = this;
    that.setData({
      bindtap3: !that.data.bindtap3,
    });
  },
  tap4: function (e) {
    var that = this;
    that.setData({
      bindtap4: !that.data.bindtap4,
    });    
  },
  tap5: function (e) {
    var that = this;
   
    that.setData({
      bindtap5: !that.data.bindtap5
    });
  },
  later: function (e) {
    // console.log(e);
    var val = e.detail.value;
    this.setData({
      text1: val,
      hefaxing:true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  bindregionChange :function(e) {
    this.setData({
      index: e.detail.value,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onRowClick: function (e) {
    // let id1=e.currentTarget.dataset.row.id;
    //  console.log("aaaa");
    this.setData({

      // clickrow=!clickrow,
      // e.currentTarget.dataset.row.status="yichu"

    })

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})