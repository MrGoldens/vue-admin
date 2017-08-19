/**
 * Created by Cai Kang Jie on 2017/7/31.
 */
import lazyLoading from './../../store/modules/routeConfig/lazyLoading'
export default {
  name: 'UI Features',
  expanded: false,
  sidebarMeta: {
    title: 'UI Features',
    icon: 'ion-android-laptop',
    order: 1
  },
  subMenu: [{
    name: 'Panels',
    path: '/ui/panels',
    component: lazyLoading('ui/panels'),
    sidebarMeta: {
      title: 'Panels',
      order: 100
    }
  }, {
    name: 'Typography',
    path: '/ui/typography',
    component: lazyLoading('ui/typography'),
    sidebarMeta: {
      title: 'Typography',
      order: 200
    }
  }, {
    name: 'Grid',
    path: '/ui/grid',
    component: lazyLoading('ui/grid'),
    sidebarMeta: {
      title: 'Grid',
      order: 400
    }
  }, {
    name: 'Buttons',
    path: '/ui/buttons',
    component: lazyLoading('ui/buttons'),
    sidebarMeta: {
      title: 'Buttons',
      order: 500
    }
  }, {
    name: 'Progress Bars',
    path: '/ui/progressBars',
    component: lazyLoading('ui/progressBars'),
    sidebarMeta: {
      title: 'Progress Bars',
      order: 500
    }
  }]
}
