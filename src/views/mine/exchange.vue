<template>
    <div class="exchange">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
			<span class="title">兑换优惠券</span>
        </div>
        <div class="content">
            <div class="input">请输入兑换码</div>
            <div class="btn">立即兑换</div>
        </div>
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
.exchange{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: @common_bg_color;
    .top{
        display: flex;
        background-color: #ffffff;
        padding: .65rem 0 .6rem 0;
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
            position: relative;
            top: .1rem;
            left: .3rem;
        }
        .title{
            flex-grow: 2;
            color: #333333;
            font-size: .8rem;
            text-align: center;
        }
    }
    .content{
        margin-top: .1rem;
        .input{
            padding-left: .5rem;
            display: inline-block;
            width: 18.75rem;
            height: 2.1rem;
            font-size: .7rem;
            color: #999999;
            background-color: #ffffff;
            line-height: 2.1rem;
            text-align: left;
        }
        .btn{
            width: 15.6rem;
            height: 2rem;
            border-radius: 40px;
            background-color: #2FB3F1;
            color: #ffffff;
            font-size: .8rem;
            line-height: 2rem;
            margin: 1.55rem 0 0 1.6rem;
            text-align: center;
        }
    }
}
</style>


