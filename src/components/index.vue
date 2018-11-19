<template>
    <div>
        <header class="head">
            <div>
                <span class="title">搜课</span>
                <span class="city">北京</span>
            </div>
        </header>
        <div class="banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="img/15.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="img/15.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="img/15.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="subject">
            <div class="yxkc square middle">
                <div class="img">
                    <img src="../assets/img/yxkc.png" alt="">
                </div>
                <p class="title">优选课程</p>
            </div>
            <div class="cn square middle">
                <div class="img">
                    <img src="../assets/img/cn.png" alt="">
                </div>
                <p class="title">语文</p>
            </div>
            <div class="math square middle">
                <div class="img">
                    <img src="../assets/img/math.png" alt="">
                </div>
                <p class="title">数学</p>
            </div>
            <div class="en square middle">
                <div class="img">
                    <img src="../assets/img/en.png" alt="">
                </div>
                <p class="title">英语</p>
            </div>
            <div class="zstz middle">
                <div class="img">
                    <img src="../assets/img/zstz.png" alt="">
                </div>
                <p class="title">综素拓展</p>
            </div>
            <div class="zxhd square bottom">
                <div class="img">
                    <img src="../assets/img/zxhd.png" alt="">
                </div>
                <p class="title">专项活动</p>
            </div>
            <div class="xjr square bottom">
                <div class="img">
                    <img src="../assets/img/xjr.png" alt="">
                </div>
                <p class="title">小巨人</p>
            </div>
            <div class="dxly square bottom">
                <div class="img">
                    <img src="../assets/img/dxly.png" alt="">
                </div>
                <p class="title">冬夏令营</p>
            </div>
            <div class="gjyx square bottom">
                <div class="img">
                    <img src="../assets/img/gjyx.png" alt="">
                </div>
                <p class="title">国际游学</p>
            </div>
            <div class="tgb bottom">
                <div class="img">
                    <img src="../assets/img/tgb.png" alt="">
                </div>
                <p class="title">托管班</p>
            </div>
        </div>
        <div class="line"></div>
        <div class="hot_subject">
            <div class="title">
                <span class="line"></span>
                <span class="text">热门课程</span>
            </div>
            <div class="content">
                <div class="img">
                    <img src="../assets/img/ffb.png" alt="">
                    <p>思维训练启智非凡班</p>
                </div>
                <div class="img">
                    <img src="../assets/img/ffb.png" alt="">
                    <p>思维训练启智非凡班</p>
                </div>
                <div class="img">
                    <img src="../assets/img/ffb.png" alt="">
                    <p>思维训练启智非凡班</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            
        }
    }
}
</script>


<style>
.head {
  margin-top: 1.4rem;
}
.head .title {
  font-family: "PingFang-SC-Regular";
  font-size: 0.9rem;
  color: #333333;
  margin-left: 0.975rem;
  font-weight: bold;
  margin-right: 0.375rem;
}
.head .city {
  font-family: "PingFang-SC-Regular";
  font-size: 0.55rem;
  color: #333333;
  padding: 0.15rem 0.35rem;
  background-color: #efefef;
  line-height: 1rem;
  font-weight: 400;
}
.banner {
  margin-top: 0.6rem;
}
.banner .swiper-container .swiper-slide img {
  width: 100%;
  height: 5rem;
}
.subject {
  margin-top: 0.925rem;
  margin-bottom: 0.6rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  display: flex;
  flex-flow: wrap;
}
.subject .square {
  margin-right: 1.075rem;
}
.subject .img {
  width: 2.4rem;
  height: 2.4rem;
}
.subject .title {
  /* width: 2.375rem;
    height: .575rem; */
  font-size: 0.6rem;
  text-align: center;
}
.subject .middle .title {
  padding: 0.425rem 0;
}
.subject .bottom .title {
  padding-top: 0.275rem;
}
.line {
  width: 18.75rem;
  height: 0.35rem;
  background-color: #efefef;
}
.hot_subject .line {
  display: inline-block;
  width: 0.2rem;
  height: 0.8rem;
  background-color: #2bb8ee;
}
.hot_subject .title {
  padding-left: 0.5rem;
  margin-top: 0.725rem;
}
.hot_subject .text {
  margin-left: 0.275rem;
  font-family: "PingFang-SC-Regular";
}
.hot_subject .content {
  padding-left: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
}
.hot_subject .content .img {
  margin-left: 0.4rem;
}
.hot_subject .content .img img {
  width: 6.175rem;
  height: 3.425rem;
}
.hot_subject .content .img p {
  font-size: 0.65rem;
  color: #333333;
}
</style>

