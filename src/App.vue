<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
    <div class="empty"></div>
  </div>
</template>
<script>
import Tabbar from "./views/tabbar";
export default {
  name: "app",
  created: function() {
    this.$router.push("/");
  },
  components: {
    Tabbar
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
