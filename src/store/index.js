import { createStore } from 'vuex'
import coaches from './modules/coaches/index'
export default createStore({
  state() {
    return {
      userId: 'c3'
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coaches
  }
})
