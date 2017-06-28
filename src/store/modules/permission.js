/**
 * Created by a1 on 17/6/28.
 */
import {asyncRouterMap, constantRouterMap} from 'src/router'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    GenerateRoutes({commit}) {
      // 异步操作
      return new Promise(resolve => {
        // const roles = data;
        const accessedRouters = asyncRouterMap;
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
}

export default permission;
