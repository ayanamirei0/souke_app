// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import  './assets/js/rem'
import App from './App'
import router from './router'


import 'vant/lib/index.css'
import './assets/css/index.css'
import { Swipe, SwipeItem, Toast, Popup, DatetimePicker, Uploader, Picker, Tab, Tabs } from 'vant'


// import VueResource from 'vue-resource';
// Vue.use(VueResource);

Vue.use(Vant);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Uploader);
Vue.use(Picker);
Vue.use(Tab).use(Tabs);


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
$(function () {
  var unSelected = "#999999";
  var selected = "#333";
  $(function () {
      $("select").css("color", unSelected);
      $("option").css("color", selected);
      $("select").change(function () {
          var selItem = $(this).val();
          if (selItem == $(this).find('option:first').val()) {
              $(this).css("color", unSelected);
          } else {
              $(this).css("color", selected);
          }
      });
  })
})