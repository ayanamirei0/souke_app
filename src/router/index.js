import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Mine from '@/views/components/mine.vue'
import Msg from '@/views/components/msg.vue'
import Search from '@/views/components/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/views/components/mine.vue',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/views/components/msg.vue',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/views/components/search.vue',
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
