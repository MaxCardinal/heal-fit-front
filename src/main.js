import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Trend from 'vuetrend';

Vue.config.productionTip = false
Vue.use(Trend);

window.axios = require('axios');
axios.defaults.baseURL = 'https://localhost:5001/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
