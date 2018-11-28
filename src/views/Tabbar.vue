<template>
  <div class="tabberWarp" v-if="show">
    <div class="warp">
      <Item :txt='item.txt' :page='item.page' @change='getVal' v-for='item in tabbarDes' :sel='selected'>
        <img :src="item.normalImg" slot='normalImg'>
        <img :src="item.activeImg" slot='activeImg'>
      </Item>
    </div>
  </div>
</template>
<script type="text/javascript">
import Item from "./Item.vue";

export default {
  components: {
    Item
  },
  data: function() {
    return {
      show: true,
      selected: "",
      tabbarDes: [
        {
          txt: "首页",
          page: "",
          normalImg: require("../assets/img/home_.png"),
          activeImg: require("../assets/img/home.png")
        },
        {
          txt: "搜索",
          page: "views/search/search.vue",
          normalImg: require("../assets/img/search_.png"),
          activeImg: require("../assets/img/search.png")
        },
        {
          txt: "消息",
          page: "views/msg/msg.vue",
          normalImg: require("../assets/img/msg_.png"),
          activeImg: require("../assets/img/msg.png")
        },
        {
          txt: "我的",
          page: "views/mine/mine.vue",
          normalImg: require("../assets/img/mine_.png"),
          activeImg: require("../assets/img/mine.png")
        },
      ]
    };
  },
  methods: {
    getVal(res) {
      console.log(res);
      this.selected = res;
    }
  }
};
</script>
<style type="text/css">
.warp {
  width: 100%;
  height: 1.1rem;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  justify-content: space-around;
  font-size: 0;
  padding-top: .15rem;
}
/* .warp img {
  width: .7rem;
  height: .7rem;
} */
.tabberWarp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 5px;
  background: #fff;
}
</style>