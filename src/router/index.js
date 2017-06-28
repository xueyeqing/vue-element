import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'
const Login = _import('login/index')

/* dashboard */
const dashboard = _import('dashboard/index')

Vue.use(Router)

export const constantRouterMap = [
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
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'quanxian',
    meta: {role: ['admin']},
    noDropdown: true,
    children: [{path: 'index', name: '权限测试页', meta: {role: ['admin']}}]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '组件',
    icon: 'zujian',
    children: [
      {path: 'index', name: '介绍 '},
      {path: 'tinymce', name: '富文本编辑器'},
      {path: 'markdown', name: 'Markdown'},
      {path: 'jsoneditor', name: 'JSON编辑器'},
      {path: 'dndlist', name: '列表拖拽'},
      {path: 'splitpane', name: 'SplitPane'},
      {path: 'avatarupload', name: '头像上传'},
      {path: 'dropzone', name: 'Dropzone'},
      {path: 'sticky', name: 'Sticky'},
      {path: 'countto', name: 'CountTo'},
      {path: 'mixin', name: '小组件'}
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'tubiaoleixingzhengchang',
    children: [
      {path: 'index', name: '介绍'},
      {path: 'keyboard', name: '键盘图表'},
      {path: 'keyboard2', name: '键盘图表2'},
      {path: 'line', name: '折线图'},
      {path: 'mixchart', name: '混合图表'}
    ]
  },
  {
    path: '/errorpage',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    icon: '404',
    children: [
      {path: '401', name: '401'},
      {path: '404', name: '404'}
    ]
  }
]
