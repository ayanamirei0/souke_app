<template>
    <div class="grade">
        <div class="top">
            <img src="../../assets/img/return.png" alt="" @click="returnPage()">
            <span class="title">修改年纪</span>
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
  margin-top: 0.625rem;
  border-bottom: 0.025rem solid #c2c2c2;
  display: flex;
}
.grade .top img {
  width: 0.25rem;
  height: 0.325rem;
  margin-left: 0.425rem;
  margin: 0.15rem 0 0 0.3rem;
}
.grade .top .title {
  font-size: 0.45rem;
  color: #333333;
  margin-bottom: 0.3rem;
  flex-grow: 2;
}
.grade .top .btn {
  font-size: 0.375rem;
  color: #666666;
  margin: 0.05rem 0.3rem 0 0;
}
.grade .list {
  padding-left: 0.325rem;
}
.grade .list li {
  font-size: 0.375rem;
  border-bottom: 0.025rem solid #c2c2c2;
  text-align: left;
  padding: 0.45rem 0 0.4rem 0;
}
.grade .list li img{
    width: .45rem;
    height: .3rem;
    float: right;
    padding-right: .3rem;
}
.selected {
  color: #2fb3f1;
}
</style>

