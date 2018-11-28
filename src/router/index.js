import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Mine from '@/views/mine/mine.vue'
import Msg from '@/views/msg/msg.vue'
import Search from '@/views/search/search.vue'
import PersonInfo from '@/views/mine/personInfo.vue'
import ChangeName from '@/views/mine/ChangeName.vue'
import GradeList from '@/views/mine/gradeList.vue'
import ChangeSchoolName from '@/views/mine/changeSchoolName.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: Index,
      meta: { navShow: true }
    },
    {
      path: '/views/mine/mine.vue',
      name: 'Mine',
      component: Mine,
      meta: { navShow: true }
    },
    {
      path: '/views/msg/msg.vue',
      name: 'Msg',
      component: Msg,
      meta: { navShow: false }
    },
    {
      path: '/views/search/search.vue',
      name: 'Search',
      component: Search,
      meta: { navShow: false }
    },
    {
        path: '/views/mine/personInfo.vue',
        name: 'PersonInfo',
        component: PersonInfo,
        meta: { navShow: false }
    },
    {
        path: '/views/mine/ChangeName.vue',
        name: ChangeName,
        component: ChangeName,
        meta: { navShow: false }
    },
    {
        path: '/views/mine/gradeList.vue',
        name: GradeList,
        component: GradeList,
        meta: { navShow: false }
    },
    {
        path: '/views/mine/changeSchoolName.vue',
        name: ChangeSchoolName,
        component: ChangeSchoolName,
        meta: { navShow: false }
    }
  ],
  methods:{
    switchTo(path){
      this.$router.replace(path);
    }
  }
})
