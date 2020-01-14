import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Trend from 'vuetrend';

Vue.config.productionTip = false
Vue.use(Trend);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
