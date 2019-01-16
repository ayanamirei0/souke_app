<template>
<div class="searchLessons-box">
    <p class="title_top">   <!-- lihongliang 添加 2018-12-27 -->
        <b>消息</b>
    </p> 
  <div class="margin_20">
    <div class="newtime flex-box b_white" onclick="doyoo.util.openChat('g=10078688');return false;">
      <div class="new-imgbox">
        <img src="/static/Customer.png">
      </div>

      <div class="flex">
        <div class="userinfo newtime-top">
          <p>巨人在线客服</p>
          <p class="newtime-top-right">9-28</p>
        </div>
        <div class="userinfo newtime-bottom">
          <p>你好，我是值班客服李老师，请问你有...</p>
          <p class="newtime-bottom-right">1</p>
        </div>
      </div>
    </div>


    <div class="newtime flex-box b_white" @click="gosystem">
      <div class="new-imgbox">
        <img src="/static/system.png">
      </div>

      <div class="flex">
        <div class="userinfo newtime-top">
          <p>系统消息</p>
          <p class="newtime-top-right">10:26</p>
        </div>
        <div class="userinfo newtime-bottom">
          <p>王钦同学，您已成功购买课程E概念英语作...</p>
        </div>
      </div>
    </div>


  </div>
  <Tabbar></Tabbar>    <!-- 底部导航栏组件 -->
</div>
</template>
<script>
import Tabbar from "../views/tabbar";

export default {
    components: {
        Tabbar
    },
  methods: {
    gosystem: function() {
      this.$router.push({ name: "system" });
    }
  }
};
</script>
<style scoped>
.searchLessons-box .title_top{      /* lihongliang 添加 2018-12-27 */
    color: #333333;
    font-size: .9rem;
    font-weight: 600;
    padding: .75rem 0 .6rem 1rem;
}

.newtime {
  padding: 0.55rem;
  border-radius: 16px;
  position: relative;
  margin-bottom: .5rem;
}
.newtime .new-imgbox {
  width: 2.2rem;
  height: 2.2rem;
}
.new-imgbox img {
  width: 100%;
  height: 100%;
}
.newtime-top {
  font-size: 0.75rem;
  color: #333333;
}
.newtime-bottom {
  font-size: 0.7rem;
  color: #666666;
  line-height: 1.25rem;
}
.flex-box {
  display: -webkit-flex; /* Safari */
  display: flex;
}
.flex {
  flex-grow: 1;
  position: absolute;   /* lihongliang 修改 2018-12-20 */
  top: .65rem;
  left: 3.3rem;
}
.newtime-top-right {
  font-size: 0.6rem;
  color: #666666;
}
.newtime-bottom-right {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: #f74749;
  color: white;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.6rem;
  margin: .1rem 0 0 .6rem;      /* lihongliang 修改 2018-12-20 */
}
.news_title{ color: #333; font-size: .9rem; font-weight: bold; background: #fff; padding: 0 1rem; line-height: 2rem;}
</style>


