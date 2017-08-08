// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { SIDEBAR_SELECTED } from './store/mutation-types'
// import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import './sass/main.scss'
import 'ionicons/scss/ionicons.scss'

Vue.config.productionTip = false
// Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.component('icon', Icon)

router.beforeEach((route, redirect, next) => {
  store.commit(SIDEBAR_SELECTED, {selected: route.path})
  next()
})

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
})

export { app, router, store }
