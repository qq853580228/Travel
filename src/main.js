// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'assets/css/reset.css'
import 'assets/css/border.css'
import 'assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'

import 'babel-polyfill'

import store from './store/index.js'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */

Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  fastClick,
  store
})
