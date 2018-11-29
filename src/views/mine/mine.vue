<template>
    <div class="container">
        <header class="head">
            <div class="background">
                <div class="menu">
                    <span class="mine">我的</span>
                    <span class="points">积分商城</span>
                </div>
                <div class="person_data">
                    <div class="data">
                        <div class="img">
                            <img src="../../assets/img/profile.png" alt="">
                        </div>
                        <div>
                            <div class="phone">187****0721</div>
                            <div class="account">
                                <img src="../../assets/img/wd.png" alt="">
                                <span class="num">S12313121</span>
                            </div>
                        </div>
                    </div>
                    <router-link to="/views/mine/personInfo.vue">
                        <i class="go iconfont icon-tiem-right"></i>
                    </router-link> 
                </div>
            </div>
        </header>
        <div class="my_order">
            <div class="shop item">
                <div class="img">
                    <img src="../../assets/img/shop.png" alt="">
                </div>
                <p>购课袋</p>
            </div>
            <div class="line"></div>
            <div class="no_pay item">
                <div class="img">
                    <span class="tip">1</span>
                    <img src="../../assets/img/no_pay.png" alt="">
                </div>
                <p>待付款</p>
            </div>
            <div class="line"></div>
            <div class="pay item">
                <div>
                    <img src="../../assets/img/pay.png" alt="">
                </div>
                <p>已付款</p>
            </div>
        </div>
        <div class="my_line"></div>
        <div class="my_coupons my_common">
            <img src="../../assets/img/coupons.png" alt="">
            <p>优惠券</p>
            <router-link to="/views/mine/coupon.vue" class="router">
                <i class="go iconfont icon-tiem-right"></i>
            </router-link>
        </div>
        <div class="my_line"></div>
        <div class="my_lesson my_common">
            <img src="../../assets/img/lesson.png" alt="">
            <p>我的课程</p>
            <i class="go iconfont icon-tiem-right"></i>
            <div class="line"></div>
        </div>
        <div class="offline my_common">
            <img src="../../assets/img/order.png" alt="">
            <p>线下订单</p>
            <i class="go iconfont icon-tiem-right"></i>
        </div>
        <div class="my_line"></div>
        <div class="set my_common">
            <img src="../../assets/img/set.png" alt="">
            <p>帐号管理</p>
            <i class="go iconfont icon-tiem-right"></i>
        </div>
    </div>
</template>

<script>
</script>
<style>
@import '../../assets/css/mine/mine.css';
</style>
