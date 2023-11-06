import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font_4057978_rzg85q7aqfm/iconfont.css'
// import Swiper from 'swiper'
// import 'swiper/css/swiper.css'
// import '../node_modules/swiper/swiper.css'
/* 导入ElementUI */
import elementUI from 'element-ui'
/* 导入ElementUI的CSS样式 */
import 'element-ui/lib/theme-chalk/index.css'
/* 导入axios */
import axios from 'axios'
/* 导入qs */
import qs from 'qs'
/* 全局绑定axios */
Vue.prototype.$axios = axios
/* 全局绑定 */
Vue.prototype.$qs = qs
/* 引入mock数据 */
require('../LoginService')

Vue.config.productionTip = false
/* Vue使用ElementUI */
Vue.use(elementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
