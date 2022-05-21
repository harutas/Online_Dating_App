import Vue from 'vue'
import Vuex from 'vuex'
import { users } from './modules/users'
import { messages } from './modules/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    gender : null
  },
  getters : {
    getGender(state){
      return state.gender;
    }
  },
  mutations : {
    setGender(state, payload){
      state.gender = payload;
    }
  },
  modules: {
    users,
    messages
  }
})
