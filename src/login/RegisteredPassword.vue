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
                    <div class="input_text ico2 clearfix">
                        <input type="password" v-model="pas" name="" placeholder="请输入登录密码">
                    </div>
                    <div class="h20"></div>
                    <div class="input_text ico2 clearfix">
                        <input type="password" v-model="pas2" name="" placeholder="请再次输入登录密码">
                    </div>
                    <div class="reminder">温馨提示：请设置6-18位密码，建议数字和字母组合</div>
                    <div class="h50"></div>
                    <div class="input-bnt"><button type="submit">提交</button></div>
                </form>
                <div class="login-footer clearfix">
                    <router-link to="login" class="fr">已有账号？去登录</router-link>
                </div>
            </div>
        </div>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
   data() {
    return {
      checked: true,
      pas:'',
      pas2:''
    };
  }, 
    methods:{        
        
        submit(){
            //console.log(this.$route.params.tel)
          if(this.pas==""){
            Toast('请输入登录密码');
            return false
          }else{
              let reg =/^[0-9A-Za-z]{6,18}$/;
              if(!reg.test(this.pas)){
                Toast('请设置6-18位密码');  
                return false 
              }
          }
          if(this.pas2==""){
            Toast('请再次输入登录密码');
            return false
          }else{
              if(this.pas!=this.pas2){
               Toast('两次输入的密码不一致'); 
               return false 
              }
          }
          this.$router.push({ path: '/PerfectInformation' })
          
      }

    }
}
</script>
