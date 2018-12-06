import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'       //首页
import Mine from '@/views/mine/mine.vue'        //我的
import Msg from '@/views/msg/msg.vue'       //信息
import Search from '@/views/search/search.vue'      //搜索
import PersonInfo from '@/views/mine/personInfo.vue'        //个人信息页
import ChangeName from '@/views/mine/ChangeName.vue'        //修改学员姓名
import GradeList from '@/views/mine/gradeList.vue'      //修改年级
import ChangeSchoolName from '@/views/mine/changeSchoolName.vue'        //修改学校名称
import Coupon from '@/views/mine/coupon.vue'        //优惠券
import Exchange from '@/views/mine/exchange.vue'        //兑换优惠券
import LessonBag from '@/views/mine/lessonBag.vue'      //购课袋
import LessonBagEdit from '@/views/mine/lessonBagEdit.vue'      //购物袋编辑跳转页
import ConfirmOrder from '@/views/mine/confirmOrder.vue'        //购课袋-去结算页面
import SelectCoupon from '@/views/mine/selectCoupon.vue'        //购课袋-去结算-确认订单页面使用优惠券跳转
import WaitPay from '@/views/mine/waitPay.vue'      //待付款跳转
import Paid from '@/views/mine/paid.vue'       //已付款跳转
import OrderDetail from '@/views/mine/orderDetail.vue'      //已付款>>>查看详情>>>订单详情

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
      meta: { navShow: true }
    },
    {
      path: '/views/search/search.vue',
      name: 'Search',
      component: Search,
      meta: { navShow: true }
    },
    {
        path: '/views/mine/personInfo.vue',
        name: 'PersonInfo',
        component: PersonInfo,
        meta: { navShow: false }
    },
    {
        path: '/views/mine/ChangeName.vue',
        name: 'ChangeName',
        component: ChangeName,
        meta: { navShow: false }
    },
    {
        path: '/views/mine/gradeList.vue',
        name: 'GradeList',
        component: GradeList,
        meta: { navShow: false }
    },
    {
        path: '/views/mine/changeSchoolName.vue',
        name: 'ChangeSchoolName',
        component: ChangeSchoolName,
        meta: { navShow: false }
    },
    {
        path: '/views/mine/coupon.vue',
        name: 'Coupon',
        component: Coupon
    },
    {
        path: '/views/mine/exchange.vue',
        name: 'Exchange',
        component: Exchange
    },
    {
        path: '/views/mine/lessonBag.vue',
        name: 'LessonBag',
        component: LessonBag
    },
    {
        path: '/views/mine/lessonBagEdit.vue',  //2018-12-03 增加
        name: 'LessonBagEdit',
        component: LessonBagEdit
    },
    {
        path: '/views/mine/confirmOrder.vue',       //2018-12-04 增加
        name: 'ConfirmOrder',
        component: ConfirmOrder
    },
    {
        path: '/views/mine/selectCoupon.vue',       //2018-12-04 增加
        name: 'SelectCoupon',
        component: SelectCoupon
    },
    {
        path: '/views/mine/waitPay.vue',        //2018-12-05 增加
        name: 'WaitPay',
        component: WaitPay
    },
    {
        path: '/views/mine/paid.vue',       //2018-12-05 增加
        name: 'Paid',
        component: Paid
    },
    {
        path: '/views/mine/orderDetail.vue',        //2018-12-06 增加
        name: 'OrderDetail',
        component: OrderDetail
    }
  ],
  methods:{
    switchTo(path){
      this.$router.replace(path);
    }
  }
})
