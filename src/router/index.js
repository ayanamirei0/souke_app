import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
    // ,
    // {
    //   path: '/',
    //   name: 'home',
    //   component: home
    // },
    // {
    //   path: '/',
    //   name: 'search',
    //   component: search
    // },
    // {
    //   path: '/',
    //   name: 'msg',
    //   component: msg
    // },
    // {
    //   path: '/',
    //   name: 'mine',
    //   component: mine
    // }
  ],
  methods:{
    switchTo(path){
      this.$router.replace(path);
    }
  }
})
