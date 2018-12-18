<template>
    <div class="paid">
        <div class="top">
            <img src="../../assets/img/return.png" alt="" @click="$router.go(-1)">
            <p class="title">已付款</p>
        </div>
        <div class="container">
            <p class="date">2018-09-24</p>
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
    background-color: #ECECED;
     .top{
        padding: 1.25rem 0 .6rem 0;
        background-color: #ffffff;
        position: relative;
        img{
            position: absolute;
            top: 1.58rem;
            left: .8rem;
            width: .5rem;
            height: .65rem;
        }
        .title{
            color: #333333;
            font-size: .8rem;
            text-align: center;
        }
    }
    .container{
        background-color: #ffffff;
        margin: .125rem 0 .4rem 0;
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
                    .price{
                        color: #FA5118;   
                        font-size: .7rem;
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


