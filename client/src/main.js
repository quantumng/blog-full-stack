import Vue from 'vue'
import 'normalize.css'
import './assets/App.css'
import App from './App'
import router from './router'
import store from '@/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
