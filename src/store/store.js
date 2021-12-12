import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store(
  {
    state: {
      windowWidth: 0,
    },
    getters: {
      isMobile: ({windowWidth}) => {
        return windowWidth < 1287
      }
    },
    mutations: {
      setWindowWidth: (state, payload) => {
        state.windowWidth = payload
      },
    },
    actions: {
      setWindowWidth: (context, payload) => {
        context.commit('setWindowWidth', payload)
      },
    }
  }
)