<template>
    <div class="order">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span>确认订单</span>
        </div>
        <div class="confirm_order">
            <div class="content">
                <p class="title">
                    <span class="season">秋季</span>
                    <span class="lesson">初一数学启思·卓越班</span>
                </p>
                <p><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                <p><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30  2018/05/05-2018/11/17</p>
                <p><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
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
                    <router-link to="/views/mine/selectCoupon.vue" class="item">
                        <span class="left">使用优惠券</span>
                        <div class="right">
                            <span>-￥50.00</span>
                            <i class="go iconfont icon-tiem-right"></i>    
                        </div>
                    </router-link>
                </li>
                <li>
                    <div class="item" @click="changePopup">
                        <span class="left">优惠活动</span>
                        <div class="right">
                            <span>-￥550.00</span>
                            <i class="go iconfont icon-tiem-right"></i>
                        </div>
                    </div>
                    <van-popup v-model="popup_show" position="bottom" class="offer_detail">
                        <ul>
                            <li>
                                <p class="title">优惠详情</p>
                            </li>
                            <li v-for="(item, index) in radioList" :key="index" class="list">
                                <span>{{item}}</span>
                                <img src="../../assets/img/select.png" alt="" class="select" @click="select(index)">
                                <img src="../../assets/img/selected.png" alt="" v-show="selectedNum==index" class="select">
                            </li>
                            <li>
                                <p class="confirm" @click="closePopup">确定</p>
                            </li>
                        </ul>
                    </van-popup>
                </li>
                <li>
                    <div class="item" @click="changeBook">
                        <span class="left">选择教材</span>
                        <div class="selected"  >
                            <span>已选择</span>
                            <i class="go iconfont icon-tiem-right"></i>
                        </div>
                    </div>
                    <van-popup v-model="showBook" position="bottom" class="textBook">
                        <p class="title">教材详情</p>
                        <div class="content" v-for="(item, index) in bookNum" :key="index">
                            <div class="cost">
                                <span class="bookCost">教材费用：</span>
                                <span class="money">￥39.00</span>
                            </div>
                            <div class="detail">
                                <div class="text">
                                    <p>
                                        <span>教材编号：</span>
                                        <span>{{item}}</span>
                                    </p>
                                    <p>
                                        <span>教材名称：</span>
                                        <span>《初一数学启思·卓越班》(教材包)(2018秋季）</span>
                                    </p>
                                    <p class="notice">注意：此教材为校区必选教材</p>
                                </div>
                                <img src="../../assets/img/select.png" alt="" v-show="!checkBox.includes(index)" @click="multiSelect(index)" class="select">
                                <img src="../../assets/img/selected.png" alt="" v-show="checkBox.includes(index)" @click="multiSelect(index)" class="select">
                            </div>    
                        </div> 
                        <p class="bottomConfirm" @click="closePopup">确定</p>
                    </van-popup>
                </li>
            </ul>
        </div>
        <div class="cost">
            <p class="title">缴费明细</p>
            <ul>
                <li>
                    <span>应缴金额</span>
                    <span>￥4100.00</span>
                </li>
                <li>
                    <span>教材费用</span>
                    <span>￥200.00</span>
                </li>
                <li>
                    <span>优惠金额</span>
                    <span>-￥600.00</span>
                </li>
            </ul>
        </div>
        <div class="pay_way">
            <p>支付方式 </p>
            <div class="detail">
                <div class="wx">
                    <img src="../../assets/img/wx.png" alt="">
                    <span>微信支付</span>
                </div>
                <img src="../../assets/img/selected.png" alt="" class="selected">
            </div>
        </div>
        <div class="agreement">
            <span class="check" @click="check">
                <img src="../../assets/img/tick.png" alt="" v-show="show">
            </span>
            <span class="text">我已阅读并同意<router-link to="/views/mine/pact.vue" class="rule">《营销协议》</router-link></span>   
        </div>
        <div class="bottom_fill"></div>
        <div class="bottom_tab">
            <p>
                <span class="total">实付款:</span><span class="price">￥8200.00</span>
            </p>
            <p>
                <router-link to="" class="select_lesson">继续选课</router-link>
                <router-link to="/views/mine/paySuccess.vue">
                    <span class="pay">立即支付</span>
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            popup_show: false,
            selectedNum: '',
            radioList: ['两科连报优惠九八折', '两科连报优惠九八折', '两科连报优惠九八折', '两科连报优惠九八折'],
            showBook: false,
            checkBox: [],
            bookNum: ['1180300000201', '1180300000203']
        }
    },
    methods: {
        check() {
            this.show = !this.show;
        },
        changePopup() {
            this.popup_show = true;
        },
        select(i) {
            console.log(i);
            this.selectedNum = i;
        },
        changeBook() {
            this.showBook = true;
        },
        multiSelect(i) {         //多选
            let index = this.checkBox.indexOf(i);
            if(index > -1){     //如果已经选中，那就取消选中，如果没有，则选中
                this.checkBox.splice(index,1);
            }else{
                this.checkBox.push(i);
            }
        },
        closePopup() {
            this.popup_show = false;
            this.showBook = false;
        }
    }
}
</script>

<style lang="less" scoped>
.order{
    position: fixed;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background-color: @common_bg_color;
    .top{
        text-align: center;
        background-color: #ffffff;
        padding: .65rem 0.5rem 0.6rem 0.3rem;
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
            position: relative;
            top: 0;
            right: 6rem;
        }
    }
    .confirm_order{
        background-color: #ffffff;
        margin-top: .5rem;
        .content{
            padding: .675rem .575rem .6rem .5rem;
            height: 6.725rem;
            p{
                margin-top: .45rem;
                color: #333333;
                font-size: .65rem;
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
            .title{
                color: #333333;
                font-size: .8rem;
                margin: 0;
                .season{
                    display: inline-block;
                    width: 1.75rem;
                    height: .875rem;
                    line-height: .875rem;
                    background-color: #F5932A;
                    color: #ffffff;
                    font-size: .55rem;
                    text-align: center;
                    border-radius: 3px;
                    margin-right: .1rem;
                }
                .lesson{
                    color: #333333;
                    font-size: .8rem;
                    font-weight: 600;
                    position: relative;
                    top: .1rem;
                    left: 0;
                }
            }
            .user{
                display: flex;
                justify-content: space-between;
                .sum{
                    span{
                        color: #FA5118;  
                    }
                    .yuan{
                        font-size: .65rem;
                    }
                    .num{
                        font-size: .9rem;
                        font-weight: 600;
                        margin-left: -.2rem;
                    }
                }
            }
        }
        .list{
            li{
                width: 100%;
                height: 2.25rem;
                line-height: 2.25rem;
                position: relative;
                border-top: 1px solid #C1C1C1;
                .item{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    .selected{
                        position: relative;
                        .go{
                            position: absolute;
                            top: 0.13rem;
                            right: 0.48rem;
                        }
                    }
                }
                i{
                    position: absolute;
                    top: .07rem;
                    right: .48rem;
                }
                .left{
                    margin-left: .5rem;
                    color: #333333;
                    font-size: .65rem;
                }
                .right{
                    font-size: .65rem;
                    span{
                        margin-right: 1.225rem;
                        color: #FA5118;
                    }
                }
                .offer_detail{
                    ul{
                        li{
                            height: 2.25rem;
                            color: #333333;
                            font-size: .8rem;
                            line-height: 2.25rem;
                            .title{
                                text-align: center;
                            }
                            .confirm{
                                text-align: center;
                                width: 100%;
                                background-color: #2DB3F2;
                                color: #ffffff;
                            }   
                        }
                        .list{
                            span{
                                padding-left: .525rem;
                            }
                            img{
                                width: 1.05rem;
                                height: 1.05rem;
                                vertical-align: middle;
                                position: absolute;
                                top: 25%;
                                right: .25rem;
                            }
                        }
                    }
                }
                .selected{
                    span{
                        margin-right: 1.225rem;
                        color: #666666;
                        font-size: .65rem;
                    }
                }
                .textBook{
                    .title{
                        color: #333333;
                        font-size: .8rem;
                        text-align: center;
                    }
                    .content{
                        line-height: normal;
                        border-top: 1px solid #CDCDCD;
                        height: 5rem;
                        .cost{
                            font-size: .75rem;
                            margin: 0;
                            .bookCost{
                                color: #333333;
                            }
                            .money{
                                color: #FA5118;
                            }
                        }
                        .detail{
                            position: relative;
                            .text{
                                p{
                                    color: #666666;
                                    font-size: .6rem;
                                }
                                .notice{
                                    color: #D02727;
                                    font-size: .55rem;
                                }
                            }  
                            .select{
                                width: 1.05rem;
                                height: 1.05rem;
                                position: absolute;
                                top: 5%;
                                right: 1%;
                            }
                        }   
                    }
                    .bottomConfirm{
                        text-align: center;
                        color: #ffffff;
                        background-color: #2FB3F1;
                        font-size: .8rem;
                    }
                }
            }
        }
    }
    .cost{
        background-color: #ffffff;
        margin-top: .5rem;
        .title{
            border-bottom: 1px solid #CDCDCD;
            color: #333333;
            font-size: .75rem;
            padding: .575rem 0 .325rem .525rem;
            font-weight: 500;
        }
        ul{
            li{
                display: flex;
                justify-content: space-between;
                padding: .45rem .475rem .2rem .525rem;
                span{
                    color: #333333;
                    font-size: .65rem;
                }
            }
        }
    }
    .pay_way{
        margin-top: .5rem;
        background-color: #ffffff;
        p{
            border-bottom: 1px solid #CDCDCD;
            padding: .5rem 0 .55rem .525rem;
            font-size: .75rem;
            font-weight: 500;
        }
        .detail{
            display: flex;
            justify-content: space-between;
            padding: .1rem 0 .1rem 0;
            .wx{
                img{
                    width: 1.55rem;
                    height: 1.25rem;
                    vertical-align: middle;
                    padding: .575rem .1rem .525rem .525rem;
                }
                span{
                    color: #333333;
                    font-size: .75rem;
                }
            }
            .selected{
                width: .95rem;
                height: .95rem;
                margin: 4% .525rem 0 0;
            }
        }
    }
    .agreement{
        background-color: #ffffff;
        margin-top: .5rem;
        padding: .475rem 0 .5rem .6rem;
        position: relative;
        border-bottom: 1px solid #CDCDCD;
        .check{
            display: inline-block;
            width: .55rem;
            height: .55rem;
            border: 1px solid #8E8E8E;
            position: relative;
            img{
                width: .5rem;
                height: .4rem;
                position: absolute;
                top: .1rem;
                left: .025rem;
            }
        }
        .text{
            position: absolute;
            top: .8rem;
            left: 1.6rem;
            color: #333333;
            font-size: .6rem;
            .rule{
                color: #2FB3F1;
            }
        }   
    }
    .bottom_fill{
        width: 100%;
        height: 2.375rem;
    }
    .bottom_tab{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 2.375rem;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 2.375rem;
        .total{
            color: #333333;
            font-size: .8rem;
            margin-left: .525rem;
        }
        .price{
            color: #FA5118;
            font-size: .8rem;
        }
        .select_lesson{
            display: inline-block;
            width: 3.575rem;
            height: 1.55rem;
            line-height: 1.55rem;
            text-align: center;
            border-radius: 6px;
            border: 1px solid #2FB3F1;
            color: #2FB3F1;
            font-size: .7rem;
        }
        .pay{
            display: inline-block;
            width: 6.025rem;
            height: 2.45rem;
            background-color: #FA5118;
            color: #ECECED;
            font-size: .8rem;
            text-align: center;
            letter-spacing: .05rem;
            font-weight: 600;
        }
    }
}
</style>


