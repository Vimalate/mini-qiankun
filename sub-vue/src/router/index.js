import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/sub-vue/index',
    meta: { title: '首页' },
    component: () => import('@/views/index/index')
  },
  {
    path: '/test',
    meta: { title: 'test' },
    component: () => import('@/views/test/index')
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

export default routes
