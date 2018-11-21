// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
import './assets/css/index.css'
import './assets/iconfont/iconfont.css'
import { Swipe, SwipeItem, Toast} from 'vant'

Vue.use(Vant)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Toast)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
