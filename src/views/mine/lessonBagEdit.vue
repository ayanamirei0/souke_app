<template>
    <div class="lessonBagEdit">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span>购课袋</span>
            <span>
                <router-link to="/views/mine/lessonBag.vue" class="complete">完成</router-link>
            </span>
        </div>
        <div class="lesson_order" v-for="(item, index) in titleList" :key="index">
            <img src="../../assets/img/select.png" alt="" v-show="!checkBox.includes(index)" @click="multiSelect(index)">
            <img src="../../assets/img/selected.png" alt="" v-show="checkBox.includes(index)" @click="multiSelect(index)">
            <div class="content">
                <p class="title">
                    <span class="season">秋季</span>
                    <span class="lesson"><b>{{item}}</b></span>   
                </p>
                <p><i class="iconfont icon-xuesheng icon"></i>1800511776</p>
                <p><i class="iconfont icon-shijian icon"></i>周六上午09:00-10:30&nbsp;&nbsp;2018/05/05-2018/11/17</p>
                <p><i class="iconfont icon-dingwei icon"></i>东城区广渠门鼎新</p>
                <div class="user">
                    <p><i class="iconfont icon-yonghu icon"></i>李向阳</p>
                    <div class="sum">
                        <span class="yuan">￥</span>
                        <span class="num">4100</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bottom_fill"></div>
        <div class="bottom_tab">
            <p class="check" @click="letCheckAll">
                <img src="../../assets/img/select.png" alt="" v-show="this.checkBox.length != this.titleList.length">
                <img src="../../assets/img/selected.png" alt="" v-show="this.checkBox.length == this.titleList.length">
                <span>全选</span>
            </p>
            <span class="pay" @click="changeShow" :class="checkBox.length != 0 ? 'active' : 'normal'">删除</span>
            <van-popup v-model="show" class="popup">
                <p class="describe">确定删除所选中的1门课程？</p>
                <div class="result">
                    <span class="close">关闭</span>
                    <span class="confirm">确认</span>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            // selectedNum: '',  //单选
            checkBox: [],
            titleList: ['初一数学启思·卓越班','初一语文启思·卓越班'],

            show: false
        }
    },
    computed: { 
        isCheckAll() {      //判断是否选中
            if(this.checkBox.length == this.titleList.length){
                return true;
            }else{
                return false;
            }
        }
    },
    methods: {
        // select(i) {    //单选互斥只能选择一个
        //     console.log(i);
        //     this.selectedNum = i;
        // },
        multiSelect(i) {         //多选
            let index = this.checkBox.indexOf(i);
            if(index > -1){     //如果已经选中，那就取消选中，如果没有，则选中
                this.checkBox.splice(index,1);
            }else{
                this.checkBox.push(i);
            }
        },
        letCheckAll() {
            console.log(1);
            if(this.isCheckAll) {
                this.clearCheckAll();
            }else {
                this.checkAll();
            }
        },
        checkAll() {        //选中全部
            let len = this.titleList.length;
            this.checkBox = [];
            for(let i = 0; i < len; i++) {
                this.checkBox.push(i);
            }
        },
        clearCheckAll() {       //清空选择
            this.checkBox = [];
        },
        changeShow() {
            this.show = true;
        }
    }
}
</script>

<style lang="less" scoped>
.lessonBagEdit{
    overflow-y: auto;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: @common_bg_color;
    .top{
        padding: .65rem .5rem .6rem .125rem;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        margin-bottom: .1rem;
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
        }
        span{
            font-size: .8rem;
            color: #333333;
        }
        .complete{
            font-size: .7rem;
            color: #2FB3F1;
        }
    }
    .lesson_order{
        margin-bottom: .45rem;
        display: flex;
        justify-content: flex-start;
        background-color: #ffffff;
        position: relative;
        img{
            position: absolute;
            top: 45%;
            left: 3%;
            width: 1.05rem;
            height: 1.05rem;
        }
        .content{
            margin-left: 11%;
            padding: .5rem 0 .65rem 0;
            p{
                color: #333333;
                font-size: .65rem;
                text-align: left;
                margin-top: .25rem;
                .icon{
                    color: #BABABA;
                    margin-right: .375rem;
                    position: relative;
                    top: .025rem;
                    left: 0;
                }
                .icon-xuesheng{
                    font-size: 1rem;
                    margin-right: .25rem;
                    position: relative;
                    top: .125rem;
                    left: 0;
                }
            }
            .title{
                color: #333333;
                font-size: .8rem;
                .season{
                    color: #ffffff;
                    font-size: .55rem;
                    display: inline-block;
                    width: 1.75rem;
                    height: .85rem;
                    line-height: .85rem;
                    background-color: #F5932A;
                    text-align: center;
                    border-radius: 3px;
                    margin-right: .1rem;
                }
                .lesson{
                    color: #333333;
                    font-size: .9rem;
                    font-weight: 600;
                    position: relative;
                    top: .1rem;
                    left: 0;
                }
            }
            .user{
                display: flex;
                justify-content: space-between; 
                .sum{
                    position: relative;
                    bottom: 0;
                    right: -1rem;
                    span{
                        color: #FA5118;   
                    }
                    .yuan{
                        font-size: .65rem;
                    }
                    .num{
                        font-size: .9rem;
                        margin-left: -.2rem;
                        font-weight: 600;
                    }
                }
            }
        }
    }
    .bottom_fill{
        width: 100%;
        height: 2.375rem;
        margin-top: .45rem;
    }
    .bottom_tab{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 2.375rem;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 2.375rem;
        .check{
            padding-left: 3%;
            img{
                width: 1.05rem;
                height: 1.05rem;
                vertical-align: middle;
            }
            span{
                color: #333333;
                font-size: .8rem;
            }
        }
        .pay{
            display: inline-block;
            width: 6.025rem;
            height: 2.45rem;
            background-color:rgba(250,81,24,.6);
            color: #ECECED;
            font-size: .8rem;
            text-align: center;
            letter-spacing: .05rem;
        }
        .active{
            background-color: #FA5118;
        }
        .normal{
            background-color: rgba(250,81,24,.6);
        }
        .popup{
            width: 14.075rem;
            height: 5.625rem;
            .describe{
                color: #333333;
                font-size: .7rem;
                border-bottom: 1px solid #BABABA;
                text-align: center;
                width: 100%;;
                height: 3.4rem;
                line-height: 3.4rem;
            }
            .result{
                display: flex;
                span{
                    display: inline-block;
                    width: 50%;
                    height: 2.2rem;
                    color: #2372E8;
                    font-size: .8rem;
                    text-align: center;
                }
                .close{
                    border-right: 1px solid #BABABA;
                }
            }
        }
    }    
}
</style>


