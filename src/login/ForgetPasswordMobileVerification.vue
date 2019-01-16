<template>
    <div class="box">
            <div class="h36"></div>
            <div class="Return"><a href="javascript:history.go(-1);"><img src="../assets/img/return.png"></a></div>
            <div class="column">修改密码</div>
            <div class="h36"></div>
            <div class="box-content">
                <form  @submit.prevent="submit">
                    <div class="input_text ico1 clearfix">
                        <input type="tel" v-model="tel" name="" placeholder="请输入手机号码">
                    </div>
                    <div class="h20"></div>
                    <div class="input_text ico2 clearfix">
                        <input type="tel" v-model="code" name="" class="Code" placeholder="请输入验证码">
                        <div class="ObtainCode"><button type="button" @click="CountDown">获取验证码</button></div>
                    </div>
                    <div class="h50"></div>
                    <div class="h50"></div>
                    <div class="input-bnt"><button type="submit">下一步</button></div>
                </form>
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
      tel:'',
      code:''
    };
  },
    methods:{        
        CountDown (el) {
            if(this.tel==""){
                Toast('请输入手机号码');
                return false
            }else{
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            if (!reg.test(this.tel)){
                return Toast('请输入正确手机号码');
            }
          }    
           //Toast.success('验证码已发送');
           Toast('测试验证码：1234');     
            let time = 60;
            this.timer = window.setInterval(()=>{
                console.log(time);
                if(time < 1){
                    el.target.innerHTML = '发送验证码';
                    window.clearInterval(this.timer);
                    this.timer = null;
                    el.target.disabled = '';
                }else{                    
                    --time;
                    el.target.innerHTML = '等待'+time+'s';
                    el.target.disabled = ' disabled';
                }
            },1000);
        },
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
          if(this.code==""){
            Toast('请输入验证码');
            return false
          }else{
              if(this.code!="1234"){
                Toast('验证码有误');
                return false   
              }
          }
          this.$router.push({ path: '/ForgetPasswordResetPassword/'+ this.tel})
          
      }

    }
}
</script>
