<template>
<div class="searchLessons-box">
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
</div>
</template>
<script>
export default {
  methods: {
    gosystem: function() {
      this.$router.push({ name: "system" });
    }
  }
};
</script>
<style >
.newtime {
  padding: 0.55rem;
  border-radius: 10px;
  margin-top: 0.5rem;
}
/* .newtime .new-imgbox {
  width: 2.2rem;
  height: 2.2rem;
} */
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
  margin-left: 0.55rem;
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
  margin-top: 0.25rem;
}

</style>
<style lang="less" scoped>
.newtime {
  .new-imgbox {
    width: 2.2rem;
    height: 2.2rem;
  }
}

</style>


