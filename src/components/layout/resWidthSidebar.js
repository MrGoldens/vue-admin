/**
 * Created by Cai Kang Jie on 2017/7/11.
 */
import $ from 'jquery'
import { mapGetters } from 'vuex'
export default {
  name: 'resWidthSidebar',
  mounted () {
    console.log('mounted')
    $(window).on('resize', _onWindowResize)
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),
  template: '<i v-if="false"></i>'
}

function _onWindowResize () {
  console.log('changed')
}
