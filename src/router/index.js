import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../pages/dashboard/index.vue'
import dashboard2 from '../pages/dashboard2/index.vue'
Vue.use(Router)

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: dashboard2
  }
]

export default new Router({
  routes: routes
})
