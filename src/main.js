import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('add-dot', str => {
  str = String(str)
  return str.replace(/(?=([0-9]{3})+(\..*)?$)/g, ',')
})

new Vue({
  render: h => h(App)
}).$mount('#app')
