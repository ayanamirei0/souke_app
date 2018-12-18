<template>
    <div class="exchange">
        <div class="top">
            <img src="../../assets/img/return.png" alt="" @click="$router.go(-1)">
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
    background-color: #ECECEE;
    .top{
        display: flex;
        background-color: #ffffff;
        padding-top: 1.25rem;
        img{
            width: .5rem;
			height: .65rem;
			margin: .3rem 0 .6rem .6rem;
        }
        .title{
            flex-grow: 2;
            color: #333333;
            font-size: .8rem;
            text-align: center;
        }
    }
    .content{
        .input{
            margin-top: .5rem;
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
            width: 17.75rem;
            height: 2rem;
            border-radius: 40px;
            background-color: #2FB3F1;
            color: #ffffff;
            font-size: .8rem;
            line-height: 2rem;
            margin: 1.55rem 0 0 .5rem;
            text-align: center;
        }
    }
}
</style>


