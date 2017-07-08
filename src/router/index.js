import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from '../pages/pages.modules'
import dashboard from '../pages/dashboard/index.vue'
Vue.use(Router)

export default new Router({
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
    ...routeConfig.routeConfig
  ]
})
