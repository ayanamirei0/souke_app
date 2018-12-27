<template>
    <div class="lessonBag">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span>购课袋</span>
            <span>
                <router-link to="/views/mine/lessonBagEdit.vue" class="edit">编辑</router-link>
            </span>
        </div>
        <div class="lesson_order">
            <img src="../../assets/img/selected.png" alt="">
            <div class="content">
                <p class="title">
                    <span class="season">秋季</span>
                    <span class="lesson">初一数学启思·卓越班</span>   
                </p>
                <p><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                <p><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30&nbsp;&nbsp;2018/05/05-2018/11/17</p>
                <p><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                <div class="user">
                    <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                    <div class="sum">
                        <span class="yuan">￥</span>
                        <span class="num">4100</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="lesson_order">
            <img src="../../assets/img/selected.png" alt="">
            <div class="content">
                <p class="title">
                    <span class="season">秋季</span>
                    <span class="lesson">初一数学启思·卓越班</span>
                </p>
                <p><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                <p><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30&nbsp;&nbsp;2018/05/05-2018/11/17</p>
                <p><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                <div class="user">
                    <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                    <div class="sum">
                        <span class="yuan">￥</span>
                        <span class="num">4100</span>
                    </div>
                </div>
            </div>
        </div>  
        <div class="bottom_fill"></div>
         <div class="bottom_tab">
            <p>
                <span class="total">合计:</span>
                <span class="yuan">￥</span>
                <span class="num">8200</span>
            </p>
            <p>
                <span class="select_lesson">继续选课</span>
                <router-link to="/views/mine/confirmOrder.vue">
                    <span class="pay">去结算(2)</span>
                </router-link>
            </p>
        </div>
        <!-- <pay-tabbar></pay-tabbar> -->
    </div>
</template>

<script>
// import PayTabbar from './payTabbar.vue'
export default {
    // components: {
    //     PayTabbar
    // }
}
</script>

<style lang="less" scoped>
.lessonBag{
    position: fixed;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background-color: @common_bg_color;
    .top{
        padding: .65rem .5rem .6rem .65rem;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
        }
        span{
            font-size: .8rem;
            color: #333333;
        }
        .edit{
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
            margin-left: 11%;
            padding: .5rem 0 .65rem 0;
            p{
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
            .title{
                color: #333333;
                font-size: .8rem;
                .season{
                    color: #ffffff;
                    font-size: .55rem;
                    display: inline-block;
                    width: 1.75rem;
                    height: .85rem;
                    line-height: .85rem;
                    background-color: #F5932A;
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
                position: relative;
                .sum{
                    position: absolute;
                    bottom: 0;
                    right: -1rem;
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
    }
    .bottom_fill{
        width: 100%;
        height: 2.375rem;
        margin-top: .5rem;
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
            position: relative;
            bottom: .09rem;
            right: .3rem;
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
        }  
    }
}
</style>


