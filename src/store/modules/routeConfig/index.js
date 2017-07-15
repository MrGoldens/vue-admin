/**
 * Created by Cai Kang Jie on 2017/7/13.
 */
import lazyLoading from './lazyLoading'

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/',
      component: lazyLoading('dashboard', true),
      sidebarMeta: {
        title: 'dashboard',
        icon: 'ion-android-home',
        order: 0
      }
    },
    {
      name: 'Dashboard2',
      path: '/dashboard2',
      component: lazyLoading('dashboard2', true),
      sidebarMeta: {
        title: 'dashboard',
        icon: 'ion-android-home',
        order: 1
      }
    }
  ]
}

export default {
  state
}
