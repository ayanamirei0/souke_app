import Vue from 'vue';
import Router from 'vue-router';
import login from '@/login/login';  //密码登录
import RegisterPhoneVerification from '@/login/RegisterPhoneVerification';//注册-手机验证
import RegisteredPassword from '@/login/RegisteredPassword';//注册-设置登录密码
import ForgetPasswordMobileVerification from '@/login/ForgetPasswordMobileVerification';//忘记密码-手机验证
import ForgetPasswordResetPassword from '@/login/ForgetPasswordResetPassword';//忘记密码-重置密码
import PerfectInformation from '@/login/PerfectInformation';//完善信息
import SearchLessons from '@/web/SearchLessons';//搜课程首页
import SearchLessonsDetails from '@/web/SearchLessonsDetails';//搜课程详情页
import Search from '@/web/Search';//搜索页
import News from "@/web/new"; //消息中心
import system from "@/web/system"; //系统消息
import AccountManagement from "@/web/AccountManagement/AccountManagement"; //账号管理
import ModifyPhone from "@/web/AccountManagement/ModifyPhone"; //修改手机号
import ModifyPassword from "@/web/AccountManagement/ModifyPassword"; //修改密码
import MyCourse from "@/web/AccountManagement/MyCourse"; //我的课程
import OfflineOrder from "@/web/AccountManagement/OfflineOrder"; //线下订单
import Index from '@/views/index.vue';      //首页
import Mine from '@/views/mine/mine.vue';       //我的
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
import HotLesson from '@/web/SearchLessons.vue'     //热门课程跳转（2018-12-11）
import LessonsDetail from '@/web/SearchLessonsDetails.vue'      //小学课程、中学课程跳转（2018-12-11）


Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:"/index",
    },
    {
      path: '/index',
      name: 'Index',
      component: Index, 
      meta: { tabShow: true }
    },
    {
      path: '/RegisterPhoneVerification',
      name: 'RegisterPhoneVerification',
      component: RegisterPhoneVerification, 
    },
    {
      path: '/RegisteredPassword/:tel',
      name: 'RegisteredPassword',
      component: RegisteredPassword,
    },
    {
      path: '/login',
      name: 'login',
      component: login, 
    },
    {
      path: '/ForgetPasswordMobileVerification',
      name: 'ForgetPasswordMobileVerification',
      component: ForgetPasswordMobileVerification, 
    },
    {
      path: '/ForgetPasswordResetPassword/:tel',
      name: 'ForgetPasswordResetPassword',
      component: ForgetPasswordResetPassword, 
    },
    {
      path: '/PerfectInformation',
      name: 'PerfectInformation',
      component: PerfectInformation, 
    },
    {
      path: '/SearchLessons',
      name: 'SearchLessons',
      component: SearchLessons, 
      meta: { tabShow: true },
    },
    {
      path: '/SearchLessonsDetails/:id',
      name: 'SearchLessonsDetails',
      component: SearchLessonsDetails, 
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search, 
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      meta: { tabShow: true },
    },
    {
      path: '/system',
      component: system,
      name: "system",
    },
    {
      path: '/AccountManagement',
      name: "AccountManagement",
      component: AccountManagement,
    },
    {
      path: '/ModifyPhone',
      name: "ModifyPhone",
      component: ModifyPhone,
    },
    {
      path: '/MyCourse',
      name: "MyCourse",
      component: MyCourse,
    },
    {
      path: '/OfflineOrder',
      name: "OfflineOrder",
      component: OfflineOrder,
    },
    {
      path: '/ModifyPassword',
      name: "ModifyPassword",
      component: ModifyPassword,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: { tabShow: true }
    },
    {
        path: '/views/mine/personInfo.vue',
        name: 'PersonInfo',
        component: PersonInfo,
        meta: { tabShow: false }
    },
    {
        path: '/views/mine/ChangeName.vue',
        name: ChangeName,
        component: ChangeName,
        meta: { tabShow: false }
    },
    {
        path: '/views/mine/gradeList.vue',
        name: 'GradeList',
        component: GradeList,
        meta: { tabShow: false }
    },
    {
        path: '/views/mine/changeSchoolName.vue',
        name: 'ChangeSchoolName',
        component: ChangeSchoolName,
        meta: { tabShow: false }
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
        path: '/views/mine/lessonBagEdit.vue', 
        name: 'LessonBagEdit',
        component: LessonBagEdit
    },
    {
        path: '/views/mine/confirmOrder.vue',  
        name: 'ConfirmOrder',
        component: ConfirmOrder
    },
    {
        path: '/views/mine/selectCoupon.vue',   
        name: 'SelectCoupon',
        component: SelectCoupon
    },
    {
        path: '/views/mine/waitPay.vue',  
        component: WaitPay
    },
    {
        path: '/views/mine/paid.vue',   
        name: 'Paid',
        component: Paid
    },
    {
        path: '/views/mine/orderDetail.vue', 
        name: 'OrderDetail',
        component: OrderDetail
    },
    {
        path: '/web/SearchLessons.vue',  //热门课程跳转
        name: 'HotLesson',
        component: HotLesson,
        meta: { tabShow: true }
    },
    {
        path: '/web/SearchLessonsDetails.vue',       //小学课程中学课程跳转
        name: 'LessonsDetail',
        component: LessonsDetail
    }
  ],
  // methods:{
  //   switchTo(path){
  //     this.$router.replace(path);
  //   }
  // }
})
