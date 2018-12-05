<template>
    <div class="itemWarp flex_mid" @click='changePage'>
        <div v-show='!bol'>
            <slot name='normalImg'></slot>
            <span v-text="txt" class="normal"></span>
        </div>
        <div v-show='bol'>
            <slot name='activeImg'></slot>
            <span v-text="txt" class="active"></span>
        </div>   
    </div>
</template>
<script type="text/javascript">
export default {
  name: "Item",
  props: {
    txt: {
      type: String
    },
    page: {
      type: String
    },
    sel: {
      type: String
    }
  },
  computed: {
    bol() {
      if (this.sel == this.page) {
        return true;
      }
      return false;
    }
  },
  methods: {
    changePage() {
        //点击跳转对应的页面
        this.$router.push("/" + this.page);
        this.$emit("change", this.page);
    }
  }
};
</script>
<style type="text/css">
.itemWarp span {
  font-size: .55rem;
}
.itemWarp div{
  width: 1.6rem;
  height: 1.4rem;
  text-align: center;
}
.itemWarp .normal{
  color: #666666;
}
.itemWarp .active{
  color: #2FB3F1;
}
</style>