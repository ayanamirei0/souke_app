<template>
    <div class="grade">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <span class="title">修改年级</span>
            <span class="btn" @click="$router.go(-1)">保存</span>
        </div>
        <ul class="list">
            <li v-for="(item, index) in list" @click="addClass(index)" :class="{selected: index == current}">
                {{item.title}}
                <img src="../../assets/img/hook.png" v-show="index == current">
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
        { title: "幼儿2-3岁" },
        { title: "幼儿5-6岁" },
        { title: "幼儿6-8岁" },
        { title: "一年级" },
        { title: "二年级" },
        { title: "三年级" }
      ]
    };
  },
  methods: {
    addClass(index) {
      console.log(1);
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.grade{
    .top{
        padding: .65rem 0 .6rem 0;
        border-bottom: 0.05rem solid #ECECEE;
        display: flex; 
        .icon-fanhui{
            font-size: 1.1rem;
            color: #333333;
            position: relative;
            top: 0;
            left: .3rem;
        }
        .title{
            text-align: center;
            font-size: .9rem;
            color: #333333;
            flex-grow: 2;
        }
        .btn{
            font-size: .75rem;
            color: #2fb3f1;
            margin: .1rem .6rem 0 0;
        }
    }
    .list{
        li{
            font-size: .75rem;
            border-bottom: 0.05rem solid #ECECEE;
            text-align: left;
            padding: .9rem 0 .8rem .65rem;
            img{
                width: .9rem;
                height: .6rem;
                float: right;
                padding-right: .6rem;
            }
        }
        .selected{
            color: #2fb3f1;
        }
    }
}
</style>

