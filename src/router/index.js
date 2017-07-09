import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../pages/dashboard/index.vue'
import dashboard2 from '../pages/dashboard2/index.vue'
Vue.use (Router)

export default new Router ({
  routes: [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      name: 'dashboard2',
      path: '/',
      component: dashboard2
    }
  ]
})
