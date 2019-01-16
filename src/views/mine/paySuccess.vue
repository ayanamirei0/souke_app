<template>
    <div class="paySuccess">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span class="title">支付成功</span>
        </div>
        <div class="container">
            <div class="tip">
                <div class="detail">
                    <img src="../../assets/img/selected.png" alt="">
                    <span>订单支付成功</span>
                </div>
                <p>订单编号:123456789123456</p>
                <p>支付方式：微信支付</p>
            </div>
            <div class="middle">
                <p>实付款：￥7200.00</p>
                <div class="btn">
                    <span class="left">查看订单</span>
                    <span class="right">继续选课</span>
                </div>
            </div>
            <div class="hot_lesson">
                <div class="title">
                    <p>热门课程</p>
                </div>
                <div class="list">
                    <div class="item">
                        <img src="../../assets/img/15.png" alt="">
                        <p class="text">巨人大语文</p>
                    </div>
                    <div class="item special">
                        <img src="../../assets/img/15.png" alt="">
                        <p class="text">思维训练精英班</p>
                    </div>
                    <div class="item">
                        <img src="../../assets/img/15.png" alt="">
                        <p class="text">巨人作文启航班</p>
                    </div>
                    <div class="item special">
                        <img src="../../assets/img/15.png" alt="">
                        <p class="text">思维训练培优班</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.paySuccess{
    background-color: #ffffff;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    .top{
        text-align: center;
        background-color: #ffffff;
        padding: .65rem 0.5rem 0.6rem 0.3rem;
        border-bottom: 1px solid #C1C1C1;
        position: relative;
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
            position: absolute;
            top: .8rem;
            left: 1%;
        }
        .title{
            font-size: .8rem;
        }
    }
    .container{
        padding: 0 .5rem;
        .tip{
            border-bottom: 1px solid #C1C1C1;
            padding-bottom: .675rem;
            .detail{
                padding: 1.425rem 0 1.75rem 0;
                img{
                    width: 1.1rem;
                    height: 1.1rem;
                    margin-right: .2rem;
                }
                span{
                    color: #333333;
                    font-size: .9rem;
                    position: relative;
                    top: -.2rem;
                    left: 0;
                }
            }
            p{
                color: #333333;
                font-size: .65rem;    
            }
            :nth-child(2){
                padding-bottom: .3rem;
            }
        }
        .middle{
            p{
                color: #333333;
                font-size: .65rem;
                padding-top: .575rem;
            }
            .btn{
                padding: 1.15rem 2.1rem 1.275rem 2.1rem;
                span{
                    display: inline-block;
                    width: 6rem;
                    height: 1.625rem;
                    border-radius: 3px;
                    text-align: center;
                    line-height: 1.625rem;
                    font-size: .75rem;
                }
                .left{
                    border: 1px solid #2FB3F1;
                    color: #2FB3F1;
                    background-color: #ffffff;
                }
                .right{
                    background-color: #2FB3F1;
                    color: #ffffff;
                    margin-left: 7%;
                }
            }   
        }
        .hot_lesson{
            .title{
                p{
                    color: #333333;
                    font-size: .8rem;
                    text-align: center;
                    position: relative;
                    padding: .5rem 7.25rem .75rem 7.25rem;
                }
                p:before{
                    content: '';
                    width: 39%;
                    height: 1px;
                    background-color: #C1C1C1;
                    position: absolute;
                    top: 47%;
                    left: 0;
                }
                p:after{
                    content: '';
                    display:inline-block;
                    width: 39%;
                    height: 1px;
                    background-color: #C1C1C1;
                    position: absolute;
                    top: 47%;
                    right: 0;
                }
            }
            .list{
                display: flex;
                flex-wrap: wrap;
                .item{
                    width: 48.3%;
                    img{
                        width: 8.55rem;
                        height: 5.35rem;
                    }
                    p{
                        color: #333333;
                        font-size: .65rem;
                        padding: .525rem 0 .7rem 0;
                    }
                } 
                .special{
                    margin-left: .6rem;
                }   
            }   
        }
    }
}
</style>


