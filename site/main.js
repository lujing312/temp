import Vue from 'vue'
import App from './App.vue'
import '@/assets/js/rem.js'
import TempVue from '@'

Vue.use(TempVue)
new Vue({
  el: '#app',
  render: h => h(App)
})
