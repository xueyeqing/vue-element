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
