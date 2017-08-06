/**
 * Created by Cai Kang Jie on 2017/7/31.
 */
import lazyLoading from './../../store/modules/routeConfig/lazyLoading'
const panels = {
  name: 'panels',
  path: '/panels',
  component: lazyLoading('panels'),
  sidebarMeta: {
    title: 'panels',
    icon: 'ion-android-laptop',
    order: 1
  }
}

export { panels }
