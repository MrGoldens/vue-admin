/**
 * Created by Cai Kang Jie on 2017/7/11.
 */
import * as types from '../mutation-types'

const state = {
  sidebar: {
    opened: false
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state, config) {
    if (config.hasOwnProperty('opened')) {
      state.sidebar.opened = config.opened
    } else {
      state.sidebar.opened = true
    }
    if (config.hasOwnProperty('hidden')) {
      state.sidebar.hidden = config.hidden
    }
  }
}

export default {
  state,
  mutations
}
