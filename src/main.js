// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import LyTab from 'ly-tab'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false
Vue.use(LyTab)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
