<template>
    <div class="schoolName">
        <div class="top_fill"></div>
        <div class="top">
            <router-link to="/views/mine/personInfo.vue">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <span class="title">修改学校名称</span>
            <span class="btn">保存</span>
        </div>
        <div class="content">
            <ul v-for="(item, index) in list">
                <li class="title" :id="item.title">{{item.title}}</li>
                <li class="item" v-for="(items, index) in item.content" @click="addClass(items.id)" :class="{selected : current == items.id}">
                    {{items.text}}
                </li>
            </ul>
        </div>
        <ul class="nav">
            <li>
                <a href="#1">1</a>
            </li>
            <li>
                <a href="#2">2</a>
            </li>
            <li>
                <a href="#B">B</a>
            </li>
            <li>
                <a href="#C">C</a>
            </li>
           <li>
                <a href="#D">D</a>               
           </li>
           <li>
                <a href="#E">E</a>
           </li>
           <li>
               <a href="#F">F</a>
           </li>
           <li>
               <a href="#G">G</a>
           </li>
           <li>
               <a href="#H">H</a>
           </li>
           <li>
               <a href="#I">I</a>
           </li>
           <li>
               <a href="#J">J</a>
           </li>
           <li>
               <a href="#K">K</a>
           </li>
           <li>
               <a href="#L">L</a>
           </li>
           <li>
               <a href="#M">M</a>
           </li>
           <li>
               <a href="#N">N</a>
           </li>
           <li>
               <a href="#Q">Q</a>
           </li>
           <li>
               <a href="#R">R</a>
           </li>
           <li>
               <a href="#S">S</a>
           </li>
           <li>
               <a href="#T">T</a>
           </li>
           <li>
               <a href="#w">w</a>
           </li>
           <li>
               <a href="#X">X</a>
           </li>
           <li>
               <a href="#Y">Y</a>
           </li>   
           <li>
               <a href="#Z">Z</a>
           </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            list: [
                {
                    title: '1',
                    content:[
                        { text: '101中学', id: 0 },
                        { text: '105中学', id: 1 }
                    ]
                }
                ,{
                    title: '2',
                    content:[
                        { text: '21世纪实验学校', id: 2 }
                    ]
                },
                {
                    title: 'B',
                    content:[
                        { text: '北大附中', id: 3 },
                        { text: '北大资源中学', id: 4 },
                        { text: '北航附中', id: 5 },
                        { text: '北师大三附中', id: 6 },
                        { text: '北外附中', id: 7 },
                        { text: '北医附中', id: 8 }
                    ]
                },
                {
                    title: 'C',
                    content:[
                        { text: '北大附中', id: 9 },
                        { text: '北大资源中学', id: 10 },
                        { text: '北航附中', id: 11 },
                        { text: '北师大三附中', id: 12 },
                        { text: '北外附中', id: 13 },
                        { text: '北医附中', id: 14 }
                    ]
                }
            ]
        }
    },
    methods: {
        addClass(arg){
            this.current = arg;
        }   
    }
};
</script>

<style lang="less" scoped>
.schoolName{
    .top_fill{
        width: 100%;
        height: 2.47rem;
    }
    .top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 998;
        padding: .65rem 0 .6rem 0;
        display: flex;
        background-color: #ffffff;
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
            position: relative;
            top: 0;
            left: .3rem;
        }
        .title{
            font-size: .8rem;
            color: #333333;
            flex-grow: 2;
            text-align: center;
        }
        .btn{
            font-size: .75rem;
            color: #2fb3f1;
            margin: .1rem .6rem 0 0;
        }
    }
    .content{
        padding-right: 5%;
        position: fixed;      //解决锚点跳转以后，内容被顶部遮挡问题
        overflow-y: auto;
        height: 100%;
        ul{
            img{
                width: .9rem;
                height: .6rem;
                margin-right: 1.1rem;
            }
            .title{
                color: #333333;
                font-size: .9rem;
                width: 17.85rem;
                height: 1.35rem;
                background-color: #E7E7E7;
                text-align: left;
                line-height: 1.35rem;
                padding-left: .575rem;
            }
            .item{
                font-size: .75rem;
                border-bottom: .05rem solid #ECECEE;
                padding: .9rem 0 .8rem 0;
                margin: 0 .65rem;
            }
            .selected{
                color: #2fb3f1;
            }
        }   
    }
    .nav{
        position: fixed;
        top: 18%;
        right: 1%;
        li{
            width: .6rem;
            line-height: .9rem;
            a{
                font-size: .6rem;
                color: #2FB3F1;
            }   
        }   
    }
}
</style>

