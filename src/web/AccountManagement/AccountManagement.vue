<template>
    <div class="searchLessons-box">
        <div class="white-bg">
            <div class="SearchLessonsDetails_head clearfix">
                <div class="h36"></div>
                <div class="Return"><a href="javascript:history.go(-1);"><img src="./../../assets/img/return.png"></a></div>
                <div class="column">账号管理</div>
                <div class="h20"></div>
            </div>
            <div class="GrayLine"></div>
            <div class="h36"></div>
            <div class="box">
                <div class="box-content">
                        <div class="form-content clearfix">
                            <div class="form-text fl w130 h40 mr54">手机号</div>
                            <div class="form-data fl w442">
                                <router-link to="ModifyPhone" class="csrq iconfont icon-tiem-right">{{content.phone}}</router-link>
                            </div>
                        </div>
                        <div class="form-content border-none clearfix">
                            <div class="form-text fl w130 h40 mr54">登录密码</div>
                            <div class="form-data fl w442">
                                <router-link to="ModifyPassword" class="csrq iconfont icon-tiem-right">{{content.PasswordStatus}}</router-link>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
        <div class="h50"></div>
        <div class="input-bnt"><button @click="onClickAlert">退出登录</button></div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Dialog} from 'vant';
Vue.use(Dialog)
export default {
    data () {
    return {
        content:'',
        show: false,
    }
    },
    mounted(){
    this.content={
        phone:'187****0721',
        PasswordStatus:'已设置',        
      };
    
  },
  methods:{
        onClickAlert() {
            Dialog.confirm({
            message: '确认退出？',
            className:'SignOut'
            }).then(() => {
                console.log('确认')
            }).catch(() => {
                console.log('取消')
            });
        },
  } 
}
</script>
<style lang="less" scoped>
    .form-text{ text-align: left;}
    .csrq{ text-align: right; color:#666666; box-sizing: border-box; background: none;}
    .icon-tiem-right:before{ float: right; color: #666666; font-size: 1rem;}
    .SearchLessonsDetails_head{ padding: 0 0.5rem; background: #fff;}
    .input-bnt{ text-align: center;}
    .GrayLine{ height: 1px; background: #C2C2C2; overflow: hidden; clear: both;}
</style>



