<template>
    <div class="lesson">
        <div class="top">
            <router-link to="/views/mine/mine.vue">
                <img src="../../assets/img/return.png" alt="">
            </router-link>
            <span>购课袋</span>
            <span>
                <router-link to="" class="complete">完成</router-link>
            </span>
        </div>
        <div class="lesson_order">
            <img src="../../assets/img/select.png" alt="" v-show="check1" @click="change1">
            <img src="../../assets/img/selected.png" alt="" v-show="!check1" @click="change1">
            <div class="content">
                <p class="title"><span class="season">秋季</span>初一数学启思·卓越班</p>
                <p><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                <p><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30  2018/05/05-2018/11/17</p>
                <p><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                <div class="user">
                    <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                    <span class="price">￥4100</span>
                </div>
            </div>
        </div>
        <div class="lesson_order">
            <img src="../../assets/img/select.png" alt="" v-show="check2" @click="change2">
            <img src="../../assets/img/selected.png" alt="" v-show="!check2" @click="change2">
            <div class="content">
                <p class="title"><span class="season">秋季</span>初一数学启思·卓越班</p>
                <p><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                <p><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30  2018/05/05-2018/11/17</p>
                <p><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                <div class="user">
                    <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                    <span class="price">￥4100</span>
                </div>
            </div>
        </div>
        <div class="tabbar">
            <p class="check" @click="checkAll">
                <img src="../../assets/img/select.png" alt="" v-show="check">
                <img src="../../assets/img/selected.png" alt="" v-show="!check">
                <span>全选</span>
            </p>
            <span class="pay">删除</span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            check1: true,
            check2: true,
            check: true
        }
    },
    methods: {
        change1() {
            this.check1 = !this.check1;
        },
        change2() {
            this.check2 = !this.check2;
        },
        checkAll(){
            if(this.check1 != this.check2){
                this.check1 = false;
                this.check2 = false;
                this.check = false;
            }else{
                this.check1 = !this.check1;
                this.check2 = !this.check2;
                this.check = ! this.check;
            }    
        }
    }
}
</script>

<style lang="less" scoped>
.lesson{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #EFEFEF;
    .top{
        padding: 1.25rem .5rem .6rem .8rem;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        img{
            width: .5rem;
            height: .65rem;
        }
        span{
            font-size: .8rem;
            color: #333333;
        }
        .complete{
            font-size: .7rem;
            color: #2FB3F1;
        }
    }
    .lesson_order{
        margin-top: .45rem;
        display: flex;
        justify-content: flex-start;
        background-color: #ffffff;
        position: relative;
        img{
            position: absolute;
            top: 45%;
            left: 3%;
            width: 1.05rem;
            height: 1.05rem;
        }
        .content{
            margin-left: 10%;
            padding: .5rem 0 .65rem 0;
            p{
                color: #333333;
                font-size: .65rem;
                text-align: left;
                margin-top: .25rem;
            }
            .icon{
                color: #BABABA;
                margin-right: .375rem
            }
            .title{
                color: #333333;
                font-size: .8rem;
                .season{
                    color: #ffffff;
                    font-size: .55rem;
                    display: inline-block;
                    width: 1.75rem;
                    height: .85rem;
                    background-color: #F5932A;
                    text-align: center;
                    border-radius: 3px;
                    margin-right: .55rem;
                }
            }
            .user{
                display: flex;
                justify-content: space-between;
                color: #FA5118;   
                .price{
                    font-size: .65rem;
                }
            }
        }
    }
    .tabbar{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 2.375rem;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 2.375rem;
        .check{
            padding-left: 3%;
            img{
                width: 1.05rem;
                height: 1.05rem;
                vertical-align: middle;
            }
            span{
                color: #333333;
                font-size: .8rem;
            }
        }
        .pay{
            display: inline-block;
            width: 6.025rem;
            height: 2.45rem;
            background-color:rgba(250,81,24,.6);
            color: #ECECED;
            font-size: .8rem;
            text-align: center;
            letter-spacing: .05rem;
        }
    }    
}
</style>


