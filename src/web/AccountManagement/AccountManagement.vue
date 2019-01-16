<template>
    <div class="searchLessons-box">
        <div class="white-bg">
            <div class="SearchLessonsDetails_head clearfix">
                <div class="h36" style="height:.8rem;"></div>
                 <div class="Return"><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></div>      <!-- lihongliang修改2018-12-20 -->
                <div class="column">账号管理</div>
                <div class="h20" style="height:.4rem;"></div>
            </div>
            <div class="GrayLine"></div>
            <!-- <div class="h36"></div>    lihongliang修改2018-12-20     -->
            <div class="box">
                <div class="box-content">
                        <div class="form-content clearfix">
                            <div class="form-text fl w130 h40 mr54">手机号</div>
                            <div class="form-data fl w442">
                                <router-link to="ModifyPhone" class="csrq iconfont icon-tiem-right">{{content.MemberName}}</router-link>
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
import Cookies from 'js-cookie'
import { Dialog} from 'vant';
Vue.use(Dialog)
export default {
    data () {
    return {
        content:'',
        show: false
    }
    },
    mounted(){
    let CardNo = Cookies.get("CardNo");
    this.content={
        MemberName:CardNo.substr(0,3)+"****"+CardNo.substr(7),
        PasswordStatus:'已设置',        
    };
    
    
  },
  methods:{
        onClickAlert() {
            // Dialog.confirm({
            // message: '确认退出？',
            // className:'SignOut'
            // }).then(() => {
            //     Cookies.remove('CardNo');
            //     this.$router.push({ path: '/index' })
            //     //console.log('确认')
            // }).catch(() => {
            //     //console.log('取消')
            // });
            var SignOut=confirm('确认退出？')
            if(SignOut){
                Cookies.remove('CardNo');
                this.$router.push({ path: '/index' })
            }else{
               console.log('取消') 
            }
        },
  } 
}
</script>
<style lang="less" scoped>
    
    .form-text{ text-align: left;}
    .csrq{ text-align: right; color:#666666; box-sizing: border-box; background: none;}
    .icon-tiem-right:before{ float: right; color: #666666; font-size: 1rem;}
    .SearchLessonsDetails_head{ 
        padding: 0 0.5rem; 
        background: #fff;
        .Return{        //lihongliang 修改 2018-12-20
            .icon-fanhui{
                    font-size: 1.1rem;
            }
        }
    }
    .input-bnt{ text-align: center;}
    .GrayLine{ height: 1px; background: #C2C2C2; overflow: hidden; clear: both;}
</style>



