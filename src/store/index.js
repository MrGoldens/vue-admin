/**
 * Created by Cai Kang Jie on 2017/7/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  actions,
  getters,
  modules: {},
  state: {
    pkg
  },
  mutations: {
  }
})

export default store
