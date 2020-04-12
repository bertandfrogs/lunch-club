import Vue from 'vue'
import App from './App.vue'
import router from './router'
import membersData from './members'

Vue.config.productionTip = false

let data = {
  members: membersData,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
