/**
 * Created by a1 on 17/6/26.
 */
import {loginByEmail, logout, getInfo} from 'api/login';
import Cookies from 'js-cookie'

const user = {
  state: {
    token: Cookies.get('Admin-Token'),
    roles: [],
    name: '',
    avatar: '',
    introduction: '',
    uid: undefined
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    }
  },
  actions: {
    //  邮箱登录
    LoginByEmail({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        loginByEmail(userInfo.email.trim(), userInfo.password).then(response => {
          const data = response.data;
          if (data != null) {
            Cookies.set('Admin-Token', response.data.token);
            commit('SET_TOKEN', data.token);
            resolve();
          } else {
            reject('抱歉，登录失败');
          }
        }).catch(error => {
          reject(error)
        })
      });
    },
    //  获取用户信息
    GetInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data;
          commit('SET_ROLES', data.role);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_UID', data.uid);
          commit('SET_INTRODUCTION', data.introduction);
          resolve(response);
        }).catch(error => {
          reject(error);
        })
      });
    },
    // Logout
    LogOut({commit, state}) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          Cookies.remove('Admin-Token');
          resolve();
        }).catch(error => {
          reject(error)
        });
      });
    }
  }
}

export default user
