<template>
    <div class="mine">
        <div class="head">
            <div class="top">
                <span class="menu">我的</span>
                <span class="mall" @click="Toast()">积分商城</span>
            </div>
            <router-link to="/views/mine/personInfo.vue" class="headInfo">
                <img src="../../assets/img/profile.png" alt="" class="img">
                <div class="data">
                    <p class="tel">187****0721</p>
                    <div class="account">
                        <img src="../../assets/img/wd.png" alt="">
                        <span class="num">S18092700256</span>
                    </div>
                </div>
                <i class="go iconfont icon-tiem-right"></i>
            </router-link>
            <!-- <div class="login">
                <img src="../../assets/img/profile.png" alt="" class="img">
                <p class="title">点击登录</p>
                <i class="go iconfont icon-tiem-right"></i> 
            </div> -->
        </div>
        <div class="main">
            <div class="nav">
                <router-link to="/views/mine/lessonBag.vue">
                    <div class="shop">
                        <div class="img">
                            <img src="../../assets/img/shop.png" alt="">
                        </div>
                        <p>购课袋</p>
                    </div>
                </router-link>
                <router-link to="/views/mine/waitPay.vue">
                    <div class="waitPay">
                        <div class="img">
                            <span class="alert">1</span>
                            <img src="../../assets/img/waitPay.png" alt="">
                        </div>
                        <p>待付款</p>
                    </div>
                </router-link>
                <router-link to="/views/mine/paid.vue">
                    <div class="paid">
                        <div class="img">
                            <img src="../../assets/img/paid.png" alt="">
                        </div>
                        <p>已付款</p>
                    </div>
                </router-link> 
            </div>
            <router-link to="/views/mine/coupon.vue" class="item">
                <div class="coupon">
                    <img src="../../assets/img/coupons.png" alt="">
                    <span>优惠券</span>
                </div>
                <i class="go iconfont icon-tiem-right"></i>
            </router-link>
            <div class="middle">
                <router-link to="/MyCourse" class="myLesson">
                    <div class="left">
                        <img src="../../assets/img/lesson.png" alt="">
                        <span>我的课程</span>
                    </div>
                    <i class="go iconfont icon-tiem-right"></i>
                </router-link>
                <router-link to="/OfflineOrder" class="offline">
                    <div class="left">
                        <img src="../../assets/img/order.png" alt="">
                        <span>线下订单</span>
                    </div>
                    <i class="go iconfont icon-tiem-right"></i>
                </router-link>
                <div class="line"></div>
            </div>
            <router-link to="/AccountManagement" class="set">
                <div class="left">
                    <img src="../../assets/img/set.png" alt="">
                    <span>帐号管理</span>
                </div>
                <i class="go iconfont icon-tiem-right"></i>   
            </router-link>
        </div>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            show_mall: false
        }
    },
    methods: {
        Toast() {
            this.$toast("积分商城等待上线，敬请期待");
        }
    }
}
</script>

<style lang="less" scoped>
.mine{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #f4f4f4;
    .head{
        position: relative;
        .top{
            width: 100%;
            height: 4.6rem;
            background-color: #2FB3F1;
            color: #ffffff;
            display: flex;
            justify-content: space-between;
            .menu{
                font-size: .9rem;
                margin: .725rem 0 0 .975rem;
            }
            .mall{
                font-size: .75rem;
                margin: .875rem .525rem 0 0; 
            }
        }
        .headInfo{
            position: absolute;
            top: 52%;
            left: 3%;
            width: 17.65rem;
            height: 4.275rem;
            border-radius: 16px;
            display: flex;
            flex-wrap: wrap;
            background-color: #ffffff;
            box-shadow: 0 3px 0 rgba(47, 179, 241, .1);
            .img{
                width: 2.675rem;
                height: 2.7rem;
                margin: .75rem .6rem .825rem .775rem;
            }
            .data{
                padding: 1rem 0 1.025rem 0;
                width: 69%;
                .tel{
                    color: #333333;
                    font-size: .8rem;
                    font-family: 'PingFang-SC-Regular';
                }
                .account{
                    img{
                        width: .8rem;
                        height: .8rem;
                        vertical-align: middle;
                    }
                    .num{
                        color: #666666;
                        font-size: .6rem;
                    }
                }
            } 
            .go{
                position: relative;
                top: 35%;
                left: 0;
                font-size: 1rem;
                color: #666666;
            } 
        }
        .login{
            position: absolute;
            top: 52%;
            left: 3%;
            width: 17.65rem;
            height: 4.275rem;
            border-radius: 16px;
            display: flex;
            flex-wrap: wrap;
            background-color: #ffffff;
            .img{
                width: 2.675rem;
                height: 2.7rem;
                margin: .75rem .6rem .825rem .775rem;
            }
            .title{
                padding: 1rem 0 1.025rem 0;
                width: 69%;
                line-height: 2.1rem;
                font-size: .8rem;
                color: #333333;
            }
            .go{
                position: relative;
                top: 35%;
                left: 0;
                font-size: 1rem;
            } 
        }
    }
    .main{
        .go{
            font-size: 1rem;
            color: #666666;
            position: relative;
            top: .1rem;
            right: 1.05rem;
        }
        .nav{
            display: flex;
            justify-content: space-around;
            padding: 3rem 0 .6rem 0;
            background-color: #ffffff;
            img{
                width: 2.25rem;
                height: 2.25rem;
            }
            p{
                color: #333333;
                font-size: .6rem;
                text-align: center;
            }
            .waitPay{
                .img{
                    position: relative;
                    .alert{
                        display: inline-block;
                        width: .9rem;
                        height: .9rem;
                        line-height: .9rem;
                        border-radius: 50%;
                        background-color: #F74749;
                        color: #ffffff;
                        text-align: center;
                        font-size: .6rem;
                        position: absolute;
                        top: -0.3rem;
                        right: -0.2rem;
                    }
                }
            }
        }
        .item{
            display: flex;
            justify-content: space-between;
            background-color: #ffffff;
            margin-top: .3rem;
            height: 2.275rem;
            line-height: 2.275rem;
            img{
                width: .95rem;
                height: .9rem;
                vertical-align: middle;
                margin-left: .975rem;
            }
            span{
                color: #333333;
                font-size: .75rem;
                margin-left: .1rem;
            }
        }
        .middle{
            background-color: #ffffff;
            margin-top: .3rem;
            position: relative;
            .myLesson{
                height: 2.275rem;
                line-height: 2.275rem;
                display: flex;
                justify-content: space-between;
                img{
                    width: .95rem;
                    height: .8rem;
                    vertical-align: middle;
                    margin-left: .975rem;
                }
                span{
                    color: #333333;
                    font-size: .75rem;
                    margin-left: .1rem;
                }
            }
            .offline{
                height: 2.275rem;
                line-height: 2.275rem;
                display: flex;
                justify-content: space-between;
                img{
                    width: .85rem;
                    height: .85rem;
                    vertical-align: middle;
                    margin-left: .975rem;
                }
                span{
                    color: #333333;
                    font-size: .75rem;
                    margin-left: .1rem;
                }
            }
            .line{
                width: 17rem;
                height: .05rem;
                background-color: #ECECEE;
                position: absolute;
                top: 51%;
                left: 5%;
            }
        }
        .set{
            margin-top: .3rem;
            height: 2.275rem;
            line-height: 2.275rem;
            display: flex;
            justify-content: space-between;
            background-color: #ffffff;
            img{
                width: .9rem;
                height: .85rem;
                vertical-align: middle;
                margin-left: .975rem;
            }
            span{
                color: #333333;
                font-size: .75rem;
                margin-left: .1rem;
            }
        }
    }   
}
</style>


