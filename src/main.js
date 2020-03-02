import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './assets/stylus/style.styl'

import '../node_modules/swiper/css/swiper.min.css'

import './utils/slider.js'

Vue.config.productionTip = false

new Vue({
  // indexStyle,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
