<template>
<div>  
  <div class="SearchLessonsDetails_head clearfix">
    <div class="h36"></div>
    <div class="Return"><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></div>      <!-- lihongliang 修改 2018-12-20 -->
    <div class="column">课程详情</div>
    <router-link to="/views/mine/lessonBag.vue" class="fr ShoppingBag iconfont icon-gouwudai"><i>{{content.ShoppingVolume}}</i></router-link>
    <div class="h10"></div>
  </div>
  <div>
    <div class="searchLessons-content">
      <div class="clearfix">
        <div class="searchLessons-content-title fl">
            <div class="searchLessons-content-bnt-xk marginright20 margintop5">{{content.type}}</div>
            <b>{{content.title}}</b>
        </div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-sm iconfont icon-xuesheng">{{content.ClassNumber}}</div>
        <div class="searchLessons-content-sm iconfont icon-shijian">{{content.ClassTime}}</div>
        <div class="searchLessons-content-sm iconfont icon-dingwei">
            <a :href="content.addressUrl">{{content.address}}</a>
            <i class="go iconfont icon-tiem-right"></i>
        </div>
        <div class="searchLessons-content-sm iconfont icon-rili">{{content.OpeningHours}}</div>
      </div>
      <div class="h20"></div>
      <div class="clearfix">
        <div class="searchLessons-content-money fl clearfix"><em>￥</em>{{content.money}}</div>
        <div class="fr clearfix">
          <div class="searchLessons-content-bnt-zk">{{content.ClassType}}</div>
        </div>
      </div>
      <div class="clearfix searchLessons-content-bottom-top">
        <div class="h20"></div>
        <div class="searchLessons-content-pic fl"><img :src="content.TeacherPic"></div>
        <div class="searchLessons-content-name fl"><a :href="content.TeacherUrl">{{content.TeacherName}}</a></div>
      </div>
    </div>
  </div>  
  <div class="h20 Grey"></div>
  <div class="searchLessons-content">
    <div class="clearfix">
      <div class="SearchLessonsDetails-content">
          <div class="searchLessons-content-bnt-xk marginright20 margintop5">{{content.type}}</div>
          <b>{{content.title}}</b>
          <div class="SearchLessonsDetails_resubmit fr">续报班课</div>
      </div>
    </div>
  </div>
  <div class="h20 Grey"></div>
  <div class="searchLessons-content">
    <div class="Timetable-title">课程表</div>
    <div class="h20"></div>
    <div class="Timetable-content clearfix">
      <div class="Timetable-list" v-for="itme in content.Timetable" :class="{ TimetableBeOverdue : itme.BeOverdue }">
        <span>{{itme.ClassHour}}</span>
        <em>{{itme.text}}</em>
      </div>
      <div class="Timetable-list-bg"></div>
    </div>
  </div>
  <div class="h20"></div>
  <div class="h50"></div>
  <div class="h50"></div>
  <div class="SearchLessons_footer">
    <div class="searchLessons-content clearfix">
      <div class="SearchLessons_service fl"><a class="iconfont icon-kefu1" onclick="doyoo.util.openChat('g=10078688');return false;" title="在线咨询"></a></div>
      <router-link to="/views/mine/lessonBag.vue" class="SearchLessons_signUp fr" :class=" content.state!=1 ? 'SearchLessons_signUp_wks' : ''">{{content.statetext}}</router-link>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import Cookies from 'js-cookie'
import { Row, Col,Toast , TreeSelect , Popup , Switch } from 'vant';
Vue.use(Row).use(Col).use(Toast).use(TreeSelect).use(Popup).use(Switch);
export default {
  data () {
    return {
        content:'',
    }
  },
  mounted(){  
  
    this.content={
        ShoppingVolume:'1',
        title:'初一数学启思·卓越班',
        url:'SearchLessonsDetails/15',
        ClassNumber:'1800511776',
        ClassTime:'周六上午09：00-10：30',
        address:'东城区广渠门鼎新',
        addressUrl:'https://www.juren.com',
        OpeningHours:'2018/05/05-2018/11/17',
        ContinuationClass:'续课',
        type:'秋季',
        ClassType:'增开',
        TeacherPic:'/static/pic1.jpg',
        TeacherName:'李向阳',
        TeacherUrl:'https://www.juren.com',
        money:'4100',
        Timetable:[
          {
            ClassHour:'第01课',
            text:'05/05',
            BeOverdue:true
          },
          {
            ClassHour:'第02课',
            text:'05/05',
            BeOverdue:true
          },
          {
            ClassHour:'第03课',
            text:'05/05',
            BeOverdue:true
          },
          {
            ClassHour:'第04课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第05课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第06课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第07课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第08课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第09课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第10课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第11课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第12课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第13课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第14课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第15课',
            text:'05/05',
            BeOverdue:false
          },
          {
            ClassHour:'第16课',
            text:'05/05',
            BeOverdue:false
          }
          ],
          state:1,
          statetext:'报名',

      }
  }, 
  methods:{
    
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
            left: -.5rem;
        }
    }
}
.Grey{ background: #EDEDED;}
.SearchLessonsDetails_resubmit{ width: 3.25rem; height: 1.35rem; line-height: 1.35rem; text-align: center; background: #2FB3F1; border-radius: .675rem; color: #FFFFFF; font-size: .65rem;}
.SearchLessonsDetails-content{ font-size: .83rem; color: #333333; line-height: 1.35rem; font-weight: 600; }
.SearchLessonsDetails-content .margintop5{ margin-top: 0.2rem;}
.Timetable-title{ font-size: .75rem;}
.Timetable-content{ border-radius: .75rem; border: 1px solid #A7A7A7; box-sizing: border-box; overflow: hidden; position: relative;}
.Timetable-list{ float: left; width: 20%; box-sizing: border-box; border-right: #9A9A9A 1px solid; border-bottom: #9A9A9A 1px solid; text-align: center; line-height: 0.8rem; padding: 0.8rem 0;}
.Timetable-list:nth-child(5n){ border-right: none;}
.Timetable-list span{ font-size: .75rem; color: #333;}
.Timetable-list em{ font-size: .6rem; color: #666;}
.TimetableBeOverdue span{ font-size: .75rem; color: #666;}
.TimetableBeOverdue em{ font-size: .6rem; color: #999;}
.Timetable-list-bg{ width: 100%; height: 1px; background: #fff; position: absolute; bottom: 0; left: 0;}
.SearchLessons_footer{ height: 2.5rem; width: 100%; border-top: 1px solid #CDCDCD; position: fixed; bottom: 0; left: 0; background: #fff;}
.SearchLessons_service .icon-kefu1{ font-size:1.6rem; color: #2FB3F1;}
.SearchLessons_service{ margin-top: -0.2rem;}
.SearchLessons_signUp{ width: 3.25rem; height: 1.35rem; line-height: 1.35rem; text-align: center; color: #fff; font-size: .65rem; border-radius: .675rem; background: #2FB3F1;}
.SearchLessons_signUp_wks{ background: #ADADAD;}
.icon-gouwudai{color: #515151; font-size: 1rem;}
.ShoppingBag{ 
  position: relative;
  i{ display: block; width: .9rem; height: .9rem; background: #F74749; text-align: center; line-height: 0.9rem; border-radius: 50%; top: -0.45rem; text-align: center; color: #fff; line-height: 0.9rem; right: -0.35rem; position: absolute; font-size: .6rem;}
}
.searchLessons-content-sm .icon-tiem-right{
    position: relative;
    top: .08rem;
    left: -.3rem;
    font-size: .8rem;
    color: #000000;
}
</style>
