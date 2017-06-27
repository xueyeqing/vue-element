/**
 * Created by a1 on 17/6/26.
 */
import {loginByEmail} from 'api/login';
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
  actions: {
    //  邮箱登录
    LoginByEmail({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        loginByEmail(userInfo.email.trim(), userInfo.password).then(response => {
          console.log('response', response);
          const data = response.data;
          Cookies.set('Admin-Token', response.data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error)
        })
      });
    }
  }
}

export default user
