/**
 * Created by Cai Kang Jie on 2017/7/8.
 */
import lazyLoading from './lazyLoading'
const routeConfig = {
  item: [
    {
      name: 'Dashboard2',
      path: '/dashboard2',
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 0
      },
      component: lazyLoading('dashboard2', true)
    }
  ]
}

export default {
  routeConfig
}
