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
            <i class="go iconfont icon-tiem-right"></i>
          </div>
          <div class="coupon">
            <img src="../../assets/img/lace.png" alt="">
            <div class="money">
              <p>￥<span class="num">10</span></p>
              <p class="text">无金额门槛</p>
            </div>
            <div class="info">
              <p class="title">巨人学院优惠</p>
              <p class="text date">2018.04.11至2018.12.11<span class="btn">立即使用</span></p>
              <p class="text detail">详细信息<span class="nabla"></span></p>
            </div>
          </div>
          <div class="coupon">
            <img src="../../assets/img/lace.png" alt="">
            <div class="money">
              <p>￥<span class="num">10</span></p>
              <p class="text">无金额门槛</p>
            </div>
            <div class="info">
              <p class="title">巨人学院优惠</p>
              <p class="text date">2018.04.11至2018.12.11<span class="btn">立即使用</span></p>
              <p class="text detail">详细信息<span class="nabla"></span></p>
            </div>
          </div>
          <div class="coupon">
            <img src="../../assets/img/lace.png" alt="">
            <div class="money">
              <p>￥<span class="num">10</span></p>
              <p class="text">无金额门槛</p>
            </div>
            <div class="info">
              <p class="title">巨人学院优惠</p>
              <p class="text date">2018.04.11至2018.12.11<span class="btn">立即使用</span></p>
              <p class="text detail">详细信息<span class="nabla"></span></p>
            </div>
          </div>
        </van-tab>
        <van-tab title="已使用">内容 2</van-tab>
        <van-tab title="已过期">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    returnPage() {
      this.$router.push("mine.vue");
    }
  }
};
</script>

<style lang="less" scoped>
.coupons {
  .top {
    display: flex;
    margin-top: 0.625rem;
    img {
      width: 0.25rem;
      height: 0.325rem;
      margin-left: 0.425rem;
      margin: 0.15rem 0 0 0.3rem;
    }
    .title {
      color: #333333;
      font-size: 0.4rem;
      flex-grow: 2;
      margin-bottom: 0.3rem;
    }
    .btn {
      color: #666666;
      font-size: 0.35rem;
      margin: 0.05rem 0.25rem 0 0;
    }
  }
  .content {
      .exchange {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.25rem;
        span {
          color: #333333;
          font-size: 0.375rem;
        }
      }
      .coupon {
        padding: 0.25rem 0.25rem 0 0.25rem;
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
          padding: 0.4rem 0.3rem 0.175rem 0.3rem;
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
          .date {
            border-bottom: 1px dashed #c1c1c1;
          }
          .detail {
            margin-top: 0.175rem;
            .nabla{
                font-size: 0;
                line-height: 0;
                border-width: .18rem;
                border-color: #BABABA;
                border-bottom-width: 0;
                border-style: dashed;
                border-top-style: solid;
                border-left-color: transparent;
                border-right-color: transparent;
                float: right;
            }
          }
        }
      }
    }
}
</style>



