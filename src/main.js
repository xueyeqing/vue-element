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
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log('token:', store.getters.token)
  Cookies.set('Admin-Token', '');
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      // 获取用户信息
      store.dispatch('GetInfo').then(res => {
        const roles = res.data.role;
        next();
      });
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
