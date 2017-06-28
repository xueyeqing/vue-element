/**
 * Created by a1 on 17/6/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user, permission
  },
  getters
})

export default store
