<template>
	<div class="coupons">
		<div class="top">
			<img src="../../assets/img/return.png" alt="" @click="returnPage()">
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
								<p class="text detail" v-show="seen1"><span class="line"></span>详细信息<span class="nabla_d" @click="onShow1()"></span></p>
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
								<p class="text detail" v-show="seen2"><span class="line"></span>详细信息<span class="nabla_d" @click="onShow2()"></span></p>
							</div>
						</div>
                        <p class="detail_info" v-show="!seen2"><span class="line"></span>不可与其他优惠活动同时享受，限指定校区，指定课程使用 <span class="nabla_t" @click="onShow2()"></span></p>
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
								<p class="text detail" v-show="seen3"><span class="line"></span>详细信息<span class="nabla_d" @click="onShow3()"></span></p>
							</div>
						</div>
                        <p class="detail_info" v-show="!seen3"><span class="line"></span>不可与其他优惠活动同时享受，限指定校区，指定课程使用 <span class="nabla_t" @click="onShow3()"></span></p>
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
		returnPage() {
			this.$router.push("mine.vue");
        },
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
    margin-top: 0px;
	.top {
		position: relative;
        // padding-top: 0.625rem;
        background-color: #ffffff;
		img {
			width: 0.25rem;
			height: 0.325rem;
            // margin: 0.15rem 0 .3rem 0.3rem;
            position: absolute;
            top: 52%;
            left: 3%;
		}
		.title {
			color: #333333;
			font-size: 0.4rem;
		}
		.btn {
			color: #666666;
			font-size: 0.35rem;
            margin: 0.05rem 0.25rem 0 0;
            position: absolute;
            top: 49%;
            right: 0;
		}
	}
	.content {
		.exchange {
			display: flex;
			justify-content: space-between;
            padding: 0.3rem 0.25rem;
            background-color: #ffffff;
            .router{
                position: relative;
                top: -0.675rem;
	            right: 0;
	            height: .425rem;
            }
			span {
				color: #333333;
				font-size: 0.375rem;
			}
		}
		.container {
            margin: .25rem;
			.coupon {
				display: flex;
				img {
					width: 0.15rem;
					height: 2.45rem;
				}
				.money {
					background: linear-gradient(#49c9ee, #1c95ff);
					width: 2.225rem;
					height: 2.45rem;
					:first-child {
						padding-top: 0.4rem;
					}
					p {
						color: #ffffff;
						font-size: 0.375rem;
						.num {
							font-size: 0.8rem;
						}
					}
					.text {
						font-size: 0.3rem;
					}
				}
				.info {
                    flex-grow: 2;
                    background-color: #ffffff;
					padding: .3rem .3rem .175rem .3rem;
					.title {
						color: #333333;
						font-size: 0.4rem;
						text-align: left;
					}
					.text {
						color: #999999;
						font-size: 0.3rem;
						text-align: left;
						.btn {
							display: inline-block;
							width: 1.625rem;
							height: 0.625rem;
							background-color: #2fb3f1;
							color: #ffffff;
							font-size: 0.3rem;
							line-height: 0.625rem;
							border-radius: 0.625rem;
							text-align: center;
							margin: 0 0 0.225rem 0.65rem;
						}
					}
					.detail {
                        margin-top: 0.175rem;
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
                            width: 5.9rem;
                            border-top: .025rem dashed #c1c1c1;
                            position: absolute;
                            bottom: .6rem;
                            left: .025rem;
                        }
					}
				}
			}
            .detail_info{
                color: #666666;
                font-size: 12px;
                padding: .25rem 0 .2rem 0;
                position: relative;
                background-color: #ffffff;
                .nabla_t{
                    font-size: 0;
					line-height: 0;
					border-width: 0.18rem;
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
                    width: 6.5rem;
                    border-top: .025rem dashed #c1c1c1;
                    position: absolute;
                    top: 0;
                    right: .225rem;
                }
            }
        }
        .used {
            padding: 0.25rem 0.25rem 0 0.25rem;
            display: flex;
            img{
                width: 0.15rem;
				height: 2.45rem; 
            }
			.money {
                background: linear-gradient(#b7b7b7, #b7b7b7);
                width: 2.225rem;
				height: 2.45rem;
				:first-child {
					padding-top: 0.4rem;
				}
				p {
					color: #ffffff;
					font-size: 0.375rem;
					.num {
						font-size: 0.8rem;
					}
				}
				.text {
					font-size: 0.3rem;
				}
			}
			.info {
                flex-grow: 2;
                position: relative;
                background-color: #ffffff;
                padding: .4rem .3rem .175rem .3rem;
                .title {
					color: #333333;
					font-size: 0.4rem;
					text-align: left;
				}
				.text {
					color: #999999;
					font-size: 0.3rem;
					text-align: left;
					.btn {
						display: inline-block;
						width: 1.625rem;
						height: 0.625rem;
						background-color: #2fb3f1;
						color: #ffffff;
						font-size: 0.3rem;
						line-height: 0.625rem;
						border-radius: 0.625rem;
						text-align: center;
						margin: 0 0 0.225rem 0.65rem;
                    }
                }
                .detail {
                    margin-top: 0.175rem;
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
                        width: 5.9rem;
                        border-top: .025rem dashed #c1c1c1;
                        position: absolute;
                        bottom: .6rem;
                        left: .025rem;
                    }
				}
				.imgUsed {
					position: absolute;
					bottom: 1.05rem;
					right: 0;
					width: 1.45rem;
					height: 1.4rem;
				}
			}
        }
	}
}
</style>



