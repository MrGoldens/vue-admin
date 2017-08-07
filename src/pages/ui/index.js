/**
 * Created by Cai Kang Jie on 2017/7/31.
 */
import lazyLoading from './../../store/modules/routeConfig/lazyLoading'
export default {
  name: 'panels',
  path: '/ui/panels',
  component: lazyLoading('ui/panels'),
  sidebarMeta: {
    title: 'panels',
    icon: 'ion-android-laptop',
    order: 1
  }
}
