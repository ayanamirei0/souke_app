<template>
<div class="searchLessons-box"> 
    <div class="top_fill" style="height: 2.55rem"></div> 
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
            <router-link :to='"SearchLessonsDetails/"+time.id' v-if="time.state_text=='未结课' || time.state_text=='未开班'">{{time.title}}</router-link>
            <em v-else-if="time.state_text=='已停班' || time.state_text=='已结课'">{{time.title}}</em>
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
        <div class="MyCourse_zc fl" :class="time.state_text=='已停班' ? 'MyCourse_Stop' : time.state_text=='已结课' ? 'MyCourse_end' :''">
            <i class="iconfont icon-tanhao" v-show="time.state_text=='已停班'"></i>
            <i class="iconfont icon-xuanze" v-show="time.state_text=='已结课'"></i>  
            {{time.Explain}}
        </div>
        <div class="MyCourse_yc fr" :class=" time.state_text=='已停班' ? 'MyCourse_state1' : time.state_text=='未结课' ? 'MyCourse_state2' : time.state_text=='未开班' ? 'MyCourse_state3': time.state_text=='已结课' ? 'MyCourse_state4' : ''">
           <router-link :to='"SearchLessonsDetails/"+time.id' v-if="time.state_text=='未结课' || time.state_text=='未开班'">{{time.state_text}}</router-link>
            <em v-else-if="time.state_text=='已停班' || time.state_text=='已结课'">{{time.state_text}}</em>
          
          </div>
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
// 数据列表
        this.$axios.get('/MyCourse')
        .then((res)=>{
          console.log(res.data.data)
          this.content = res.data.data
        })
        .catch((err)=>{
          console.log('调用失败',err)
        })


    // this.content=[{
    //     title:'初一数学启思·卓越班',
    //     url:'SearchLessonsDetails/15',
    //     ClassNumber:'1800511776',
    //     address:'东城区广渠门鼎新',
    //     addressUrl:'https://www.juren.com',
    //     type:'秋季', 
    //     Explain:'请联系所在校区线下转班', 
    //     state_text:'已停班',     
    //     MyCourse_state:1,
    //   },
    //   {
    //     title:'初一数学启思·卓越班2',
    //     url:'SearchLessonsDetails/15',
    //     ClassNumber:'1800511776',
    //     address:'东城区广渠门鼎新',
    //     addressUrl:'https://www.juren.com',
    //     type:'秋季',   
    //     Explain:'第6课：5月5日 周六上午09:00-10:30',
    //     state_text:'未结课',    
    //     MyCourse_state:2,
    //   },
    //   {
    //     title:'初一数学启思·卓越班3',
    //     url:'SearchLessonsDetails/15',
    //     ClassNumber:'1800511776',
    //     address:'东城区广渠门鼎新',
    //     addressUrl:'https://www.juren.com',
    //     type:'秋季', 
    //     Explain:'第1课：12月28日 周六上午09:00-10:30',  
    //     state_text:'未开班',      
    //     MyCourse_state:3,
    //   },
    //   {
    //     title:'初一数学启思·卓越班4',
    //     url:'SearchLessonsDetails/15',
    //     ClassNumber:'1800511776',
    //     address:'东城区广渠门鼎新',
    //     addressUrl:'https://www.juren.com',
    //     type:'秋季',    
    //     Explain:'课程学习结束',
    //     state_text:'已结课', 
    //     MyCourse_state:4,
    //   }
    //   ]
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


    //  this.content.push(
    //       {
    //             title:'初一数学启思·卓越班4',
    //             url:'SearchLessonsDetails/15',
    //             ClassNumber:'1800511776',
    //             address:'东城区广渠门鼎新',
    //             addressUrl:'https://www.juren.com',
    //             type:'秋季',    
    //             Explain:'课程学习结束',
    //             state_text:'已结课1', 
    //             MyCourse_state:4,
    //         },
    //         {
    //             title:'初一数学启思·卓越班4',
    //             url:'SearchLessonsDetails/15',
    //             ClassNumber:'1800511776',
    //             address:'东城区广渠门鼎新',
    //             addressUrl:'https://www.juren.com',
    //             type:'秋季',    
    //             Explain:'课程学习结束',
    //             state_text:'已结课2', 
    //             MyCourse_state:4,
    //         },
    //  );
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 998;
    .Return{        //lihongliang 修改 2018-12-20
        .icon-fanhui{
            font-size: 1.1rem;
            position: relative;
            bottom: .13rem;
            left: -.5rem;
        }
    }
}
.Grey{ background: #EDEDED;}
.MyCourse_zc{ color:#666666; font-size: .6rem; line-height: 1.1rem;}
.MyCourse_yc{ font-size: .6rem; line-height: 1.1rem; padding: 0 0.5rem;}
.MyCourse_Stop{ color: #F6302F;}
.MyCourse_Stop i{ font-size: 0.8rem; float: left; margin-right: 0.25rem;}

.MyCourse_end i{ font-size: 0.8rem; float: left; margin-right: 0.25rem; color: #999999;}
.MyCourse_state1{ 
  border:1px solid #F6302F; color: #F6302F; border-radius: 0.25rem;
  a{color: #F6302F;}
}
.MyCourse_state2{ 
  border:1px solid #2FB3F1; color: #2FB3F1; border-radius: 0.25rem;
  a{color: #2FB3F1;}
}
.MyCourse_state3{ 
  border:1px solid #1EA906; color: #1EA906; border-radius: 0.25rem;
  a{color: #1EA906;}
}
.MyCourse_state4{ 
  border:1px solid #999999; color: #666666; border-radius: 0.25rem;
  a{color: #666666;}
}

.searchLessons-content .clearfix .searchLessons-content-sm a{
    color: #333333;
}
</style>
