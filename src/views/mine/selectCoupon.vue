<template>
	<div class="selectCoupon">
        <div class="top">
			<i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
			<span class="title">使用优惠券</span>
			<span class="btn">优惠规则</span>
		</div>
        <div class="content">
            <div class="exchange">
                <span>兑换优惠券</span>
                <router-link to="/views/mine/exchange.vue" class="router">
                    <i class="go iconfont icon-tiem-right"></i>
                </router-link>	
            </div>
            <div class="container" v-for="(item, index) in couponList">
                <div class="coupon">
                    <div class="money">
                        <p>
                            <span class="yuan">￥</span>
                            <span class="num">10</span>
                        </p>
                        <p class="text">无金额门槛</p>
                    </div>
                    <div class="info">
                        <p class="title">{{item}}</p>
                        <p class="text">
                            2018.04.11至2018.12.11
                            <img src="../../assets/img/select.png" alt="" v-show="!checkBox.includes(index)" @click="multiSelect(index)" class="select">
                            <img src="../../assets/img/selected.png" alt="" v-show="checkBox.includes(index)" @click="multiSelect(index)" class="select">
                        </p>
                        <p class="text detail" v-show="!detailArr.includes(index)"><span class="line"></span>详细信息<span class="nabla_d" @click="multiSelectDetail(index)"></span></p>
                    </div>
                </div>
                <p class="detail_info" v-show="detailArr.includes(index)">
                    <span class="line"></span>
                    不可与其他优惠活动同时享受，限指定校区，指定课程使用 
                    <span class="nabla_t" @click="multiSelectDetail(index)"></span>
                </p>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    data() {
		return {
            active: 0,
            selectedNum: '',
            checkBox: [],
            detailArr: [],
            couponList: ['启迪巨人学院优惠', '启迪巨人学院优惠', '启迪巨人学院优惠']
		};
	},
	methods: {
        multiSelect(i) {        //多选
            let index = this.checkBox.indexOf(i);
            if(index > -1){     //如果选中，那就取消选中，如果没有，那就选中
                this.checkBox.splice(index,1);
            }else{
                this.checkBox.push(i);
            }
        },
        multiSelectDetail(i) {        //多选
            let index = this.detailArr.indexOf(i);
            if(index > -1){     //如果选中，那就取消选中，如果没有，那就选中
                this.detailArr.splice(index,1);
            }else{
                this.detailArr.push(i);
            }
        }
	}
}
</script>

<style lang="less" scoped>
.selectCoupon{
    position: fixed;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background-color: @common_bg_color;
    .top {
		position: relative;
        padding-top: 0.625rem;
        padding-bottom: .6rem;
        background-color: #ffffff;
        text-align: center;
		.icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
            position: absolute;
            top: 35%;
            left: 2%;
		}
		.title {
			color: #333333;
            font-size: .8rem;
		}
		.btn {
			color: #666666;
			font-size: .7rem;
            margin: .1rem .5rem 0 0;
            position: absolute;
            top: 32%;
            right: 0;
		}
	}
    .content{
        .exchange {
            display: flex;
            justify-content: space-between;
            padding: .6rem .5rem;
            background-color: #ffffff;
            margin-top: .325rem;
            .router{
                position: relative;
                top: -.3rem;
                right: 0;
                height: .85rem;
            }
            span {
                color: #333333;
                font-size: .75rem;
            }
        }
        .container {
            margin: .5rem;
            .coupon {
                display: flex;
                img {
                    width: 4.75rem;
                    height: 4.925rem;
                }
                .money {
                    background-image: url(../../assets/img/lace.jpg);
                    background-size: 4.75rem 4.95rem;
                    width: 4.75rem;
                    height: 4.95rem;
                    text-align: center;
                    :first-child {
                        padding-top: .8rem;
                    }
                    p {
                        color: #ffffff;
                        font-size: .75rem;
                        .num {
                            font-size: 1.6rem;
                            position: relative;
                            top: 0;
                            left: -.2rem;
                        }
                    }
                    .text {
                        font-size: .6rem;
                    }
                }
                .info {
                    flex-grow: 2;
                    background-color: #ffffff;
                    padding: .6rem .6rem .35rem .6rem;
                    .title {
                        color: #333333;
                        font-size: .8rem;
                        text-align: left;
                    }
                    .text {
                        color: #999999;
                        font-size: .6rem;
                        text-align: left;
                        padding: .4rem 0 .3rem 0;
                        position: relative;
                        .select {
                            width: 1.05rem;
                            height: 1.05rem;
                            position: absolute;
                            bottom: .35rem;
                            right: 0;
                        }
                    }
                    .detail {
                        position: relative;
                        .nabla_d {
                            font-size: 0;
                            line-height: 0;
                            border-width: 0.36rem;
                            border-color: #bababa;
                            border-bottom-width: 0;
                            border-style: dashed;
                            border-top-style: solid;
                            border-left-color: transparent;
                            border-right-color: transparent;
                            float: right;
                        }
                        .line{
                            display: inline-block;
                            width: 11.8rem;
                            border-top: .05rem dashed #c1c1c1;
                            position: absolute;
                            bottom: 1.3rem;
                            left: .05rem;
                        }
                    }
                }
            }
            .detail_info{
                color: #666666;
                font-size: .6rem;
                padding: .5rem 0 .4rem 0;
                position: relative;
                background-color: #ffffff;
                .nabla_t{
                    font-size: 0;
                    line-height: 0;
                    border-width: 0.36rem;
                    border-color: #bababa;
                    border-top-width: 0;
                    border-style: dashed;
                    border-top-style: solid;
                    border-left-color: transparent;
                    border-right-color: transparent;
                    position: absolute;
                    bottom: 1.05rem;
                    right: .6rem;
                }
                .line{
                    display: inline-block;
                    width: 13rem;
                    border-top: .05rem dashed #c1c1c1;
                    position: absolute;
                    top: 0;
                    right: .225rem;
                }
            }
        }
    }
}
</style>


