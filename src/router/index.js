import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from '../pages/pages.modules'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    ...routeConfig.item
  ]
})
