/**
 * Created by Cai Kang Jie on 2017/7/31.
 */
import lazyLoading from './../../store/modules/routeConfig/lazyLoading'
export default {
  name: 'Form Elements',
  expanded: false,
  sidebarMeta: {
    title: 'Form Elements',
    icon: 'ion-android-laptop',
    order: 1
  },
  subMenu: [{
    name: 'Form Inputs',
    path: '/form/inputs',
    component: lazyLoading('form/inputs'),
    sidebarMeta: {
      title: 'Form Inputs',
      order: 100
    }
  }]
}
