<template>
    <div class="box">
            <div class="h36"></div>
            <div class="Return"><a href="javascript:history.go(-1);"><img src="../assets/img/return.png"></a></div>
            <div class="h36"></div>
            <div class="box-content">
                <div class="h36"></div>
                <div class="h10"></div>
                <div class="logo"><img src="../assets/img/logo.png"></div>
                <div class="h50"></div>
                <form  @submit.prevent="submit">
                    <div class="input_text ico1 clearfix">
                        <input type="tel" v-model="tel" name="tel" placeholder="请输入手机号码">
                    </div>
                    <div class="h20"></div>
                    <div class="input_text ico2 clearfix">
                        <input type="password" v-model="pas" name="pas" placeholder="请输入登录密码">
                    </div>
                    <div class="reminder">温馨提示：未注册账号的手机号，登录时将自动注册</div>
                    <div class="h50"></div>
                    <div class="input-bnt"><button type="submit">登录</button></div>
                </form>
                <div class="login-footer clearfix">
                    <router-link to="RegisterPhoneVerification" class="fl">注册</router-link>
                    <router-link to="ForgetPasswordMobileVerification" class="fr">忘记密码</router-link>
                </div>
                
            </div>
        </div>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';
import Cookies from 'js-cookie'
Vue.use(Toast);
export default {
  name: 'login',
  data () {
    return {
      tel:'',
      pas:''
    }
  },   
  methods:{
      submit(){
          if(this.tel==""){
            Toast('请输入手机号码');
            return false
          }else{
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            if (!reg.test(this.tel)){
                return Toast('请输入正确手机号码');
            }
          }
          if(this.pas==""){
            Toast('请输入登录密码');
            return false
          }        


        this.$axios({
            method: 'post',
            url:'/login',
            params: {
                tel:this.tel,
                pas:this.pas
            }
        }).then((res)=>{
            Cookies.set('CardNo', this.tel, {expires: 1})
            this.$router.push({ path: '/mine' })
        })

          
      }
  }
}
</script>

<style lang="less" scoped>
.box{
    background-color: #ffffff;
    position: fixed;
    height: 100%;
    width: 100%;
}
</style>
