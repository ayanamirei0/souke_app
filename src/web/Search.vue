<template>
<div>
    <div class="h20"></div>
    <div class="search-head">
        <div class="Return"><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></div>      <!-- lihongliang 修改 2018-12-20 -->
        <div>
            <van-search  v-model="value"  placeholder="请输入课程名称或班级编号"  show-action  @search="onSearch" background="#fff">
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
    </div>
    <div class="search-head-history clearfix">
        <div class="search-head-history-title fl">搜索历史</div>
        <div class="search-head-history-empty fr" @click="empty"  v-show="!show"><i class="iconfont icon-qingkong "></i>清空</div>
    </div>
    <div class="search-head-history-list">
        <span v-for="item in list"><router-link :to="item.url">{{item.title}}</router-link></span>
    </div>
    <div class="search-head-history-tips" v-show="show">暂无搜索历史~</div>
</div>  
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
    data(){
        return{
            value:'',
            list:[                
                    {
                        title:'英语',
                        url:'#',
                    },
                    {
                        title:'启思卓越',
                        url:'#',
                    }
            ],
            show:false,
        }
    },
    methods:{
        onSearch(){
            
        },
        empty(){
            this.list='';
            this.show=!this.show;
        }

    }
}
</script>

<style>
.van-cell{ background-color: #EFEFEF;}
.search-head{ padding: 0 0.5rem; border-bottom: 1px solid #C2C2C2;}
.search-head .Return{ margin-top: 0.35rem;}
.search-head .Return .icon-fanhui{      /* lihongliang 修改 2018-12-20 */
    font-size: 1.1rem;
    position: relative;
    top: .08rem;
    right: .3rem;
}
.search-head-history{ padding: 0.5rem; line-height: 1rem;}
.search-head-history-title{ color: #666; font-size: .7rem;}
.search-head-history-empty{ color: #666; font-size: .6rem;}
.icon-qingkong{ font-size: 1.2rem; float: left;}
.search-head-history-list{ padding: 0.5rem 0.5rem 0.5rem 0;}
.search-head-history-list span{ float: left; display: block; height: 1.35rem; text-align: center; line-height: 1.35rem; border-radius: .125rem; background: #EFEFEF; color:#333333; font-size: .7rem; padding: 0 .5rem; margin-left: .5rem;}
.search-head-history-tips{ padding: 2.5rem 0 0 0; text-align: center; font-size: .7rem; color: #999;}
</style>