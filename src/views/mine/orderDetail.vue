<template>
    <div class="orderDetail">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p class="title">订单详情</p>
        </div>
        <div class="container">
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
                    <span class="continue">继续报课</span>
                </div>
            </div>
            <ul class="costInfo">
                <li class="item">
                    <span>应缴费用</span>
                    <span>￥4100.00</span>
                </li>
                <li class="item">
                    <span>教材费用</span>
                    <span>￥200.00</span>
                </li>
                <li class="item">
                    <span>优惠券</span>
                    <span>-￥50.00</span>
                </li>
                <li class="item">
                    <span>优惠活动</span>
                    <span>-￥150.00</span>
                </li>
                <li class="item">
                    <span>学费总价</span>
                    <span>￥4100.00</span>
                </li>
            </ul>
            <p class="realPay">
                <span class="pay">实付款</span>
                <span class="money">￥4100.00</span>
            </p>
            <ul class="bottom">
                <li>
                   商户订单号：SKWP201810115BBEFD5A2C9
                </li>
                <li>
                    订单编号：00001809282003247108
                </li>
                <li>
                    支付方式：微信支付
                </li>
                <li>
                    创建时间：2018-09-28 20:04:00
                </li>
                <li>
                    付款时间：2018-09-28 20:03:59
                    <span class="btn" @click="showPopup">申请退款</span>
                </li>
            </ul>
            <van-popup v-model="showTip" class="tip">
                <p class="title">提示</p>
                <div class="content">
                    <p>暂未开通退款功能详询</p>
                    <p class="tel">400-888-3456</p>
                </div>
                <p class="btn" @click="closeTip">确认</p>
            </van-popup>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTip: false
        }
    },
    methods: {
        showPopup() {
            this.showTip = true;
        },
        closeTip() {
            this.showTip = false;
        }
    }
}
</script>

<style lang="less" scoped>
.orderDetail{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #ECECED;
    .top{
        padding: 1.25rem 0 .6rem 0;
        background-color: #ffffff;
        position: relative;
        .icon-fanhui{
            position: absolute;
            top: 1.3rem;
            left: .8rem;
            font-size: 1.1rem;
            color: #333333;
        }
        .title{
            color: #333333;
            font-size: .8rem;
            text-align: center;
        }
    }
    .container{
        .schedule{
            padding: .3rem .5rem .725rem .5rem;
            background-color: #ffffff;
            border-top: 1px solid #C2C2C2;
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
                    color: #BABABA;
                }
                .continue{
                    color: #2FB3F1;   
                    font-size: .7rem;
                    display: inline-block;
                    width: 3.575rem;
                    height: 1.325rem;
                    border: 1px solid #2FB3F1;
                    border-radius: 5px;
                    line-height: 1.325rem;
                    text-align: center;
                }
            }
        }
        .costInfo{
            margin-top: .25rem;
            padding: 0 .5rem 0 .525rem;
            background-color: #ffffff;
            li{
                display: flex;
                justify-content: space-between;
            }
            .item{
                height: 1.275rem;
                line-height: 1.275rem;
                color: #666666;
                font-size: .65rem;
            }
        }
        .realPay{
            display: flex;
            justify-content: space-between;
            height: 1.9rem;
            line-height: 1.9rem;
            padding: 0 .5rem 0 .525rem;
            background-color: #ffffff;
            border-top: 1px solid #CDCDCD;
            .pay{
                color: #333333;
                font-size: .75rem;
            }
            .money{
                color: #FA5118;
                font-size: .65rem;
            }
        }
        .bottom{
            margin-top: .25rem;
            background-color: #ffffff;
            padding: .3rem .5rem 1rem .525rem;
            li{
                color: #666666;
                font-size: .65rem;
                padding-top: .425rem;
                .btn{
                    display: inline-block;
                    width: 3.575rem;
                    height: 1.325rem;
                    line-height: 1.325rem;
                    text-align: center;
                    border: 1px solid #666666;
                    border-radius: 5px;
                    position: relative;
                    top: -.1rem;
                    right: -4.1rem;
                }
            }
        }
        .tip{
            width: 14.075rem;
            height: 9.15rem;
            text-align: center;
            .title{
                color: #333333;
                font-size: .9rem;
                height: 2.5rem;
                line-height: 2.5rem;   
            }
            .content{
                color: #333333;
                font-size: .7rem;
                border-top: 1px solid #DADADA;
                padding-top: .8rem;
                .tel{
                    color: #327BEA;
                    padding-bottom: 1.6rem;
                }
            }
            .btn{
                border-top: 1px solid #DADADA;
                color: #2372E8;
                font-size: .8rem;
                padding: .6rem 0 .5rem 0;
            }
        }
    }
}
</style>


