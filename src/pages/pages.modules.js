/**
 * Created by Cai Kang Jie on 2017/7/8.
 */
import lazyLoading from './lazyLoading'
const routeConfig = {
  item: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 0
      },
      component: lazyLoading('dashboard', true)
    }
  ]
}

export default {
  routeConfig
}
