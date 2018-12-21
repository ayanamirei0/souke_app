<template>
    <div class="ModifyPassword">
        <div class="white-bg">
            <div class="SearchLessonsDetails_head clearfix">
                <div class="h36"></div>
                <div class="Return"><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></div>      <!-- lihongliang修改2018-12-20 -->
                <div class="column">修改密码</div>
                <div class="h20"></div>
            </div>
            <div class="GrayLine"></div>
            <div class="h20"></div>
            <div class="box">
                <div class="box-content">
                    <form  @submit.prevent="submit">
                        <div class="input_text ico2 clearfix">
                            <input type="password" v-model="pas" name="" placeholder="请输入6-18位密码，建议数字和字母组合">
                        </div>
                        <div class="h20"></div>
                        <div class="input_text ico2 clearfix">
                            <input type="password" v-model="pas2" name="" placeholder="请再次输入密码">
                        </div>
                        <div class="h50"></div>
                        <div class="input-bnt"><button type="submit">确认修改</button></div>
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
        pas:'',
        pas2:'',
    }
    },
    mounted(){
    //Toast('操作已超过今日限制3次，请明日再试');      
  },
  methods:{    
        submit(){
            //console.log(this.$route.params.tel)
          if(this.pas==""){
            Toast('请输入新密码');
            return false
          }else{
              let reg =/^[0-9A-Za-z]{6,18}$/;
              if(!reg.test(this.pas)){
                Toast('请设置6-18位密码');  
                return false 
              }
          }
          if(this.pas2==""){
            Toast('请再次输入密码');
            return false
          }else{
              if(this.pas!=this.pas2){
               Toast('两次输入的密码不一致'); 
               return false 
              }
          }
          //this.$router.push({ path: '/PerfectInformation' })
          
      }
  } 
}
</script>
<style lang="less" scoped>
.ModifyPassword{
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
    position: fixed;
    .form-text{ text-align: left;}
    .csrq{ text-align: right; color:#666666; box-sizing: border-box; background: none;}
    .icon-tiem-right:before{ float: right; color: #666666; font-size: 1rem;}
    .SearchLessonsDetails_head{ 
        padding: 0 0.5rem; 
        background: #fff;
        .Return{        //lihongliang 修改 2018-12-20
            .icon-fanhui{
                font-size: 1.1rem;
                position: relative;
                bottom: .13rem;
                left: 0;
            }
        }
    }
    .input-bnt{ text-align: center;}
    .GrayLine{ height: 1px; background: #C2C2C2; overflow: hidden; clear: both;}
    .modify_ts{ 
        text-align: center;
        color:#666666;
        font-size: .65rem;
        a{ color: #347CEA;}
    }
}
    
</style>



