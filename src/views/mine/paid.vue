<template>
    <div class="paid">
        <div class="top_fill"></div>
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p class="title">已付款</p>
        </div>
        <div class="container">
            <p class="date">2018-09-24</p>
            <div class="main">
                <div class="schedule">
                    <p class="title">
                        <span class="season">秋季</span>
                        <span class="lesson"><b>初一数学启思·卓越班</b></span>
                    </p>
                    <p class="text"><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                    <p class="text"><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30  2018/05/05-2018/11/17</p>
                    <p class="text"><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                    <div class="user">
                        <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                        <div class="sum">
                            <span class="yuan">￥</span>
                            <span class="num">4100.00</span>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <router-link to="/views/mine/orderDetail.vue">
                        <span>查看详情</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="container">
            <p class="date">2018-09-24</p>
            <div class="main">
                <div class="schedule">
                    <p class="title">
                        <span class="season">秋季</span>
                        <span class="lesson"><b>初一数学启思·卓越班</b></span>
                    </p>
                    <p class="text"><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                    <p class="text"><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30  2018/05/05-2018/11/17</p>
                    <p class="text"><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                    <div class="user">
                        <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                        <div class="sum">
                            <span class="yuan">￥</span>
                            <span class="num">4100.00</span>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <router-link to="/views/mine/orderDetail.vue">
                        <span>查看详情</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="bottomTip">已经到底了~</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.paid{
    position: fixed;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background-color: @common_bg_color;
    -webkit-overflow-scrolling: touch;  //解决页面在ios滑动卡顿问题
    .top_fill{
        height: 2.35rem;
    }
     .top{
        padding: .65rem 0 .6rem 0;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 998;
        .icon-fanhui{
            position: absolute;
            top: .65rem;
            left: 1%;
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
        background-color: #ffffff;
        margin: .1rem 0 .4rem 0;
        .date{
            height: 1.575rem;
            line-height: 1.575rem;
            margin-left: .525rem;
            color: #333333;
            font-size: .65rem;
        }
        .main{
            .schedule{
                margin: 0 .55rem 0 .525rem;
                padding: .3rem 0 .25rem 0;
                border-top: 1px solid #C1C1C1;
                border-bottom: 1px solid #C1C1C1;
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
            .bottom{
                text-align: right;
                padding: .575rem .55rem .4rem 0; 
                span{
                    display: inline-block;
                    width: 3.575rem;
                    height: 1.55rem;
                    border: 1px solid #2FB3F1;
                    border-radius: 5px;
                    color: #2FB3F1;
                    font-size: .7rem;  
                    text-align: center;
                    line-height: 1.55rem;
                }
            }
        }
    }
    .bottomTip{
        color: #666666;
        text-align: center;
        margin: .9rem 0 1rem 0;
        font-size: .6rem;
    }
}
</style>


