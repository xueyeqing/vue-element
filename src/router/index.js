import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'
const Login = _import('login/index')

/* dashboard */
const dashboard = _import('dashboard/index')

Vue.use(Router)

export const constantRouteMap = [
  {path: '/login', component: Login, hidden: true},
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{path: 'dashboard', component: dashboard}]
  }
]

export default new Router({
  routes: constantRouteMap
})
