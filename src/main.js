import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'

import './scss/main.scss'

Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
