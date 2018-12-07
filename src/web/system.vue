<template>
<div class="searchLessons-box">
  <div class="system">
    <div class="b_white">
      <div class="margin_20 system-title">
        系统消息
        <img src="/static/return.png" @click="goback()">
      </div>
    </div>
    <div class="margin_20">
      <div class="tiems">
        <p class="news-data">2018/10/31 10:40</p>
        <div class="new-times b_white">
          <h5>已付款消息</h5>
          <p>
            王钦家长，您好，您已成功购买课程：初一数学启智非凡
            班，可前往【我的-已付款】中查看详情。
          </p>
        </div>
      </div>
      <div class="tiems">
        <p class="news-data">2018/10/31 10:40</p>
        <div class="new-times b_white">
          <h5>待付款消息</h5>
          <p>
            王钦家长，您好，您已成功将4门课程加入购课袋，请您
            及时缴费。可前往【我的-购课袋】中查看详情。
          </p>
        </div>
      </div>
      <div class="tiems">
        <p class="news-data">2018/10/31 10:40</p>
        <div class="new-times b_white">
          <h5>已付款消息</h5>
          <p>
            王钦家长，您好，您已成功购买课程：初一数学启智非凡
            班，可前往【我的-已付款】中查看详情。
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "system",
  methods: {
    goback: function() {
      this.$router.back(-1);
    }
  }
};
</script>
<style>
.system-title {
  position: relative;
  line-height: 1.925rem;
  text-align: center;
  font-size: 0.8rem;
  color: #333333;
}
.system-title img {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 0;
  top: 0.25rem;
}
.news-data {
  color: #666666;
  font-size: 0.6rem;
  line-height: 1.5rem;
  height: 1.5rem;
  text-align: center;
}
.new-times {
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding: 0 0.75rem 0.75rem;
  color: #333333;
}
.new-times h5 {
  font-size: 0.7rem;
  line-height: 2rem;
}
.new-times p {
  font-size: 0.65rem;
  line-height: 1rem;
}
</style>
