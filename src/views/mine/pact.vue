<template>
    <div class="pact">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span>支付协议</span>
        </div>
        <div class="container">
            <p class="title">支付服务协议</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.pact{
    .top{
        text-align: center;
        background-color: #ffffff;
        padding: .65rem 0.5rem 0.6rem 0.3rem;
        border-bottom: 2px solid #F8F8F8;
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
            position: relative;
            top: 0;
            right: 6rem;
        }
    }
    .container{
        .title{
            color: #000000;
            font-size: 1.1rem;
            text-align: center;
            padding: .4rem 0 1rem 0;
            border-bottom: 2px solid #D4D4D4;
        }
    }
}
</style>

