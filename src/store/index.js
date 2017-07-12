/**
 * Created by Cai Kang Jie on 2017/7/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  actions,
  getters,
  modules: {
    app
  },
  state: {
  },
  mutations: {
  }
})

export default store
