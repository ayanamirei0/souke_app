<template>
    <div class="waitPay">
        <div class="top">
            <router-link to="/views/mine/mine.vue">
                <img src="../../assets/img/return.png" alt="">
            </router-link>
            <span>待付款</span>
        </div>
        <div class="container">
            <p class="noticeBar">该订单将于01分59秒失效，课程将退回至购课袋</p>
            <div class="main">
                <div class="schedule">
                    <p class="title">
                        <span class="season">秋季</span>
                        <span class="lesson">初一数学启思·卓越班</span>
                    </p>
                    <p class="text"><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                    <p class="text"><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30  2018/05/05-2018/11/17</p>
                    <p class="text"><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                    <div class="user">
                        <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                        <span class="price">￥4100</span>
                    </div>
                </div>
                <ul class="list">
                    <li>
                        <span class="left">教材费用</span>
                        <span class="right">￥200.00</span>
                    </li>
                    <li>
                        <span class="left">优惠券</span>
                        <span class="right">-¥50.00</span>
                    </li>
                    <li>
                        <span class="left">优惠活动</span>
                        <span class="right">-￥300.00</span>
                    </li>
                </ul>
            </div> 
            <div class="main">
                <div class="schedule">
                    <p class="title">
                        <span class="season">秋季</span>
                        <span class="lesson">初一语文启思·卓越班</span>
                    </p>
                    <p class="text"><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                    <p class="text"><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30  2018/05/05-2018/11/17</p>
                    <p class="text"><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                    <div class="user">
                        <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                        <span class="price">￥4100</span>
                    </div>
                </div>
                <ul class="list">
                    <li>
                        <span class="left">教材费用</span>
                        <span class="right">￥200.00</span>
                    </li>
                    <li>
                        <span class="left">优惠券</span>
                        <span class="right">-¥50.00</span>
                    </li>
                    <li>
                        <span class="left">优惠活动</span>
                        <span class="right">-￥300.00</span>
                    </li>
                </ul>
            </div>
            <div class="bottomBar">
                <div class="left">
                    <span class="charge">实付款：</span>
                    <span class="money">￥7200.00</span>
                </div>
                <div class="right">
                    <span class="unOrder">取消订单</span>
                    <span class="pay">去支付</span>
                </div>
            </div>   
        </div>
        <div class="bottomTip">已经到底~</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
.waitPay{
    position: fixed;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background-color: #ECECED;
    .top{
        padding: 1.25rem 0 .6rem 0;
        text-align: center;
        background-color: #ffffff;
        position: relative;
        img{
            position: absolute;
            top: 1.58rem;
            left: .8rem;
            width: .5rem;
            height: .65rem;
        }
        span{
            color: #333333;
            font-size: .8rem;
            text-align: center;
        }
    }
    .container{
        background-color: #ffffff;
        .noticeBar{
            width: 100%;
            height: 1.575rem;
            line-height: 1.575rem;
            background-color: #FFECE5;
            color: #F8332D;
            font-size: .65rem;
            text-align: center;
        }
        .main{
            .schedule{
                padding: .675rem .55rem .6rem .525rem;
                .title{
                    .season{
                        display: inline-block;
                        width: 1.75rem;
                        height: .85rem;
                        color: #ffffff;
                        font-size: .55rem;
                        background-color: #F5932A;
                        text-align: center;
                        border-radius: 3px;
                        margin-right: .55rem;
                    }
                    .lesson{
                        color: #333333;
                        font-size: .8rem;
                    }
                }
                .text{
                    color: #333333;
                    font-size: .65rem;
                    text-align: left;
                    margin-top: .25rem;
                    .icon{
                        color: #BABABA;
                        margin-right: .375rem
                    }
                }
                .user{
                    display: flex;
                    justify-content: space-between;
                    margin-top: .25rem;
                    font-size: .65rem;
                    .icon{
                        margin-right: .375rem;
                    }
                    .price{
                        color: #FA5118;   
                        font-size: .7rem;
                    }
                }
            }
            .list{
                border-top: 1px solid #C1C1C1;
                border-bottom: 1px solid #C1C1C1;
                padding: .525rem .5rem .65rem .525rem;
                li{
                    width: 100%;
                    height: 1.325rem;
                    line-height: 1.325rem;
                    font-size: .65rem;
                    display: flex;
                    justify-content: space-between;
                    .left{
                        color: #333333;
                        
                    }
                    .right{
                        color: #666666;
                    }
                }
            }
        }
        .bottomBar{
            height: 2.425rem;
            line-height: 2.425rem;
            display: flex;
            justify-content: space-between;
            padding: 0 .5rem 0 .525rem;
            font-size: .7rem;
            .left{
                .charge{
                    color: #333333;   
                }
                .money{
                    color: #FA5118;
                }
            }
            .right{
                span{
                    display: inline-block;
                    width: 3.575rem;
                    height: 1.55rem;
                    border-radius: 5px;
                }
                .unOrder{
                    border: 1px solid #666666;
                    text-align: center;
                    line-height: 1.55rem;
                    color: #666666;
                }
                .pay{
                    background-color: #FA5118;
                    color: #ffffff;
                    text-align: center;
                    line-height: 1.55rem;
                }
            }   
        }
    }
    .bottomTip{
        color: #666666;
        font-size: .6rem;
        margin: .725rem 0 .75rem 0;
        text-align: center;
    }
}
</style>


