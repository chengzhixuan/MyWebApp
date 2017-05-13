import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import User from '../app/User/user.vue'
import Index from '../app/User/index.vue'
import Course from '../app/course'

Vue.use(Router)

const router = new Router({
  routes: [
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
