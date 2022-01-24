import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store(
  {
    state: {
      windowWidth: 0,
      submenuVisible: false,
      selectedItem: 0,
      signUpVisible: false,
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
      setSubmenuVisible: (state, payload) => {
        state.submenuVisible = payload
      },
      setSelectedItem: (state, payload) => {
        state.selectedItem = payload
      },
      setSignUpVisible: (state, payload) => {
        state.signUpVisible = payload
      }
    },
    actions: {
      setWindowWidth: (context, payload) => {
        context.commit('setWindowWidth', payload)
      },
      setSubmenuVisible: (context, payload) => {
        context.commit('setSubmenuVisible', payload)
      },
      setSelectedItem: (context, payload) => {
        context.commit('setSelectedItem', payload)
      },
      setSignUpVisible: (context, payload) => {
        context.commit('setSignUpVisible', payload)
      }
    }
  }
)