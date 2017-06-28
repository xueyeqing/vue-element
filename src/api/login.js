/**
 * Created by a1 on 17/6/27.
 */
import fetch from 'utils/fetch'

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return fetch({
    url: '/login/loginbyemail',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: {token}
  })
}
