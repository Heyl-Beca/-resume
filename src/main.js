import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// JQuery
import $ from 'jquery'

// 引入第三方UI框架
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
