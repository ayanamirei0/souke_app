<template>
    <div class="exchange">
        <div class="top">
            <img src="../../assets/img/return.png" alt="" @click="returnPage()">
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
        returnPage() {
			this.$router.push("coupon.vue");
        }
    }
}
</script>

<style lang="less" scoped>
.exchange{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #ECECEE;
    .top{
        display: flex;
        background-color: #ffffff;
        padding-top: .625rem;
        img{
            width: 0.25rem;
			height: 0.325rem;
			margin: 0.15rem 0 .3rem 0.3rem;
        }
        .title{
            flex-grow: 2;
            color: #333333;
            font-size: .4rem;
        }
    }
    .content{
        .input{
            margin-top: .25rem;
            padding-left: .25rem;
            display: inline-block;
            width: 9.375rem;
            height: 1.05rem;
            font-size: .35rem;
            color: #999999;
            background-color: #ffffff;
            line-height: 1.05rem;
            text-align: left;
        }
        .btn{
            width: 8.875rem;
            height: 1rem;
            border-radius: 1rem;
            background-color: #2FB3F1;
            color: #ffffff;
            font-size: .4rem;
            line-height: 1rem;
            margin: .775rem 0 0 .25rem;
        }
    }
}
</style>


