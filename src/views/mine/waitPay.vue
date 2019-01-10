<template>
    <div class="waitPay">
        <div class="top_fill"></div>
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span>待付款</span>
        </div>
        <div class="container">
            <p class="noticeBar">该订单将于01分59秒失效，课程将退回至购课袋</p>
            <div class="main">
                <div class="schedule">
                    <p class="title">
                        <span class="season">秋季</span>
                        <span class="lesson"><b>初一数学启思·卓越班</b></span>
                    </p>
                    <p class="text"><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                    <p class="text"><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30&nbsp;&nbsp;2018/05/05-2018/11/17</p>
                    <p class="text"><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                    <div class="user">
                        <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                        <div class="sum">
                            <span class="yuan">￥</span>
                            <span class="num">4100.00</span>
                        </div>
                    </div>
                </div>
                <ul class="list">
                    <li>
                        <span class="left">教材费用</span>
                        <span class="right">￥200.00</span>
                    </li>
                    <li>
                        <span class="left">优惠券</span>
                        <span class="right">-&nbsp;¥&nbsp;50.00</span>
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
                        <span class="lesson"><b>初一语文启思·卓越班</b></span>
                    </p>
                    <p class="text"><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                    <p class="text"><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30&nbsp;&nbsp;2018/05/05-2018/11/17</p>
                    <p class="text"><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                    <div class="user">
                        <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                        <div class="sum">
                            <span class="yuan">￥</span>
                            <span class="num">4100.00</span>
                        </div>
                    </div>
                </div>
                <ul class="list">
                    <li>
                        <span class="left">教材费用</span>
                        <span class="right">￥200.00</span>
                    </li>
                    <li>
                        <span class="left">优惠券</span>
                        <span class="right">-&nbsp;¥&nbsp;50.00</span>
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
                    <span class="yuan">￥</span>
                    <span class="num">7200.00</span>
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
    background-color: @common_bg_color;
    .top_fill{
        height: 2.55rem;
    }
    .top{
        padding: .65rem 0 .6rem 0;
        text-align: center;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 998;
        .icon-fanhui{
            position: absolute;
            top: .8rem;
            left: 1%;
            font-size: 1.1rem;
            color: #333333;
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
                        line-height: .85rem;
                        color: #ffffff;
                        font-size: .55rem;
                        background-color: #F5932A;
                        text-align: center;
                        border-radius: 3px;
                        margin-right: .1rem;
                    }
                    .lesson{
                        color: #333333;
                        font-size: .9rem;
                        font-weight: 600;
                        position: relative;
                        top: .1rem;
                        left: 0;
                    }
                }
                .text{
                    color: #333333;
                    font-size: .65rem;
                    text-align: left;
                    margin-top: .25rem;
                    .icon{
                        color: #BABABA;
                        margin-right: .375rem;
                        position: relative;
                        top: .025rem;
                        left: 0;
                    }
                    .icon-xuesheng{
                        font-size: 1rem;
                        margin-right: .25rem;
                        position: relative;
                        top: .125rem;
                        left: 0;
                    }
                }
                .user{
                    display: flex;
                    justify-content: space-between;
                    margin-top: .25rem;
                    font-size: .65rem;
                    .icon{
                        margin-right: .375rem;
                        color: #BABABA;
                        position: relative;
                        top: .1rem;
                        left: 0;
                    }
                    .icon-yonghu{
                        font-size: .35rem;
                        position: relative;
                        top: .12rem;
                        left: 0;
                    }
                    .sum{
                        span{
                            color: #FA5118;   
                        }
                        .yuan{
                            font-size: .65rem;
                        }
                        .num{
                            font-size: .9rem;
                            margin-left: -.2rem;
                            font-weight: 600;
                        }
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
                .yuan{
                    color: #FA5118;
                    font-size: .7rem;
                }
                .num{
                    color: #FA5118;
                    font-size: .9rem;
                    margin-left: -.2rem;
                    font-weight: 600;
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
                    border: 1px solid #999999;
                    text-align: center;
                    line-height: 1.55rem;
                    color: #666666;
                    margin-right: .3rem;
                }
                .pay{
                    background-color: #FA5118;
                    color: #ffffff;
                    text-align: center;
                    line-height: 1.55rem;
                    border: 1px solid #FA5118;
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


