// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'styles/index.scss' // 全局自定义的css样式
import 'components/Icon-svg/index' // 封装的svg组件
import 'assets/iconfont/iconfont' // iconfont 具体图标见https://github.com/PanJiaChen/vue-element-admin/wiki
import './mock/index.js'  // 该项目所有请求使用mockjs模拟
import * as filters from './filters'; // 全局vue filter
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import vueWaves from './directive/waves' // 水波纹指令
import s from './utils/s'
Vue.use(s)
Vue.use(vueWaves)

Vue.config.productionTip = false

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

// permissiom judge
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log('token:', store.getters.token)
  Cookies.set('Admin-Token', '');
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        // 获取用户信息
        store.dispatch('GetInfo').then(res => {
          const roles = res.data.role;
          store.dispatch('GenerateRoutes', roles).then(() => { // 生成可访问的路由表
            // 动态添加可访问路由表
            router.addRoutes(store.getters.addRouters);
            next(to.path);
          })
        }).catch(err => {
          console.log(err)
        });
      } else {
        console.log(store.getters.roles, to.meta.role)
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next();//
        } else {
          next({path: '/401', query: {noGoBack: true}});
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

// router.afterEach(() => {})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
