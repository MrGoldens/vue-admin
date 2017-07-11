/**
 * Created by Cai Kang Jie on 2017/7/11.
 */
import $ from 'jquery'
import { mapGetters } from 'vuex'
import store from 'mainStore'
import { TOGGLE_SIDEBAR } from 'mainStore/mutation-types'
const { state } = store
export default {
  name: 'resWidthSidebar',
  mounted () {
    $(window).on('resize', _onWindowResize)
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),
  template: '<i v-if="false"></i>'
}

function _onWindowResize () {
  if (window.innerWidth <= 1200) {
    console.log('sidebar_hide')
    store.commit(TOGGLE_SIDEBAR, true)
    console.log(state.app.sidebar.opened)
  } else {
    console.log('sidebar_show')
    store.commit(TOGGLE_SIDEBAR, false)
    console.log(state.app.sidebar.opened)
  }
}
