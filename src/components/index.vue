<template>
    <div>
        <header class="head">
            <div>
                <span class="title">搜课</span>
                <span class="city">北京</span>
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
        <div class="line1"></div>
        <div class="menu_title">
            <span class="line"></span>
            <van-tabs v-model="active">
                <van-tab title="小学课程" class="primary">
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
                </van-tab>
                <van-tab title="中学课程" class="middle">
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
                </van-tab>
            </van-tabs>
            <span class="more">></span>
        </div>
        <div class="line1"></div>
        <div class="menu_title">
            <span class="line"></span>
            <van-tabs v-model="active">
                <van-tab title="英语学习" class="primary">
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
                </van-tab>
                <van-tab title="特长课程" class="middle">
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
                </van-tab>
            </van-tabs>
            <span class="more">></span>
        </div>
        <div class="line1"></div>
        <div class="menu_title">
            <span class="line"></span>
            <van-tabs v-model="active">
                <van-tab title="国内冬令营" class="primary">
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
                </van-tab>
                <van-tab title="国际游学" class="middle">
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
                </van-tab>
            </van-tabs>
            <span class="more">></span>
        </div>
        <footer class="foot">
            <div class="home">
                <img src="../assets/img/icon_1.png" alt="">
            </div>
            <div class="search">
                <img src="../assets/img/icon_2.png" alt="">
            </div>
            <div class="msg">
                <img src="../assets/img/icon_3.png" alt="">
            </div>
            <div class="main">
                <img src="../assets/img/icon_4.png" alt="">
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
      tabBarImgArr:[   //图片切换
        {normal: require('../assets/img/icon_1.png'), selected: require('../assets/img/icon_11.png')},
        {normal: require('../assets/img/icon_2.png'), selected: require('../assets/img/icon_22.png')},
        {normal: require('../assets/img/icon_3.png'), selected: require('../assets/img/icon_33.png')},
        {normal: require('../assets/img/icon_4.png'), selected: require('../assets/img/icon_44.png')}
      ]
    return {};
  }
};

</script>

