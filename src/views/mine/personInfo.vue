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
        </div>
        <div class="item" @click="changeSex()">
            <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</p>
            <div class="change">
                <p>男<i class="go iconfont icon-tiem-right"></i></p>
            </div>
        </div>
        <div class="item" @click="chooseDate()">
            <p>出生日期</p>
            <div class="change">
                <p v-model="time">{{time}}<i class="go iconfont icon-tiem-right"></i></p>
            </div>
        </div>
        <div class="item grade">
            <p>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级</p>
            <div class="change">
                <router-link to="/views/mine/gradelist.vue">
                    <p>初一年级<i class="go iconfont icon-tiem-right"></i></p>
                </router-link>
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

        <!-- 弹出层_头像修改 -->
        <van-popup v-model="show_head" position="bottom" :overlay="true" class="choose_photo">
            <div class="choose">
                <div>拍照</div>
                <van-uploader :after-read="onRead">从相册中选择</van-uploader>
                <div @click="closePopup()">取消</div>
            </div>
        </van-popup>
        <!-- 弹出层_性别选择 -->
        <van-popup v-model="show_sex" :overlay="true" class="choose_sex">
            <p class="sex">请选择您的性别</p>
            <div class="img">
                <div @click="selectSex()">
                    <img src="../../assets/img/man_s.png" alt="" v-if="show_man">
                    <img src="../../assets/img/man.png" alt="" v-else>
                </div>
                <div @click="selectSex()">
                    <img src="../../assets/img/woman_s.png" alt="" v-if="!show_woman">
                    <img src="../../assets/img/woman.png" alt="" v-else>
                </div>
            </div>
            <div class="text">
                <p class="line">取消</p>
                <p>确定</p>
            </div>
        </van-popup>
        <!-- 弹出层_日期选择 -->
        <van-popup v-model="show_date" position="bottom" :overlay="true" class="choose_date">
            <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" @confirm="switchFormat()" @cancel="closePopup()" />
        </van-popup>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show_man: true,
      show_woman: true,
      show_head: false,
      show_sex: false,
      show_date: false,
      show_grade: false,
      show_area: false,
      show_school: false,

      minDate: new Date(1990,0,1),
      
      currentDate: '',
      time: '1994-03-28'
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
    },
    changeSex: function() {
      this.show_sex = true;
    },
    selectSex: function() {
      this.show_man = !this.show_man;
      this.show_woman = !this.show_woman;
    },
    chooseDate: function() {
        this.show_date = true;
    },
    closePopup: function(){
        this.show_date = false;
        this.show_head = false;
    },
    onRead(file) {
      console.log(file);
    },
    switchFormat: function(){
        var year = this.currentDate.getFullYear();
        var month = this.currentDate.getMonth() + 1;
        var day = this.currentDate.getDate();
        if(month < 10){
            month = '0' + month; 
        }
        if(day < 10){
            day = '0' + day;
        }
        this.time = year + "-" + month + "-" + day;
        this.show_date = false;
    }
  }
};
</script>
<style>
@import "../../assets/css/mine/personInfo.css";
</style>

