import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.scss'
import TempVue from '@'
import Temp from '@/template/index'

Vue.use(TempVue)
Vue.use(Temp)
new Vue({
  el: '#app',
  render: h => h(App)
})
