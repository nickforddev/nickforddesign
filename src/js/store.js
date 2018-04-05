import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: ''
  },
  getters: {
    input(state) {
      return state.input
    }
  },
  mutations: {
    KEY_PRESSED(state, key) {
      state.input += key
    }
  },
  actions: {
    key_pressed({ commit }, event) {
      const key = event.key
      if (/[a-zA-Z0-9]/.test(key)) {
        commit('KEY_PRESSED', key)
      }
    }
  }
})
