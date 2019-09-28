import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('components/home/Home.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('components/city/City.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('components/detail/Detail.vue')
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
