<template>
<div class="searchLessons-box">  
  <div class="SearchLessonsDetails_head clearfix">
    <div class="h36"></div>
    <div class="Return"><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></div>      <!-- lihongliang 修改 2018-12-20 -->
    <div class="column">我的课程</div>    
    <div class="h10"></div>
  </div>
<van-list  v-model="loading"  :finished="finished"  finished-text="已经到底了~"  @load="onLoad">
  <div v-for='time in content'>
    <div class="searchLessons-content">
      <div class="clearfix">
        <div class="searchLessons-content-title fl">
            <div class="searchLessons-content-bnt-xk marginright20 margintop5">{{time.type}}</div>
            {{time.title}}
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-sm iconfont icon-xuesheng">{{time.ClassNumber}}</div>
        <div class="searchLessons-content-sm iconfont icon-dingwei"><a :href="time.addressUrl">{{time.address}}</a></div>
      </div>
      <div class="h20"></div>
      <div class="clearfix searchLessons-content-bottom-top">
        <div class="h20"></div>
        <div class="MyCourse_zc fl" :class="time.MyCourse_state==1 ? 'MyCourse_Stop' : time.MyCourse_state==4 ? 'MyCourse_end' :''">
            <i class="iconfont icon-tanhao" v-show="time.MyCourse_state==1"></i>
            <i class="iconfont icon-xuanze" v-show="time.MyCourse_state==4"></i>
            {{time.Explain}}
        </div>
        <div class="MyCourse_yc fr" :class=" time.MyCourse_state==1 ? 'MyCourse_state1' : time.MyCourse_state==2 ? 'MyCourse_state2' : time.MyCourse_state==3 ? 'MyCourse_state3': time.MyCourse_state==4 ? 'MyCourse_state4' : ''">{{time.state_text}}</div>
      </div>
    </div>    
    <div class="h20"></div>
  </div>
</van-list>
  <!-- <div>
    <div class="searchLessons-content">
      <div class="clearfix">
        <div class="searchLessons-content-title fl">
            <div class="searchLessons-content-bnt-xk marginright20 margintop5">{{content.type}}</div>
            {{content.title}}
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-sm iconfont icon-xuesheng">{{content.ClassNumber}}</div>
        <div class="searchLessons-content-sm iconfont icon-dingwei"><a :href="content.addressUrl">{{content.address}}</a></div>
      </div>
      <div class="h20"></div>
      <div class="clearfix searchLessons-content-bottom-top">
        <div class="h20"></div>
        <div class="MyCourse_zc fl">第6课：5月5日 周六上午09:00-10:30</div>
        <div class="MyCourse_yc fr MyCourse_state2">未结课</div>
      </div>
    </div>
  </div>
  <div class="h20"></div>
  <div>
    <div class="searchLessons-content">
      <div class="clearfix">
        <div class="searchLessons-content-title fl">
            <div class="searchLessons-content-bnt-xk marginright20 margintop5">{{content.type}}</div>
            {{content.title}}
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-sm iconfont icon-xuesheng">{{content.ClassNumber}}</div>
        <div class="searchLessons-content-sm iconfont icon-dingwei"><a :href="content.addressUrl">{{content.address}}</a></div>
      </div>
      <div class="h20"></div>
      <div class="clearfix searchLessons-content-bottom-top">
        <div class="h20"></div>
        <div class="MyCourse_zc fl">第1课：12月28日 周六上午09:00-10:30</div>
        <div class="MyCourse_yc fr MyCourse_state3">未开班</div>
      </div>
    </div>
  </div>
  <div class="h20"></div>
  <div>
    <div class="searchLessons-content">
      <div class="clearfix">
        <div class="searchLessons-content-title fl">
            <div class="searchLessons-content-bnt-xk marginright20 margintop5">{{content.type}}</div>
            {{content.title}}
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-sm iconfont icon-xuesheng">{{content.ClassNumber}}</div>
        <div class="searchLessons-content-sm iconfont icon-dingwei"><a :href="content.addressUrl">{{content.address}}</a></div>
      </div>
      <div class="h20"></div>
      <div class="clearfix searchLessons-content-bottom-top">
        <div class="h20"></div>
        <div class="MyCourse_zc fl MyCourse_end"><i class="iconfont icon-xuanze"></i>课程学习结束</div>
        <div class="MyCourse_yc fr MyCourse_state4">已结课</div>
      </div>
    </div>
  </div> -->

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
        url:'SearchLessonsDetails/15',
        ClassNumber:'1800511776',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        type:'秋季', 
        Explain:'请联系所在校区线下转班', 
        state_text:'已停班',     
        MyCourse_state:1,
      },
      {
        title:'初一数学启思·卓越班2',
        url:'SearchLessonsDetails/15',
        ClassNumber:'1800511776',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        type:'秋季',   
        Explain:'第6课：5月5日 周六上午09:00-10:30',
        state_text:'未结课',    
        MyCourse_state:2,
      },
      {
        title:'初一数学启思·卓越班3',
        url:'SearchLessonsDetails/15',
        ClassNumber:'1800511776',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        type:'秋季', 
        Explain:'第1课：12月28日 周六上午09:00-10:30',  
        state_text:'未开班',      
        MyCourse_state:3,
      },
      {
        title:'初一数学启思·卓越班4',
        url:'SearchLessonsDetails/15',
        ClassNumber:'1800511776',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        type:'秋季',    
        Explain:'课程学习结束',
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
                title:'初一数学启思·卓越班4',
                url:'SearchLessonsDetails/15',
                ClassNumber:'1800511776',
                address:'东城区广渠门鼎新',
                addressUrl:'https://www.juren.com',
                type:'秋季',    
                Explain:'课程学习结束',
                state_text:'已结课1', 
                MyCourse_state:4,
            },
            {
                title:'初一数学启思·卓越班4',
                url:'SearchLessonsDetails/15',
                ClassNumber:'1800511776',
                address:'东城区广渠门鼎新',
                addressUrl:'https://www.juren.com',
                type:'秋季',    
                Explain:'课程学习结束',
                state_text:'已结课2', 
                MyCourse_state:4,
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
.MyCourse_state4{ border:1px solid #999999; color: #666666; border-radius: 0.25rem;}


</style>
