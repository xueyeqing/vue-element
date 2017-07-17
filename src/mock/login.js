/**
 * Created by a1 on 17/6/27.
 */
import {param2Obj} from 'utils'

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员小潘',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '普通编辑小张',
    uid: '002'

  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '工程师小王',
    uid: '003'
  }
}

/**
 * 执行登录，回调产生config数据如下，根据config数据返回需要的信息
 *  {
 *    url: "https://api-dev/login/loginbyemail",
 *    type: "POST",
 *    body: "{"email":"admin@163.com","password":"aaaaaa"}"
 *  }
 */
export default {
  loginByEmail_mock: config => {
    console.log('return Mock:', config);
    const {email} = JSON.parse(config.body);
    // console.log(userMap[email.split('@')[0]]);
    return userMap[email.split('@')[0]];
  },
  /**
   * config==> url: "https://api-dev/user/info?token=admin", type: "GET", body: null
   * @param config
   * @returns {*} 用户信息
   */
  getInfo: config => {
    const {token} = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      Promise.reject('a');
    }
  },
  logout: () => 'success'
}
