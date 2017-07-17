/**
 * Created by a1 on 17/6/27.
 */
import Mock from 'mockjs'
import loginAPI from './login'
import tableAPI from './table'

// 登录相关
Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail_mock);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);

// table
Mock.mock(/\/article_table\/list/, 'get', tableAPI.getList);

export default Mock

