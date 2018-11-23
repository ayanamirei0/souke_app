import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Mine from '@/views/mine/mine.vue'
import Msg from '@/views/msg/msg.vue'
import Search from '@/views/search/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: Index
    },
    {
      path: '/views/mine/mine.vue',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/views/msg/msg.vue',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/views/search/search.vue',
      name: 'Search',
      component: Search
    }
  ],
  methods:{
    switchTo(path){
      this.$router.replace(path);
    }
  }
})
