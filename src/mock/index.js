/**
 * Created by a1 on 17/6/27.
 */
import Mock from 'mockjs'
import loginAPI from './login'

// 登录相关
Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail)

export default Mock

