/**
 * Created by a1 on 17/6/26.
 */
import Cookies from 'js-cookie'

const user = {
  state: {
    token: Cookies.get('Admin-Token')
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {}
}

export default user
