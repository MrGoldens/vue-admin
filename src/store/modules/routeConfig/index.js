/**
 * Created by Cai Kang Jie on 2017/7/13.
 */
import lazyLoading from './lazyLoading'

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: lazyLoading('dashboard', true)
    },
    {
      name: 'Dashboard2',
      path: '/dashboard2',
      component: lazyLoading('dashboard2', true)
    }
  ]
}

export default {
  state
}
