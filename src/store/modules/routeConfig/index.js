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
    },
    {
      name: 'Components',
      path: '/ccc',
      component: lazyLoading('dashboard2', true),
      sidebarMeta: {
        title: 'Components',
        icon: 'ion-gear-a',
        order: 100,
        expanded: false
      },
      subMenu: [
        {
          name: 'Components2',
          path: '/ccc/subMenu',
          component: lazyLoading('dashboard', true),
          sidebarMeta: {
            title: 'Components2',
            order: 1
          },
          subMenu: [
            {
              name: 'Components23',
              path: '/ccc/subMenu/a',
              component: lazyLoading('dashboard2', true),
              sidebarMeta: {
                title: 'Components23',
                order: 1
              }
            }
          ]
        }
      ]
    }
  ]
}

export default {
  state
}
