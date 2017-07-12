/**
 * Created by Cai Kang Jie on 2017/7/11.
 */
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import store from 'mainStore'
export default {
  name: 'resWidthSidebar',
  mounted () {
    $(window).on('resize', _onWindowResize)
    _onWindowResize()
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),
  methods: {
    ...mapActions([
      'toggleSidebar'
    ])
  },
  template: '<i v-if="false"></i>'
}

function _onWindowResize () {
  store.dispatch('toggleSidebar', {opened: window.innerWidth <= 1200})
}
