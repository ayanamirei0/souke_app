<template>
<div class="searchLessons-box">
  <div class="searchLessons-head">
    <router-link to="Search" class="searchLessons-head-search iconfont icon-sousuo"></router-link>
    <div class="searchLessons-head-center"><span :class=" {Label : gradeShow}"  @click="grade_show">初一年级</span></div>
    <div class="searchLessons-head-screen iconfont icon-shaixuan" @click="More_Show"></div>
    <div class="h30"></div>    
    <div class="searchLessons-head-Column">
      <van-row>
        <van-col span="8" style="padding-right: 1.2rem"><span :class=" {Label : subjectShow}"  @click="subject_Show">全部课程</span></van-col>
        <van-col span="8" style="padding-right: .4rem"><i></i><span :class=" {Label : SeasonShow}" @click="Season_Show">全部季节</span></van-col>
        <van-col span="8"><i></i><span :class=" {Label : campusShow}" @click="campus_Show">全部校区</span></van-col>
      </van-row>
    </div>
  </div>
  <div class="h20"></div>

  <div v-for="itme in content">
    <div class="searchLessons-content">
      <div class="clearfix">
        <div class="searchLessons-content-title fl"><router-link :to='itme.url'>{{itme.title}}</router-link></div>
        <div class="fr clearfix">
          <div class="searchLessons-content-bnt-xk searchLessons-content-bnt-qj marginright20">{{itme.ContinuationClass}}</div>
          <div class="searchLessons-content-bnt-xk">{{itme.type}}</div>
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-sm iconfont icon-xuesheng">{{itme.ClassNumber}}</div>
        <div class="searchLessons-content-sm iconfont icon-shijian">{{itme.ClassTime}}</div>
        <div class="searchLessons-content-sm iconfont icon-dingwei"><a :href="itme.addressUrl">{{itme.address}}</a></div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-time fl">{{itme.OpeningHours}}</div>
        <div class="fr clearfix">
          <div class="searchLessons-content-bnt-zk">{{itme.ClassType}}</div>
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix searchLessons-content-bottom-top">
        <div class="h20"></div>
        <div class="searchLessons-content-pic fl"><img :src="itme.TeacherPic"></div>
        <div class="searchLessons-content-name fl"><a :href="itme.TeacherUrl">{{itme.TeacherName}}</a></div>
        <div class="searchLessons-content-money fr clearfix" style="font-weight:600"><em>￥</em>{{itme.money}}</div>
      </div>
    </div>
    <div class="h20"></div>
  </div>




  

  <div class="footer_height"></div>
  <!-- <div class="searchLessons-content">
    <div class="clearfix">
      <div class="searchLessons-content-title fl">初一数学启思·卓越班</div>
      <div class="fr clearfix">
        <div class="searchLessons-content-bnt-xk">续课</div>
        <div class="searchLessons-content-bnt-xk searchLessons-content-bnt-qj">秋季</div>
      </div>
    </div>
    <div class="h20"></div>
    <div class="clearfix">
      <div class="searchLessons-content-sm">1800511776</div>
      <div class="searchLessons-content-sm">周六上午09：00-10：30</div>
      <div class="searchLessons-content-sm"><router-link to="">东城区广渠门鼎新</router-link></div>
    </div>
    <div class="h20"></div>
    <div class="clearfix">
      <div class="searchLessons-content-time fl">2018/05/05-2018/11/17</div>
      <div class="fr clearfix">
        <div class="searchLessons-content-bnt-zk">增开</div>
      </div>
    </div>
    <div class="h20"></div>
    <div class="clearfix searchLessons-content-bottom-top">
      <div class="h20"></div>
      <div class="searchLessons-content-pic fl"><img src="../images/pic1.jpg"></div>
      <div class="searchLessons-content-name fl">李向阳</div>
      <div class="searchLessons-content-money fr clearfix"><em>￥</em>4100</div>
    </div>
  </div> -->
  <!-- 年级选择 -->
  <van-popup v-model="gradeShow" :overlay="true" class="grade">
      <div class="gradeTips">每年9月1日系统会自动升级年级</div>
      <van-tree-select  :items="items" :height="height"  :main-active-index="mainActiveIndex"  :active-id="activeId"  @navclick="onNavClick"  @itemclick="onItemClick"/>
  </van-popup>
  <!-- 学科筛选 -->
  <van-popup v-model="subjectShow" :overlay="true" class="subject_hr">
      <van-tree-select  :items="subjectItems" :height="height"  :main-active-index="subjectMainActiveIndex"  :active-id="subjectActiveId"  @navclick="subjectOnNavClick"  @itemclick="subjectOnItemClick"/>
  </van-popup>
  <!-- 季节筛选 -->
  <van-popup v-model="SeasonShow" :overlay="true" class="SeasonListBox">
      <div class="SeasonList" v-for="(itme,index) in SeasonItems" :class="SeasonActiveId==index ? 'SeasonList--active' : ''" @click="SeasonId(index,itme.text)">{{itme.text}}</div>
  </van-popup>

  <!-- 校区筛选 -->
  <van-popup v-model="campusShow" :overlay="true" class="campusListBox">
       <van-tree-select  :items="campusItems" :height="campusListBox_height"  :main-active-index="campusMainActiveIndex"  :active-id="campusActiveId"  @navclick="campusOnNavClick"  @itemclick="campusOnItemClick"/>
  </van-popup>

  <!-- 更多筛选 -->
  <van-popup v-model="MoreShow" position="right" :overlay="true" class="MoreShow" :class="{MoreShow_top : MoreShow}">
       <div class="More_content">
         <div class="More_content_more">更多</div>
         <div class="h50"></div>
         <div class="More_ClassType clearfix">
           <div class="More_ClassType_fl">班型</div>
           <div class="More_ClassType_fr" @click="UnlimitedShow=!UnlimitedShow">{{ClassTypetext}}<i class="iconfont icon-tiem-right"></i></div>
         </div>
         <div class="h50"></div>
         <div class="More_ClassTime">上课时间</div>
         <div class="h20"></div>
         <div class="More_ClassTime_list clearfix">
           <div class="More_ClassTime_list_con" v-for="more in moreItems" @click="moreClick(more.id)"><span :class="more.id==moreActiveId ? 'active' : ''">{{more.text}}</span></div>
         </div>
         <div class="h50"></div>
         <div class="More_ClassType clearfix">
           <div class="More_ClassType_fl">显示满班班级</div>
           <div class="More_ClassType_fr kaiguan"><van-switch active-color="#2FB3F1" v-model="checkedShowFullClass" size="1rem" /></div>
         </div>
         <div class="h20"></div>
         <div class="More_ClassType clearfix">
           <div class="More_ClassType_fl">隐藏校区报名</div>
           <div class="More_ClassType_fr kaiguan"><van-switch active-color="#2FB3F1" v-model="checkedHiddenCampus" size="1rem" /></div>
         </div>
         <div class="h50"></div>
         <div class="h50"></div>
         <div class="h50"></div>
         <div class="h50"></div>
         <div class="more-bnt">
           <span class="more-Reset" @click="Reset">重置</span>
           <span class="more-complete" @click="complete">完成</span>
         </div>
       </div>
  </van-popup>
  <van-popup v-model="UnlimitedShow" position="right" :overlay="true" class="MoreShow" :class="{MoreShow_top : MoreShow}">
    <div class="More_content">
      <div class="Return"><i class="iconfont icon-fanhui" @click="ClassSelectionReturn"></i></div>  <!-- lihongliang 修改 2018-12-20 -->
      <div class="column">班型</div>
      <div class="h36"></div>
      <div class="SeasonList ClassType" v-for="itme in ClassTypeItems" :class="itme.id==ClassTypeActiveId ? 'SeasonList--active iconfont icon-duigou' : ''" @click="ClassType(itme.text,itme.id)">{{itme.text}}</div>
    </div>
  </van-popup>
</div>
</template>

<script>
import Vue from 'vue';
import { Row, Col,Toast , TreeSelect , Popup , Switch , List  } from 'vant';
Vue.use(Row).use(Col).use(Toast).use(TreeSelect).use(Popup).use(Switch).use(List);
export default {
  data () {
    return {
      height:352,
      campusListBox_height:100,
      gradeShow: false,
      subjectShow:false,
      SeasonShow:false,
      campusShow:false,
      MoreShow:false,
      UnlimitedShow:false,
      checkedShowFullClass: true,
      checkedHiddenCampus: true,
      // 年级筛选数据
      items: [
              {
                text: '幼儿',               
                children: [
                  {
                    text: '初一年级',
                    id: 1001
                  },
                  {
                    text: '初二年级',
                    id: 1002
                  },
                  {
                    text: '初三年级',
                    id: 1003
                  },
                  {
                    text: '全部初中',
                    id: 1004
                  }
                ]
              },
               {
                text: '小学',               
                children: [
                  {
                    text: '初一年级',
                    id: 1005
                  },
                  {
                    text: '初二年级',
                    id: 1006
                  },
                  {
                    text: '初三年级',
                    id: 1007
                  },
                  {
                    text: '全部初中',
                    id: 1008
                  }
                ]
              },
               {
                text: '初中',               
                children: [
                  {
                    text: '初一年级',
                    id: 1009
                  },
                  {
                    text: '初二年级',
                    id: 1010
                  },
                  {
                    text: '初三年级',
                    id: 1011
                  },
                  {
                    text: '全部初中',
                    id: 1012
                  }
                ]
              }
              ,
               {
                text: '高中',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
            ],
      mainActiveIndex: 0,
      activeId: 1001,
      // 学科筛选数据
      subjectItems: [
              {
                text: '语文',               
                children: [
                  {
                    text: '初一年级',
                    id: 1001
                  },
                  {
                    text: '初二年级',
                    id: 1002
                  },
                  {
                    text: '初三年级',
                    id: 1003
                  },
                  {
                    text: '全部初中',
                    id: 1004
                  }
                ]
              },
               {
                text: '数学',               
                children: [
                  {
                    text: '初一年级',
                    id: 1005
                  },
                  {
                    text: '初二年级',
                    id: 1006
                  },
                  {
                    text: '初三年级',
                    id: 1007
                  },
                  {
                    text: '全部初中',
                    id: 1008
                  }
                ]
              },
               {
                text: '英语',               
                children: [
                  {
                    text: '同步班',
                    id: 1009
                  },
                  {
                    text: '培优班',
                    id: 1010
                  },
                  {
                    text: '精英班',
                    id: 1011
                  },
                  {
                    text: '启智非凡',
                    id: 1012
                  }
                ]
              }
              ,
               {
                text: '综素拓展',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
            ],
      subjectMainActiveIndex: 0,
      subjectActiveId: 1001,
      // 季节筛选数据
      SeasonItems:[
        {
          text: '不限',
        },
        {
          text: '春季',
        },
        {
          text: '暑假',
        },
        {
          text: '秋季',
        },
        {
          text: '寒假',
        }
      ],
      SeasonActiveId: 0,
      SeasonText: '不限',
      // 校区筛选筛选数据
      campusItems: [
              {
                text: '不限',               
                children: [
                  {
                    text: '初一年级',
                    id: 1
                  },
                  {
                    text: '初二年级',
                    id: 2
                  },
                  {
                    text: '初三年级',
                    id: 3
                  },
                  {
                    text: '全部初中',
                    id: 4
                  }
                ]
              },
               {
                text: '海淀区',               
                children: [
                  {
                    text: '不限',
                    id: 5
                  },
                  {
                    text: '海淀区',
                    id: 6
                  },
                  {
                    text: '海淀万柳',
                    id: 7
                  },
                  {
                    text: '海淀西三旗',
                    id: 8
                  },
                  {
                    text: '海淀清河',
                    id: 9
                  },
                  {
                    text: '海淀温泉',
                    id: 10
                  },
                  {
                    text: '海淀二里庄',
                    id: 11
                  },
                  {
                    text: '海淀军科',
                    id: 12
                  },
                  {
                    text: '海淀北师大',
                    id: 13
                  },
                  {
                    text: '海淀会城门',
                    id: 14
                  },
                  {
                    text: '海淀万寿路南',
                    id: 15
                  },
                  {
                    text: '海淀万寿路北',
                    id: 16
                  }
                ]
              },
               {
                text: '西城区',               
                children: [
                  {
                    text: '初一年级',
                    id: 9
                  },
                  {
                    text: '初二年级',
                    id: 10
                  },
                  {
                    text: '初三年级',
                    id: 1011
                  },
                  {
                    text: '全部初中',
                    id: 1012
                  }
                ]
              }
              ,
               {
                text: '朝阳区',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
              ,
               {
                text: '丰台区',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
              ,
               {
                text: '东城区',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
              ,
               {
                text: '昌平区',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
              ,
               {
                text: '顺义区',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
              ,
               {
                text: '通州区',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
              ,
               {
                text: '石景山区',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
              ,
               {
                text: '其他',               
                children: [
                  {
                    text: '高一年级',
                    id: 1013
                  },
                  {
                    text: '高二年级',
                    id: 1014
                  },
                  {
                    text: '高三年级',
                    id: 1015
                  },
                  {
                    text: '全部高中',
                    id: 1016
                  }
                ]
              }
            ],
      campusMainActiveIndex: 0,
      campusActiveId: 1001,

      // 更多筛选 上课时间
      moreItems:[
        {
          text: '不限',
          id: 0
        },
        {
          text: '周一',
          id: 1
        },
        {
          text: '周二',
          id: 2
        },
        {
          text: '周三',
          id: 3
        },
        {
          text: '周四',
          id: 4
        },
        {
          text: '周五',
          id: 5
        },
        {
          text: '周六',
          id: 6
        },
        {
          text: '周日',
          id: 7
        }
      ],
      moreActiveId: 0,

      // 班型
      ClassTypeItems:[
        {
          text: '不限',
          id: 0
        },
        {
          text: '同步班',
          id: 1
        },
        {
          text: '培优班',
          id: 2
        },
        {
          text: '精英班',
          id: 3
        },
        {
          text: '启思卓越',
          id: 4
        },
        {
          text: '启智非凡',
          id: 5
        }
      ],
      ClassTypeActiveId: 0,
      ClassTypetext: '不限',

      // 页面默认加载数据
      content:[],


    }
  },
  mounted(){    
    $(".searchLessons-head").height();
    var campusListBox_height = $(document).height()-$(".searchLessons-head").height()-$(".searchLessons-head ~ .h20").height()*2.5;
    this.campusListBox_height=campusListBox_height; 
    this.height=$(".subject_hr").height();
    this.content=[
      {
        title:'初一数学启思·卓越班',
        url:'SearchLessonsDetails/15',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09:00-10:30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        ContinuationClass:'续课',
        type:'秋季',
        ClassType:'增开',
        TeacherPic:'./static/pic1.jpg',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        money:'4100',

      },
      {
        title:'初一数学启思·卓越班',        
        url:'SearchLessonsDetails/16',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09:00-10:30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        ContinuationClass:'续课',
        type:'秋季',
        ClassType:'增开',
        TeacherPic:'./static/pic1.jpg',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        money:'4200',

      },
      {
        title:'初一数学启思·卓越班',        
        url:'SearchLessonsDetails/16',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09:00-10:30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        ContinuationClass:'续课',
        type:'秋季',
        ClassType:'增开',
        TeacherPic:'./static/pic1.jpg',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        money:'4200',

      },
      {
        title:'初一数学启思·卓越班',        
        url:'SearchLessonsDetails/16',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09:00-10:30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        ContinuationClass:'续课',
        type:'秋季',
        ClassType:'增开',
        TeacherPic:'./static/pic1.jpg',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        money:'4200',

      }
      ];
       
  }, 
  methods:{
   
    grade_show(){
      this.gradeShow=!this.gradeShow;      
      this.subjectShow = false ;
      this.SeasonShow = false ;
      this.campusShow = false ;
      this.MoreShow = false;
    },
    subject_Show(){
      this.subjectShow=!this.subjectShow;      
      this.gradeShow = false ;
      this.SeasonShow = false ;
      this.campusShow = false ;
      this.MoreShow = false;
    },
    Season_Show(){
      this.SeasonShow=!this.SeasonShow;      
      this.gradeShow = false ;
      this.subjectShow = false ;
      this.campusShow = false ;
      this.MoreShow = false;
    },
    campus_Show(){
      this.campusShow=!this.campusShow;      
      this.gradeShow = false;
      this.subjectShow = false;
      this.SeasonShow = false;
      this.MoreShow = false;
    },
    More_Show(){
      this.MoreShow=!this.MoreShow;      
      this.gradeShow = false;
      this.subjectShow = false;
      this.SeasonShow = false;
      this.campusShow = false;
    },

    // 年级筛选
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
      this.gradeShow=!this.gradeShow;
      // 点击右侧执行请求
      //   this.$http.post('http://localhost:8088',{
      //       a:"a"
      //   }).then(response => {

      //     console.log(response.data);

      //     }, response => {
      //             console.log("error"); 
      //     });
    },

    // 学科筛选
     subjectOnNavClick(index) {
      this.subjectMainActiveIndex = index;
    },
    subjectOnItemClick(data) {      
      this.subjectActiveId = data.id;
      this.subjectShow=!this.subjectShow;
      // 点击右侧执行请求
    },

    //季节筛选
    SeasonId(index,SeasonText){
    this.SeasonActiveId = index;
    this.SeasonShow=!this.SeasonShow;
    },


    // 学科筛选
     campusOnNavClick(index) {
      this.campusMainActiveIndex = index;
    },
    campusOnItemClick(data) {      
      this.campusActiveId = data.id;
      this.campusShow=!this.campusShow;
      // 点击右侧执行请求
    },
    //更多筛选
    moreClick(id){
    this.moreActiveId = id;
    },
    
    // 更多筛选重置
    Reset(){
      this.moreActiveId=0;
      this.checkedShowFullClass= true;
      this.checkedHiddenCampus=true;
      this.ClassTypetext = '不限';
      this.ClassTypeActiveId=0;

    },
    // 更多筛选完成
    complete(){
      this.MoreShow=!this.MoreShow;
      //   this.$http.post('http://localhost:8088',{
      //       moreActiveId:"this.moreActiveId",
      //       checkedShowFullClass:"this.checkedShowFullClass",
      //       checkedHiddenCampus:"this.checkedHiddenCampus",
      //       ClassTypetext:"this.ClassTypetext"
      //   }).then(response => {

      //     console.log(response.data);

      //     }, response => {
      //             console.log("error"); 
      //     });

    },

    //班型
    ClassType(text,id){
    this.ClassTypeActiveId = id;
    this.ClassTypetext = text;
    this.UnlimitedShow=!this.UnlimitedShow;
    },

    // 班型选择返回
    ClassSelectionReturn(){
      this.UnlimitedShow=!this.UnlimitedShow;
    },

  }
}
</script>
<style>
.van-modal,.van-popup--top{ top: 3.8rem;}
.van-popup.subject_hr,.van-popup.grade,.van-popup.SeasonListBox,.van-popup.campusListBox{ width: 100%; top:3.8rem; left: 0; -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); height:10.5rem;}
.van-popup.subject_hr{ height:8.8rem;}
.van-popup.campusListBox{ height:100%; border-top: 1px solid #C2C2C2;}
.gradeTips{ background:#DCF4FF; line-height: 1.75rem; height: 1.75rem; width: 100%; text-align: center; font-size: .6rem; color: #2FB3F1;}
.van-ellipsis{ font-size: .65rem; color: #333333; height: 2.2rem; text-align: center;}
.van-tree-select__nitem{ background: #E6E6E6;}
.van-tree-select__nitem--active, .van-tree-select__nitem:active{ background: #fff;}
.van-tree-select__item{ border-bottom: 1px solid #dadada; box-sizing: border-box;}
.van-tree-select__content{ padding: 0;}
.van-tree-select__item--active{ color: #2FB3F1;}
.van-tree-select__item--active i{ display: none;}
.van-tree-select__item--active, .van-tree-select__item:active{color: #2FB3F1;}
.subject_hr{ border-top: 1px solid #C2C2C2;}
.SeasonList{ height: 2.2rem; box-sizing: border-box; text-align: center; line-height: 2.2rem; color: #333333;  font-size: .7rem; border-bottom: 1px solid #DADADA;}
.SeasonListBox{border-top: 1px solid #C2C2C2; height: 11rem;}
.SeasonList--active{ color: #2FB3F1;}
.van-tree-select__nav{ background: #E6E6E6; height: 100%;}

/* lihongliang 修改 2018-12-20 */
.MoreShow .More_content .icon-fanhui{
    font-size: 1.1rem;
    position: relative;
    top: .15rem;
    right: .3rem;
}
</style>
