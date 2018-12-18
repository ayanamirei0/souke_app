<template>
    <div class="ChangeName">
        <div class="top">
            <img src="../../assets/img/return.png" alt="" @click="$router.go(-1)">
            <p>修改学院信息</p>
        </div>
        <div class="main">
            <p class="top_tip">为了让老师更好的了解你，请输入真是姓名</p>
            <div class="input">
                <input type="text" placeholder="请输入学院姓名">
            </div>
            <p class="btn">提交</p>
            <p>注意：学院姓名一个月只可修改一次</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
      return {

      }
  },
  methods: {
    returnPage() {
      // console.log(1111);
      this.$router.push("personInfo.vue");
      // this.$router.replace({path:'mine.vue'});
    }
  }
};
</script>
<style>
@import "../../assets/css/mine/ChangeName.css";
</style>

