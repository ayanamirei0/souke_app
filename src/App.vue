<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
    <!-- <div class="empty"></div> -->
  </div>
</template>
<script>
import Tabbar from "./views/tabbar";
export default {
  name: "app",
//   created: function() {
//     this.$router.push("/");
//   },
  components: {
    Tabbar
  },
//   created() {        //动态调整 rem 根元素 font-size 大小
//     (function (doc, win) {
//         var docEl = doc.documentElement,
//             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//             recalc = function () {
//                 var clientWidth = docEl.clientWidth;
//                 if (!clientWidth) return;
//                 if(clientWidth>=750){
//                     docEl.style.fontSize = '40px';
//                 }else{
//                     docEl.style.fontSize = 40 * (clientWidth / 750) + 'px';
//                 }
//             };
//         if (!doc.addEventListener) return;
//         win.addEventListener(resizeEvt, recalc, false);
//         doc.addEventListener('DOMContentLoaded', recalc, false);
//     })(document, window)
//   }
};
</script>
<style>

</style>
