<template>
    <div class="grade">
        <div class="top">
            <img src="../../assets/img/return.png" alt="" @click="returnPage()">
            <span class="title">修改年级</span>
            <span class="btn">保存</span>
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
    returnPage() {
      this.$router.push("personInfo.vue");
    },
    addClass(index) {
      console.log(1);
      this.current = index;
    }
  }
};
</script>
<style>
.grade .top {
  margin-top: 1.25rem;
  border-bottom: 0.05rem solid #c2c2c2;
  display: flex;
}
.grade .top img {
  width: .5rem;
  height: .65rem;
  margin-left: .85rem;
  margin: .3rem 0 0 .6rem;
}
.grade .top .title {
  text-align: center;
  font-size: .9rem;
  color: #333333;
  margin-bottom: .6rem;
  flex-grow: 2;
}
.grade .top .btn {
  font-size: .75rem;
  color: #666666;
  margin: .1rem .6rem 0 0;
}
.grade .list {
  padding-left: .65rem;
}
.grade .list li {
  font-size: .75rem;
  border-bottom: 0.05rem solid #c2c2c2;
  text-align: left;
  padding: .9rem 0 .8rem 0;
}
.grade .list li img{
    width: .9rem;
    height: .6rem;
    float: right;
    padding-right: .6rem;
}
.selected {
  color: #2fb3f1;
}
</style>

