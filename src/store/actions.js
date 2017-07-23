/**
 * Created by Cai Kang Jie on 2017/7/11.
 */
import * as types from './mutation-types'

export const toggleSidebar = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR, config)
  }
}
export const setSelected = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.SIDEBAR_SELECTED, config)
  }
}
export const setExpanded = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.EXPAND_MENU, config)
  }
}
