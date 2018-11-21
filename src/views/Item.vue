<template>
    <div class="itemWarp flex_mid" @click='changePage'>
        <span v-show='!bol'>
            <slot name='normalImg'></slot>
            <span v-text="txt" class="normal position"></span>
        </span>
        <span v-show='bol'>
            <slot name='activeImg'></slot>
            <span v-text="txt" class="active position"></span>
        </span>   
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
    bol: function() {
      if (this.sel == this.page) {
        return true;
      }
      return false;
    }
  },
  methods: {
    changePage: function() {
      //点击跳转对应的页面
      this.$router.push("/" + this.page);
      this.$emit("change", this.page);
    }
  }
};
</script>
<style type="text/css">
.itemWarp {
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.itemWarp span {
  font-size: .275rem;
}
.itemWarp .normal{
  color: #666666;
}
.itemWarp .active{
  color: #2FB3F1;
}
.itemWarp .position{
  position: absolute;
  bottom: -.325rem;
  left: .85rem;
}
</style>