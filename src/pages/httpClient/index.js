/**
 * Created by Cai Kang Jie on 2017/10/12.
 */
import lazyLoading from './../../store/modules/routeConfig/lazyLoading'
export default {
  name: 'HTTP Client',
  expanded: false,
  sidebarMeta: {
    title: 'HTTP Client',
    icon: 'ion-wifi',
    order: 1
  },
  subMenu: [{
    name: 'HTTP Client',
    path: '/httpClient/http',
    component: lazyLoading('httpClient/http'),
    sidebarMeta: {
      title: 'HTTP Client',
      order: 100
    }
  }
  ]
}
