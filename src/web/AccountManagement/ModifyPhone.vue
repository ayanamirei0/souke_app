<template>
    <div>
        <div class="white-bg">
            <div class="SearchLessonsDetails_head clearfix">
                <div class="h36"></div>
                <div class="Return"><a href="javascript:history.go(-1);"><img src="./../../assets/img/return.png"></a></div>
                <div class="column">修改手机号</div>
                <div class="h20"></div>
            </div>
            <div class="GrayLine"></div>
            <div class="h20"></div>
            <div class="box">
                <div class="box-content">
                    <form  @submit.prevent="submit">
                        <div class="input_text ico1 clearfix">
                            <input type="tel" v-model="tel" name="" placeholder="请输入您的新手机号">
                        </div>
                        <div class="h20"></div>
                        <div class="input_text ico2 clearfix">
                            <input type="tel" v-model="code" name="" class="Code" placeholder="请输入验证码">
                            <div class="ObtainCode"><button type="button" @click="CountDown">获取验证码</button></div>
                        </div>
                        <div class="h50"></div>
                        <div class="input-bnt"><button type="submit">确认修改</button></div>
                        <div class="h20"></div>
                        <div class="modify_ts">如获取验证码失败，请致电<a href="tel:400-888-3456">400-888-3456</a></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Toast} from 'vant';
Vue.use(Toast)
export default {
    data () {
    return {
        content:'',
        show: false,
        tel:'',
        code:'',
    }
    },
    mounted(){
    this.content={
        phone:'187****0721',
        PasswordStatus:'已设置',        
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
           Toast.success('验证码已发送');      
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
          //this.$router.push({ path: '/ForgetPasswordResetPassword/'+ this.tel})
          
      }
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
    .modify_ts{ 
        text-align: center;
        color:#666666;
        font-size: .65rem;
        a{ color: #347CEA;}
        }

</style>



