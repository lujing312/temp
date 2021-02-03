import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.scss'
import Temp from '../src/template/index'
import TempVue from '@'

Vue.use(Temp)
Vue.use(TempVue)
new Vue({
  el: '#app',
  render: h => h(App)
})
