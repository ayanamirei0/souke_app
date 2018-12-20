<template>
<div class="searchLessons-box">  
  <div class="SearchLessonsDetails_head clearfix">
    <div class="h36"></div>
    <div class="Return"><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></div>      <!-- lihongliang修改2018-12-20 -->
    <div class="column">线下订单</div>    
    <div class="h10"></div>
  </div>
<van-list  v-model="loading"  :finished="finished"  finished-text="已经到底了~"  @load="onLoad">
  <div v-for='time in content'>
    <div class="searchLessons-content">
      <div class="OrderTime clearfix">
            {{time.OrderTime}}
            <div class="h20"></div>  
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-title">
            <div class="searchLessons-content-bnt-xk marginright20 margintop5">{{time.type}}</div>
            {{time.title}}
            <div class="MyCourse_yc fr" :class=" time.MyCourse_state==1 ? 'MyCourse_state1' : time.MyCourse_state==2 ? 'MyCourse_state2' : time.MyCourse_state==3 ? 'MyCourse_state3': time.MyCourse_state==4 ? 'MyCourse_state4' : ''">{{time.state_text}}</div>
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-sm iconfont icon-xuesheng">{{time.ClassNumber}}</div>
        <div class="searchLessons-content-sm iconfont icon-shijian">{{time.ClassTime}}</div>
        <div class="searchLessons-content-sm iconfont icon-dingwei"><a :href="time.addressUrl">{{time.address}}</a></div>
        <div class="searchLessons-content-sm iconfont icon-yonghu">{{time.TeacherName}}</div>
      </div>
    </div>    
    <div class="h20"></div>
  </div>
</van-list>

</div>
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);
const loadNumUp = 5;
export default {
  data () {
    return {
        content:'',
        show:false,
        list: [],
      loading: false,
      finished: false
    }
  },
  mounted(){
    this.content=[{
        title:'初一数学启思·卓越班',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09：00-10：30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        type:'秋季',
        ClassType:'增开',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        OrderTime:'2018-09-28 20:04:00',
        state_text:'已停课',
        MyCourse_state:1, 
      },
      {
        title:'初一数学启思·卓越班',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09：00-10：30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        type:'秋季',
        ClassType:'增开',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        OrderTime:'2018-09-28 20:04:00',
        state_text:'未结课',    
        MyCourse_state:2,
      },
      {
        title:'初一数学启思·卓越班',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09：00-10：30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        type:'秋季',
        ClassType:'增开',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        OrderTime:'2018-09-28 20:04:00',
        state_text:'未开班',      
        MyCourse_state:3,
      },
      {
        title:'初一数学启思·卓越班',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09：00-10：30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        type:'秋季',
        ClassType:'增开',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        OrderTime:'2018-09-28 20:04:00',
        state_text:'已结课', 
        MyCourse_state:4,
      }
      ]
  }, 
  methods:{
     onLoad() {
      // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.content.push();
    //     }
    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.content.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 500);
     this.content.push(
           {
              title:'初一数学启思·卓越班',
              ClassNumber:'1800511776',
              ClassTime:'周六上午09：00-10：30',
              address:'东城区广渠门鼎新',
              addressUrl:'https://www.juren.com',
              OpeningHours:'2018/05/05-2018/11/17',
              type:'秋季',
              ClassType:'增开',
              TeacherName:'李向阳',
              TeacherUrl:'https://www.juren.com',
              OrderTime:'2018-09-28 20:04:00',
              state_text:'未结课',    
              MyCourse_state:2,
            },
            {
              title:'初一数学启思·卓越班',
              ClassNumber:'1800511776',
              ClassTime:'周六上午09：00-10：30',
              address:'东城区广渠门鼎新',
              addressUrl:'https://www.juren.com',
              OpeningHours:'2018/05/05-2018/11/17',
              type:'秋季',
              ClassType:'增开',
              TeacherName:'李向阳',
              TeacherUrl:'https://www.juren.com',
              OrderTime:'2018-09-28 20:04:00',
              state_text:'未开班',      
              MyCourse_state:3,
            },
     );
    this.loading = false;
      if (this.content.length >= 6) {
           this.finished = true;
        }
     console.log("123")
    }
  }
}
</script>
<style scoped  lang="less">
.SearchLessonsDetails_head{ 
    border-bottom: 1px solid #ECECEE; 
    padding: 0 0.5rem; 
    background: #fff;
    .Return{        //lihongliang 修改 2018-12-20
        .icon-fanhui{
            font-size: 1.1rem;
            position: relative;
            bottom: .13rem;
            left: 0;
        }
    }
}
.Grey{ background: #EDEDED;}
.MyCourse_zc{ color:#666666; font-size: .6rem; line-height: 1.1rem;}
.MyCourse_yc{ font-size: .6rem; line-height: 1.1rem; padding: 0 0.5rem;}
.MyCourse_Stop{ color: #F6302F;}
.MyCourse_Stop i{ font-size: 0.8rem; float: left; margin-right: 0.25rem;}

.MyCourse_end i{ font-size: 0.8rem; float: left; margin-right: 0.25rem; color: #999999;}
.MyCourse_state1{ border:1px solid #F6302F; color: #F6302F; border-radius: 0.25rem;}
.MyCourse_state2{ border:1px solid #2FB3F1; color: #2FB3F1; border-radius: 0.25rem;}
.MyCourse_state3{ border:1px solid #1EA906; color: #1EA906; border-radius: 0.25rem;}
.MyCourse_state4{ border:1px solid #666666; color: #666666; border-radius: 0.25rem;}
.OrderTime{ border-bottom: 1px solid #DADADA; font-size: 0.6rem; color: #333333;}

</style>
