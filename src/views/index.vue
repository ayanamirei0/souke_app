<template>
    <div>
        <header class="head">
            <div>
                <span class="title">搜课</span>
                <span class="city" @click="Toast()">北京</span>
            </div>
        </header>
        <div class="banner">
            <van-swipe :autoplay="3000" :show-indicators="false">
                <van-swipe-item>
                    <img src="../assets/img/banner.png" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../assets/img/banner.png" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../assets/img/banner.png" alt="">
                </van-swipe-item>
            </van-swipe>
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
        <div class="line_y"></div>
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
        <div class="line_y"></div>
        <div class="select">
            <div class="select_title">
                <span class="line"></span>
                <ul>
                    <li v-for="(item,index) in tabs1" :class="{active:index == num1}" @click="tabSwitch1(index)">
                        <span class="underline" v-show="index == num1"></span>
                        {{item}}
                    </li>
                </ul>
                <i class="go iconfont icon-tiem-right"></i>
            </div>
            <div class="select_content">
                <div class="content" v-if="num1 == 0">
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>巨人大语文</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>思维训练精英班</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>巨人作文启航班</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>思维训练培优班</span>
                    </div>
                </div>
                <div class="content" v-if="num1 == 1">
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>巨人大语文</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>思维训练精英班</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>巨人作文启航班</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>思维训练培优班</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="line_y"></div>
        <div class="select">
            <div class="select_title">
                <span class="line"></span>
                <ul>
                    <li v-for="(item,index) in tabs2" :class="{active:index == num2}" @click="tabSwitch2(index)">
                        <span class="underline" v-show="index == num2"></span>
                        {{item}}
                    </li>
                </ul>
                <i class="go iconfont icon-tiem-right"></i>
            </div>
            <div class="select_content">
                <div class="content" v-if="num2 === 0">
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>新概念英语</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>THINK国际</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>巨人作文启航班</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>思维训练培优班</span>
                    </div>
                </div>
                <div class="content" v-if="num2 === 1">
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“成吉思汗”草原探秘夏令营</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“国学大师”书法篆刻夏令营</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“百变玩家”综合体验夏令营</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“灌篮高手”篮球训练夏令营</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="line_y"></div>
        <div class="select">
            <div class="select_title">
                <span class="line"></span>
                <ul>
                    <li v-for="(item,index) in tabs3" :class="{active:index == num3}" @click="tabSwitch3(index)">
                        <span class="underline" v-show="index == num3"></span>
                        {{item}}
                    </li>
                </ul>
                <i class="go iconfont icon-tiem-right"></i>
            </div>
            <div class="select_content">
                <div class="content" v-if="num3 === 0">
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“成吉思汗”草原探秘夏令营</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“国学大师”书法篆刻夏令营</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“百变玩家”综合体验夏令营</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/15.png" alt="">
                        </div>
                        <span>“灌篮高手”篮球训练夏令营</span>
                    </div>
                </div>
                <div class="content" v-if="num3 === 1">
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>巨人大语文</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>思维训练精英班</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>巨人作文启航班</span>
                    </div>
                    <div class="title">
                        <div class="img">
                            <img src="../assets/img/16.png" alt="">
                        </div>
                        <span>思维训练培优班</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_tip">
            <p class="text">已经到底了~</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tabs1: ["小学课程", "中学课程"],
      tabs2: ["英语学习", "特长课程"],
      tabs3: ["国内冬令营", "国际游学"],
      num1: 0,
      num2: 0,
      num3: 0,

      active: ""
    };
  },

  methods: {
    tabSwitch1(index) {
      this.num1 = index;
    },
    tabSwitch2(index) {
      this.num2 = index;
    },
    tabSwitch3(index) {
      this.num3 = index;
    },
    Toast(){
        this.$toast('暂不支持城市切换');
    }
  }
};
</script>

