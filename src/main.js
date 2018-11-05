import Vue from 'vue'
import money from 'v-money'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import './plugins/fontawesome'

Vue.config.productionTip = false
Vue.use(money, {precision: 2})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
