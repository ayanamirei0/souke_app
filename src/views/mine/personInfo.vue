<template>
    <div class="PersonInfo">
        <div class="top">
            <img src="../../assets/img/return.png" alt="" @click="returnPage()">
            <p>个人信息</p>
        </div>

        <div class="head" @click="changeHead()">
            <img src="../../assets/img/profile.png" alt="">
            <div class="changeHead">
                <p>修改头像<i class="go iconfont icon-tiem-right"></i></p>
            </div>
            <van-popup v-model="show_head" position="bottom" :overlay="false">
                内容
            </van-popup>
        </div>
        <div class="item">
            <p>学员姓名</p>
            <router-link to="/views/mine/ChangeName.vue" class="change">
                <p>王钦<i class="go iconfont icon-tiem-right"></i></p>
            </router-link>
            <!-- <div class="change">
                <p>王钦<i class="go iconfont icon-tiem-right"></i></p>
            </div> -->
        </div>
        <div class="item">
            <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</p>
            <div class="change">
                <p>男<i class="go iconfont icon-tiem-right"></i></p>
            </div>
        </div>
        <div class="item">
            <p>出生日期</p>
            <div class="change">
                <p>1994-03-28<i class="go iconfont icon-tiem-right"></i></p>
            </div>
        </div>
        <div class="item grade">
            <p>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级</p>
            <div class="change">
                <p>初一年级<i class="go iconfont icon-tiem-right"></i></p>
            </div>
        </div>
        <div class="line_y line_info"></div>
        <div class="item">
            <p>学校区域</p>
            <div class="change">
                <p>北京市海淀区<i class="go iconfont icon-tiem-right"></i></p>
            </div>
        </div>
        <div class="item">
            <p>学校名称</p>
            <div class="change">
                <p>清华大学附属中学上地学校<i class="go iconfont icon-tiem-right"></i></p>
            </div>
        </div>

        <!-- 弹出层 -->
        <van-popup v-model="show_head" position="bottom" :overlay="true" class="choose_photo">
            <div class="choose">
                <div>拍照</div>
                <div>从相册中选择</div>
                <div>取消</div>
            </div>
        </van-popup>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show_head: false,
      show_name: false,
      show_sex: false,
      show_date: false,
      show_grade: false,
      show_area: false,
      show_school: false
    };
  },
  methods: {
    returnPage: function() {
      // console.log(1111);
      this.$router.push("mine.vue");
      // this.$router.replace({path:'mine.vue'});
    },
    changeHead: function() {
      this.show_head = true;
    }
  }
};
</script>
<style>
@import '../../assets/css/mine/personInfo.css';
</style>

