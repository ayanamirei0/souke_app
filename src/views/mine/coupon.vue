<template>
	<div class="coupons">
		<div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
			<span class="title">优惠券</span>
			<span class="btn">优惠规则</span>
		</div>
		<div class="content">
			<van-tabs v-model="active" color="#2FB3F1">
				<van-tab title="未使用">
					<div class="exchange">
						<span>兑换优惠券</span>
                        <router-link to="/views/mine/exchange.vue" class="router">
                            <i class="go iconfont icon-tiem-right"></i>
                        </router-link>	
					</div>
					<div class="container">
						<div class="coupon">
							<img src="../../assets/img/lace.png" alt="">
							<div class="money">
								<p>￥<span class="num">10</span></p>
								<p class="text">无金额门槛</p>
							</div>
							<div class="info">
								<p class="title">巨人学员优惠</p>
								<p class="text">2018.04.11至2018.12.11<span class="btn">立即使用</span></p>
								<p class="text detail" v-show="seen1">
                                    <span class="line"></span>
                                    <span class="tip">详细信息</span>
                                    <span class="nabla_d" @click="onShow1()"></span>
                                </p>
							</div>
						</div>
						<p class="detail_info" v-show="!seen1"><span class="line"></span>不可与其他优惠活动同时享受，限指定校区，指定课程使用 <span class="nabla_t" @click="onShow1()"></span></p>
					</div>
                    <div class="container">
						<div class="coupon">
							<img src="../../assets/img/lace.png" alt="">
							<div class="money">
								<p>￥<span class="num">10</span></p>
								<p class="text">无金额门槛</p>
							</div>
							<div class="info">
								<p class="title">巨人学员优惠</p>
								<p class="text">2018.04.11至2018.12.11<span class="btn">立即使用</span></p>
								<p class="text detail" v-show="seen1">
                                    <span class="line"></span>
                                    <span class="tip">详细信息</span>
                                    <span class="nabla_d" @click="onShow2()"></span>
                                </p>
							</div>
						</div>
						<p class="detail_info" v-show="!seen1"><span class="line"></span>不可与其他优惠活动同时享受，限指定校区，指定课程使用 <span class="nabla_t" @click="onShow2()"></span></p>
					</div>
                    <div class="container">
						<div class="coupon">
							<img src="../../assets/img/lace.png" alt="">
							<div class="money">
								<p>￥<span class="num">10</span></p>
								<p class="text">无金额门槛</p>
							</div>
							<div class="info">
								<p class="title">巨人学员优惠</p>
								<p class="text">2018.04.11至2018.12.11<span class="btn">立即使用</span></p>
								<p class="text detail" v-show="seen1">
                                    <span class="line"></span>
                                    <span class="tip">详细信息</span>
                                    <span class="nabla_d" @click="onShow3()"></span>
                                </p>
							</div>
						</div>
						<p class="detail_info" v-show="!seen1"><span class="line"></span>不可与其他优惠活动同时享受，限指定校区，指定课程使用 <span class="nabla_t" @click="onShow3()"></span></p>
					</div>
				</van-tab>
				<van-tab title="已使用">
					<div class="used">
						<img src="../../assets/img/grayLine.png" alt="">
						<div class="money">
							<p>￥<span class="num">10</span></p>
							<p class="text">无金额门槛</p>
						</div>
						<div class="info">
							<p class="title">巨人学员优惠</p>
							<p class="text date">2018.04.11至2018.12.11</p>
							<img
							 src="../../assets/img/used.png"
							 alt=""
							 class="imgUsed"
							>
						</div>
					</div>
					<div class="used">
						<img src="../../assets/img/grayLine.png" alt="">
						<div class="money">
							<p>￥<span class="num">10</span></p>
							<p class="text">无金额门槛</p>
						</div>
						<div class="info">
							<p class="title">巨人学员优惠</p>
							<p class="text date">2018.04.11至2018.12.11</p>
							<img src="../../assets/img/used.png" alt="" class="imgUsed">
						</div>
					</div>
					<div class="used">
						<img src="../../assets/img/grayLine.png" alt="">
						<div class="money">
							<p>￥<span class="num">10</span></p>
							<p class="text">无金额门槛</p>
						</div>
						<div class="info">
							<p class="title">巨人学员优惠</p>
							<p class="text date">2018.04.11至2018.12.11</p>
							<img src="../../assets/img/used.png" alt="" class="imgUsed">
						</div>
					</div>
				</van-tab>
				<van-tab title="已过期">
					<div class="coupon used">
						<img src="../../assets/img/grayLine.png" alt="">
						<div class="money">
							<p>￥<span class="num">10</span></p>
							<p class="text">无金额门槛</p>
						</div>
						<div class="info">
							<p class="title">巨人学员优惠</p>
							<p class="text date">2018.04.11至2018.12.11</p>
							<img src="../../assets/img/expired.png" alt="" class="imgUsed">
						</div>
					</div>
					<div class="coupon used">
						<img src="../../assets/img/grayLine.png" alt="">
						<div class="money">
							<p>￥<span class="num">10</span></p>
							<p class="text">无金额门槛</p>
						</div>
						<div class="info">
							<p class="title">巨人学员优惠</p>
							<p class="text date">2018.04.11至2018.12.11</p>
							<img src="../../assets/img/expired.png" alt="" class="imgUsed">
						</div>
					</div>
					<div class="coupon used">
						<img src="../../assets/img/grayLine.png" alt="">
						<div class="money">
							<p>￥<span class="num">10</span></p>
							<p class="text">无金额门槛</p>
						</div>
						<div class="info">
							<p class="title">巨人学员优惠</p>
							<p class="text date">2018.04.11至2018.12.11</p>
							<img src="../../assets/img/expired.png" alt="" class="imgUsed">
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            active: 0,
            seen1: true,
            seen2: true,
            seen3: true
		};
	},
	methods: {
        onShow1() {
            console.log(1);
            this.seen1 = !this.seen1;
        },
        onShow2() {
            console.log(2);
            this.seen2 = !this.seen2;
        },
        onShow3() {
            console.log(3);
            this.seen3 = !this.seen3;
        }
	}
};
</script>

<style lang="less" scoped>
.coupons {
    background-color: #ECECED;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-y: auto;
	.top {
		position: relative;
        padding-top: 0.625rem;
        padding-bottom: .6rem;
        background-color: #ffffff;
        text-align: center;
		.icon-fanhui {
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
	.content {
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
					width: .3rem;
					height: 4.9rem;
				}
				.money {
					background: linear-gradient(#49c9ee, #1c95ff);
					width: 4.45rem;
                    height: 4.9rem;
                    text-align: center;
					:first-child {
						padding-top: .8rem;
					}
					p {
						color: #ffffff;
						font-size: .75rem;
						.num {
							font-size: 1.6rem;
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
                        padding: .4rem 0 .2rem 0;
                        position: relative;
						.btn {
							display: inline-block;
							width: 3.25rem;
							height: 1.25rem;
							background-color: #2fb3f1;
							color: #ffffff;
							font-size: .6rem;
							line-height: 1.25rem;
							border-radius: 1.25rem;
							text-align: center;
                            position: absolute;
                            bottom: .35rem;
                            right: 0;
						}
                    }
					.detail {
                        // margin-top: .35rem;
                        position: relative;
                        .line{
                            display: inline-block;
                            width: 11.8rem;
                            border-top: .05rem dashed #c1c1c1;
                            position: absolute;
                            bottom: .2rem;
                            left: .05rem;
                        }
                        .tip {
                            position: absolute;
                            top: .75rem;
                            left: 0;
                        }
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
                            margin-top: .5rem;
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
                text-align: center;
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
                    bottom: 2.5rem;
                    right: .6rem;
                }
                .line{
                    display: inline-block;
                    width: 12.5rem;
                    border-top: .05rem dashed #c1c1c1;
                    position: absolute;
                    top: 0;
                    right: .4rem;
                }
            }
        }
        .used {
            padding: .5rem .5rem 0 .5rem;
            display: flex;
            img{
                width: .3rem;
				height: 4.9rem; 
            }
			.money {
                background: linear-gradient(#b7b7b7, #b7b7b7);
                width: 4.45rem;
                height: 4.9rem;
                text-align: center;
				:first-child {
					padding-top: .8rem;
				}
				p {
					color: #ffffff;
					font-size: .75rem;
					.num {
						font-size: 1.6rem;
					}
				}
				.text {
					font-size: .6rem;
				}
			}
			.info {
                flex-grow: 2;
                position: relative;
                background-color: #ffffff;
                padding: .8rem .6rem .35rem .6rem;
                .title {
					color: #333333;
					font-size: .8rem;
					text-align: left;
				}
				.text {
					color: #999999;
					font-size: .6rem;
					text-align: left;
					.btn {
						display: inline-block;
						width: 3.25rem;
						height: 1.25rem;
						background-color: #2fb3f1;
						color: #ffffff;
						font-size: .6rem;
						line-height: 1.25rem;
						border-radius: 1.25rem;
						text-align: center;
						margin: 0 0 .45rem 1.3rem;
                    }
                }
                .date{
                    margin-top: .7rem;
                }
                .detail {
                    margin-top: 0.35rem;
                    position: relative;
					.nabla_d {
						font-size: 0;
						line-height: 0;
						border-width: 0.18rem;
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
                        bottom: .6rem;
                        left: .025rem;
                    }
				}
				.imgUsed {
					position: absolute;
					bottom: 2.08rem;
					right: 0;
					width: 2.9rem;
					height: 2.8rem;
				}
			}
        }
	}
}
</style>



