import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import User from '../app/User/user.vue'
import Index from '../app/User/index.vue'
import Course from '../app/course'
import DemoList from '../app/demolist'
import InformalEssay from '../app/informalessay'
import LeaveWord from '../app/leaveword'
import Notes from '../app/notes'
import DemoDetails from '../app/demolist/demodetails.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/notes',
      name: 'notes.index',
      component: Notes,
      meta: {requiresAuth: false}
    },
    {
      path: '/leaveword',
      name: 'leaveword.index',
      component: LeaveWord,
      meta: {requiresAuth: false}
    },
    {
      path: '/informalessay',
      name: 'informalessay.index',
      component: InformalEssay,
      meta: {requiresAuth: false}
    },
    {
      path: '/demolist',
      name: 'demolist.index',
      component: DemoList,
      meta: {requiresAuth: false}
    },
    {
      path: '/demolist/demodetails/:demolistid',
      name: 'demolist.demodetails',
      component: DemoDetails,
      meta: {requiresAuth: false}
    },
    {
      path: '/course',
      name: 'course.index',
      component: Course,
      meta: {requiresAuth: false}
    },
    {
      path: '/',
      name: 'user.index',
      component: Index,
      meta: {requiresAuth: false}
    },
    {
      path: '/user/user',
      name: 'user.user',
      component: User,
      meta: {requiresAuth: false}
    }
  ]
})

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next()
  } else {
    next()
  }
})
export default router
